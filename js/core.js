/* =====================================================================
   Geometry Lab — shared engine (used by every page)
   Sections:
     1. Text: shared words + addStrings() for each topic's own words
     2. Small helpers (math + SVG drawing)
     3. Triangles and quadrilaterals: measure and draw
     4. board(): draggable points
     5. ExerciseSet(): the practice engine
     6. startPage(): sub-tabs + language button
   ===================================================================== */

/* ---------- 1. TEXT ---------- */
const S={
es:{
 title:"Laboratorio de Geometría",subtitle:"Mueve los puntos y descubre las reglas",langBtn:"EN",home:"← Inicio",
 base:"base",height:"altura",area:"Área",squares:"cuadritos",
 ex_title:"Ejercicios",ex_mix:"Todos",
 correct_count:"correctas",streak:"racha",check:"Comprobar",next:"Siguiente →",yes:"Sí",no:"No",
 fb_ok:"¡Correcto! 🎉",fb_try:"Casi… inténtalo otra vez.",fb_wrong:"La respuesta era {ans}."
},
en:{
 title:"Geometry Lab",subtitle:"Drag the points and discover the rules",langBtn:"ES",home:"← Home",
 base:"base",height:"height",area:"Area",squares:"squares",
 ex_title:"Practice",ex_mix:"Mix",
 correct_count:"correct",streak:"streak",check:"Check",next:"Next →",yes:"Yes",no:"No",
 fb_ok:"Correct! 🎉",fb_try:"Almost… try again.",fb_wrong:"The answer was {ans}."
}};
/* each topic file calls addStrings({es:{...}, en:{...}}) with its own words */
function addStrings(o){for(const L in o)Object.assign(S[L]||(S[L]={}),o[L])}
let LANG='es';
try{LANG=localStorage.getItem('trilab-lang')||'es'}catch(e){}
const t=k=>(S[LANG]&&S[LANG][k])??S.en[k]??k;
const fmt=(s,o)=>s.replace(/\{(\w+)\}/g,(m,k)=>o[k]??m);

/* ---------- 2. SMALL HELPERS ---------- */
const $=s=>document.querySelector(s);
const COLS=['#e4572e','#2e86de','#e8a317','#8e5bd6'];   // colour of A, B, C, D
const LET=['A','B','C','D'];
const NS='http://www.w3.org/2000/svg';
const ri=(a,b)=>a+Math.floor(Math.random()*(b-a+1));       // random whole number a..b
const rf=(a,b)=>a+Math.random()*(b-a);                      // random decimal a..b
const pick=a=>a[Math.floor(Math.random()*a.length)];
const shuffle=a=>{for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const sub=(p,q)=>({x:p.x-q.x,y:p.y-q.y});
const len=v=>Math.hypot(v.x,v.y);
const dist=(p,q)=>len(sub(p,q));
const norm=v=>{const l=len(v)||1;return{x:v.x/l,y:v.y/l}};
const centroid=P=>({x:P.reduce((s,p)=>s+p.x,0)/P.length,y:P.reduce((s,p)=>s+p.y,0)/P.length});
const num=v=>{const s=v.toFixed(1);return LANG==='es'?s.replace('.',','):s};   // 7.2 → "7,2" in Spanish
const polar=(cx,cy,R,deg)=>({x:cx+R*Math.cos(deg*Math.PI/180),y:cy-R*Math.sin(deg*Math.PI/180)});

/* create an SVG element */
function el(tag,attrs={},parent){const e=document.createElementNS(NS,tag);for(const k in attrs)e.setAttribute(k,attrs[k]);if(parent)parent.appendChild(e);return e}
/* write text in SVG (with a soft white outline so it's readable over lines) */
function txt(g,x,y,s,o={}){const e=el('text',{x,y,'text-anchor':o.anchor||'middle','dominant-baseline':'central','font-size':o.size||18,'font-weight':800,fill:o.fill||'#2b2d42','font-family':'Nunito, system-ui, sans-serif'},g);
 if(o.halo!==false){e.setAttribute('stroke','#fffdf9');e.setAttribute('stroke-width',5);e.setAttribute('paint-order','stroke');e.setAttribute('stroke-linejoin','round')}
 e.textContent=s;return e}
/* angle (in degrees) at corner V between the lines V→P and V→Q */
function angleAt(V,P,Q){const u=sub(P,V),w=sub(Q,V);const c=(u.x*w.x+u.y*w.y)/((len(u)*len(w))||1);return Math.acos(clamp(c,-1,1))*180/Math.PI}
function triAngles(A,B,C){return[angleAt(A,B,C),angleAt(B,C,A),angleAt(C,A,B)]}
/* round a list of angles to whole numbers that still add up to exactly `total` */
function roundSum(arr,total){const fl=arr.map(Math.floor);const rem=total-fl.reduce((a,b)=>a+b,0);
 const order=arr.map((v,i)=>[v-Math.floor(v),i]).sort((a,b)=>b[0]-a[0]);
 for(let k=0;k<rem&&k<arr.length;k++)fl[order[k][1]]++;return fl}
const round180=a=>roundSum(a,180);
/* pie-slice shape for an angle at V */
function wedgePath(V,P,Q,r){const u=norm(sub(P,V)),w=norm(sub(Q,V));
 const p1={x:V.x+u.x*r,y:V.y+u.y*r},p2={x:V.x+w.x*r,y:V.y+w.y*r};
 const sweep=(u.x*w.y-u.y*w.x)>0?1:0;
 return `M${V.x},${V.y} L${p1.x},${p1.y} A${r},${r} 0 0 ${sweep} ${p2.x},${p2.y} Z`}
/* little square = right angle mark */
function squarePath(V,P,Q,s){const u=norm(sub(P,V)),w=norm(sub(Q,V));
 return `M${V.x},${V.y} L${V.x+u.x*s},${V.y+u.y*s} L${V.x+u.x*s+w.x*s},${V.y+u.y*s+w.y*s} L${V.x+w.x*s},${V.y+w.y*s} Z`}
/* point inside an angle, along the line that splits it in half (where the label goes) */
function bisectorPoint(V,P,Q,d){const u=norm(sub(P,V)),w=norm(sub(Q,V));let b={x:u.x+w.x,y:u.y+w.y};
 if(len(b)<1e-3)b={x:-u.y,y:u.x};b=norm(b);return{x:V.x+b.x*d,y:V.y+b.y*d}}
/* n little dashes across the middle of side p-q (= "equal sides" mark) */
function ticks(g,p,q,n){const m={x:(p.x+q.x)/2,y:(p.y+q.y)/2},d=norm(sub(q,p)),nr={x:-d.y,y:d.x};
 for(let k=0;k<n;k++){const off=(k-(n-1)/2)*7,c={x:m.x+d.x*off,y:m.y+d.y*off};
  el('line',{x1:c.x-nr.x*9,y1:c.y-nr.y*9,x2:c.x+nr.x*9,y2:c.y+nr.y*9,stroke:'#2b2d42','stroke-width':3,'stroke-linecap':'round'},g)}}
/* n little arrow heads on side p-q pointing along `dir` (= "parallel sides" mark) */
function chevrons(g,p,q,dir,n){const d=norm(dir),nr={x:-d.y,y:d.x},m={x:(p.x+q.x)/2,y:(p.y+q.y)/2};
 const s=Math.sign((q.x-p.x)*d.x+(q.y-p.y)*d.y)||1,base={x:m.x-(q.x-p.x)/len(sub(q,p))*24*s,y:m.y-(q.y-p.y)/len(sub(q,p))*24*s};
 for(let k=0;k<n;k++){const off=(k-(n-1)/2)*8,tip={x:base.x+d.x*(off+4),y:base.y+d.y*(off+4)};
  el('path',{d:`M${tip.x-d.x*8+nr.x*7},${tip.y-d.y*8+nr.y*7} L${tip.x},${tip.y} L${tip.x-d.x*8-nr.x*7},${tip.y-d.y*8-nr.y*7}`,fill:'none',stroke:'#2b2d42','stroke-width':3,'stroke-linecap':'round','stroke-linejoin':'round'},g)}}
function grid(g,x0,y0,cols,rows,u,col){for(let i=0;i<=cols;i++)el('line',{x1:x0+i*u,y1:y0,x2:x0+i*u,y2:y0+rows*u,stroke:col||'#ece5d8','stroke-width':1},g);
 for(let j=0;j<=rows;j++)el('line',{x1:x0,y1:y0+j*u,x2:x0+cols*u,y2:y0+j*u,stroke:col||'#ece5d8','stroke-width':1},g)}
/* scale + centre a shape so it fills a W×H box */
function fit(P,W,H,pad){const xs=P.map(p=>p.x),ys=P.map(p=>p.y),mnx=Math.min(...xs),mxx=Math.max(...xs),mny=Math.min(...ys),mxy=Math.max(...ys);
 const s=Math.min((W-2*pad)/((mxx-mnx)||1),(H-2*pad)/((mxy-mny)||1)),ox=(W-(mxx-mnx)*s)/2-mnx*s,oy=(H-(mxy-mny)*s)/2-mny*s;
 return P.map(p=>({x:p.x*s+ox,y:p.y*s+oy}))}

/* ---------- 3. TRIANGLES AND QUADRILATERALS ---------- */
/* Draw a triangle. Options: wedges, square, labels[], angleLabels, ticks[[i,j,n]], sideText[], sideColors, sideTextColor, letters, fill */
function drawTri(g,P,o={}){
 const ang=triAngles(P[0],P[1],P[2]),rd=round180(ang),G=centroid(P);
 const pts=P.map(p=>`${p.x},${p.y}`).join(' ');
 el('polygon',{points:pts,fill:o.fill||'#f6f1e7'},g);
 if(o.wedges!==false)for(let i=0;i<3;i++){
  const V=P[i],Q1=P[(i+1)%3],Q2=P[(i+2)%3];
  const r=Math.min(o.r||34,0.33*Math.min(dist(V,Q1),dist(V,Q2)));
  if(o.square!==false&&rd[i]===90)el('path',{d:squarePath(V,Q1,Q2,r*0.7),fill:COLS[i],'fill-opacity':.85},g);
  else el('path',{d:wedgePath(V,Q1,Q2,r),fill:COLS[i],'fill-opacity':.85},g);
 }
 if(o.sideColors){for(let i=0;i<3;i++){const p=P[(i+1)%3],q=P[(i+2)%3];el('line',{x1:p.x,y1:p.y,x2:q.x,y2:q.y,stroke:COLS[i],'stroke-width':6,'stroke-linecap':'round'},g)}}
 else el('polygon',{points:pts,fill:'none',stroke:'#2b2d42','stroke-width':o.sw||3,'stroke-linejoin':'round'},g);
 if(o.wedges!==false&&o.angleLabels!==false)for(let i=0;i<3;i++){
  const V=P[i],Q1=P[(i+1)%3],Q2=P[(i+2)%3];
  const r=Math.min(o.r||34,0.33*Math.min(dist(V,Q1),dist(V,Q2)));
  const d=r+20+(ang[i]<35?16:0),pos=bisectorPoint(V,Q1,Q2,d);
  txt(g,pos.x,pos.y,o.labels?o.labels[i]:rd[i]+'°',{fill:COLS[i],size:o.fs||19});
 }
 if(o.ticks)o.ticks.forEach(([i,j,n])=>ticks(g,P[i],P[j],n));
 if(o.sideText)for(let i=0;i<3;i++){if(o.sideText[i]==null)continue;
  const p=P[(i+1)%3],q=P[(i+2)%3],m={x:(p.x+q.x)/2,y:(p.y+q.y)/2},dir=norm(sub(m,G));
  txt(g,m.x+dir.x*24,m.y+dir.y*24,o.sideText[i],{fill:o.sideTextColor?COLS[i]:'#2b2d42',size:o.fs||19})}
 if(o.letters!==false)for(let i=0;i<3;i++){const dir=norm(sub(P[i],G));txt(g,P[i].x+dir.x*30,P[i].y+dir.y*30,LET[i],{fill:COLS[i],size:22})}
 return{ang,rd};
}
function triFromAngles(A,B){const C=180-A-B,r=Math.PI/180,AC=Math.sin(B*r)/Math.sin(C*r);return[{x:0,y:0},{x:1,y:0},{x:AC*Math.cos(A*r),y:-AC*Math.sin(A*r)}]}
function triFromSides(a,b,c){const x=(b*b+c*c-a*a)/(2*c),y=Math.sqrt(Math.max(0,b*b-x*x));return[{x:0,y:0},{x:c,y:0},{x,y:-y}]}
function randomTri(W,H){let P;for(let k=0;k<500;k++){P=[0,1,2].map(()=>({x:ri(70,W-70),y:ri(60,H-60)}));
 const a=triAngles(...P);if(Math.min(...a)>=20&&Math.min(dist(P[0],P[1]),dist(P[1],P[2]),dist(P[0],P[2]))>=140)break}return P}

/* Measure a quadrilateral: angles, sides, parallel pairs, right angles, and its name */
function quadInfo(P){
 const ang=P.map((V,i)=>angleAt(V,P[(i+1)%4],P[(i+3)%4])),rd=roundSum(ang,360);
 const s=P.map((p,i)=>dist(p,P[(i+1)%4]));
 const eqS=(a,b)=>Math.abs(a-b)/Math.max(a,b)<0.03;
 const parl=(u,w)=>Math.abs(u.x*w.y-u.y*w.x)/(len(u)*len(w))<0.03;
 const par1=parl(sub(P[1],P[0]),sub(P[2],P[3])),par2=parl(sub(P[3],P[0]),sub(P[2],P[1]));
 const rights=rd.filter(v=>v===90).length;
 const allEq=eqS(s[0],s[1])&&eqS(s[1],s[2])&&eqS(s[2],s[3]);
 let type;
 if(par1&&par2)type=rights===4?(allEq?'square':'rect'):(allEq?'rhombus':'para');
 else if(par1||par2)type='trap';
 else if((eqS(s[0],s[1])&&eqS(s[2],s[3]))||(eqS(s[1],s[2])&&eqS(s[3],s[0])))type='kite';
 else type='quad';
 // group equal sides -> how many tick marks each side gets
 const grp=[-1,-1,-1,-1],counts=[];let gi=0;
 for(let i=0;i<4;i++){if(grp[i]>=0)continue;grp[i]=gi;let c=1;for(let j=i+1;j<4;j++)if(grp[j]<0&&eqS(s[i],s[j])){grp[j]=gi;c++}counts[gi++]=c}
 let tk=0;const tickN=counts.map(c=>c>=2?++tk:0),sideTicks=grp.map(g=>tickN[g]);
 const eqDesc=allEq?'q_eq_all':(tk===2?'q_eq_2pairs':(tk===1?'q_eq_1pair':'q_eq_none'));
 return{ang,rd,s,par1,par2,parCount:(par1?1:0)+(par2?1:0),rights,type,sideTicks,eqDesc};
}
/* Draw a quadrilateral. Options: wedges, square, labels[], angleLabels, marks, diag, sideText[], letters, fill */
function drawQuad(g,P,o={}){
 const I=quadInfo(P),G=centroid(P),pts=P.map(p=>`${p.x},${p.y}`).join(' ');
 el('polygon',{points:pts,fill:o.fill||'#f6f1e7'},g);
 if(o.diag)el('line',{x1:P[0].x,y1:P[0].y,x2:P[2].x,y2:P[2].y,stroke:'#6b6f80','stroke-width':2.5,'stroke-dasharray':'8 7'},g);
 const rad=i=>Math.min(o.r||32,0.3*Math.min(dist(P[i],P[(i+1)%4]),dist(P[i],P[(i+3)%4])));
 for(let i=0;i<4;i++){const V=P[i],N=P[(i+1)%4],Pr=P[(i+3)%4],r=rad(i);
  if(o.square!==false&&I.rd[i]===90)el('path',{d:squarePath(V,N,Pr,r*0.7),fill:COLS[i],'fill-opacity':.85},g);
  else if(o.wedges!==false)el('path',{d:wedgePath(V,N,Pr,r),fill:COLS[i],'fill-opacity':.85},g)}
 el('polygon',{points:pts,fill:'none',stroke:'#2b2d42','stroke-width':3,'stroke-linejoin':'round'},g);
 if(o.marks){
  for(let i=0;i<4;i++)if(I.sideTicks[i])ticks(g,P[i],P[(i+1)%4],I.sideTicks[i]);
  if(I.par1){const d=sub(P[1],P[0]);chevrons(g,P[0],P[1],d,1);chevrons(g,P[3],P[2],d,1)}
  if(I.par2){const d=sub(P[3],P[0]);chevrons(g,P[0],P[3],d,2);chevrons(g,P[1],P[2],d,2)}
 }
 if(o.wedges!==false&&o.angleLabels!==false)for(let i=0;i<4;i++){
  const r=rad(i),d=r+20+(I.ang[i]<45?12:0),pos=bisectorPoint(P[i],P[(i+1)%4],P[(i+3)%4],d);
  txt(g,pos.x,pos.y,o.labels?o.labels[i]:I.rd[i]+'°',{fill:COLS[i],size:19})}
 if(o.sideText)for(let i=0;i<4;i++){if(o.sideText[i]==null)continue;
  const p=P[i],q=P[(i+1)%4],m={x:(p.x+q.x)/2,y:(p.y+q.y)/2},dir=norm(sub(m,G));
  txt(g,m.x+dir.x*26,m.y+dir.y*26,o.sideText[i],{size:21})}
 if(o.letters!==false)for(let i=0;i<4;i++){const dir=norm(sub(P[i],G));txt(g,P[i].x+dir.x*30,P[i].y+dir.y*30,LET[i],{fill:COLS[i],size:22})}
 return I;
}
/* is the 4-sided shape convex (no dents, no crossing sides)? */
function convexOK(P){let sg=0;for(let i=0;i<4;i++){const a=P[i],b=P[(i+1)%4],c=P[(i+2)%4];
  const cr=(b.x-a.x)*(c.y-b.y)-(b.y-a.y)*(c.x-b.x);if(Math.abs(cr)<1e-6)return false;const s=Math.sign(cr);if(!sg)sg=s;else if(s!==sg)return false}
 const A=P.map((V,i)=>angleAt(V,P[(i+1)%4],P[(i+3)%4]));return Math.min(...A)>=15&&Math.max(...A)<=165}
/* a board constraint that keeps a quadrilateral convex, optionally snapping to a grid */
const convexMove=snap=>(i,p,pts)=>{if(snap)p={x:Math.round(p.x/snap)*snap,y:Math.round(p.y/snap)*snap};const T=pts.map((q,j)=>j===i?p:q);return convexOK(T)?p:null};

/* ---------- 3b. LINES, RAYS AND ANGLES ----------
   Directions here are "math angles": degrees, counter-clockwise, 0° = pointing right. */
const nd=d=>((d%360)+360)%360;                                                      // keep an angle in 0..360
const dirDeg=(O,P)=>nd(Math.atan2(-(P.y-O.y),P.x-O.x)*180/Math.PI);                 // direction from O towards P
const num0=v=>num(v).replace(/[.,]0$/,'');                                          // 6.0 → "6", 6.5 → "6,5"
/* straight line P→Q. Options: color, w (width), dash */
function seg(g,P,Q,o={}){const a={x1:P.x,y1:P.y,x2:Q.x,y2:Q.y,stroke:o.color||'#2b2d42','stroke-width':o.w||3,'stroke-linecap':'round'};
 if(o.dash)a['stroke-dasharray']=o.dash;return el('line',a,g)}
/* coloured angle at O, from direction a1 turning counter-clockwise to a2.
   Options: label, gap (label distance), size, op (opacity), labelColor, full (draw 360° when a1==a2) */
function arcWedge(g,O,a1,a2,r,color,o={}){let sw=nd(a2-a1);if(sw<1e-9&&o.full)sw=360;
 if(sw>=359.999)el('circle',{cx:O.x,cy:O.y,r,fill:color,'fill-opacity':o.op??.85},g);
 else if(sw>0){const p1=polar(O.x,O.y,r,a1),p2=polar(O.x,O.y,r,a1+sw);
  el('path',{d:`M${O.x},${O.y} L${p1.x},${p1.y} A${r},${r} 0 ${sw>180?1:0} 0 ${p2.x},${p2.y} Z`,fill:color,'fill-opacity':o.op??.85},g)}
 if(o.label!=null&&o.label!==''){const m=polar(O.x,O.y,r+(o.gap??20),a1+sw/2);txt(g,m.x,m.y,o.label,{fill:o.labelColor||color,size:o.size||19})}
 return sw}
/* little square for a right angle starting at direction a1 */
function rightMark(g,O,a1,s,color){const p1=polar(O.x,O.y,s,a1),p3=polar(O.x,O.y,s,a1+90),p2={x:p1.x+p3.x-O.x,y:p1.y+p3.y-O.y};
 el('path',{d:`M${O.x},${O.y} L${p1.x},${p1.y} L${p2.x},${p2.y} L${p3.x},${p3.y} Z`,fill:color,'fill-opacity':.85},g)}
/* arrow tip at P pointing in direction deg (= "goes on forever") */
function arrowHead(g,P,deg,color,size){size=size||14;const a=polar(P.x,P.y,size,deg+150),b=polar(P.x,P.y,size,deg-150);
 el('path',{d:`M${a.x},${a.y} L${P.x},${P.y} L${b.x},${b.y}`,fill:'none',stroke:color||'#2b2d42','stroke-width':3.5,'stroke-linecap':'round','stroke-linejoin':'round'},g)}
/* where the endless line through P and Q meets the edges of a W×H box → [end1, end2] */
function lineInBox(P,Q,W,H,m=8){const d=sub(Q,P),ts=[];
 if(Math.abs(d.x)>1e-9)for(const x of[m,W-m]){const t=(x-P.x)/d.x,y=P.y+t*d.y;if(y>=m-1e-6&&y<=H-m+1e-6)ts.push(t)}
 if(Math.abs(d.y)>1e-9)for(const y of[m,H-m]){const t=(y-P.y)/d.y,x=P.x+t*d.x;if(x>=m-1e-6&&x<=W-m+1e-6)ts.push(t)}
 if(ts.length<2)return[P,Q];const t0=Math.min(...ts),t1=Math.max(...ts);return[{x:P.x+t0*d.x,y:P.y+t0*d.y},{x:P.x+t1*d.x,y:P.y+t1*d.y}]}
/* where the ray that starts at P and passes through Q leaves the box */
function rayInBox(P,Q,W,H,m=8){const[a,b]=lineInBox(P,Q,W,H,m),d=sub(Q,P);return((b.x-P.x)*d.x+(b.y-P.y)*d.y)>=0?b:a}
/* crossing point of line P1P2 and line P3P4 (null if they are parallel) */
function intersect(P1,P2,P3,P4){const d1=sub(P2,P1),d2=sub(P4,P3),den=d1.x*d2.y-d1.y*d2.x;if(Math.abs(den)<1e-9)return null;
 const t=((P3.x-P1.x)*d2.y-(P3.y-P1.y)*d2.x)/den;return{x:P1.x+t*d1.x,y:P1.y+t*d1.y}}

/* ---------- 4. DRAGGABLE POINTS ----------
   board(svg, pts, render, constrain, colors)
   render(g, pts) redraws the picture after each move.
   constrain(i, p, pts) can snap a point or return null to refuse the move. */
function toSvg(svg,e){const pt=svg.createSVGPoint();pt.x=e.clientX;pt.y=e.clientY;return pt.matrixTransform(svg.getScreenCTM().inverse())}
function board(svg,pts,render,constrain,colors){
 const gDraw=el('g',{},svg),gH=el('g',{},svg);
 const handles=pts.map((p,i)=>{const h=el('g',{class:'handle'},gH);el('circle',{r:26,fill:'transparent'},h);el('circle',{r:10,fill:'#fff',stroke:(colors||COLS)[i],'stroke-width':4},h);return h});
 function redraw(){handles.forEach((h,i)=>h.setAttribute('transform',`translate(${pts[i].x},${pts[i].y})`));gDraw.replaceChildren();render(gDraw,pts)}
 handles.forEach((h,i)=>{
  h.addEventListener('pointerdown',e=>{h.setPointerCapture(e.pointerId);h._drag=true;e.preventDefault()});
  h.addEventListener('pointermove',e=>{if(!h._drag)return;const vb=svg.viewBox.baseVal;let p=toSvg(svg,e);
   p={x:clamp(p.x,22,vb.width-22),y:clamp(p.y,22,vb.height-22)};if(constrain)p=constrain(i,p,pts);if(!p)return;
   for(let j=0;j<pts.length;j++)if(j!==i&&dist(p,pts[j])<36)return;
   if(p.x===pts[i].x&&p.y===pts[i].y)return;pts[i].x=p.x;pts[i].y=p.y;redraw()});
  const end=()=>{h._drag=false};h.addEventListener('pointerup',end);h.addEventListener('pointercancel',end);
 });
 redraw();
 return{redraw,set(np){np.forEach((p,i)=>{pts[i].x=p.x;pts[i].y=p.y});redraw()}};
}

/* ---------- 5. EXERCISE ENGINE ----------
   ExerciseSet(container, generators, categories)
   categories: ['mix', 'key1', 'key2', ...]; chip labels come from t('ex_'+key).
   Each generator returns:
     {kind:'num'|'choice', answer, prompt(), draw(svg), explain(),
      hint()?, unit()?, choices?:[keys], after(svg)?} */
function ExerciseSet(root,gens,cats){
 root.innerHTML=`<div class="exhead"><h2 data-i18n="ex_title"></h2><div class="score"><span>✓ <b class="sc">0</b> <span data-i18n="correct_count"></span></span><span>🔥 <b class="stk">0</b> <span data-i18n="streak"></span></span></div></div>
 <div class="chips"></div><p class="prompt"></p><svg class="board exsvg" viewBox="0 0 600 340"></svg><div class="answer"></div><div class="fb"></div><button class="btn primary next" data-i18n="next" hidden></button>`;
 const q=s=>root.querySelector(s),svg=q('.exsvg');
 let cat='mix',cur=null,tries=0,done=false,score=0,streak=0;
 function buildCats(){const box=q('.chips');box.replaceChildren();cats.forEach(k=>{const b=document.createElement('button');b.textContent=t('ex_'+k);if(k===cat)b.className='on';b.onclick=()=>{cat=k;buildCats();newEx()};box.appendChild(b)})}
 function newEx(){const k=cat==='mix'?pick(cats.slice(1)):cat;cur=gens[k]();render()}
 function render(){tries=0;done=false;q('.prompt').textContent=cur.prompt();svg.replaceChildren();cur.draw(svg);
  const fb=q('.fb');fb.className='fb';fb.innerHTML='';q('.next').hidden=true;const box=q('.answer');box.replaceChildren();
  if(cur.kind==='num'){box.innerHTML=`<input class="exin" type="number" inputmode="numeric" autocomplete="off"><span class="unit">${cur.unit?cur.unit():''}</span><button class="btn primary chk">${t('check')}</button>`;
   q('.chk').onclick=checkNum;q('.exin').onkeydown=e=>{if(e.key==='Enter')checkNum()}}
  else cur.choices.forEach(k=>{const b=document.createElement('button');b.className='btn choice';b.textContent=t(k);b.dataset.k=k;b.onclick=()=>checkChoice(b);box.appendChild(b)})}
 const ansText=()=>cur.kind==='num'?cur.answer+(cur.unit?cur.unit():''):t(cur.answer);
 function finish(ok){done=true;const fb=q('.fb');
  if(ok){score++;streak++;fb.className='fb ok';fb.innerHTML=`<b>${t('fb_ok')}</b><span class="ex">${cur.explain()}</span>`}
  else{streak=0;fb.className='fb bad';fb.innerHTML=`<b>${fmt(t('fb_wrong'),{ans:ansText()})}</b><span class="ex">${cur.explain()}</span>`}
  q('.sc').textContent=score;q('.stk').textContent=streak;q('.next').hidden=false;
  if(cur.after)cur.after(svg);
  q('.answer').querySelectorAll('button,input').forEach(x=>x.disabled=true)}
 function checkNum(){if(done)return;const v=parseFloat((q('.exin').value||'').replace(',','.'));if(isNaN(v))return;
  if(v===cur.answer)return finish(true);tries++;
  if(tries<2&&cur.hint){const fb=q('.fb');fb.className='fb bad';fb.innerHTML=`<b>${t('fb_try')}</b><span class="ex">${cur.hint()}</span>`;q('.exin').select()}
  else finish(false)}
 function checkChoice(b){if(done)return;const ok=b.dataset.k===cur.answer;
  q('.answer').querySelectorAll('.choice').forEach(x=>{if(x.dataset.k===cur.answer)x.classList.add('right')});
  if(!ok)b.classList.add('wrong');finish(ok)}
 q('.next').onclick=newEx;
 return{refresh(){buildCats();if(cur)render()},start:newEx};
}

/* ---------- 6. PAGE SETUP ----------
   Call once at the end of each page's script:
   startPage({boards:[...], exsets:[...], onLang(){...}})
   - wires the sub-tab buttons (data-tab="sectionId")
   - fills every element that has data-i18n="key" with t(key)
   - the language button re-draws everything in the other language */
function startPage({boards=[],exsets=[],onLang}={}){
 document.querySelectorAll('.subtabs button').forEach(b=>b.onclick=()=>{
  document.querySelectorAll('.subtabs button').forEach(x=>x.classList.toggle('on',x===b));
  document.querySelectorAll('section').forEach(s=>s.classList.toggle('on',s.id===b.dataset.tab))});
 function applyLang(){document.documentElement.lang=LANG;
  document.querySelectorAll('[data-i18n]').forEach(e=>e.textContent=t(e.dataset.i18n));
  const lb=$('#langBtn');if(lb)lb.textContent=t('langBtn');
  boards.forEach(b=>b.redraw());if(onLang)onLang();exsets.forEach(x=>x.refresh())}
 const lb=$('#langBtn');if(lb)lb.onclick=()=>{LANG=LANG==='es'?'en':'es';try{localStorage.setItem('trilab-lang',LANG)}catch(e){}applyLang()};
 applyLang();exsets.forEach(x=>x.start());
}

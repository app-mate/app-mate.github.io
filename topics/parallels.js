/* =====================================================================
   Topic 4: PARALLEL LINES AND A TRANSVERSAL
   Panels: F, Z and C angles (with a "tilt" test) · why a triangle has 180° · exercises
   ===================================================================== */

/* ---------- words for this topic ---------- */
addStrings({
es:{
 topic_par:"Paralelas y una secante",
 ptab1:"Ángulos F, Z y C",ptab2:"¿Por qué 180° en el triángulo?",
 p1_title:"Dos paralelas cortadas por una secante",
 p1_intro:"Las dos líneas horizontales son paralelas. Mueve los puntos rojo y azul de la línea que las cruza (la secante) y mira los 8 ángulos: ¡solo hay dos tamaños distintos!",
 p_corr:"Correspondientes (F)",p_corr_d:"Están en la misma posición en cada cruce, formando una F. Son iguales.",
 p_alt:"Alternos internos (Z)",p_alt_d:"Están entre las paralelas, en lados opuestos de la secante, formando una Z. Son iguales.",
 p_coint:"Conjugados internos (C)",p_coint_d:"Están entre las paralelas, del mismo lado de la secante, formando una C. Suman 180°.",
 p_other:"Otro par →",
 p_tilt:"Prueba: inclina la línea de abajo con el punto morado. Si dejan de ser paralelas, ¡los ángulos ya no son iguales!",
 p_ispar:"✓ Las líneas son paralelas.",
 p_notpar:"✗ Las líneas ya no son paralelas: la regla deja de funcionar.",
 p2_title:"Por qué los ángulos de un triángulo suman 180°",
 p2_intro:"Dibujamos una recta por C, paralela al lado AB. Por los ángulos en Z, los ángulos de A y de B aparecen otra vez arriba, junto al de C… y los tres juntos forman una línea recta.",
 p2_tip:"Mueve los puntos del triángulo: arriba, los tres ángulos siempre forman una línea recta (180°).",
 ex_ppair:"¿Qué pareja?",ex_pfind:"Encuentra el ángulo",
 pq_pair:"Las líneas horizontales son paralelas. Los dos ángulos coloreados, ¿qué pareja forman?",
 pq_find:"Las líneas horizontales son paralelas. ¿Cuánto mide el ángulo marcado con ?",
 ph_find:"Pista: aquí los ángulos solo tienen dos tamaños. Si los dos son agudos (o los dos obtusos) son iguales; si no, suman 180°.",
 pe_eq:"Los dos ángulos tienen el mismo tamaño → {ans}°",
 pe_sup:"Uno es agudo y el otro obtuso → suman 180°: 180 − {a} = {ans}°",
 pe_corr:"Están en la misma posición en cada cruce → correspondientes (forma de F).",
 pe_alt:"Están entre las paralelas y en lados opuestos → alternos internos (forma de Z).",
 pe_coint:"Están entre las paralelas y del mismo lado → conjugados internos (forma de C)."
},
en:{
 topic_par:"Parallel lines and a transversal",
 ptab1:"F, Z and C angles",ptab2:"Why 180° in a triangle?",
 p1_title:"Two parallel lines cut by a transversal",
 p1_intro:"The two horizontal lines are parallel. Move the red and blue points of the line that crosses them (the transversal) and look at the 8 angles: there are only two different sizes!",
 p_corr:"Corresponding (F)",p_corr_d:"They sit in the same position at each crossing, making an F. They are equal.",
 p_alt:"Alternate interior (Z)",p_alt_d:"Between the parallel lines, on opposite sides of the transversal, making a Z. They are equal.",
 p_coint:"Co-interior (C)",p_coint_d:"Between the parallel lines, on the same side of the transversal, making a C. They add up to 180°.",
 p_other:"Another pair →",
 p_tilt:"Try it: tilt the bottom line with the purple point. If the lines stop being parallel, the angles are no longer equal!",
 p_ispar:"✓ The lines are parallel.",
 p_notpar:"✗ The lines are not parallel any more: the rule stops working.",
 p2_title:"Why the angles of a triangle add up to 180°",
 p2_intro:"We draw a line through C, parallel to side AB. Because of the Z angles, the angles at A and B show up again at the top, next to the angle at C… and together the three make a straight line.",
 p2_tip:"Move the triangle's points: at the top, the three angles always make a straight line (180°).",
 ex_ppair:"Which pair?",ex_pfind:"Find the angle",
 pq_pair:"The horizontal lines are parallel. What kind of pair are the two coloured angles?",
 pq_find:"The horizontal lines are parallel. How big is the angle marked ?",
 ph_find:"Hint: here the angles only come in two sizes. If both are acute (or both obtuse) they are equal; otherwise they add up to 180°.",
 pe_eq:"Both angles are the same size → {ans}°",
 pe_sup:"One is acute and the other obtuse → they add up to 180°: 180 − {a} = {ans}°",
 pe_corr:"Same position at each crossing → corresponding (F shape).",
 pe_alt:"Between the parallels, on opposite sides → alternate interior (Z shape).",
 pe_coint:"Between the parallels, on the same side → co-interior (C shape)."
}});

/* The 4 angles where a line (pointing right at lineDeg) is crossed by the transversal (pointing up at upDeg).
   Order: 0 up-right, 1 up-left, 2 down-left, 3 down-right. Each is [from, to] (counter-clockwise). */
function crossParts(lineDeg,upDeg){return[[lineDeg,upDeg],[upDeg,lineDeg+180],[lineDeg+180,upDeg+180],[upDeg+180,lineDeg+360]]}
/* angle numbers: 0-3 at the top crossing P, 4-7 at the bottom crossing Q */
const PAIRS={p_corr:[[0,4],[1,5],[2,6],[3,7]],p_alt:[[3,5],[2,4]],p_coint:[[3,4],[2,5]]};
const sizeColor=k=>(k%2===0)?COLS[2]:COLS[1];   // up-right/down-left in amber, the other two in blue
/* the F / Z / C shape: segment PQ + both arms of each highlighted angle */
function drawShape(g,V,P,Q,list){const l=seg(g,P,Q,{w:8,color:COLS[0]});l.setAttribute('stroke-opacity',.45);
 list.forEach(([O,s,e])=>[s,e].forEach(a=>{const x=seg(g,O,polar(O.x,O.y,105,a),{w:8,color:COLS[0]});x.setAttribute('stroke-opacity',.45)}))}

/* ---------- panel 1: F, Z and C angles ---------- */
const TOP=140,BL={x:20,y:300};let pMode='p_corr',pIdx=0;
const pb1=board($('#psv1'),[{x:360,y:40},{x:220,y:390},{x:580,y:300}],(g,H)=>{
 const[U,D,T]=H,P=intersect(U,D,{x:0,y:TOP},{x:600,y:TOP}),Q=intersect(U,D,BL,T),par=T.y===300;
 seg(g,{x:20,y:TOP},{x:580,y:TOP},{w:4});seg(g,BL,T,{w:4,color:par?'#2b2d42':COLS[3]});
 if(par){chevrons(g,{x:20,y:TOP},{x:220,y:TOP},{x:1,y:0},1);chevrons(g,{x:20,y:300},{x:220,y:300},{x:1,y:0},1)}
 const[t1,t2]=lineInBox(U,D,600,420,10);seg(g,t1,t2,{w:4});
 const up=dirDeg(P,U),all=[...crossParts(0,up).map(x=>[P,...x]),...crossParts(dirDeg(BL,T),up).map(x=>[Q,...x])];
 const sizes=all.map(([V,s,e])=>nd(e-s)),rd=[...roundSum(sizes.slice(0,4),360),...roundSum(sizes.slice(4),360)];
 const hl=PAIRS[pMode][pIdx%PAIRS[pMode].length];
 all.forEach(([V,s,e],k)=>{const on=hl.includes(k),c=sizeColor(k);arcWedge(g,V,s,e,32,c,{label:rd[k]+'°',op:on?.95:.22,labelColor:on?c:'#bdb6aa',size:17})});
 drawShape(g,null,P,Q,hl.map(k=>all[k]));
 [P,Q].forEach(X=>el('circle',{cx:X.x,cy:X.y,r:5,fill:'#2b2d42'},g));
 const[a,b]=hl,va=rd[a],vb=rd[b];
 const rel=pMode==='p_coint'?`${colorNum(va,a)} + ${colorNum(vb,b)} = <b>${va+vb}°</b>`:`${colorNum(va,a)} ${va===vb?'=':'≠'} ${colorNum(vb,b)}`;
 $('#pBadge').innerHTML=`<b>${t(pMode)}</b><span class="d">${t(pMode+'_d')}</span><div class="eq" style="margin-top:8px">${rel}</div>`;
 $('#pStatus').innerHTML=`<span class="${par?'okline':'warn'}">${t(par?'p_ispar':'p_notpar')}</span>`;
},(i,p,pts)=>{const T2=pts.map(q=>({...q}));
 if(i===0)T2[0]={x:clamp(Math.round(p.x),60,540),y:40};
 else if(i===1)T2[1]={x:clamp(Math.round(p.x),60,540),y:390};
 else{let y=clamp(Math.round(p.y),230,370);if(Math.abs(y-300)<=6)y=300;T2[2]={x:580,y}}   // snaps back to parallel when close
 const P=intersect(T2[0],T2[1],{x:0,y:TOP},{x:600,y:TOP}),Q=intersect(T2[0],T2[1],BL,T2[2]);
 if(!P||!Q||P.x<60||P.x>540||Q.x<60||Q.x>540||Math.abs(T2[0].x-T2[1].x)>380)return null;
 return T2[i]},[COLS[0],COLS[1],COLS[3]]);
function colorNum(v,k){return`<span style="color:${sizeColor(k)}">${v}°</span>`}
document.querySelectorAll('[data-pmode]').forEach(b=>b.onclick=()=>{pMode=b.dataset.pmode;pIdx=0;
 document.querySelectorAll('[data-pmode]').forEach(x=>x.classList.toggle('on',x===b));pb1.redraw()});
$('#pOther').onclick=()=>{pIdx++;pb1.redraw()};

/* ---------- panel 2: why a triangle has 180° ---------- */
const pb2=board($('#psv2'),[{x:140,y:340},{x:470,y:340},{x:250,y:160}],(g,P)=>{
 const[A,B,C]=P,u=norm(sub(B,A)),L={x:C.x-u.x*100,y:C.y-u.y*100},R={x:C.x+u.x*100,y:C.y+u.y*100};
 const[e1,e2]=lineInBox(L,R,600,420,10);seg(g,e1,e2,{w:3,color:COLS[3],dash:'10 7'});
 const{rd}=drawTri(g,P);
 const r=42;el('path',{d:wedgePath(C,L,A,r),fill:COLS[0],'fill-opacity':.85},g);el('path',{d:wedgePath(C,B,R,r),fill:COLS[1],'fill-opacity':.85},g);
 const pa=bisectorPoint(C,L,A,r+20),pc=bisectorPoint(C,B,R,r+20);
 txt(g,pa.x,pa.y,rd[0]+'°',{fill:COLS[0],size:19});txt(g,pc.x,pc.y,rd[1]+'°',{fill:COLS[1],size:19});
 $('#peq2').innerHTML=`${colSpanP(rd[0],0)} + ${colSpanP(rd[2],2)} + ${colSpanP(rd[1],1)} = <b>180°</b>`;
},(i,p,pts)=>{const T=pts.map((q,j)=>j===i?p:q);return Math.min(...triAngles(...T))>=12?p:null});
function colSpanP(v,i){return`<span style="color:${COLS[i]}">${v}°</span>`}

/* ---------- exercises ---------- */
/* two horizontal parallels crossed by a transversal at angle th; colors[k]/labels[k] for the 8 angles */
function parFigure(svg,th,colors,labels){const y1=105,y2=245,M={x:300,y:175},k=(M.y-y1)/Math.sin(th*Math.PI/180),dx=Math.cos(th*Math.PI/180)*k;
 const P={x:M.x+dx,y:y1},Q={x:M.x-dx,y:y2};
 seg(svg,{x:30,y:y1},{x:570,y:y1},{w:4});seg(svg,{x:30,y:y2},{x:570,y:y2},{w:4});
 chevrons(svg,{x:30,y:y1},{x:190,y:y1},{x:1,y:0},1);chevrons(svg,{x:30,y:y2},{x:190,y:y2},{x:1,y:0},1);
 const[t1,t2]=lineInBox(P,Q,600,340,10);seg(svg,t1,t2,{w:4});
 const all=[...crossParts(0,th).map(x=>[P,...x]),...crossParts(0,th).map(x=>[Q,...x])];
 all.forEach(([V,s,e],i)=>{if(colors[i])arcWedge(svg,V,s,e,32,colors[i],{label:labels[i],size:18})});
 [P,Q].forEach(X=>el('circle',{cx:X.x,cy:X.y,r:5,fill:'#2b2d42'},svg))}
const randTh=()=>{let th;do{th=ri(35,145)}while(Math.abs(th-90)<12);return th};
const PAR_GEN={
 ppair(){const type=pick(['p_corr','p_alt','p_coint']),pr=pick(PAIRS[type]),th=randTh(),cols=Array(8).fill(null);pr.forEach(k=>cols[k]=COLS[2]);
  return{kind:'choice',choices:['p_corr','p_alt','p_coint'],answer:type,prompt:()=>t('pq_pair'),explain:()=>t('pe_'+type.slice(2)),
   draw(svg){parFigure(svg,th,cols,[])}}},
 pfind(){const th=randTh(),val=k=>k%2===0?th:180-th,gv=ri(0,7);let a;do{a=ri(0,7)}while(a===gv);
  const cols=Array(8).fill(null),labels=Array(8).fill(null);cols[gv]=COLS[1];cols[a]=COLS[0];labels[gv]=val(gv)+'°';labels[a]='?';
  const ans=val(a),same=val(a)===val(gv);
  return{kind:'num',unit:()=>'°',answer:ans,prompt:()=>t('pq_find'),hint:()=>t('ph_find'),
   explain:()=>same?fmt(t('pe_eq'),{ans}):fmt(t('pe_sup'),{a:val(gv),ans}),draw(svg){parFigure(svg,th,cols,labels)}}}
};
const exPar=ExerciseSet($('#exPar'),PAR_GEN,['mix','ppair','pfind']);

/* ---------- start ---------- */
startPage({boards:[pb1,pb2],exsets:[exPar]});

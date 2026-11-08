/* =====================================================================
   Topic: TRIANGLES
   Panels: 180° rule · sides vs angles (+ sticks) · types · area · exercises
   ===================================================================== */

/* ---------- words for this topic ---------- */
addStrings({
es:{
 topic_tri:"Triángulos",
 tab1:"Suma 180°",tab2:"Lados y ángulos",tab3:"Tipos",tab4:"Área",
 p1_title:"Los tres ángulos siempre suman 180°",
 p1_intro:"Arrastra los puntos A, B y C. El triángulo cambia… pero mira el semicírculo: los tres ángulos juntos siempre forman una línea recta (180°).",
 p1_try:"Reto: ¿puedes hacer un triángulo cuyos ángulos sumen más de 180°?",
 semi_lbl:"línea recta = 180°",btn_random:"Triángulo al azar",
 p2_title:"El lado más largo está frente al ángulo más grande",
 p2_intro:"Cada lado tiene el color del ángulo que está enfrente. Arrastra los puntos y fíjate: el ángulo más grande siempre mira al lado más largo.",
 p2_big:"Ángulo más grande: {v} ({deg}°) → lado más largo: {s} ({len})",
 p2_small:"Ángulo más pequeño: {v} ({deg}°) → lado más corto: {s} ({len})",
 sticks_title:"¿Con estos tres palitos se puede armar un triángulo?",
 sticks_intro:"Cambia el largo de cada palito. Los dos más cortos tienen que poder alcanzarse por encima del más largo.",
 stick:"Palito",
 st_ok:"{p} + {q} = {s}, mayor que {L} → ¡Sí se puede! ✓",
 st_flat:"{p} + {q} = {s}, igual a {L} → quedan acostados en una línea. No es triángulo ✗",
 st_no:"{p} + {q} = {s}, menor que {L} → no se alcanzan. No es triángulo ✗",
 p3_title:"Tipos de triángulos",
 p3_intro:"Arrastra los puntos (se pegan a la cuadrícula) o usa los botones. Las rayitas marcan lados iguales; el cuadradito marca un ángulo recto (90°).",
 by_angles:"Por sus ángulos",by_sides:"Por sus lados",
 acute:"Acutángulo",acute_d:"todos los ángulos miden menos de 90°",
 right:"Rectángulo",right_d:"tiene un ángulo de 90°",
 obtuse:"Obtusángulo",obtuse_d:"tiene un ángulo de más de 90°",
 equi:"Equilátero",equi_d:"los tres lados son iguales",
 iso:"Isósceles",iso_d:"dos lados son iguales",
 scal:"Escaleno",scal_d:"los tres lados son diferentes",
 p4_title:"Área: base × altura ÷ 2",
 p4_intro:"Cada cuadrito mide 1. El triángulo es justo la mitad del rectángulo que tiene la misma base y la misma altura.",
 p4_tip:"Prueba: mueve el punto C de lado a lado sin subirlo ni bajarlo. ¡El área no cambia!",
 ex_missing:"Ángulo que falta",ex_iso:"Isósceles",ex_type:"Tipo de triángulo",ex_sticks:"Palitos",ex_area:"Área",
 q_missing:"Encuentra el ángulo que falta (?).",
 q_iso_base:"Triángulo isósceles: los lados marcados son iguales, así que los dos ángulos de abajo también son iguales. El de arriba mide {apex}°. ¿Cuánto mide cada ángulo de abajo?",
 q_iso_apex:"Triángulo isósceles: cada ángulo de abajo mide {base}°. ¿Cuánto mide el ángulo de arriba?",
 q_type_ang:"¿Qué tipo de triángulo es, según sus ángulos?",
 q_type_side:"¿Qué tipo de triángulo es, según sus lados?",
 q_sticks:"¿Se puede armar un triángulo con palitos de {a}, {b} y {c}?",
 q_area:"¿Cuál es el área del triángulo? Cuenta los cuadritos de la base y de la altura.",
 hint_missing:"Pista: los tres ángulos suman 180°.",
 hint_iso:"Pista: a 180° réstale el ángulo de arriba y reparte lo que queda en dos.",
 hint_iso2:"Pista: a 180° réstale los dos ángulos de abajo.",
 hint_area:"Pista: base × altura ÷ 2.",
 e_missing:"180 − {a} − {b} = {c}°",
 e_iso_base:"(180 − {apex}) ÷ 2 = {base}°",
 e_iso_apex:"180 − {base} − {base} = {apex}°",
 e_right:"Tiene un ángulo de 90° → rectángulo.",
 e_obtuse:"Tiene un ángulo de {m}°, más de 90° → obtusángulo.",
 e_acute:"Todos sus ángulos miden menos de 90° → acutángulo.",
 e_equi:"Los tres lados miden {a} → equilátero.",
 e_iso:"Dos lados miden {a} → isósceles.",
 e_scal:"Los tres lados son diferentes → escaleno.",
 e_area:"{b} × {h} ÷ 2 = {ans} cuadritos"
},
en:{
 topic_tri:"Triangles",
 tab1:"180° rule",tab2:"Sides & angles",tab3:"Types",tab4:"Area",
 p1_title:"The three angles always add up to 180°",
 p1_intro:"Drag points A, B and C. The triangle changes… but look at the half-circle: the three angles together always make a straight line (180°).",
 p1_try:"Challenge: can you make a triangle whose angles add up to more than 180°?",
 semi_lbl:"straight line = 180°",btn_random:"Random triangle",
 p2_title:"The longest side is opposite the biggest angle",
 p2_intro:"Each side has the color of the angle facing it. Drag the points and notice: the biggest angle always faces the longest side.",
 p2_big:"Biggest angle: {v} ({deg}°) → longest side: {s} ({len})",
 p2_small:"Smallest angle: {v} ({deg}°) → shortest side: {s} ({len})",
 sticks_title:"Can these three sticks make a triangle?",
 sticks_intro:"Change the length of each stick. The two shorter sticks must be able to reach each other over the longest one.",
 stick:"Stick",
 st_ok:"{p} + {q} = {s}, bigger than {L} → Yes, it works! ✓",
 st_flat:"{p} + {q} = {s}, equal to {L} → they lie flat in a line. Not a triangle ✗",
 st_no:"{p} + {q} = {s}, smaller than {L} → they can't reach. Not a triangle ✗",
 p3_title:"Types of triangles",
 p3_intro:"Drag the points (they snap to the grid) or use the buttons. Little dashes mark equal sides; a small square marks a right angle (90°).",
 by_angles:"By its angles",by_sides:"By its sides",
 acute:"Acute",acute_d:"all angles are less than 90°",
 right:"Right",right_d:"it has a 90° angle",
 obtuse:"Obtuse",obtuse_d:"it has an angle bigger than 90°",
 equi:"Equilateral",equi_d:"all three sides are equal",
 iso:"Isosceles",iso_d:"two sides are equal",
 scal:"Scalene",scal_d:"all three sides are different",
 p4_title:"Area: base × height ÷ 2",
 p4_intro:"Each little square is 1. The triangle is exactly half of the rectangle with the same base and the same height.",
 p4_tip:"Try it: move point C left and right without moving it up or down. The area doesn't change!",
 ex_missing:"Missing angle",ex_iso:"Isosceles",ex_type:"Triangle type",ex_sticks:"Sticks",ex_area:"Area",
 q_missing:"Find the missing angle (?).",
 q_iso_base:"Isosceles triangle: the marked sides are equal, so the two bottom angles are equal too. The top angle is {apex}°. How big is each bottom angle?",
 q_iso_apex:"Isosceles triangle: each bottom angle is {base}°. How big is the top angle?",
 q_type_ang:"What type of triangle is this, by its angles?",
 q_type_side:"What type of triangle is this, by its sides?",
 q_sticks:"Can you make a triangle with sticks of {a}, {b} and {c}?",
 q_area:"What is the area of the triangle? Count the squares for the base and the height.",
 hint_missing:"Hint: the three angles add up to 180°.",
 hint_iso:"Hint: take the top angle away from 180°, then split what's left in two.",
 hint_iso2:"Hint: take both bottom angles away from 180°.",
 hint_area:"Hint: base × height ÷ 2.",
 e_missing:"180 − {a} − {b} = {c}°",
 e_iso_base:"(180 − {apex}) ÷ 2 = {base}°",
 e_iso_apex:"180 − {base} − {base} = {apex}°",
 e_right:"It has a 90° angle → right.",
 e_obtuse:"It has a {m}° angle, bigger than 90° → obtuse.",
 e_acute:"All its angles are less than 90° → acute.",
 e_equi:"All three sides are {a} → equilateral.",
 e_iso:"Two sides are {a} → isosceles.",
 e_scal:"All three sides are different → scalene.",
 e_area:"{b} × {h} ÷ 2 = {ans} squares"
}});

/* ---------- panel 1: the 180° rule ---------- */
function drawSemi(svg,ang,rd){svg.replaceChildren();const cx=160,cy=160,R=135;let start=180;
 ang.forEach((a,i)=>{const end=start-a,p1=polar(cx,cy,R,start),p2=polar(cx,cy,R,end);
  el('path',{d:`M${cx},${cy} L${p1.x},${p1.y} A${R},${R} 0 0 1 ${p2.x},${p2.y} Z`,fill:COLS[i],'fill-opacity':.88,stroke:'#fff','stroke-width':2},svg);
  if(a>=12){const m=polar(cx,cy,R*0.64,start-a/2);txt(svg,m.x,m.y,rd[i]+'°',{fill:'#fff',size:20,halo:false})}
  start=end});
 el('line',{x1:cx-R-12,y1:cy,x2:cx+R+12,y2:cy,stroke:'#2b2d42','stroke-width':4,'stroke-linecap':'round'},svg);
 el('circle',{cx,cy,r:5,fill:'#2b2d42'},svg);
 txt(svg,cx,cy+28,t('semi_lbl'),{size:17,fill:'#6b6f80'});
}
const b1=board($('#sv1'),[{x:140,y:330},{x:470,y:330},{x:250,y:100}],(g,P)=>{
 const {ang,rd}=drawTri(g,P);drawSemi($('#semi'),ang,rd);
 $('#eq1').innerHTML=rd.map((d,i)=>`<span style="color:${COLS[i]}">${d}°</span>`).join(' + ')+' = <b>180°</b>';
});
$('#rnd1').onclick=()=>b1.set(randomTri(600,420));

/* ---------- panel 2: sides vs angles ---------- */
const col=(s,i)=>`<b style="color:${COLS[i]}">${s}</b>`;
const b2=board($('#sv2'),[{x:110,y:340},{x:490,y:310},{x:200,y:100}],(g,P)=>{
 const ang=triAngles(...P),rd=round180(ang);
 const L=[0,1,2].map(i=>dist(P[(i+1)%3],P[(i+2)%3])/50);
 drawTri(g,P,{sideColors:true,sideTextColor:true,sideText:[0,1,2].map(i=>LET[i].toLowerCase()+' = '+num(L[i]))});
 const iMax=ang.indexOf(Math.max(...ang)),iMin=ang.indexOf(Math.min(...ang));
 $('#info2').innerHTML=
  `<p>${fmt(t('p2_big'),{v:col(LET[iMax],iMax),deg:rd[iMax],s:col(LET[iMax].toLowerCase(),iMax),len:num(L[iMax])})}</p>`+
  `<p>${fmt(t('p2_small'),{v:col(LET[iMin],iMin),deg:rd[iMin],s:col(LET[iMin].toLowerCase(),iMin),len:num(L[iMin])})}</p>`;
});
$('#rnd2').onclick=()=>b2.set(randomTri(600,420));

/* ---------- sticks (can three lengths make a triangle?) ---------- */
function stick(g,a,b,c){el('line',{x1:a.x,y1:a.y,x2:b.x,y2:b.y,stroke:c,'stroke-width':12,'stroke-linecap':'round'},g);
 el('line',{x1:a.x,y1:a.y,x2:b.x,y2:b.y,stroke:'#fff','stroke-opacity':.35,'stroke-width':3,'stroke-linecap':'round'},g)}
function drawSticks(g,lens,W,H){
 const idx=[0,1,2].sort((i,j)=>lens[j]-lens[i]),[Li,pi,qi]=idx,L=lens[Li],p=lens[pi],q=lens[qi];
 const status=p+q>L?'ok':(p+q===L?'flat':'no'),baseY=H-46;
 const lab=(a,b,v,i,ref)=>{const m={x:(a.x+b.x)/2,y:(a.y+b.y)/2};const d=ref?norm(sub(m,ref)):{x:0,y:1};txt(g,m.x+d.x*24,m.y+d.y*24,String(v),{fill:COLS[i],size:20})};
 if(status==='ok'){
  const x=(p*p-q*q+L*L)/(2*L),h=Math.sqrt(Math.max(0,p*p-x*x));
  const u=Math.min((W-120)/L,(H-100)/Math.max(h,0.01),45),x0=(W-L*u)/2;
  const A={x:x0,y:baseY},B={x:x0+L*u,y:baseY},C={x:x0+x*u,y:baseY-h*u},G=centroid([A,B,C]);
  el('polygon',{points:`${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y}`,fill:'#e3f5ea'},g);
  stick(g,A,B,COLS[Li]);stick(g,A,C,COLS[pi]);stick(g,B,C,COLS[qi]);
  lab(A,B,L,Li,G);lab(A,C,p,pi,G);lab(B,C,q,qi,G);
 }else{
  const u=Math.min((W-120)/L,45),x0=(W-L*u)/2,A={x:x0,y:baseY},B={x:x0+L*u,y:baseY};
  stick(g,A,B,COLS[Li]);lab(A,B,L,Li,null);
  if(status==='flat'){const y=baseY-18,M={x:A.x+p*u,y};
   stick(g,{x:A.x,y},M,COLS[pi]);stick(g,{x:B.x,y},{x:M.x+1,y},COLS[qi]);
   txt(g,(A.x+M.x)/2,y-22,String(p),{fill:COLS[pi],size:20});txt(g,(B.x+M.x)/2,y-22,String(q),{fill:COLS[qi],size:20});
  }else{const tl=28*Math.PI/180,P1={x:A.x+p*u*Math.cos(tl),y:baseY-p*u*Math.sin(tl)},Q1={x:B.x-q*u*Math.cos(tl),y:baseY-q*u*Math.sin(tl)};
   stick(g,A,P1,COLS[pi]);stick(g,B,Q1,COLS[qi]);
   el('line',{x1:P1.x,y1:P1.y,x2:Q1.x,y2:Q1.y,stroke:'#d64045','stroke-width':3,'stroke-dasharray':'6 6'},g);
   txt(g,(P1.x+Q1.x)/2,(P1.y+Q1.y)/2-20,'✗',{fill:'#d64045',size:26});
   const ref={x:W/2,y:baseY};lab(A,P1,p,pi,ref);lab(B,Q1,q,qi,ref);}
 }
 return{status,p,q,L,s:p+q};
}
const stickLens=[3,4,6];
function buildSliders(){const box=$('#sliders');box.replaceChildren();
 stickLens.forEach((v,i)=>{const d=document.createElement('label');d.className='sl';
  d.innerHTML=`<span style="color:${COLS[i]}">${t('stick')} ${i+1}: <b>${v}</b></span><input type="range" min="1" max="12" value="${v}" style="accent-color:${COLS[i]}">`;
  d.querySelector('input').oninput=e=>{stickLens[i]=+e.target.value;d.querySelector('b').textContent=e.target.value;drawStickPanel()};
  box.appendChild(d)})}
function drawStickPanel(){const svg=$('#svSticks');svg.replaceChildren();const r=drawSticks(svg,stickLens,600,300);
 const st=$('#stStatus');st.className='status '+(r.status==='ok'?'ok':'no');st.textContent=fmt(t('st_'+r.status),r)}

/* ---------- panel 3: types ---------- */
grid(el('g',{},$('#sv3')),0,0,30,21,20,'#f1ebe0');
const PRESETS={
 equi:[{x:180,y:340},{x:420,y:340},{x:300,y:340-207.85}],
 iso:[{x:200,y:340},{x:400,y:340},{x:300,y:100}],
 scal:[{x:140,y:340},{x:460,y:340},{x:220,y:140}],
 right:[{x:160,y:340},{x:440,y:340},{x:160,y:140}],
 obtuse:[{x:120,y:340},{x:340,y:340},{x:480,y:180}],
 acute:[{x:160,y:340},{x:440,y:340},{x:260,y:120}]};
const snap20=(i,p)=>({x:Math.round(p.x/20)*20,y:Math.round(p.y/20)*20});
const b3=board($('#sv3'),PRESETS.iso.map(p=>({...p})),(g,P)=>{
 const ang=triAngles(...P),rd=round180(ang),s=[0,1,2].map(i=>dist(P[(i+1)%3],P[(i+2)%3]));
 const eq=(a,b)=>Math.abs(a-b)/Math.max(a,b)<0.025;
 const e=[eq(s[1],s[2]),eq(s[0],s[2]),eq(s[0],s[1])];   // e[k]: the two sides other than k are equal
 let sideType='scal',tk=[];
 if(e[0]&&e[1]&&e[2]){sideType='equi';tk=[0,1,2].map(i=>[(i+1)%3,(i+2)%3,1])}
 else{const k=e.indexOf(true);if(k>=0){sideType='iso';tk=[0,1,2].filter(i=>i!==k).map(i=>[(i+1)%3,(i+2)%3,1])}}
 drawTri(g,P,{ticks:tk});
 const mx=Math.max(...rd),angType=mx===90?'right':(mx>90?'obtuse':'acute');
 $('#bAng').innerHTML=`<span class="lbl">${t('by_angles')}</span><b>${t(angType)}</b><span class="d">${t(angType+'_d')}</span>`;
 $('#bSide').innerHTML=`<span class="lbl">${t('by_sides')}</span><b>${t(sideType)}</b><span class="d">${t(sideType+'_d')}</span>`;
},snap20);
document.querySelectorAll('[data-preset]').forEach(b=>b.onclick=()=>b3.set(PRESETS[b.dataset.preset]));

/* ---------- panel 4: area ---------- */
(function(){const g=el('g',{},$('#sv4'));grid(g,0,0,15,10,40);el('line',{x1:0,y1:320,x2:600,y2:320,stroke:'#cfc6b6','stroke-width':2},g)})();
const b4=board($('#sv4'),[{x:120,y:320},{x:360,y:320},{x:200,y:160}],(g,P)=>{
 const [A,B,C]=P,xl=Math.min(A.x,B.x),xr=Math.max(A.x,B.x),b=(xr-xl)/40,h=(320-C.y)/40;
 el('rect',{x:xl,y:C.y,width:xr-xl,height:320-C.y,fill:COLS[2],'fill-opacity':.13,stroke:COLS[2],'stroke-width':2,'stroke-dasharray':'6 6'},g);
 if(C.x<xl||C.x>xr){const from=C.x<xl?xl:xr;el('line',{x1:from,y1:320,x2:C.x,y2:320,stroke:'#6b6f80','stroke-width':2,'stroke-dasharray':'5 5'},g)}
 drawTri(g,P,{wedges:false,fill:'rgba(46,134,222,.28)'});
 el('line',{x1:C.x,y1:C.y,x2:C.x,y2:320,stroke:'#2b2d42','stroke-width':2.5,'stroke-dasharray':'7 6'},g);
 const sg=C.x<(xl+xr)/2?1:-1;el('path',{d:`M${C.x},308 L${C.x+12*sg},308 L${C.x+12*sg},320`,fill:'none',stroke:'#2b2d42','stroke-width':2},g);
 txt(g,(xl+xr)/2,350,`${t('base')} = ${b}`,{size:19});
 const rt=C.x<430;txt(g,C.x+(rt?14:-14),(C.y+320)/2,`${t('height')} = ${h}`,{size:19,anchor:rt?'start':'end'});
 const ar=b*h/2;
 $('#eq4').innerHTML=`${t('area')} = ${t('base')} × ${t('height')} ÷ 2<br>= ${b} × ${h} ÷ 2<br>= <span style="color:${COLS[1]}">${num(ar).replace(/[.,]0$/,'')} ${t('squares')}</span>`;
},(i,p)=>{const x=clamp(Math.round(p.x/40)*40,40,560);if(i<2)return{x,y:320};return{x,y:clamp(Math.round(p.y/40)*40,40,280)}});

/* ---------- exercises ---------- */
const TRI_GEN={
 missing(){let a,b,c;do{a=ri(25,110);b=ri(25,130);c=180-a-b}while(c<20);
  return{kind:'num',unit:()=>'°',answer:c,prompt:()=>t('q_missing'),hint:()=>t('hint_missing'),explain:()=>fmt(t('e_missing'),{a,b,c}),
   draw(svg){drawTri(svg,fit(triFromAngles(a,b),600,340,60),{labels:[a+'°',b+'°','?'],square:false})}}},
 iso(){const apex=2*ri(10,70),base=(180-apex)/2,mode=Math.random()<.6?'base':'apex';
  return{kind:'num',unit:()=>'°',answer:mode==='base'?base:apex,
   prompt:()=>fmt(t(mode==='base'?'q_iso_base':'q_iso_apex'),{apex,base}),
   hint:()=>t(mode==='base'?'hint_iso':'hint_iso2'),
   explain:()=>fmt(t(mode==='base'?'e_iso_base':'e_iso_apex'),{apex,base}),
   draw(svg){drawTri(svg,fit(triFromAngles(base,base),600,340,60),{labels:mode==='base'?['?','?',apex+'°']:[base+'°',base+'°','?'],square:false,ticks:[[0,2,1],[1,2,1]]})}}},
 type(){
  if(Math.random()<.5){const k=pick(['acute','right','obtuse']);let A;
   if(k==='right'){const x=ri(25,65);A=[90,x,90-x]}
   else if(k==='obtuse'){const m=ri(100,140),x=ri(15,165-m);A=[m,x,180-m-x]}
   else{let x,y,z;do{x=ri(40,85);y=ri(40,85);z=180-x-y}while(z<40||z>85);A=[x,y,z]}
   shuffle(A);const m=Math.max(...A);
   return{kind:'choice',choices:['acute','right','obtuse'],answer:k,prompt:()=>t('q_type_ang'),
    explain:()=>fmt(t('e_'+k),{m}),draw(svg){drawTri(svg,fit(triFromAngles(A[0],A[1]),600,340,60),{labels:A.map(v=>v+'°'),square:false})}}}
  const k=pick(['equi','iso','scal']);let s,n;
  if(k==='equi'){n=ri(3,9);s=[n,n,n]}
  else if(k==='iso'){n=ri(3,9);let m;do{m=ri(2,2*n-2)}while(m===n);s=[n,n,m]}
  else{do{s=[ri(3,11),ri(3,11),ri(3,11)].sort((x,y)=>x-y)}while(s[0]===s[1]||s[1]===s[2]||s[0]+s[1]-s[2]<2);s=shuffle(s.slice(0,2)).concat(s[2])}
  return{kind:'choice',choices:['equi','iso','scal'],answer:k,prompt:()=>t('q_type_side'),
   explain:()=>fmt(t('e_'+k),{a:n}),draw(svg){drawTri(svg,fit(triFromSides(s[0],s[1],s[2]),600,340,60),{wedges:false,letters:false,sideText:s.map(String)})}}},
 sticks(){let a,b,c;const ok=Math.random()<.5;
  if(ok){do{a=ri(2,10);b=ri(2,10);c=ri(Math.abs(a-b)+1,a+b-1)}while(c>12)}else{a=ri(1,6);b=ri(1,6);c=a+b+ri(0,3)}
  const lens=shuffle([a,b,c]),so=[...lens].sort((x,y)=>x-y),st=so[0]+so[1]>so[2]?'ok':(so[0]+so[1]===so[2]?'flat':'no');
  return{kind:'choice',choices:['yes','no'],answer:st==='ok'?'yes':'no',
   prompt:()=>fmt(t('q_sticks'),{a:lens[0],b:lens[1],c:lens[2]}),
   explain:()=>fmt(t('st_'+st),{p:so[1],q:so[0],s:so[0]+so[1],L:so[2]}),
   draw(svg){const u=Math.min(40,460/so[2]);lens.forEach((v,i)=>{const y=80+i*90;stick(svg,{x:70,y},{x:70+v*u,y},COLS[i]);txt(svg,70+v*u+28,y,String(v),{fill:COLS[i],size:22})})},
   after(svg){svg.replaceChildren();drawSticks(svg,lens,600,340)}}},
 area(){let b=ri(2,9),h=ri(2,6);if((b*h)%2)h++;const f=ri(-1,b+1),ans=b*h/2;
  return{kind:'num',unit:()=>' '+t('squares'),answer:ans,prompt:()=>t('q_area'),hint:()=>t('hint_area'),explain:()=>fmt(t('e_area'),{b,h,ans}),
   draw(svg){const mn=Math.min(0,f),mx=Math.max(b,f),cols=mx-mn+2,rows=h+2,u=Math.min(40,560/cols,320/rows),x0=(600-cols*u)/2,y0=(340-rows*u)/2;
    grid(svg,x0,y0,cols,rows,u,'#e6decf');const by=y0+(h+1)*u,ax=x0+(1-mn)*u;
    const P=[{x:ax,y:by},{x:ax+b*u,y:by},{x:ax+f*u,y:by-h*u}];
    if(f<0||f>b){const from=f<0?ax:ax+b*u;el('line',{x1:from,y1:by,x2:P[2].x,y2:by,stroke:'#6b6f80','stroke-width':2,'stroke-dasharray':'5 5'},svg)}
    drawTri(svg,P,{wedges:false,letters:false,fill:'rgba(46,134,222,.28)'});
    el('line',{x1:P[2].x,y1:P[2].y,x2:P[2].x,y2:by,stroke:'#2b2d42','stroke-width':2.5,'stroke-dasharray':'7 6'},svg)}}}
};
const exTri=ExerciseSet($('#exTri'),TRI_GEN,['mix','missing','iso','type','sticks','area']);

/* ---------- start ---------- */
startPage({boards:[b1,b2,b3,b4],exsets:[exTri],onLang(){buildSliders();drawStickPanel()}});

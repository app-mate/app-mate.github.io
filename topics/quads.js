/* =====================================================================
   Topic: QUADRILATERALS
   Panels: 360° rule · types · parallelogram area · exercises
   (quadInfo, drawQuad, convexOK, convexMove live in js/core.js)
   ===================================================================== */

/* ---------- words for this topic ---------- */
addStrings({
es:{
 topic_quad:"Cuadriláteros",
 qtab1:"Suma 360°",qtab2:"Tipos",qtab3:"Área",
 q1_title:"Los cuatro ángulos siempre suman 360°",
 q1_intro:"Arrastra los puntos A, B, C y D. Mira el círculo: los cuatro ángulos juntos siempre dan una vuelta completa (360°).",
 q1_diag:"¿Por qué? La línea punteada parte el cuadrilátero en 2 triángulos, y cada triángulo suma 180°: 180° + 180° = 360°.",
 circle_lbl:"vuelta completa = 360°",
 q2_title:"Tipos de cuadriláteros",
 q2_intro:"Arrastra los puntos (se pegan a la cuadrícula) o usa los botones. Rayitas = lados iguales; flechitas = lados paralelos (nunca se cruzan); cuadradito = ángulo recto.",
 q_par:"Pares de lados paralelos: {n}",q_rights:"Ángulos rectos: {n}",q_eqsides:"Lados iguales: {n}",
 q_eq_all:"los 4",q_eq_2pairs:"2 pares",q_eq_1pair:"1 par",q_eq_none:"ninguno",
 q_square:"Cuadrado",q_square_d:"4 lados iguales y 4 ángulos rectos. ¡También es un rectángulo y un rombo!",
 q_rect:"Rectángulo",q_rect_d:"4 ángulos rectos; los lados opuestos son iguales y paralelos.",
 q_rhombus:"Rombo",q_rhombus_d:"4 lados iguales; los lados opuestos son paralelos.",
 q_para:"Paralelogramo",q_para_d:"2 pares de lados paralelos; los lados opuestos son iguales.",
 q_trap:"Trapecio",q_trap_d:"Solo 1 par de lados paralelos.",
 q_kite:"Cometa",q_kite_d:"2 pares de lados iguales que están uno junto al otro.",
 q_quad:"Cuadrilátero",q_quad_d:"4 lados, sin nombre especial.",
 q3_title:"Área: base × altura",
 q3_intro:"En un rectángulo, el área es base × altura. Un paralelogramo es un rectángulo “empujado” de lado: tiene la misma área.",
 q3_tip:"Prueba: mueve el punto D hacia los lados. La figura se inclina pero el área no cambia: el triangulito que sobra de un lado es el mismo que falta del otro.",
 ex_qmissing:"Ángulo que falta",ex_qtype:"Tipo",ex_qarea:"Área",ex_qperim:"Perímetro",
 qq_missing:"Encuentra el ángulo que falta (?). Recuerda: en un cuadrilátero los ángulos suman 360°.",
 qq_type:"¿Qué tipo de cuadrilátero es? Fíjate en las marcas.",
 qq_area:"¿Cuál es el área? Cuenta los cuadritos de la base y de la altura.",
 qq_perim:"¿Cuál es el perímetro del rectángulo (la vuelta completa por el borde)?",
 qh_missing:"Pista: a 360° réstale los otros tres ángulos.",
 qh_area:"Pista: base × altura (¡aquí no se divide entre 2!).",
 qh_perim:"Pista: suma los cuatro lados.",
 qe_missing:"360 − {a} − {b} − {c} = {d}°",
 qe_area:"{b} × {h} = {ans} cuadritos",
 qe_perim:"{w} + {h} + {w} + {h} = {ans}"
},
en:{
 topic_quad:"Quadrilaterals",
 qtab1:"360° rule",qtab2:"Types",qtab3:"Area",
 q1_title:"The four angles always add up to 360°",
 q1_intro:"Drag points A, B, C and D. Look at the circle: the four angles together always make a full turn (360°).",
 q1_diag:"Why? The dotted line cuts the quadrilateral into 2 triangles, and each triangle adds up to 180°: 180° + 180° = 360°.",
 circle_lbl:"full turn = 360°",
 q2_title:"Types of quadrilaterals",
 q2_intro:"Drag the points (they snap to the grid) or use the buttons. Dashes = equal sides; little arrows = parallel sides (they never meet); small square = right angle.",
 q_par:"Pairs of parallel sides: {n}",q_rights:"Right angles: {n}",q_eqsides:"Equal sides: {n}",
 q_eq_all:"all 4",q_eq_2pairs:"2 pairs",q_eq_1pair:"1 pair",q_eq_none:"none",
 q_square:"Square",q_square_d:"4 equal sides and 4 right angles. It's also a rectangle and a rhombus!",
 q_rect:"Rectangle",q_rect_d:"4 right angles; opposite sides are equal and parallel.",
 q_rhombus:"Rhombus",q_rhombus_d:"4 equal sides; opposite sides are parallel.",
 q_para:"Parallelogram",q_para_d:"2 pairs of parallel sides; opposite sides are equal.",
 q_trap:"Trapezoid",q_trap_d:"Only 1 pair of parallel sides.",
 q_kite:"Kite",q_kite_d:"2 pairs of equal sides that sit next to each other.",
 q_quad:"Quadrilateral",q_quad_d:"4 sides, no special name.",
 q3_title:"Area: base × height",
 q3_intro:"For a rectangle, the area is base × height. A parallelogram is a rectangle “pushed” sideways: it has the same area.",
 q3_tip:"Try it: move point D left and right. The shape leans over but the area doesn't change: the little triangle sticking out on one side is the same one missing on the other.",
 ex_qmissing:"Missing angle",ex_qtype:"Type",ex_qarea:"Area",ex_qperim:"Perimeter",
 qq_missing:"Find the missing angle (?). Remember: in a quadrilateral the angles add up to 360°.",
 qq_type:"What type of quadrilateral is this? Look at the marks.",
 qq_area:"What is the area? Count the squares for the base and the height.",
 qq_perim:"What is the perimeter of the rectangle (all the way around the edge)?",
 qh_missing:"Hint: take the other three angles away from 360°.",
 qh_area:"Hint: base × height (no dividing by 2 here!).",
 qh_perim:"Hint: add up all four sides.",
 qe_missing:"360 − {a} − {b} − {c} = {d}°",
 qe_area:"{b} × {h} = {ans} squares",
 qe_perim:"{w} + {h} + {w} + {h} = {ans}"
}});

/* ---------- panel 1: the 360° rule ---------- */
function drawCircle360(svg,ang,rd){svg.replaceChildren();const cx=160,cy=108,R=96;let start=90;
 ang.forEach((a,i)=>{const end=start-a,p1=polar(cx,cy,R,start),p2=polar(cx,cy,R,end);
  el('path',{d:`M${cx},${cy} L${p1.x},${p1.y} A${R},${R} 0 ${a>180?1:0} 1 ${p2.x},${p2.y} Z`,fill:COLS[i],'fill-opacity':.88,stroke:'#fff','stroke-width':2},svg);
  if(a>=14){const m=polar(cx,cy,R*0.62,start-a/2);txt(svg,m.x,m.y,rd[i]+'°',{fill:'#fff',size:19,halo:false})}
  start=end});
 el('circle',{cx,cy,r:5,fill:'#2b2d42'},svg);
 txt(svg,cx,cy+R+22,t('circle_lbl'),{size:17,fill:'#6b6f80'});
}
const qb1=board($('#qsv1'),[{x:120,y:330},{x:470,y:350},{x:430,y:110},{x:180,y:140}],(g,P)=>{
 const I=drawQuad(g,P,{diag:true});drawCircle360($('#circ'),I.ang,I.rd);
 $('#qeq1').innerHTML=I.rd.map((d,i)=>`<span style="color:${COLS[i]}">${d}°</span>`).join(' + ')+' = <b>360°</b>';
},convexMove(0));

/* ---------- panel 2: types ---------- */
grid(el('g',{},$('#qsv2')),0,0,30,21,20,'#f1ebe0');
const QPRESETS={
 square:[{x:200,y:320},{x:360,y:320},{x:360,y:160},{x:200,y:160}],
 rect:[{x:140,y:320},{x:460,y:320},{x:460,y:180},{x:140,y:180}],
 rhombus:[{x:160,y:320},{x:310,y:320},{x:400,y:200},{x:250,y:200}],
 para:[{x:120,y:320},{x:380,y:320},{x:460,y:180},{x:200,y:180}],
 trap:[{x:120,y:320},{x:480,y:320},{x:380,y:160},{x:220,y:160}],
 kite:[{x:300,y:340},{x:400,y:220},{x:300,y:80},{x:200,y:220}]};
const qb2=board($('#qsv2'),QPRESETS.trap.map(p=>({...p})),(g,P)=>{
 const I=drawQuad(g,P,{marks:true});
 $('#qBadge').innerHTML=`<b>${t('q_'+I.type)}</b><span class="d">${t('q_'+I.type+'_d')}</span>`;
 $('#qProps').innerHTML=`<li>${fmt(t('q_par'),{n:I.parCount})}</li><li>${fmt(t('q_rights'),{n:I.rights})}</li><li>${fmt(t('q_eqsides'),{n:t(I.eqDesc)})}</li>`;
},convexMove(20));
document.querySelectorAll('[data-qpreset]').forEach(b=>b.onclick=()=>qb2.set(QPRESETS[b.dataset.qpreset]));

/* ---------- panel 3: parallelogram area (A, B on the floor; D free; C follows D) ---------- */
(function(){const g=el('g',{},$('#qsv3'));grid(g,0,0,15,10,40);el('line',{x1:0,y1:320,x2:600,y2:320,stroke:'#cfc6b6','stroke-width':2},g)})();
const qb3=board($('#qsv3'),[{x:80,y:320},{x:320,y:320},{x:200,y:160}],(g,H)=>{
 const [A,B,D]=H,C={x:D.x+(B.x-A.x),y:D.y},P=[A,B,C,D],b=(B.x-A.x)/40,h=(320-D.y)/40;
 el('rect',{x:A.x,y:D.y,width:B.x-A.x,height:320-D.y,fill:COLS[3],'fill-opacity':.1,stroke:COLS[3],'stroke-width':2,'stroke-dasharray':'6 6'},g);
 if(D.x<A.x)el('line',{x1:D.x,y1:320,x2:A.x,y2:320,stroke:'#6b6f80','stroke-width':2,'stroke-dasharray':'5 5'},g);
 drawQuad(g,P,{wedges:false,fill:'rgba(46,134,222,.28)'});
 if(D.x!==A.x){el('line',{x1:D.x,y1:D.y,x2:D.x,y2:320,stroke:'#2b2d42','stroke-width':2.5,'stroke-dasharray':'7 6'},g);
  el('path',{d:`M${D.x},308 L${D.x+12},308 L${D.x+12},320`,fill:'none',stroke:'#2b2d42','stroke-width':2},g)}
 el('circle',{cx:C.x,cy:C.y,r:6,fill:COLS[2]},g);
 txt(g,(A.x+B.x)/2,350,`${t('base')} = ${b}`,{size:19});
 const lft=D.x>=200;txt(g,D.x+(lft?-14:14),(D.y+320)/2,`${t('height')} = ${h}`,{size:19,anchor:lft?'end':'start'});
 $('#qeq3').innerHTML=`${t('area')} = ${t('base')} × ${t('height')}<br>= ${b} × ${h}<br>= <span style="color:${COLS[1]}">${b*h} ${t('squares')}</span>`;
},(i,p,pts)=>{const x=clamp(Math.round(p.x/40)*40,40,560);
 const T=pts.map(q=>({...q}));T[i]=i<2?{x,y:320}:{x,y:clamp(Math.round(p.y/40)*40,40,280)};
 const w=T[1].x-T[0].x;if(w<80)return null;if(T[2].x+w>560)return null;return T[i]},
 [COLS[0],COLS[1],COLS[3]]);

/* ---------- exercises ---------- */
function randQuad(){for(let k=0;k<2000;k++){
  const P=fit([0,1,2,3].map(i=>{const th=(225+i*90+ri(-22,22))*Math.PI/180,r=rf(.7,1);return{x:r*Math.cos(th),y:-r*Math.sin(th)}}),600,340,60);
  if(!convexOK(P))continue;const I=quadInfo(P);if(Math.min(...I.ang)>=55&&Math.max(...I.ang)<=140)return P}}
const QUAD_SHAPES={
 square:()=>[{x:0,y:0},{x:1,y:0},{x:1,y:-1},{x:0,y:-1}],
 rect:()=>{const w=rf(1.5,2.2);return[{x:0,y:0},{x:w,y:0},{x:w,y:-1},{x:0,y:-1}]},
 rhombus:()=>{const a=rf(55,72)*Math.PI/180,c=Math.cos(a),s=Math.sin(a);return[{x:0,y:0},{x:1,y:0},{x:1+c,y:-s},{x:c,y:-s}]},
 para:()=>{const w=rf(1.6,2.1),a=rf(55,70)*Math.PI/180,c=Math.cos(a),s=Math.sin(a);return[{x:0,y:0},{x:w,y:0},{x:w+c,y:-s},{x:c,y:-s}]},
 trap:()=>{const top=rf(.8,1.3),off=rf(.2,2-top-.2),h=rf(.9,1.2);return[{x:0,y:0},{x:2,y:0},{x:off+top,y:-h},{x:off,y:-h}]},
 kite:()=>{const h1=rf(1.2,1.6),h2=rf(.5,.8),w=rf(.6,.9);return[{x:0,y:h2},{x:w,y:0},{x:0,y:-h1},{x:-w,y:0}]}};
const QUAD_GEN={
 qmissing(){const P=randQuad(),I=quadInfo(P),hid=ri(0,3),d=I.rd[hid],o=I.rd.filter((v,i)=>i!==hid);
  return{kind:'num',unit:()=>'°',answer:d,prompt:()=>t('qq_missing'),hint:()=>t('qh_missing'),
   explain:()=>fmt(t('qe_missing'),{a:o[0],b:o[1],c:o[2],d}),
   draw(svg){drawQuad(svg,P,{square:false,labels:I.rd.map((v,i)=>i===hid?'?':v+'°')})}}},
 qtype(){const k=pick(Object.keys(QUAD_SHAPES)),P=fit(QUAD_SHAPES[k](),600,340,60),ans='q_'+quadInfo(P).type;
  return{kind:'choice',choices:['q_square','q_rect','q_rhombus','q_para','q_trap','q_kite'],answer:ans,prompt:()=>t('qq_type'),
   explain:()=>`${t(ans)}: ${t(ans+'_d')}`,draw(svg){drawQuad(svg,P,{wedges:false,letters:false,marks:true})}}},
 qarea(){const b=ri(2,8),h=ri(2,5),o=pick([0,0,1,2,3]),ans=b*h;
  return{kind:'num',unit:()=>' '+t('squares'),answer:ans,prompt:()=>t('qq_area'),hint:()=>t('qh_area'),explain:()=>fmt(t('qe_area'),{b,h,ans}),
   draw(svg){const cols=b+o+2,rows=h+2,u=Math.min(40,560/cols,320/rows),x0=(600-cols*u)/2,y0=(340-rows*u)/2;
    grid(svg,x0,y0,cols,rows,u,'#e6decf');const A={x:x0+u,y:y0+(h+1)*u},B={x:A.x+b*u,y:A.y},D={x:A.x+o*u,y:A.y-h*u},C={x:D.x+b*u,y:D.y};
    drawQuad(svg,[A,B,C,D],{wedges:false,letters:false,fill:'rgba(46,134,222,.28)'});
    if(o)el('line',{x1:D.x,y1:D.y,x2:D.x,y2:A.y,stroke:'#2b2d42','stroke-width':2.5,'stroke-dasharray':'7 6'},svg)}}},
 qperim(){const w=ri(2,12),h=ri(2,9),ans=2*(w+h);
  return{kind:'num',answer:ans,prompt:()=>t('qq_perim'),hint:()=>t('qh_perim'),explain:()=>fmt(t('qe_perim'),{w,h,ans}),
   draw(svg){drawQuad(svg,fit([{x:0,y:0},{x:w,y:0},{x:w,y:-h},{x:0,y:-h}],600,340,70),{wedges:false,letters:false,sideText:[w,h,w,h].map(String)})}}}
};
const exQuad=ExerciseSet($('#exQuad'),QUAD_GEN,['mix','qmissing','qtype','qarea','qperim']);

/* ---------- start ---------- */
startPage({boards:[qb1,qb2,qb3],exsets:[exQuad]});

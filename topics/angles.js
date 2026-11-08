/* =====================================================================
   Topic 2: ANGLES
   Panels: an angle is a turn (types) · reading a protractor · exercises
   ===================================================================== */

/* ---------- words for this topic ---------- */
addStrings({
es:{
 topic_angles:"Ángulos",
 atab1:"¿Qué es un ángulo?",atab2:"Transportador",
 a1_title:"Un ángulo es un giro",
 a1_intro:"Un ángulo se forma cuando dos rayos salen del mismo punto, el vértice. Arrastra el punto rojo: mientras más gira el rayo, más grande es el ángulo. Se mide en grados (°).",
 a1_try:"Reto: haz un ángulo recto, uno llano y uno cóncavo. ¿Puedes dar la vuelta completa?",
 a_vertex:"vértice",
 a_zero:"Nulo",a_zero_d:"0°: los dos rayos están uno encima del otro.",
 a_acute:"Agudo",a_acute_d:"Más cerrado que una esquina.",a_acute_r:"menos de 90°",
 a_right:"Recto",a_right_d:"Como la esquina de una hoja. Se marca con un cuadradito.",a_right_r:"90°",
 a_obtuse:"Obtuso",a_obtuse_d:"Más abierto que una esquina, pero menos que una línea recta.",a_obtuse_r:"entre 90° y 180°",
 a_straight:"Llano",a_straight_d:"Los dos rayos forman una línea recta: media vuelta.",a_straight_r:"180°",
 a_reflex:"Cóncavo",a_reflex_d:"¡Más de media vuelta!",a_reflex_r:"entre 180° y 360°",
 a_full:"Completo",a_full_d:"Una vuelta entera.",a_full_r:"360°",
 a2_title:"Medir con el transportador",
 a2_intro:"El transportador es una regla para ángulos. Mueve el rayo rojo y lee el número en el borde. Usa “Ocultar medida” para practicar leyendo tú mismo.",
 a2_tip:"El centro del transportador va en el vértice y el 0 va sobre el rayo acostado. Luego lee el número por donde pasa el otro rayo.",
 a_show:"Mostrar medida",a_hide:"Ocultar medida",a_random:"Ángulo al azar",
 ex_atype:"Tipo de ángulo",ex_ameasure:"Medir",ex_afact:"Grados",
 aq_type:"¿Qué tipo de ángulo es?",
 aq_measure:"Usa el transportador: ¿cuánto mide el ángulo?",
 aq_fact:"¿Cuántos grados tiene {name}?",
 ah_measure:"Pista: empieza en el 0, sobre el rayo acostado, y sigue el borde hasta el rayo rojo.",
 ae_measure:"El rayo rojo pasa por el {n} del transportador → {n}°.",
 af_right:"un ángulo recto",af_straight:"un ángulo llano",af_full:"una vuelta completa",
 af_quarter:"un cuarto de vuelta",af_half:"media vuelta",af_3q:"tres cuartos de vuelta",
 ah_fact:"Pista: una vuelta completa tiene 360°.",
 ae_fact:"{name} = {v}°"
},
en:{
 topic_angles:"Angles",
 atab1:"What is an angle?",atab2:"Protractor",
 a1_title:"An angle is a turn",
 a1_intro:"An angle is made when two rays start from the same point, the vertex. Drag the red point: the more the ray turns, the bigger the angle. Angles are measured in degrees (°).",
 a1_try:"Challenge: make a right angle, a straight angle and a reflex angle. Can you go all the way around?",
 a_vertex:"vertex",
 a_zero:"Zero",a_zero_d:"0°: the two rays lie on top of each other.",
 a_acute:"Acute",a_acute_d:"Narrower than a corner.",a_acute_r:"less than 90°",
 a_right:"Right",a_right_d:"Like the corner of a sheet of paper. Marked with a small square.",a_right_r:"90°",
 a_obtuse:"Obtuse",a_obtuse_d:"Wider than a corner, but less than a straight line.",a_obtuse_r:"between 90° and 180°",
 a_straight:"Straight",a_straight_d:"The two rays make a straight line: half a turn.",a_straight_r:"180°",
 a_reflex:"Reflex",a_reflex_d:"More than half a turn!",a_reflex_r:"between 180° and 360°",
 a_full:"Full turn",a_full_d:"One whole turn.",a_full_r:"360°",
 a2_title:"Measuring with a protractor",
 a2_intro:"A protractor is a ruler for angles. Move the red ray and read the number on the edge. Use “Hide value” to practise reading it yourself.",
 a2_tip:"Put the centre of the protractor on the vertex and the 0 on the flat ray. Then read the number where the other ray crosses the edge.",
 a_show:"Show value",a_hide:"Hide value",a_random:"Random angle",
 ex_atype:"Angle type",ex_ameasure:"Measure",ex_afact:"Degrees",
 aq_type:"What type of angle is this?",
 aq_measure:"Use the protractor: how big is the angle?",
 aq_fact:"How many degrees are in {name}?",
 ah_measure:"Hint: start at 0, on the flat ray, and follow the edge to the red ray.",
 ae_measure:"The red ray crosses the {n} on the protractor → {n}°.",
 af_right:"a right angle",af_straight:"a straight angle",af_full:"a full turn",
 af_quarter:"a quarter turn",af_half:"half a turn",af_3q:"three quarters of a turn",
 ah_fact:"Hint: a full turn is 360°.",
 ae_fact:"{name} = {v}°"
}});

const angleType=d=>d===0?'a_zero':d<90?'a_acute':d===90?'a_right':d<180?'a_obtuse':d===180?'a_straight':d<360?'a_reflex':'a_full';
const ANGLE_TYPES=['a_acute','a_right','a_obtuse','a_straight','a_reflex','a_full'];
const cap=s=>s.charAt(0).toUpperCase()+s.slice(1);
/* draw an angle: arms from O at directions a0 and a0+d; right angles get the little square */
function drawAngle(g,O,a0,d,armLen,r,o={}){
 if(d===90)rightMark(g,O,a0,r*0.55,COLS[2]);else arcWedge(g,O,a0,a0+d,r,COLS[2],{label:o.label,full:d===360,size:o.size});
 seg(g,O,polar(O.x,O.y,armLen,a0),{w:5});if(d!==360)seg(g,O,polar(O.x,O.y,armLen,a0+d),{w:5,color:COLS[0]});
 el('circle',{cx:O.x,cy:O.y,r:6,fill:'#2b2d42'},g)}

/* ---------- panel 1: an angle is a turn ---------- */
const AO={x:300,y:220},AR=165;let aDeg=60;
const magnet=d=>{for(const m of[90,180,270])if(Math.abs(d-m)<=3)return m;return d};
const ab1=board($('#asv1'),[polar(AO.x,AO.y,AR,aDeg)],(g)=>{
 drawAngle(g,AO,0,aDeg,AR+35,58,{label:aDeg>0?aDeg+'°':null,size:22});
 txt(g,AO.x-34,AO.y+24,t('a_vertex'),{size:15,fill:'#6b6f80'});
 const ty=angleType(aDeg);
 $('#aBadge').innerHTML=`<div class="big" style="text-align:left">${aDeg}°</div><b>${t(ty)}</b><span class="d">${t(ty+'_d')}</span>`;
 $('#aScale').innerHTML=ANGLE_TYPES.map(k=>`<li class="${k===ty?'on':''}"><b>${t(k)}</b> · ${t(k+'_r')}</li>`).join('');
},(i,p)=>{
 const raw=magnet(Math.round(dirDeg(AO,p))%360);let nv;
 if(aDeg>=300&&raw<60)nv=360;            // finished a full turn
 else if(aDeg<=60&&raw>300)nv=0;         // went back past zero
 else if(Math.abs(raw-aDeg)>120)return null;
 else nv=raw;
 aDeg=nv;return polar(AO.x,AO.y,AR,nv%360);
},[COLS[0]]);

/* ---------- panel 2: protractor ---------- */
function drawProtractor(g,O,R){
 el('path',{d:`M${O.x-R},${O.y} A${R},${R} 0 0 1 ${O.x+R},${O.y} Z`,fill:'rgba(46,134,222,.08)',stroke:'#2e86de','stroke-width':2},g);
 for(let d=0;d<=180;d++){const L=d%10===0?16:d%5===0?11:6,p1=polar(O.x,O.y,R,d),p2=polar(O.x,O.y,R-L,d);
  el('line',{x1:p1.x,y1:p1.y,x2:p2.x,y2:p2.y,stroke:'#2e86de','stroke-width':d%10===0?2:1},g);
  if(d%10===0){const q=polar(O.x,O.y,R-30,d);txt(g,q.x,q.y,String(d),{size:13,fill:'#2e86de'})}}
 el('path',{d:`M${O.x-26},${O.y} A26,26 0 0 1 ${O.x+26},${O.y}`,fill:'none',stroke:'#2e86de','stroke-width':1.5},g)}
const PO={x:300,y:310},PR=230;let pDeg=50,pShow=true;
function pShowUpdate(){$('#pVal').textContent=pShow?pDeg+'°':'?';$('#pShowBtn').textContent=t(pShow?'a_hide':'a_show')}
const PH=PR+22;   // the drag handle sits just outside the protractor so it never hides the numbers
const ab2=board($('#asv2'),[polar(PO.x,PO.y,PH,pDeg)],(g)=>{
 if(pDeg>0)arcWedge(g,PO,0,pDeg,44,COLS[2]);
 seg(g,PO,polar(PO.x,PO.y,PR+40,0),{w:4});seg(g,PO,polar(PO.x,PO.y,PR+40,pDeg),{w:4,color:COLS[0]});
 drawProtractor(g,PO,PR);   // drawn on top of the rays so every number stays readable
 el('circle',{cx:PO.x,cy:PO.y,r:5,fill:'#2b2d42'},g);pShowUpdate();
},(i,p)=>{let d=Math.round(dirDeg(PO,p))%360;if(d>270)d=0;else if(d>180)d=180;pDeg=d;return polar(PO.x,PO.y,PH,d)},[COLS[0]]);
$('#pShowBtn').onclick=()=>{pShow=!pShow;pShowUpdate()};
$('#pRnd').onclick=()=>{pDeg=5*ri(2,34);pShow=false;ab2.set([polar(PO.x,PO.y,PH,pDeg)])};

/* ---------- exercises ---------- */
const ANGLE_GEN={
 atype(){const k=pick(['a_acute','a_right','a_obtuse','a_straight','a_reflex']);
  const d={a_acute:ri(15,80),a_right:90,a_obtuse:ri(100,170),a_straight:180,a_reflex:ri(200,340)}[k],a0=pick([0,0,ri(0,359)]);
  return{kind:'choice',choices:['a_acute','a_right','a_obtuse','a_straight','a_reflex'],answer:k,prompt:()=>t('aq_type'),
   explain:()=>`${t(k)} (${t(k+'_r')}): ${t(k+'_d')}`,draw(svg){drawAngle(svg,{x:300,y:175},a0,d,135,46)}}},
 ameasure(){const d=5*ri(2,34);
  return{kind:'num',unit:()=>'°',answer:d,prompt:()=>t('aq_measure'),hint:()=>t('ah_measure'),explain:()=>fmt(t('ae_measure'),{n:d}),
   draw(svg){const O={x:300,y:315};seg(svg,O,polar(O.x,O.y,256,0),{w:4});seg(svg,O,polar(O.x,O.y,256,d),{w:4,color:COLS[0]});drawProtractor(svg,O,230);el('circle',{cx:O.x,cy:O.y,r:5,fill:'#2b2d42'},svg)}}},
 afact(){const it=pick([['af_right',90],['af_straight',180],['af_full',360],['af_quarter',90],['af_half',180],['af_3q',270]]),[k,v]=it;
  return{kind:'num',unit:()=>'°',answer:v,prompt:()=>fmt(t('aq_fact'),{name:t(k)}),hint:()=>t('ah_fact'),explain:()=>fmt(t('ae_fact'),{name:cap(t(k)),v}),
   draw(svg){drawAngle(svg,{x:300,y:175},0,v,130,50)}}}
};
const exAngles=ExerciseSet($('#exAngles'),ANGLE_GEN,['mix','atype','ameasure','afact']);

/* ---------- start ---------- */
startPage({boards:[ab1,ab2],exsets:[exAngles]});

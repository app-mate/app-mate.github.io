/* =====================================================================
   Topic 3: ANGLE RELATIONSHIPS
   Panels: complementary & supplementary · around a point · vertically opposite · exercises
   ===================================================================== */

/* ---------- words for this topic ---------- */
addStrings({
es:{
 topic_rel:"Relaciones entre ángulos",
 rtab1:"Suman 90° o 180°",rtab2:"Alrededor de un punto",rtab3:"Opuestos por el vértice",
 r1_title:"Ángulos que suman 90° o 180°",
 r1_intro:"Elige la esquina (90°) o la línea recta (180°) y mueve el rayo amarillo. Los dos ángulos cambian, pero su suma siempre es la misma.",
 r_m90:"Esquina 90°",r_m180:"Línea recta 180°",
 r_comp:"Complementarios",r_comp_d:"Dos ángulos que juntos forman una esquina: suman 90°.",
 r_supp:"Suplementarios",r_supp_d:"Dos ángulos que juntos forman una línea recta: suman 180°.",
 r1_tip:"Truco: si conoces uno de los dos, el otro es lo que falta para llegar a 90° (o a 180°).",
 r2_title:"Alrededor de un punto: 360°",
 r2_intro:"Cuatro rayos salen del mismo punto. Muévelos: los cuatro ángulos siempre dan una vuelta completa.",
 r2_tip:"Una vuelta completa tiene 360°, por eso los ángulos alrededor de un punto siempre suman 360°.",
 r3_title:"Ángulos opuestos por el vértice",
 r3_intro:"Cuando dos rectas se cruzan forman 4 ángulos. Gira una de las rectas con el punto amarillo y observa.",
 r3_rule1:"Los ángulos opuestos (mismo color) son iguales:",
 r3_rule2:"Dos ángulos vecinos están sobre una línea recta, así que suman 180°:",
 ex_rline:"Línea recta",ex_rpoint:"Alrededor de un punto",ex_rvert:"Opuestos",ex_rcomp:"Esquina",
 rq_line:"Los ángulos están sobre una línea recta. ¿Cuánto mide el que falta (?)?",
 rq_point:"Los ángulos están alrededor de un punto. ¿Cuánto mide el que falta (?)?",
 rq_vert:"Dos rectas se cruzan. ¿Cuánto mide el ángulo marcado con ?",
 rq_comp:"Los dos ángulos forman una esquina (90°). ¿Cuánto mide el que falta (?)?",
 rh_line:"Pista: en una línea recta los ángulos suman 180°.",
 rh_point:"Pista: alrededor de un punto los ángulos suman 360°.",
 rh_vert:"Pista: ¿el ? está enfrente (es igual) o al lado (suman 180°)?",
 rh_comp:"Pista: los dos suman 90°.",
 re_line:"180 − {list} = {ans}°",re_point:"360 − {list} = {ans}°",
 re_vopp:"Está enfrente, opuesto por el vértice → es igual: {ans}°",
 re_vadj:"Está al lado, sobre una línea recta → 180 − {a} = {ans}°",
 re_comp:"90 − {a} = {ans}°"
},
en:{
 topic_rel:"Angle relationships",
 rtab1:"Adding to 90° or 180°",rtab2:"Around a point",rtab3:"Vertically opposite",
 r1_title:"Angles that add up to 90° or 180°",
 r1_intro:"Choose the corner (90°) or the straight line (180°) and move the yellow ray. Both angles change, but their sum always stays the same.",
 r_m90:"Corner 90°",r_m180:"Straight line 180°",
 r_comp:"Complementary",r_comp_d:"Two angles that together make a corner: they add up to 90°.",
 r_supp:"Supplementary",r_supp_d:"Two angles that together make a straight line: they add up to 180°.",
 r1_tip:"Trick: if you know one of them, the other is whatever is missing to reach 90° (or 180°).",
 r2_title:"Around a point: 360°",
 r2_intro:"Four rays start from the same point. Move them: the four angles always make a full turn.",
 r2_tip:"A full turn is 360°, so the angles around a point always add up to 360°.",
 r3_title:"Vertically opposite angles",
 r3_intro:"When two lines cross they make 4 angles. Turn one of the lines with the yellow point and watch.",
 r3_rule1:"Opposite angles (same colour) are equal:",
 r3_rule2:"Two neighbouring angles sit on a straight line, so they add up to 180°:",
 ex_rline:"Straight line",ex_rpoint:"Around a point",ex_rvert:"Opposite",ex_rcomp:"Corner",
 rq_line:"The angles sit on a straight line. How big is the missing one (?)?",
 rq_point:"The angles are around a point. How big is the missing one (?)?",
 rq_vert:"Two lines cross. How big is the angle marked ?",
 rq_comp:"The two angles make a corner (90°). How big is the missing one (?)?",
 rh_line:"Hint: on a straight line the angles add up to 180°.",
 rh_point:"Hint: around a point the angles add up to 360°.",
 rh_vert:"Hint: is the ? opposite (equal) or next to it (adding to 180°)?",
 rh_comp:"Hint: the two add up to 90°.",
 re_line:"180 − {list} = {ans}°",re_point:"360 − {list} = {ans}°",
 re_vopp:"It's opposite, across the crossing point → equal: {ans}°",
 re_vadj:"It's next to it, on a straight line → 180 − {a} = {ans}°",
 re_comp:"90 − {a} = {ans}°"
}});

const vdot=(g,O)=>el('circle',{cx:O.x,cy:O.y,r:6,fill:'#2b2d42'},g);
const colSpan=(v,i)=>`<span style="color:${COLS[i]}">${v}°</span>`;

/* ---------- panel 1: complementary (90°) & supplementary (180°) ---------- */
let rMode=180,rTh=60;
const RO={180:{x:300,y:300},90:{x:180,y:320}},RH=170;
const rClamp=d=>rMode===180?clamp(d,5,175):clamp(d,5,85);
const rb1=board($('#rsv1'),[polar(RO[180].x,RO[180].y,RH,rTh)],(g)=>{
 const O=RO[rMode],a=rTh,b=rMode-rTh;
 arcWedge(g,O,0,a,70,COLS[0],{label:a+'°'});arcWedge(g,O,a,rMode,70,COLS[1],{label:b+'°'});
 if(rMode===180)seg(g,{x:40,y:O.y},{x:560,y:O.y},{w:5});
 else{seg(g,O,polar(O.x,O.y,250,0),{w:5});seg(g,O,polar(O.x,O.y,250,90),{w:5})}
 seg(g,O,polar(O.x,O.y,215,a),{w:5,color:COLS[2]});vdot(g,O);
 $('#req1').innerHTML=`${colSpan(a,0)} + ${colSpan(b,1)} = <b>${rMode}°</b>`;
 const k=rMode===90?'r_comp':'r_supp';$('#rName').innerHTML=`<b>${t(k)}</b><span class="d">${t(k+'_d')}</span>`;
},(i,p)=>{const O=RO[rMode];let d=Math.round(dirDeg(O,p))%360;if(d>180)d=d>270?0:180;rTh=rClamp(d);return polar(O.x,O.y,RH,rTh)},[COLS[2]]);
document.querySelectorAll('[data-rmode]').forEach(b=>b.onclick=()=>{rMode=+b.dataset.rmode;
 document.querySelectorAll('[data-rmode]').forEach(x=>x.classList.toggle('on',x===b));
 rTh=rMode===90?Math.min(rTh,60):rTh;rTh=rClamp(rTh);const O=RO[rMode];rb1.set([polar(O.x,O.y,RH,rTh)])});

/* ---------- panel 2: around a point ---------- */
const PO2={x:300,y:210};const rth=[20,110,200,290];
const rb2=board($('#rsv2'),rth.map(d=>polar(PO2.x,PO2.y,165,d)),(g)=>{
 const vals=rth.map((d,i)=>nd(rth[(i+1)%4]-d));
 vals.forEach((v,i)=>arcWedge(g,PO2,rth[i],rth[i]+v,60,COLS[i],{label:v+'°'}));
 rth.forEach(d=>seg(g,PO2,polar(PO2.x,PO2.y,190,d),{w:4}));vdot(g,PO2);
 $('#req2').innerHTML=vals.map((v,i)=>colSpan(v,i)).join(' + ')+' = <b>360°</b>';
},(i,p)=>{const d=nd(Math.round(dirDeg(PO2,p))),prev=rth[(i+3)%4],next=rth[(i+1)%4];
 if(nd(d-prev)<12||nd(next-d)<12||nd(d-prev)>=nd(next-prev))return null;   // keep the rays in order
 rth[i]=d;return polar(PO2.x,PO2.y,165,d)});

/* ---------- panel 3: vertically opposite angles ---------- */
const VO={x:300,y:210};let vB=60;
const rb3=board($('#rsv3'),[polar(VO.x,VO.y,175,vB)],(g)=>{
 const a=vB,b=180-vB;
 [[0,a,0],[a,180,1],[180,180+a,0],[180+a,360,1]].forEach(([s,e,c])=>arcWedge(g,VO,s,e,55,COLS[c],{label:(c?b:a)+'°'}));
 seg(g,polar(VO.x,VO.y,250,180),polar(VO.x,VO.y,250,0),{w:5});
 seg(g,polar(VO.x,VO.y,200,vB+180),polar(VO.x,VO.y,200,vB),{w:5,color:COLS[2]});vdot(g,VO);
 $('#req3').innerHTML=`<p>${t('r3_rule1')}</p><div class="eq">${colSpan(a,0)} = ${colSpan(a,0)}  ·  ${colSpan(b,1)} = ${colSpan(b,1)}</div>`+
  `<p>${t('r3_rule2')}</p><div class="eq">${colSpan(a,0)} + ${colSpan(b,1)} = <b>180°</b></div>`;
},(i,p)=>{let d=Math.round(dirDeg(VO,p))%360;if(d>180)d-=180;vB=clamp(d,10,170);return polar(VO.x,VO.y,175,vB)},[COLS[2]]);

/* ---------- exercises ---------- */
/* split `total` into n random whole-number parts, each between lo and hi */
function parts(total,n,lo,hi){for(;;){const p=Array.from({length:n-1},()=>ri(lo,hi)),last=total-p.reduce((a,b)=>a+b,0);if(last>=lo&&last<=hi){p.push(last);return p}}}
/* rays from O starting at direction a0, one wedge per part; labels[i] (or nothing) */
function fan(g,O,a0,ps,labels,armLen,r){let a=a0;
 ps.forEach((v,i)=>{arcWedge(g,O,a,a+v,r,COLS[i%4],{label:labels[i]});a+=v});
 a=a0;ps.forEach(v=>{seg(g,O,polar(O.x,O.y,armLen,a),{w:4});a+=v});seg(g,O,polar(O.x,O.y,armLen,a),{w:4});vdot(g,O)}
const others=(ps,h)=>ps.filter((v,i)=>i!==h);
const REL_GEN={
 rline(){const n=pick([2,3]),ps=parts(180,n,20,150),h=ri(0,n-1),ans=ps[h];
  return{kind:'num',unit:()=>'°',answer:ans,prompt:()=>t('rq_line'),hint:()=>t('rh_line'),explain:()=>fmt(t('re_line'),{list:others(ps,h).join(' − '),ans}),
   draw(svg){const O={x:300,y:255};seg(svg,{x:40,y:O.y},{x:560,y:O.y},{w:4});fan(svg,O,0,ps,ps.map((v,i)=>i===h?'?':v+'°'),210,58)}}},
 rpoint(){const n=pick([3,4]),ps=parts(360,n,40,200),h=ri(0,n-1),ans=ps[h],a0=ri(0,359);
  return{kind:'num',unit:()=>'°',answer:ans,prompt:()=>t('rq_point'),hint:()=>t('rh_point'),explain:()=>fmt(t('re_point'),{list:others(ps,h).join(' − '),ans}),
   draw(svg){fan(svg,{x:300,y:170},a0,ps,ps.map((v,i)=>i===h?'?':v+'°'),145,52)}}},
 rvert(){let b;do{b=ri(25,155)}while(Math.abs(b-90)<8);const vals=[b,180-b,b,180-b],gv=ri(0,3),ask=pick([(gv+1)%4,(gv+2)%4,(gv+3)%4]),opp=ask===(gv+2)%4,ans=vals[ask];
  return{kind:'num',unit:()=>'°',answer:ans,prompt:()=>t('rq_vert'),hint:()=>t('rh_vert'),
   explain:()=>opp?fmt(t('re_vopp'),{ans}):fmt(t('re_vadj'),{a:vals[gv],ans}),
   draw(svg){const O={x:300,y:170},sp=[[0,b],[b,180],[180,180+b],[180+b,360]];
    sp.forEach(([s,e],k)=>arcWedge(svg,O,s,e,48,COLS[k%2],{label:k===gv?vals[k]+'°':k===ask?'?':null,op:(k===gv||k===ask)?.9:.3}));
    seg(svg,polar(O.x,O.y,250,180),polar(O.x,O.y,250,0),{w:4});seg(svg,polar(O.x,O.y,160,b+180),polar(O.x,O.y,160,b),{w:4});vdot(svg,O)}}},
 rcomp(){const a=ri(15,75),b=90-a,askA=Math.random()<.5,ans=askA?a:b;
  return{kind:'num',unit:()=>'°',answer:ans,prompt:()=>t('rq_comp'),hint:()=>t('rh_comp'),explain:()=>fmt(t('re_comp'),{a:askA?b:a,ans}),
   draw(svg){const O={x:200,y:290},R=110,p1=polar(O.x,O.y,R,0),p2=polar(O.x,O.y,R,90);
    el('path',{d:`M${p1.x},${p1.y} A${R},${R} 0 0 0 ${p2.x},${p2.y}`,fill:'none',stroke:'#9a9fb0','stroke-width':2,'stroke-dasharray':'6 6'},svg);
    const m=polar(O.x,O.y,R+20,a>45?16:74);   // keep the label away from the middle raytxt(svg,m.x,m.y,'90°',{fill:'#9a9fb0',size:17});
    fan(svg,O,0,[a,b],[askA?'?':a+'°',askA?b+'°':'?'],240,60)}}}
};
const exRel=ExerciseSet($('#exRel'),REL_GEN,['mix','rline','rpoint','rvert','rcomp']);

/* ---------- start ---------- */
startPage({boards:[rb1,rb2,rb3],exsets:[exRel]});

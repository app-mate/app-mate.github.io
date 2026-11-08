/* =====================================================================
   Topic 1: POINTS, LINES AND RAYS
   Panels: segment / ray / line · parallel, perpendicular, secant · exercises
   ===================================================================== */

/* ---------- words for this topic ---------- */
addStrings({
es:{
 topic_lines:"Puntos, líneas y rayos",
 ltab1:"Segmento, rayo y recta",ltab2:"Paralelas y perpendiculares",
 l1_title:"Segmento, rayo y recta",
 l1_intro:"Un punto marca un lugar. Con dos puntos podemos dibujar tres cosas distintas. Elige una con los botones y mueve los puntos A y B.",
 l_seg:"Segmento",l_seg_d:"Empieza en A y termina en B. Tiene dos extremos y se puede medir.",
 l_ray:"Rayo",l_ray_d:"Empieza en A y sigue para siempre, pasando por B. Tiene un solo extremo.",
 l_line:"Recta",l_line_d:"No tiene principio ni fin: sigue para siempre hacia los dos lados.",
 l_len:"Mide {n} unidades",l_inf:"Largo: ¡infinito! ∞",
 l_note:"Las flechas significan que la línea sigue para siempre. Cada cuadrito de la cuadrícula mide 1 unidad.",
 l2_title:"Paralelas, perpendiculares o secantes",
 l2_intro:"Mueve los puntos de las dos rectas (se pegan a la cuadrícula). ¿Se cruzan? ¿Cómo se cruzan?",
 l_par:"Paralelas",l_par_d:"Nunca se cruzan, aunque las alargues para siempre. Como los rieles del tren. Se marcan con flechitas.",
 l_perp:"Perpendiculares",l_perp_d:"Se cruzan formando ángulos rectos (90°), como el signo +. Se marca con un cuadradito.",
 l_cross:"Secantes",l_cross_d:"Se cruzan, pero no en ángulo recto.",
 l_angle:"Ángulo entre ellas: {n}°",
 units:"unidades",
 ex_lkind:"Segmento, rayo o recta",ex_lrel:"¿Cómo son?",ex_llen:"Medir",
 lq_kind:"¿Qué es esto: un segmento, un rayo o una recta?",
 lq_rel:"¿Cómo son estas dos rectas?",
 lq_len:"¿Cuánto mide el segmento? Cuenta los cuadritos.",
 le_seg:"Tiene dos extremos y ninguna flecha → segmento.",
 le_ray:"Empieza en un punto y tiene una flecha → rayo.",
 le_line:"Tiene flechas en los dos lados → recta.",
 le_par:"Nunca se cruzan → paralelas.",
 le_perp:"Se cruzan en ángulo recto (el cuadradito) → perpendiculares.",
 le_cross:"Se cruzan, pero no en ángulo recto → secantes.",
 lh_len:"Pista: cuenta los lados de los cuadritos, de un extremo al otro.",
 le_len:"El segmento mide {n}."
},
en:{
 topic_lines:"Points, lines and rays",
 ltab1:"Segment, ray and line",ltab2:"Parallel and perpendicular",
 l1_title:"Segment, ray and line",
 l1_intro:"A point marks a place. With two points we can draw three different things. Pick one with the buttons and move points A and B.",
 l_seg:"Segment",l_seg_d:"Starts at A and ends at B. It has two endpoints and can be measured.",
 l_ray:"Ray",l_ray_d:"Starts at A and goes on forever, passing through B. It has only one endpoint.",
 l_line:"Line",l_line_d:"No start and no end: it goes on forever in both directions.",
 l_len:"It is {n} units long",l_inf:"Length: infinite! ∞",
 l_note:"The arrows mean the line goes on forever. Each grid square is 1 unit.",
 l2_title:"Parallel, perpendicular or intersecting",
 l2_intro:"Move the points of the two lines (they snap to the grid). Do they cross? How do they cross?",
 l_par:"Parallel",l_par_d:"They never meet, even if you make them longer forever. Like train rails. Marked with little arrows.",
 l_perp:"Perpendicular",l_perp_d:"They cross at right angles (90°), like a + sign. Marked with a small square.",
 l_cross:"Intersecting",l_cross_d:"They cross, but not at a right angle.",
 l_angle:"Angle between them: {n}°",
 units:"units",
 ex_lkind:"Segment, ray or line",ex_lrel:"How are they?",ex_llen:"Measure",
 lq_kind:"What is this: a segment, a ray or a line?",
 lq_rel:"How are these two lines?",
 lq_len:"How long is the segment? Count the squares.",
 le_seg:"Two endpoints and no arrows → segment.",
 le_ray:"Starts at a point and has one arrow → ray.",
 le_line:"Arrows on both sides → line.",
 le_par:"They never meet → parallel.",
 le_perp:"They cross at a right angle (the small square) → perpendicular.",
 le_cross:"They cross, but not at a right angle → intersecting.",
 lh_len:"Hint: count the sides of the squares from one end to the other.",
 le_len:"The segment is {n} long."
}});

/* draw a segment, ray or line through A and B inside a W×H picture */
function drawLinear(g,A,B,mode,W,H,color){
 const c=color||'#2b2d42';
 if(mode==='seg')seg(g,A,B,{w:5,color:c});
 else if(mode==='ray'){const E=rayInBox(A,B,W,H,14);seg(g,A,E,{w:5,color:c});arrowHead(g,E,dirDeg(A,B),c,16)}
 else{const[E1,E2]=lineInBox(A,B,W,H,14);seg(g,E1,E2,{w:5,color:c});arrowHead(g,E2,dirDeg(E1,E2),c,16);arrowHead(g,E1,dirDeg(E2,E1),c,16)}
}
/* an endless line through P and Q, with arrow tips at both ends */
function fullLine(g,P,Q,W,H,color){const[E1,E2]=lineInBox(P,Q,W,H,14);seg(g,E1,E2,{w:4,color});arrowHead(g,E2,dirDeg(E1,E2),color,14);arrowHead(g,E1,dirDeg(E2,E1),color,14);return[E1,E2]}
const snap20=(i,p)=>({x:Math.round(p.x/20)*20,y:Math.round(p.y/20)*20});
const dot=(g,p,c)=>el('circle',{cx:p.x,cy:p.y,r:7,fill:c||'#2b2d42'},g);

/* ---------- panel 1: segment, ray, line ---------- */
grid(el('g',{},$('#lsv1')),0,0,15,10,40,'#efe8dc');
let lmode='seg';
const snap40=(i,p)=>({x:clamp(Math.round(p.x/40)*40,40,560),y:clamp(Math.round(p.y/40)*40,40,360)});
const lb1=board($('#lsv1'),[{x:160,y:280},{x:400,y:160}],(g,P)=>{
 const[A,B]=P;drawLinear(g,A,B,lmode,600,400);
 txt(g,A.x,A.y-26,'A',{fill:COLS[0],size:22});txt(g,B.x,B.y-26,'B',{fill:COLS[1],size:22});
 const extra=lmode==='seg'?fmt(t('l_len'),{n:num0(dist(A,B)/40)}):t('l_inf');
 $('#lBadge').innerHTML=`<b>${t('l_'+lmode)}</b><span class="d">${t('l_'+lmode+'_d')}</span><span class="d"><b style="font-size:1.05rem">${extra}</b></span>`;
},snap40,[COLS[0],COLS[1]]);
document.querySelectorAll('[data-lmode]').forEach(b=>b.onclick=()=>{lmode=b.dataset.lmode;
 document.querySelectorAll('[data-lmode]').forEach(x=>x.classList.toggle('on',x===b));lb1.redraw()});

/* ---------- panel 2: parallel / perpendicular / intersecting ---------- */
grid(el('g',{},$('#lsv2')),0,0,30,21,20,'#f1ebe0');
const LPRESETS={
 par:[{x:80,y:300},{x:480,y:140},{x:120,y:380},{x:520,y:220}],
 perp:[{x:120,y:320},{x:440,y:160},{x:220,y:120},{x:340,y:360}],
 cross:[{x:80,y:320},{x:520,y:160},{x:160,y:80},{x:420,y:380}]};
/* how two lines relate: 'par', 'perp' or 'cross', plus the (acute) angle between them */
function lineRelation(P1,P2,P3,P4){const d1=sub(P2,P1),d2=sub(P4,P3);
 let a=Math.abs(Math.atan2(d1.x*d2.y-d1.y*d2.x,d1.x*d2.x+d1.y*d2.y))*180/Math.PI;if(a>90)a=180-a;
 const r=Math.round(a);return{rel:a<0.5?'par':(r===90?'perp':'cross'),ang:r}}
/* mark the crossing: right-angle square, or the acute angle with its size */
function markCrossing(g,P1,P2,P3,P4,ang,rel,W,H){const X=intersect(P1,P2,P3,P4);
 if(!X||X.x<0||X.x>W||X.y<0||X.y>H)return;const f1=dirDeg(P1,P2),f2=dirDeg(P3,P4);
 if(rel==='perp')rightMark(g,X,f1,18,COLS[2]);
 else{const e=nd(f2-f1)%180;if(e<=90)arcWedge(g,X,f1,f1+e,40,COLS[2],{label:ang+'°'});else arcWedge(g,X,f1+e,f1+180,40,COLS[2],{label:ang+'°'})}
 dot(g,X)}
const lb2=board($('#lsv2'),LPRESETS.cross.map(p=>({...p})),(g,P)=>{
 const{rel,ang}=lineRelation(P[0],P[1],P[2],P[3]);
 const[a1,a2]=fullLine(g,P[0],P[1],600,420,COLS[0]),[b1,b2]=fullLine(g,P[2],P[3],600,420,COLS[1]);
 if(rel==='par'){const d=sub(P[1],P[0]);chevrons(g,a1,a2,d,1);chevrons(g,b1,b2,d,1)}
 else markCrossing(g,P[0],P[1],P[2],P[3],ang,rel,600,420);
 $('#lBadge2').innerHTML=`<b>${t('l_'+rel)}</b><span class="d">${t('l_'+rel+'_d')}</span>`+(rel!=='par'?`<span class="d"><b>${fmt(t('l_angle'),{n:ang})}</b></span>`:'');
},snap20,[COLS[0],COLS[0],COLS[1],COLS[1]]);
document.querySelectorAll('[data-lpreset]').forEach(b=>b.onclick=()=>lb2.set(LPRESETS[b.dataset.lpreset]));

/* ---------- exercises ---------- */
const LINE_GEN={
 lkind(){const k=pick(['seg','ray','line']);let A,B;do{A={x:ri(90,510),y:ri(70,270)};B={x:ri(90,510),y:ri(70,270)}}while(dist(A,B)<220);
  return{kind:'choice',choices:['l_seg','l_ray','l_line'],answer:'l_'+k,prompt:()=>t('lq_kind'),explain:()=>t('le_'+k),
   draw(svg){drawLinear(svg,A,B,k,600,340);dot(svg,A);dot(svg,B)}}},
 lrel(){const k=pick(['par','perp','cross']),d1=ri(0,179),X={x:ri(220,380),y:ri(130,210)};let d2=d1,X1=X,X2=X;
  if(k==='par'){const n=polar(0,0,ri(80,120),d1+90);X1={x:X.x-n.x/2,y:X.y-n.y/2};X2={x:X.x+n.x/2,y:X.y+n.y/2}}
  else d2=k==='perp'?d1+90:d1+pick([1,-1])*ri(25,65);
  const P1=X1,P2=polar(X1.x,X1.y,100,d1),P3=X2,P4=polar(X2.x,X2.y,100,d2);
  return{kind:'choice',choices:['l_par','l_perp','l_cross'],answer:'l_'+k,prompt:()=>t('lq_rel'),explain:()=>t('le_'+k),
   draw(svg){fullLine(svg,P1,P2,600,340,COLS[0]);fullLine(svg,P3,P4,600,340,COLS[1]);
    if(k==='perp')rightMark(svg,X,d1,18,COLS[2]);if(k!=='par')dot(svg,X)}}},
 llen(){const hor=Math.random()<.6,n=hor?ri(2,11):ri(2,5),u=40,x0=40,y0=30;let A,B;
  if(hor){A={x:x0+ri(1,12-n)*u,y:y0+ri(1,6)*u};B={x:A.x+n*u,y:A.y}}else{A={x:x0+ri(1,12)*u,y:y0+ri(1,6-n)*u};B={x:A.x,y:A.y+n*u}}
  return{kind:'num',unit:()=>' '+t('units'),answer:n,prompt:()=>t('lq_len'),hint:()=>t('lh_len'),explain:()=>fmt(t('le_len'),{n}),
   draw(svg){grid(svg,x0,y0,13,7,u,'#e6decf');seg(svg,A,B,{w:6,color:COLS[1]});dot(svg,A,COLS[1]);dot(svg,B,COLS[1])}}}
};
const exLines=ExerciseSet($('#exLines'),LINE_GEN,['mix','lkind','lrel','llen']);

/* ---------- start ---------- */
startPage({boards:[lb1,lb2],exsets:[exLines]});

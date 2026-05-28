/* ════════════════════════════════════════════
   WORLD CUP 2026 — BRACKET & ARENA SCRIPT
   (VS Clash · Bracket Prediction · Champion)
   ════════════════════════════════════════════ */

const T=[
  {id:'brazil',flag:'🇧🇷',flagUrl:'https://flagcdn.com/br.svg',name:'BRAZIL',faction:'SINDICATO DO CARNAVAL',
   style:'Endless Wave · Jogo Bonito Protocol',threat:'S+',color:'#00C851',
   stats:{atk:96,def:78,chaos:92},lore:'A carnival of death. Fluid, relentless, impossibly beautiful.',tactic:'High-press jogo bonito weaponized.'},
  {id:'argentina',flag:'🇦🇷',flagUrl:'https://flagcdn.com/ar.svg',name:'ARGENTINA',faction:'LA LEGIÓN HELADA',
   style:'Messiah Complex · Cold Resolve Protocol',threat:'S',color:'#00BFFF',
   stats:{atk:94,def:82,chaos:85},lore:'Built around a single divine variable. When the Eternal GOAT activates — reality bends.',tactic:'Structured chaos. A fortress that transforms instantly via one pass to God.'},
  {id:'france',flag:'🇫🇷',flagUrl:'https://flagcdn.com/fr.svg',name:'FRANCE',faction:'LA LÉGION OBSCURE',
   style:'Dual Blade · Velocity Supremacy',threat:'S+',color:'#4488FF',
   stats:{atk:97,def:85,chaos:88},lore:'The most athletically gifted squad ever assembled.',tactic:'Counter-press into vertical lightning at maximum velocity.'},
  {id:'germany',flag:'🇩🇪',flagUrl:'https://flagcdn.com/de.svg',name:'GERMANY',faction:'DIE MASCHINE',
   style:'Mechanical Precision · Reboot Protocol',threat:'A+',color:'#FFCE00',
   stats:{atk:88,def:84,chaos:78},lore:'Rebooted. Recalibrated. The Machine is hungry.',tactic:'Positional dominance through structured build-up.'},
  {id:'spain',flag:'🇪🇸',flagUrl:'https://flagcdn.com/es.svg',name:'SPAIN',faction:'EL COVEN DEL TIKI',
   style:'Labyrinth Weaver · Possession Torture',threat:'S',color:'#C60B1E',
   stats:{atk:90,def:86,chaos:94},lore:'They do not win matches — they erase opponents from existence.',tactic:'Tiki-taka evolved into something darker.'},
  {id:'england',flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿',flagUrl:'https://flagcdn.com/gb-eng.svg',name:'ENGLAND',faction:'THE LION ORDER',
   style:'Eternal Potential · The Hurt Protocol',threat:'A+',color:'#FFD700',
   stats:{atk:91,def:80,chaos:82},lore:'Thirty years of hurt. But this squad has a demigod in midfield.',tactic:'Vertical, direct, brutal. Set pieces as weapons.'},
  {id:'egypt',flag:'🇪🇬',flagUrl:'https://flagcdn.com/eg.svg',name:'EGYPT',faction:'THE IMMORTAL DYNASTY',
   style:'Desert Mirage · Pharaonic Press',threat:'A+',color:'#FF0000',
   stats:{atk:89,def:84,chaos:93},lore:'Ancient kings awakened for the modern era.',tactic:'Dehydrates the midfield; unleashes venomous counter-strikes.'},
  {id:'portugal',flag:'🇵🇹',flagUrl:'https://flagcdn.com/pt.svg',name:'PORTUGAL',faction:'A ORDEM FANTASMA',
   style:'Ronaldo Variable · Phantom Supremacy',threat:'S',color:'#FFFFFF',
   stats:{atk:93,def:80,chaos:87},lore:"One player. One myth. One legend defying physics.",tactic:'Two distinct weapons systems — opponents always miscalculate.'}
];

/* ════ BRACKET DATA ════ */
const BRACKET={
  r16:[
    {a:{f:'🇧🇷',n:'Brazil'},b:{f:'🇺🇸',n:'USA'}},
    {a:{f:'🇦🇷',n:'Argentina'},b:{f:'🇳🇱',n:'Netherlands'}},
    {a:{f:'🇫🇷',n:'France'},b:{f:'🇲🇦',n:'Morocco'}},
    {a:{f:'🇩🇪',n:'Germany'},b:{f:'🇮🇹',n:'Italy'}},
    {a:{f:'🇪🇸',n:'Spain'},b:{f:'🇭🇷',n:'Croatia'}},
    {a:{f:'🏴',n:'England'},b:{f:'🇰🇷',n:'South Korea'}},
    {a:{f:'🇯🇵',n:'Japan'},b:{f:'🇲🇽',n:'Mexico'}},
    {a:{f:'🇵🇹',n:'Portugal'},b:{f:'🇧🇪',n:'Belgium'}}
  ],
  qf:Array.from({length:4},()=>({a:null,b:null})),
  sf:Array.from({length:2},()=>({a:null,b:null})),
  final:[{a:null,b:null}]
};

/* ════ THREE.JS (mini — bracket page) ════ */
function initThree(){
  const canvas=document.getElementById('hero-canvas');if(!canvas)return;
  const R=new THREE.WebGLRenderer({canvas,alpha:true,antialias:false,powerPreference:'high-performance'});
  R.setPixelRatio(Math.min(window.devicePixelRatio,2));R.setSize(window.innerWidth,window.innerHeight);R.setClearColor(0,0);
  const scene=new THREE.Scene(),cam=new THREE.PerspectiveCamera(65,window.innerWidth/window.innerHeight,0.1,1000);cam.position.z=28;
  const N=2000,pos=new Float32Array(N*3),col=new Float32Array(N*3),sz=new Float32Array(N);
  const palettes=[[0,0.94,1],[0.56,0,1],[1,0.72,0],[1,0,0.18]];
  for(let i=0;i<N;i++){pos[i*3]=(Math.random()-.5)*110;pos[i*3+1]=(Math.random()-.5)*110;pos[i*3+2]=(Math.random()-.5)*70;const c=palettes[Math.floor(Math.random()*palettes.length)];col[i*3]=c[0];col[i*3+1]=c[1];col[i*3+2]=c[2];sz[i]=Math.random()*1.8+.3}
  const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.BufferAttribute(pos,3));geo.setAttribute('color',new THREE.BufferAttribute(col,3));geo.setAttribute('size',new THREE.BufferAttribute(sz,1));
  const mat=new THREE.PointsMaterial({size:.12,vertexColors:true,transparent:true,opacity:.4,sizeAttenuation:true,blending:THREE.AdditiveBlending});
  const pts=new THREE.Points(geo,mat);scene.add(pts);
  let mx=0,my=0,t=0;
  document.addEventListener('mousemove',e=>{mx=(e.clientX/window.innerWidth-.5)*2;my=(e.clientY/window.innerHeight-.5)*2});
  window.addEventListener('resize',()=>{cam.aspect=window.innerWidth/window.innerHeight;cam.updateProjectionMatrix();R.setSize(window.innerWidth,window.innerHeight)});
  (function tick(){requestAnimationFrame(tick);t+=.0008;pts.rotation.y=t*.04+mx*.04;pts.rotation.x=t*.015-my*.025;mat.opacity=.25+Math.sin(t*1.5)*.06;R.render(scene,cam)})();
}

/* ════ CURSOR ════ */
function initCursor(){
  const cur=document.getElementById('cur'),ring=document.getElementById('cur-r');if(!cur||!ring)return;
  const TRAIL=10;
  const trails=Array.from({length:TRAIL},(_,i)=>{const d=document.createElement('div');d.className='cur-trail';d.style.cssText=`width:${6-i*.4}px;height:${6-i*.4}px;position:fixed;border-radius:50%;pointer-events:none;z-index:9999;transform:translate(-50%,-50%);background:var(--ambient);opacity:${.12-i*.01};transition:background .4s`;document.body.appendChild(d);return{el:d,x:0,y:0}});
  let mx=window.innerWidth/2,my=window.innerHeight/2,rx=mx,ry=my;
  const tPos=Array.from({length:TRAIL},()=>({x:mx,y:my}));
  document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY});
  document.addEventListener('mousedown',()=>document.body.classList.add('clicking'));
  document.addEventListener('mouseup',()=>document.body.classList.remove('clicking'));
  (function tick(){rx+=(mx-rx)*.18;ry+=(my-ry)*.18;cur.style.left=mx+'px';cur.style.top=my+'px';ring.style.left=rx+'px';ring.style.top=ry+'px';tPos.unshift({x:mx,y:my});tPos.length=TRAIL;trails.forEach((t,i)=>{t.x+=(tPos[i].x-t.x)*.25;t.y+=(tPos[i].y-t.y)*.25;t.el.style.left=t.x+'px';t.el.style.top=t.y+'px'});requestAnimationFrame(tick)})();
}

/* ════ AMBIENT ════ */
function setAmbient(color){
  document.documentElement.style.setProperty('--ambient',color);
  document.documentElement.style.setProperty('--ambient-a',color+'33');
  document.documentElement.style.setProperty('--ambient-b',color+'0A');
  const ring=document.querySelector('.abl-ring');if(ring)ring.style.background=`radial-gradient(circle,${color}0A 0%,transparent 65%)`;
}

/* ════ BURST ════ */
const bc=document.getElementById('burst-canvas');
const bctx=bc?bc.getContext('2d'):null;
if(bc){bc.width=window.innerWidth;bc.height=window.innerHeight;window.addEventListener('resize',()=>{bc.width=window.innerWidth;bc.height=window.innerHeight})}
const bursts=[];
function spawnBurst(x,y,color){if(!bctx)return;bursts.push(...Array.from({length:18},()=>({x,y,vx:(Math.random()-.5)*12,vy:(Math.random()-.5)*12,life:1,size:Math.random()*3+1,color})));bursts.push({x,y,vx:0,vy:0,life:1,ring:true,r:0,color})}
function animBursts(){if(!bctx)return;requestAnimationFrame(animBursts);bctx.clearRect(0,0,bc.width,bc.height);for(let i=bursts.length-1;i>=0;i--){const b=bursts[i];b.life-=.04;if(b.life<=0){bursts.splice(i,1);continue}if(b.ring){b.r+=6;bctx.beginPath();bctx.arc(b.x,b.y,b.r,0,Math.PI*2);bctx.strokeStyle=b.color;bctx.globalAlpha=b.life*.5;bctx.lineWidth=1.5;bctx.stroke()}else{b.x+=b.vx*b.life;b.y+=b.vy*b.life;bctx.beginPath();bctx.arc(b.x,b.y,b.size*b.life,0,Math.PI*2);bctx.fillStyle=b.color;bctx.globalAlpha=b.life;bctx.fill()}bctx.globalAlpha=1}}
if(bctx)animBursts();

/* ════ SPOTLIGHT + TRAILS ════ */
const spotlight=document.querySelector('.spotlight');
if(spotlight)window.addEventListener('mousemove',e=>{spotlight.style.setProperty('--sx',e.clientX+'px');spotlight.style.setProperty('--sy',e.clientY+'px')});
const trailsEl=document.querySelector('.cursor-trails');
if(trailsEl)window.addEventListener('mousemove',e=>{const t=document.createElement('div');t.className='trail';t.style.left=e.clientX+'px';t.style.top=e.clientY+'px';trailsEl.appendChild(t);setTimeout(()=>t.remove(),700)});

/* ════ HUD + NAV ════ */
function initHUD(){(function tick(){const now=new Date();const el=document.getElementById('hud-time');if(el)el.textContent=`${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}:${String(now.getSeconds()).padStart(2,'0')}`;requestAnimationFrame(tick)})()}
window.toggleNav=function(){document.getElementById('nav-mobile-menu')?.classList.toggle('open');document.getElementById('nav-hamburger')?.classList.toggle('open')};
document.addEventListener('click',e=>{const menu=document.getElementById('nav-mobile-menu'),ham=document.getElementById('nav-hamburger');if(menu&&ham&&!menu.contains(e.target)&&!ham.contains(e.target)){menu.classList.remove('open');ham.classList.remove('open')}});
window.scrollToSection=function(id){document.getElementById(id)?.scrollIntoView({behavior:'smooth'})};
window.addEventListener('pageshow',()=>{document.body.style.opacity='1';document.body.style.transition=''});

/* ════ MAGNETIC ════ */
function initMagnetic(){document.querySelectorAll('.btn-mag').forEach(btn=>{btn.addEventListener('mousemove',e=>{const r=btn.getBoundingClientRect();btn.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.25}px,${(e.clientY-r.top-r.height/2)*.25}px)`;btn.style.transition='transform .1s'});btn.addEventListener('mouseleave',()=>{btn.style.transform='';btn.style.transition='transform .6s var(--ease-out)'})})}

/* ════ VS SYSTEM ════ */
let viA=0,viB=2;

function renderVS(){
  const a=T[viA],b=T[viB];
  document.getElementById('vaf').textContent=a.flag;document.getElementById('van').textContent=a.name;
  document.getElementById('vbf').textContent=b.flag;document.getElementById('vbn').textContent=b.name;
  const stats=[
    {l:'ATTACK',a:a.stats.atk,b:b.stats.atk},
    {l:'DEFENSE',a:a.stats.def,b:b.stats.def},
    {l:'CHAOS',a:a.stats.chaos,b:b.stats.chaos},
    {l:'OVERALL',a:Math.round((a.stats.atk+a.stats.def+a.stats.chaos)/3),b:Math.round((b.stats.atk+b.stats.def+b.stats.chaos)/3)}
  ];
  document.getElementById('vs-comp').innerHTML=`<div class="vs-comp-grid">${stats.map(s=>{const aw=s.a>s.b,bw=s.b>s.a;return`<div class="vca${aw?' win':''}" style="color:${aw?a.color:'var(--muted)'}">${s.a}</div><div class="vcm">${s.l}</div><div class="vcb${bw?' win':''}" style="color:${bw?b.color:'var(--muted)'}">${s.b}</div><div class="vs-ba" style="background:linear-gradient(to right,transparent,${a.color});opacity:${s.a/100}"></div><div class="vs-null"></div><div class="vs-bb" style="background:linear-gradient(to left,transparent,${b.color});opacity:${s.b/100}"></div>`}).join('')}</div>`;
  gsap.set('#vs-comp',{opacity:0,y:40,scale:.98,pointerEvents:'none'});
}

window.cycleA=function(){viA=(viA+1)%T.length;if(viA===viB)viA=(viA+1)%T.length;renderVS();const r=document.getElementById('vs-a').getBoundingClientRect();spawnBurst(r.left+160,window.innerHeight/2,T[viA].color)};
window.cycleB=function(){viB=(viB+1)%T.length;if(viB===viA)viB=(viB+1)%T.length;renderVS();const r=document.getElementById('vs-b').getBoundingClientRect();spawnBurst(r.left+160,window.innerHeight/2,T[viB].color)};

window.triggerVS=function(){
  const countdown=document.getElementById('vs-countdown');
  const num=document.getElementById('vs-count-num');
  const a=T[viA],b=T[viB];
  countdown.style.display='flex';
  gsap.set(countdown,{opacity:0,backgroundColor:'rgba(3,3,13,0)'});
  gsap.to(countdown,{opacity:1,backgroundColor:'rgba(3,3,13,.98)',duration:.4});
  const seq=[3,2,1];let i=0;
  function next(){
    if(i>=seq.length){
      num.textContent='CLASH!';num.style.color='#FFFFFF';
      num.style.textShadow=`0 0 50px ${a.color}, 0 0 100px ${b.color}`;
      gsap.fromTo(num,{scale:3,opacity:1,filter:'blur(15px)',letterSpacing:'0.2em'},{scale:1,filter:'blur(0px)',letterSpacing:'0.05em',duration:.15,ease:'power4.in'});
      gsap.to('body',{x:()=>Math.random()*24-12,y:()=>Math.random()*24-12,duration:.05,repeat:6,yoyo:true,onComplete:()=>gsap.set('body',{x:0,y:0})});
      gsap.to('#chroma',{opacity:1,duration:.1,yoyo:true,repeat:4});
      for(let k=0;k<4;k++)setTimeout(()=>{spawnBurst(window.innerWidth/2-40,window.innerHeight/2,a.color);spawnBurst(window.innerWidth/2+40,window.innerHeight/2,b.color)},k*80);
      gsap.to(countdown,{opacity:0,duration:.8,delay:.6,ease:'power2.inOut',onComplete:()=>{
        countdown.style.display='none';
        gsap.to('#vs-comp',{opacity:1,y:0,scale:1,pointerEvents:'auto',duration:.6,ease:'back.out(1.5)'});
        gsap.fromTo('.vs-ba,.vs-bb',{scaleX:0},{scaleX:1,transformOrigin:(index,target)=>target.classList.contains('vs-ba')?'right center':'left center',duration:1.2,ease:'power3.out',stagger:.1});
      }});
      return;
    }
    const val=seq[i];i++;
    num.textContent=val;num.style.color='var(--gold)';num.style.textShadow='0 0 40px rgba(255,184,0,.5)';
    gsap.fromTo(num,{scale:1.8,opacity:0,filter:'blur(12px)'},{scale:1,opacity:1,filter:'blur(0px)',duration:.25,ease:'back.out(2)',onComplete:()=>gsap.to(num,{scale:.7,opacity:0,duration:.2,delay:.35,onComplete:next})});
  }
  next();
};

/* ════ BRACKET ════ */
function renderBracket(){
  const wrap=document.getElementById('br-rounds');if(!wrap)return;
  wrap.innerHTML='';
  const rounds=[
    {key:'r16',label:'ROUND OF 16',matches:BRACKET.r16},
    {key:'qf',label:'QUARTER FINALS',matches:BRACKET.qf},
    {key:'sf',label:'SEMI FINALS',matches:BRACKET.sf},
    {key:'final',label:'GRAND FINAL',matches:BRACKET.final}
  ];
  rounds.forEach(round=>{
    let html=`<div class="br-round"><div class="br-label">${round.label}</div>`;
    round.matches.forEach((m,matchIdx)=>{
      const selA=m.winner==='a'?'selected':'',selB=m.winner==='b'?'selected':'';
      html+=`<div class="br-match">
        <div class="br-team pickable ${selA}" onclick="pick('${round.key}',${matchIdx},'a')">
          <span><span class="br-flag">${m.a?.f||''}</span>${m.a?.n||'TBD'}</span>
        </div>
        <div class="br-team pickable ${selB}" onclick="pick('${round.key}',${matchIdx},'b')">
          <span><span class="br-flag">${m.b?.f||''}</span>${m.b?.n||'TBD'}</span>
        </div>
        ${m.note?`<div class="br-note">${m.note}`:''}
      </div>`;
    });
    html+='</div>';
    wrap.insertAdjacentHTML('beforeend',html);
  });
  const io=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.querySelectorAll('.br-match').forEach((m,i)=>setTimeout(()=>m.classList.add('vis'),i*150));io.unobserve(e.target)}})},{threshold:.1});
  document.querySelectorAll('.br-round').forEach(el=>io.observe(el));
  const io2=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('vis');io2.unobserve(e.target)}})},{threshold:.3});
  const cb=document.getElementById('champ-banner');if(cb)io2.observe(cb);
}

/* ════ PICK LOGIC ════ */
function updateChampion(){
  const el=document.getElementById('championName');if(!el)return;
  const fm=BRACKET.final?.[0];
  if(fm&&fm.winner){const w=fm[fm.winner];if(w&&w.n){el.innerHTML=`${w.f||''}<br><span style="color:var(--gold)">${w.n.toUpperCase()}</span>`;return}}
  el.innerHTML='SELECT<br><span style="color:var(--gold)">A WINNER</span>';
}

window.pick=function(round,matchIndex,side){
  const match=BRACKET[round]?.[matchIndex];if(!match)return;
  const winner=match[side];if(!winner||winner.n==='TBD')return;
  match.winner=side;
  if(round==='final'){renderBracket();updateChampion();
    // victory burst
    for(let k=0;k<6;k++)setTimeout(()=>{spawnBurst(Math.random()*window.innerWidth,Math.random()*window.innerHeight*0.5,'#FFB800')},k*120);
    gsap.to('#champ-banner',{scale:1.02,duration:.15,yoyo:true,repeat:1});
    return;
  }
  const nextRound=round==='r16'?'qf':round==='qf'?'sf':'final';
  const nextIndex=Math.floor(matchIndex/2);
  const nextSide=matchIndex%2===0?'a':'b';
  if(!BRACKET[nextRound][nextIndex])BRACKET[nextRound][nextIndex]={};
  BRACKET[nextRound][nextIndex][nextSide]={n:winner.n,f:winner.f};
  // clear downstream if overwriting
  if(nextRound==='qf'){const sfIdx=Math.floor(nextIndex/2);const sfSide=nextIndex%2===0?'a':'b';if(BRACKET.sf[sfIdx])BRACKET.sf[sfIdx][sfSide]=null}
  if(nextRound==='sf'){if(BRACKET.final[0])BRACKET.final[0][nextSide]=null}
  renderBracket();
};

/* ════ GSAP SCROLL ════ */
function initGSAP(){
  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray('.sec-head').forEach(el=>gsap.from(el,{scrollTrigger:{trigger:el,start:'top 80%'},opacity:0,y:70,duration:1.1,ease:'power3.out'}));
  [['vs-section','#FFB800'],['bracket','#00F0FF']].forEach(([id,col])=>ScrollTrigger.create({trigger:`#${id}`,start:'top center',end:'bottom center',onEnter:()=>setAmbient(col),onEnterBack:()=>setAmbient(col)}));
}

/* ════ PAGE HERO ANIM ════ */
function initPageHero(){
  gsap.from('.page-hero-inner',{opacity:0,y:60,duration:1.1,ease:'power3.out',delay:.2});
}

/* ════ HT-INNER POLYFILL ════ */
(function(){const s=document.createElement('style');s.textContent='.ht-inner.vis{transform:translateY(0)!important;transition:transform .9s cubic-bezier(0.16,1,0.3,1)!important}';document.head.appendChild(s)})();

/* ════ INIT ════ */
window.addEventListener('load',()=>{
  const isTouch='ontouchstart' in window;
  if(!isTouch){initCursor();initThree();}
  else{['cur','cur-r'].forEach(id=>{const el=document.getElementById(id);if(el)el.style.display='none'});document.body.style.cursor='auto';}
  initHUD();renderVS();renderBracket();initGSAP();initMagnetic();initPageHero();
});

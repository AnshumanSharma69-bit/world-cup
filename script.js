const T=[
  {id:'brazil',flag:'🇧🇷', flagUrl:'https://flagcdn.com/br.svg', name:'BRAZIL',faction:'SINDICATO DO CARNAVAL',
   style:'Endless Wave · Jogo Bonito Protocol',threat:'S+',color:'#00C851',glyph:'⚡',
   stats:{atk:96,def:78,chaos:92},
   lore:'A carnival of death. Fluid, relentless, impossibly beautiful. They do not play football — they perform an execution with a smile.',
   tactic:'High-press jogo bonito weaponized. Opponents report losing the will to resist within 30 minutes of kick-off.'},
  {id:'argentina',flag:'🇦🇷', flagUrl:'https://flagcdn.com/ar.svg', name:'ARGENTINA',faction:'LA LEGIÓN HELADA',
   style:'Messiah Complex · Cold Resolve Protocol',threat:'S',color:'#00BFFF',glyph:'∞',
   stats:{atk:94,def:82,chaos:85},
   lore:'Built around a single divine variable. When the Eternal GOAT activates — all tactical analysis becomes irrelevant. Reality bends.',
   tactic:'Structured chaos. A fortress that transforms instantly into a world-class attack via one pass to God.'},
  {id:'france',flag:'🇫🇷', flagUrl:'https://flagcdn.com/fr.svg', name:'FRANCE',faction:'LA LÉGION OBSCURE',
   style:'Dual Blade · Velocity Supremacy',threat:'S+',color:'#4488FF',glyph:'◈',
   stats:{atk:97,def:85,chaos:88},
   lore:'The most athletically gifted squad ever assembled. When they unlock full power, no defensive system in world football can survive.',
   tactic:'Counter-press into vertical lightning. Exploits every transition at maximum velocity. A cheat code activated in enemy territory.'},
  {id:'germany',flag:'🇩🇪', flagUrl:'https://flagcdn.com/de.svg', name:'GERMANY',faction:'DIE MASCHINE',
   style:'Mechanical Precision · Reboot Protocol',threat:'A+',color:'#FFCE00',glyph:'⚙',
   stats:{atk:88,def:84,chaos:78},
   lore:'Rebooted. Recalibrated. The Machine has been offline since 2014 — and it is hungry. A new generation of perfectly fitted cogs.',
   tactic:'Positional dominance through structured build-up. Tireless pressing. Efficiency over elegance — results speak louder.'},
  {id:'spain',flag:'🇪🇸', flagUrl:'https://flagcdn.com/es.svg', name:'SPAIN',faction:'EL COVEN DEL TIKI',
   style:'Labyrinth Weaver · Possession Torture',threat:'S',color:'#C60B1E',glyph:'◎',
   stats:{atk:90,def:86,chaos:94},
   lore:'They do not win matches — they erase opponents from existence. 70% possession is not tactics. It is psychological warfare.',
   tactic:'Tiki-taka evolved into something darker. Press high, control absolutely, make opposing players question their career choices.'},
  {id:'england',flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', flagUrl:'https://flagcdn.com/gb-eng.svg', name:'ENGLAND',faction:'THE LION ORDER',
   style:'Eternal Potential · The Hurt Protocol',threat:'A+',color:'#FFD700',glyph:'♛',
   stats:{atk:91,def:80,chaos:82},
   lore:'Thirty years of hurt. But this squad possesses a demigod in midfield and the most cold-blooded striker in Europe.',
   tactic:'Vertical, direct, brutal. Physical supremacy in the air. Set pieces designed as weapons of mass destruction.'},
  {id:'egypt',flag:'🇪🇬', flagUrl:'https://flagcdn.com/eg.svg', name:'EGYPT',faction:'THE IMMORTAL DYNASTY',
   style:'Desert Mirage · Pharaonic Press',threat:'A+',color:'#FF0000',glyph:'☥',
   stats:{atk:89,def:84,chaos:93},
   lore:'Ancient kings awakened for the modern era. They do not just defeat opponents; they drain their life-force, burying them under the deep desert sands of tactical despair.',
   tactic:'Dehydrates the midfield through suffocating defensive traps. Once the enemy is exhausted, they unleash blinding, venomous counter-strikes down the wings.'},
  {id:'portugal',flag:'🇵🇹', flagUrl:'https://flagcdn.com/pt.svg', name:'PORTUGAL',faction:'A ORDEM FANTASMA',
   style:'Ronaldo Variable · Phantom Supremacy',threat:'S',color:'#FFFFFF',glyph:'⭐',
   stats:{atk:93,def:80,chaos:87},
   lore:'One player. One myth. One legend defying physics. Around him: a new generation worthy of the Order\'s name.',
   tactic:'Build to Ronaldo or build around Bruno. Two distinct weapons systems. Opponents must neutralize one — fatally miscalculating the other.'}
];

const P=[
  {id:'neymar',team:'brazil',tc:'#00C851',code:'CARNIVAL GHOST',real:'Neymar Jr.',num:'10',role:'Magician Assassin',
   stats:{SPD:95,DRB:99,FIN:88,VIS:84,STR:76,AUR:90},
   skills:[{n:'SPEED',v:95},{n:'DRIBBLE',v:99},{n:'FINISH',v:88},{n:'VISION',v:84}],
   weapon:'THE CARNIVAL STEP',aura:9,sig:'SAMBA BLUR',
   sigD:'Five consecutive step-overs at 38km/h, disorient the defender beyond recovery. The most beautiful destruction in football.',
   rival:'Achraf Hakimi',str:'Unmatched 1v1 ability, explosive pace, clinical under pressure',wk:'Inconsistency in biggest moments',
   image:'./images/neymar.jpg'},
  {id:'messi',team:'argentina',tc:'#00BFFF',code:'THE GOAT ETERNAL',real:'Lionel Messi',num:'10',role:'God Emperor',
   stats:{SKL:99,VIS:99,FIN:97,CHO:99,AUR:100,AUT:98},
   skills:[{n:'SKILL',v:99},{n:'VISION',v:99},{n:'FINISH',v:97},{n:'AURA',v:100}],
   weapon:'DIVINE DRIBBLE SEQ',aura:10,sig:'THE ETERNAL CARRY',
   sigD:'Single-handedly neutralizes entire defensive systems. A 60m run through 4 defenders that leaves sports scientists baffled.',
   rival:'Kylian Mbappé',str:'Everything. Literally everything. The game bends to his will.',wk:'Mortality. Eventually.',
   image:'./images/messi.webp'},
  {id:'mbappe',team:'france',tc:'#4488FF',code:'LIGHTSPEED',real:'Kylian Mbappé',num:'10',role:'Velocity God',
   stats:{SPD:99,FIN:95,DRB:93,STR:88,AUR:92,CHO:90},
   skills:[{n:'SPEED',v:99},{n:'FINISH',v:95},{n:'DRIBBLE',v:93},{n:'STRENGTH',v:88}],
   weapon:'ABSOLUTE ACCEL',aura:9,sig:'LIGHTSPEED BREAK',
   sigD:'Reaches 37km/h within 3 touches. By the time defenders process the run, the ball is in the net. Pure physics violation.',
   rival:'Lionel Messi',str:'Fastest alive, ice-cold vs keeper, impossible to track at pace',wk:'Less effective vs ultra-deep blocks',
   image:'./images/mbappe.jpg'},
{id:'neuer',team:'germany',tc:'#FFCE00',code:'THE TITAN',real:'Manuel Neuer',num:'1',role:'Gatekeeper Prime',
   stats:{REF:95,POS:98,PAS:92,AUR:99,CHO:88,PHY:94},
   skills:[{n:'REFLEXES',v:95},{n:'POSITIONING',v:98},{n:'DISTRIBUTION',v:92},{n:'AURA',v:99}],
   weapon:'THE ABSOLUTE WALL',aura:10,sig:"SWEEPER'S DOMAIN",
   sigD:'Abandons the penalty box entirely to intercept attacks near the midfield line. He doesn’t just save shots; he completely shatters the psychological will of the striker before they even shoot.',
   rival:'Lionel Messi',str:'God-tier shot stopping, terrifying psychological dominance, plays as an 11th outfield player',wk:'Extreme high-line positioning leaves a narrow window for surgical, long-range lobs',
   image:'./images/neuer.jpg'},
    {id:'yamal',team:'spain',tc:'#C60B1E',code:'THE PRODIGY',real:'Lamine Yamal',num:'19',role:'Reality Bender',
   stats:{DRB:97,SPD:93,VIS:91,FIN:88,AUR:92,CHO:87},
   skills:[{n:'DRIBBLE',v:97},{n:'SPEED',v:93},{n:'VISION',v:91},{n:'FINISH',v:88}],
   weapon:'THE IMPOSSIBLE CUT',aura:9,sig:'PRODIGY BURST',
   sigD:'A sudden direction change so sharp it violates biomechanics. Born 2007 — already breaking defenders born 1995.',
   rival:'Florian Wirtz',str:'Age-defying composure, unpredictable, elite in clutch moments',wk:'Still stress-tested at tournament level',
   image:'./images/lamine_yamal.jpg'},
  {id:'bellingham',team:'england',tc:'#FFD700',code:'KING JUDE',real:'Jude Bellingham',num:'10',role:'Supreme Commander',
   stats:{PHY:94,VIS:93,FIN:89,LDR:98,AUR:94,CHO:96},
   skills:[{n:'PHYSICAL',v:94},{n:'VISION',v:93},{n:'FINISHING',v:89},{n:'LEADERSHIP',v:98}],
   weapon:'TOTAL BOX INVASION',aura:9,sig:"THE KING'S CHARGE",
   sigD:'A late run from midfield creating an impossible numerical advantage. Arrives at the perfect moment, scores the impossible goal.',
   rival:'Eduardo Camavinga',str:'Box-to-box dominance, elite in big moments, impossible to man-mark',wk:'Carries the entire team — exhausting across a tournament',
   image:'./images/jude.jpg'},
{id:'salah',team:'egypt',tc:'#FF0000',code:'THE PHARAOH',real:'Mohamed Salah',num:'11',role:'Solar Assassin',
   stats:{SPD:94,DRB:92,FIN:96,TEC:91,AUR:94,CHO:88},
   skills:[{n:'SPEED',v:94},{n:'FINISH',v:96},{n:'DRIBBLE',v:92},{n:'AURA',v:94}],
   weapon:'THE SOLAR CUT',aura:9,sig:'WRATH OF RA',
   sigD:'Cuts in from the right flank with blinding, heat-distorting velocity. He bends the ball into the far corner using a left foot that violates standard aerodynamics. A divine execution.',
   rival:'Sadio Mané',str:'Lethal left-foot precision, unbreakable focus, elite penalty-box gravity',wk:'Over-reliance on the right channel; vulnerable if the midfield supply line is severed'
   ,image:'./images/salah.jpg'},
  {id:'ronaldo',team:'portugal',tc:'#FFFFFF',code:'CR7 ETERNAL',real:'Cristiano Ronaldo',num:'7',role:'Legend Avatar',
   stats:{FIN:96,PHY:93,HED:99,AUR:98,CHO:95,LDR:97},
   skills:[{n:'FINISH',v:96},{n:'PHYSICAL',v:93},{n:'HEADING',v:99},{n:'AURA',v:98}],
   weapon:'THE SIUUU SHOT',aura:10,sig:'LAST LEGEND STANDS',
   sigD:'When the world says it\'s over — the machine refuses to stop. A final-minute goal from an angle that should be physically impossible.',
   rival:'Lionel Messi',str:'Supernatural heading, elite set-pieces, tournament experience unmatched',wk:'Age — the only enemy he cannot defeat with training',
   image:'./images/ronaldo.jpg'}
];


const BRACKET = {
  r16: [
    { a: { f:'🇧🇷', n:'Brazil' }, b:{ f:'🇺🇸', n:'USA' } },
    { a: { f:'🇦🇷', n:'Argentina' }, b:{ f:'🇳🇱', n:'Netherlands' } },
    { a: { f:'🇫🇷', n:'France' }, b:{ f:'🇲🇦', n:'Morocco' } },
    { a: { f:'🇩🇪', n:'Germany' }, b:{ f:'🇮🇹', n:'Italy' } },
    { a: { f:'🇪🇸', n:'Spain' }, b:{ f:'🇭🇷', n:'Croatia' } },
    { a: { f:'🏴', n:'England' }, b:{ f:'🇰🇷', n:'South Korea' } },
    { a: { f:'🇯🇵', n:'Japan' }, b:{ f:'🇲🇽', n:'Mexico' } },
    { a: { f:'🇵🇹', n:'Portugal' }, b:{ f:'🇧🇪', n:'Belgium' } }
  ],
  qf: Array.from({ length: 4 }, () => ({ a:null, b:null })),
  sf: Array.from({ length: 2 }, () => ({ a:null, b:null })),
  final: [{ a:null, b:null }]
};

/* ════ THREE.JS ════ */
function initThree(){
  const canvas=document.getElementById('hero-canvas');
  const R=new THREE.WebGLRenderer({canvas,alpha:true,antialias:false,powerPreference:'high-performance'});
  R.setPixelRatio(Math.min(window.devicePixelRatio,2));
  R.setSize(window.innerWidth,window.innerHeight);
  R.setClearColor(0,0);
  const scene=new THREE.Scene();
  const cam=new THREE.PerspectiveCamera(65,window.innerWidth/window.innerHeight,0.1,1000);
  cam.position.z=28;
  const N=3500,pos=new Float32Array(N*3),col=new Float32Array(N*3),sz=new Float32Array(N);
  const palettes=[[0,0.94,1],[0.56,0,1],[1,0.72,0],[1,0,0.18]];
  for(let i=0;i<N;i++){
    pos[i*3]=(Math.random()-.5)*110;pos[i*3+1]=(Math.random()-.5)*110;pos[i*3+2]=(Math.random()-.5)*70;
    const c=palettes[Math.floor(Math.random()*palettes.length)];
    col[i*3]=c[0];col[i*3+1]=c[1];col[i*3+2]=c[2];
    sz[i]=Math.random()*1.8+.3;
  }
  const geo=new THREE.BufferGeometry();
  geo.setAttribute('position',new THREE.BufferAttribute(pos,3));
  geo.setAttribute('color',new THREE.BufferAttribute(col,3));
  geo.setAttribute('size',new THREE.BufferAttribute(sz,1));
  const mat=new THREE.PointsMaterial({size:.12,vertexColors:true,transparent:true,opacity:.5,
    sizeAttenuation:true,blending:THREE.AdditiveBlending});
  const pts=new THREE.Points(geo,mat);
  scene.add(pts);
  let mx=0,my=0,t=0;
  document.addEventListener('mousemove',e=>{mx=(e.clientX/window.innerWidth-.5)*2;my=(e.clientY/window.innerHeight-.5)*2});
  window.addEventListener('resize',()=>{cam.aspect=window.innerWidth/window.innerHeight;cam.updateProjectionMatrix();R.setSize(window.innerWidth,window.innerHeight)});
  (function tick(){requestAnimationFrame(tick);t+=.0008;
    pts.rotation.y=t*.04+mx*.04;pts.rotation.x=t*.015-my*.025;
    mat.opacity=.3+Math.sin(t*1.5)*.08;
    R.render(scene,cam);
  })();
}

/* ════ CURSOR ════ */
function initCursor(){
  const cur=document.getElementById('cur'),ring=document.getElementById('cur-r');
  const TRAIL=10;
  const trails=Array.from({length:TRAIL},(_,i)=>{
    const d=document.createElement('div');d.className='cur-trail';
    d.style.cssText=`width:${6-i*.4}px;height:${6-i*.4}px;position:fixed;border-radius:50%;pointer-events:none;z-index:9999;transform:translate(-50%,-50%);background:var(--ambient);opacity:${.12-i*.01};transition:background .4s`;
    document.body.appendChild(d);return{el:d,x:0,y:0};
  });
  let mx=window.innerWidth/2,my=window.innerHeight/2,rx=mx,ry=my;
  const tPos=Array.from({length:TRAIL},()=>({x:mx,y:my}));
  document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY});
  document.addEventListener('mousedown',()=>document.body.classList.add('clicking'));
  document.addEventListener('mouseup',()=>document.body.classList.remove('clicking'));
  (function tick(){
    rx+=(mx-rx)*.18;ry+=(my-ry)*.18;
    cur.style.left=mx+'px';cur.style.top=my+'px';
    ring.style.left=rx+'px';ring.style.top=ry+'px';
    tPos.unshift({x:mx,y:my});tPos.length=TRAIL;
    trails.forEach((t,i)=>{
      t.x+=(tPos[i].x-t.x)*.25;t.y+=(tPos[i].y-t.y)*.25;
      t.el.style.left=t.x+'px';t.el.style.top=t.y+'px';
    });
    requestAnimationFrame(tick);
  })();
}

/* ════ AMBIENT LIGHTING ════ */
function setAmbient(color,dim){
  document.documentElement.style.setProperty('--ambient',color);
  document.documentElement.style.setProperty('--ambient-a',dim||color+'33');
  document.documentElement.style.setProperty('--ambient-b',dim||color+'0A');
  document.querySelector('.abl-ring').style.background=`radial-gradient(circle,${color}0A 0%,transparent 65%)`;
  document.querySelector('nav .f-logo b, .nav-logo b') && (document.querySelector('.nav-logo b').style.color=color);
  document.querySelectorAll('.hud-c::before,.hud-c::after').forEach(()=>{});
  // update HUD corners via CSS var
}

/* ════ ENERGY BURST ════ */
const bc=document.getElementById('burst-canvas');
const bctx=bc.getContext('2d');
bc.width=window.innerWidth;bc.height=window.innerHeight;
window.addEventListener('resize',()=>{bc.width=window.innerWidth;bc.height=window.innerHeight});
const bursts=[];
function spawnBurst(x,y,color){
  const particles=Array.from({length:18},()=>({
    x,y,vx:(Math.random()-.5)*12,vy:(Math.random()-.5)*12,
    life:1,size:Math.random()*3+1,color
  }));
  bursts.push(...particles);
  // ring
  bursts.push({x,y,vx:0,vy:0,life:1,ring:true,r:0,color});
}
function animBursts(){
  requestAnimationFrame(animBursts);
  bctx.clearRect(0,0,bc.width,bc.height);
  for(let i=bursts.length-1;i>=0;i--){
    const b=bursts[i];b.life-=.04;
    if(b.life<=0){bursts.splice(i,1);continue}
    if(b.ring){
      b.r+=6;bctx.beginPath();bctx.arc(b.x,b.y,b.r,0,Math.PI*2);
      bctx.strokeStyle=b.color;bctx.globalAlpha=b.life*.5;bctx.lineWidth=1.5;bctx.stroke();
    } else {
      b.x+=b.vx*b.life;b.y+=b.vy*b.life;
      bctx.beginPath();bctx.arc(b.x,b.y,b.size*b.life,0,Math.PI*2);
      bctx.fillStyle=b.color;bctx.globalAlpha=b.life;bctx.fill();
    }
    bctx.globalAlpha=1;
  }
}
animBursts();

/* ════ LOADER ════ */
function initLoader(){
  const words=['WORLD','CUP','2026'];
  const ids=['ld-word1','ld-word2','ld-word3'];
  words.forEach((w,wi)=>{
    const el=document.getElementById(ids[wi]);
    w.split('').forEach((ch,ci)=>{
      const s=document.createElement('span');s.className='ld-char';s.textContent=ch;
      s.style.animationDelay=(.5+wi*.3+ci*.04)+'s';
      s.style.animation=`char-in .5s ${.5+wi*.3+ci*.04}s var(--ease-out) forwards`;
      el.appendChild(s);
    });
  });
  setTimeout(()=>{
    gsap.to('#wipe',{clipPath:'polygon(0 0,100% 0,100% 100%,0 100%)',duration:.7,ease:'power3.inOut',
      onComplete:()=>{
        gsap.to('#loader',{opacity:0,duration:.01,onComplete:()=>{document.getElementById('loader').style.display='none'}});
        gsap.to('#wipe',{clipPath:'polygon(100% 0,100% 0,100% 100%,100% 100%)',duration:.7,ease:'power3.inOut'});
        gsap.to('#chroma',{opacity:.6,duration:.1,yoyo:true,repeat:1,onComplete:()=>gsap.to('#chroma',{opacity:0,duration:.4})});
        initHero();
      }
    });
  },3600);
}

/* ════ HERO ════ */
/* ════ HERO ════ */
function initHero(){
  document.getElementById('navbar').classList.add('vis');
  // light beams
  const beamsEl=document.getElementById('hero-beams');
  for(let i=0;i<12;i++){
    const b=document.createElement('div');b.className='beam';
    const h=40+Math.random()*30;
    b.innerHTML=`<div class="beam-inner" style="height:${h}vh"></div>`;
    b.style.cssText=`transform:rotate(${i*30+Math.random()*10}deg) translateX(-50%);animation-delay:${i*.3}s;left:${20+Math.random()*60}%;bottom:50%;width:1px;position:absolute;transform-origin:center bottom`;
    beamsEl.appendChild(b);
  }
  const tl=gsap.timeline();
  tl.to('#hero-eyebrow',{opacity:1,y:0,duration:.7,ease:'power2.out'})
    .call(()=>{
      ['ht0','ht1','ht2','ht3'].forEach((id,i)=>setTimeout(()=>document.getElementById(id).classList.add('vis'),i*130));
    },[],'+=.1')
    .to('#hero-fb',{opacity:1,duration:.9,ease:'power2.out'},'+=.2')
    // Removed the #hero-sub animation here!
    .to('#hero-ctas',{opacity:1,y:0,duration:.6,ease:'power2.out'},'-=.3')
    .to('#scroll-ind',{opacity:1,duration:.4},'-=.2');
  // parallax on scroll
  gsap.to('#hero-title',{yPercent:-15,ease:'none',
    scrollTrigger:{trigger:'#hero',start:'top top',end:'bottom top',scrub:1}});
  gsap.to('#hero-fb',{yPercent:-25,ease:'none',
    scrollTrigger:{trigger:'#hero',start:'top top',end:'bottom top',scrub:1}});
  gsap.to('#hero-eyebrow',{yPercent:-30,opacity:0,ease:'none',
    scrollTrigger:{trigger:'#hero',start:'30% top',end:'80% top',scrub:1}});
}

/* ════ TEAMS RENDER ════ */
function renderTeams(){
  const g=document.getElementById('teams-grid');
  T.forEach((t,i)=>{
    const tc=`t-${t.threat.toLowerCase().replace('+','-plus').replace('a+','ap')}`.replace('s-plus','sp');
    const threatClass=t.threat==='S+'?'t-sp':t.threat==='S'?'t-s':t.threat==='A+'?'t-ap':'t-a';
g.insertAdjacentHTML('beforeend',`
    <div class="tc" id="tc-${t.id}" onclick="this.classList.toggle('flipped')" style="--team-color:${t.color}">
      <div class="tc-inner">
        
        <div class="tc-front">
          <img src="${t.flagUrl}" class="tc-bg-flag" alt="${t.name} Flag">
          
          <div class="tc-aura" id="aura-${t.id}" style="background:radial-gradient(circle,${t.color}22,transparent 70%)"></div>
          <div class="tc-top-line" id="tl-${t.id}" style="background:linear-gradient(90deg,transparent,${t.color},transparent)"></div>
          <div class="tc-sheen"></div>
          
          <div class="tc-rank">
            <span>FACTION #${i+1}</span>
            <span class="threat ${threatClass}">THREAT: ${t.threat}</span>
          </div>
          
          <span class="tc-faction" style="margin-top: auto;">${t.faction}</span>
          <div class="tc-name">${t.name}</div>
          
          <div class="tc-cta" style="color:${t.color}; margin-top: 24px;">
            <span>DECRYPT INTEL</span><span>↻</span>
          </div>
        </div>

        <div class="tc-back">
          <div class="tc-rank">
            <span style="color:${t.color}">${t.name}</span>
            <span class="threat ${threatClass}">INTEL</span>
          </div>
          
          <p class="tc-style" style="color:var(--text); font-size: 14px; margin-bottom: 12px;">${t.style}</p>
          <p style="font-family:var(--font-b); font-size: 12px; color:var(--muted); line-height: 1.6; margin-bottom: 24px;">
            ${t.lore}
          </p>
          
          <div class="tc-stats" style="margin-top: auto;">
            <div class="ts"><span class="ts-v" style="color:${t.color}">${t.stats.atk}</span><div class="ts-l">ATK</div></div>
            <div class="ts"><span class="ts-v" style="color:${t.color}">${t.stats.def}</span><div class="ts-l">DEF</div></div>
            <div class="ts"><span class="ts-v" style="color:${t.color}">${t.stats.chaos}</span><div class="ts-l">CHAOS</div></div>
          </div>
          
          <button class="btn-mag" onclick="event.stopPropagation(); openTeamModal('${t.id}')" 
                  style="width: 100%; padding: 12px; margin-top: 16px; background: transparent; border: 1px solid ${t.color}; color: ${t.color}; cursor: none; font-size: 10px;">
            ACCESS TERMINAL
          </button>
        </div>
        
      </div>
    </div>`);
    // 3D tilt + sheen + ambient
    const card=document.getElementById(`tc-${t.id}`);
    card.addEventListener('mousemove',e=>{
      const r=card.getBoundingClientRect();
      const x=(e.clientX-r.left)/r.width-.5;
      const y=(e.clientY-r.top)/r.height-.5;
      card.style.transform=`perspective(900px) rotateX(${-y*10}deg) rotateY(${x*10}deg) translateZ(8px)`;
      card.style.transition='transform .05s';
      const s=card.querySelector('.tc-sheen');
      s.style.setProperty('--mx',((x+.5)*100)+'%');s.style.setProperty('--my',((y+.5)*100)+'%');s.style.opacity=1;
      setAmbient(t.color);
    });
    card.addEventListener('mouseleave',()=>{
      card.style.transform='';card.style.transition='transform .7s var(--ease-out)';
      card.querySelector('.tc-sheen').style.opacity=0;
      setAmbient('#00F0FF');
    });
    card.addEventListener('mouseenter',()=>{
      document.getElementById(`aura-${t.id}`).style.opacity='.8';
      document.getElementById(`tl-${t.id}`).style.transform='scaleX(1)';
      spawnBurst(card.getBoundingClientRect().left+card.offsetWidth/2,card.getBoundingClientRect().top+card.offsetHeight/3,t.color);
    });
    card.addEventListener('mouseleave',()=>{
      document.getElementById(`aura-${t.id}`).style.opacity='0';
      document.getElementById(`tl-${t.id}`).style.transform='scaleX(0)';
    });
  });
  scrollReveal('.tc');
}

/* ════ PLAYERS RENDER ════ */
function renderPlayers(){
  const g=document.getElementById('players-grid');
  P.forEach(p=>{
    const aurab=Array.from({length:10},(_,i)=>`<div class="pca-bar" style="${i<p.aura?`background:${p.tc};box-shadow:0 0 6px ${p.tc}`:''}" ></div>`).join('');
    const stats4=Object.entries(p.stats).slice(0,4);
    const statsHtml=stats4.map(([k,v])=>`<div class="pcs"><span class="pcs-v" style="color:${p.tc}">${v}</span><div class="pcs-l">${k}</div></div>`).join('');
    const skillsHtml=p.skills.map(s=>`
      <div class="pb-row">
        <span class="pb-label">${s.n}</span>
        <div class="pb-track"><div class="pb-fill" data-v="${s.v}" style="background:linear-gradient(90deg,${p.tc},${p.tc}80);box-shadow:0 0 8px ${p.tc}80"></div></div>
        <span class="pb-val">${s.v}</span>
      </div>`).join('');
    g.insertAdjacentHTML('beforeend',`
    <div class="pc" id="pc-${p.id}" onclick="openPlayerModal('${p.id}')" style="--pc:${p.tc};--pc-color:${p.tc}">
      <div class="pc-particles"></div>
      <div class="pc-sheen"></div><div class="pc-holo"></div>
<div class="pc-nb">${p.num}</div>

<div class="pc-img-wrap">
  <img src="${p.image}" class="pc-img">
  <div class="pc-img-glow"></div>
</div>

<div class="pc-team" style="color:${p.tc}">
  ${T.find(t=>t.id===p.team).faction}
</div>

<div class="pc-code" style="color:${p.tc}">
  ${p.code}
</div>
      <div class="pc-name">${p.real}</div>
      <div class="pc-role" style="border-color:${p.tc};color:${p.tc}">${p.role}</div>
      <div class="pc-stats">${statsHtml}</div>
      <div class="pc-bars">${skillsHtml}</div>
      <div class="pc-weapon" style="background:${p.tc}0A;border-color:${p.tc}">
        <div class="pcw-l">// SPECIAL WEAPON</div>
        <div class="pcw-n" style="color:${p.tc}">${p.weapon}</div>
      </div>
      <div class="pc-aura">
        <span class="pca-l">AURA</span>
        <div class="pca-bars">${aurab}</div>
        <span style="font-family:var(--font-ui);font-size:9px;color:${p.tc}">${p.aura}/10</span>
      </div>
    </div>`);
    // tilt + sheen
    const card=document.getElementById(`pc-${p.id}`);
    card.addEventListener('mousemove',e=>{
      const r=card.getBoundingClientRect();
      const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
      card.style.transform=`perspective(800px) rotateX(${-y*8}deg) rotateY(${x*8}deg) translateZ(10px)`;
      card.style.transition='transform .05s';
      card.querySelector('.pc-sheen').style.setProperty('--mx',((x+.5)*100)+'%');
      card.querySelector('.pc-sheen').style.setProperty('--my',((y+.5)*100)+'%');
      setAmbient(p.tc);
    });
    card.addEventListener('mouseleave',()=>{
      card.style.transform='';card.style.transition='transform .6s var(--ease-out)';
      setAmbient('#00F0FF');
    });
  });
  scrollReveal('.pc');
  skillBarsObserver();
}

/* ════ MAGNETIC BUTTONS ════ */
function initMagnetic(){
  document.querySelectorAll('.btn-mag').forEach(btn=>{
    btn.addEventListener('mousemove',e=>{
      const r=btn.getBoundingClientRect();
      const x=e.clientX-r.left-r.width/2,y=e.clientY-r.top-r.height/2;
      btn.style.transform=`translate(${x*.25}px,${y*.25}px)`;
      btn.style.transition='transform .1s';
    });
    btn.addEventListener('mouseleave',()=>{
      btn.style.transform='';btn.style.transition='transform .6s var(--ease-out)';
    });
  });
}

/* ════ SCROLL REVEAL ════ */
function scrollReveal(sel){
  const io=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        const all=[...document.querySelectorAll(sel)];
        const idx=all.indexOf(e.target);
        setTimeout(()=>{
          e.target.style.opacity='1';e.target.style.transform='none';
          e.target.style.transition='opacity .7s ease,transform .8s var(--ease-out)';
        },idx*60);
        io.unobserve(e.target);
      }
    });
  },{threshold:.08,rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll(sel).forEach(el=>io.observe(el));
}

function skillBarsObserver(){
  const io=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.querySelectorAll('.pb-fill').forEach(f=>{
          setTimeout(()=>{f.style.width=f.dataset.v+'%'},200);
        });
        io.unobserve(e.target);
      }
    });
  },{threshold:.2});
  document.querySelectorAll('.pc').forEach(el=>io.observe(el));
}

/* ════ RADAR CHART ════ */
function drawRadar(canvas,stats,color){
  const ctx=canvas.getContext('2d');
  const W=canvas.width,H=canvas.height,cx=W/2,cy=H/2;
  const R=Math.min(cx,cy)*.72;
  const keys=Object.keys(stats),vals=Object.values(stats),n=keys.length;
  ctx.clearRect(0,0,W,H);
  // rings
  for(let r=1;r<=5;r++){
    ctx.beginPath();
    for(let i=0;i<n;i++){
      const a=(i/n)*Math.PI*2-Math.PI/2;
      const ri=(r/5)*R;
      i===0?ctx.moveTo(cx+Math.cos(a)*ri,cy+Math.sin(a)*ri):ctx.lineTo(cx+Math.cos(a)*ri,cy+Math.sin(a)*ri);
    }
    ctx.closePath();ctx.strokeStyle='rgba(255,255,255,0.05)';ctx.lineWidth=1;ctx.stroke();
  }
  // axes
  for(let i=0;i<n;i++){
    const a=(i/n)*Math.PI*2-Math.PI/2;
    ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(cx+Math.cos(a)*R,cy+Math.sin(a)*R);
    ctx.strokeStyle='rgba(255,255,255,0.08)';ctx.stroke();
  }
  // labels
  ctx.font='500 9px Orbitron,sans-serif';ctx.fillStyle='rgba(160,160,200,0.8)';ctx.textAlign='center';
  for(let i=0;i<n;i++){
    const a=(i/n)*Math.PI*2-Math.PI/2;
    ctx.fillText(keys[i],cx+Math.cos(a)*(R+22),cy+Math.sin(a)*(R+22)+4);
  }
  // animate data
  let progress=0;
  function draw(p){
    ctx.clearRect(0,0,W,H);
    for(let r=1;r<=5;r++){
      ctx.beginPath();
      for(let i=0;i<n;i++){const a=(i/n)*Math.PI*2-Math.PI/2,ri=(r/5)*R;i===0?ctx.moveTo(cx+Math.cos(a)*ri,cy+Math.sin(a)*ri):ctx.lineTo(cx+Math.cos(a)*ri,cy+Math.sin(a)*ri)}
      ctx.closePath();ctx.strokeStyle='rgba(255,255,255,0.05)';ctx.lineWidth=1;ctx.stroke();
    }
    for(let i=0;i<n;i++){const a=(i/n)*Math.PI*2-Math.PI/2;ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(cx+Math.cos(a)*R,cy+Math.sin(a)*R);ctx.strokeStyle='rgba(255,255,255,0.08)';ctx.stroke()}
    ctx.font='500 9px Orbitron,sans-serif';ctx.fillStyle='rgba(160,160,200,0.8)';ctx.textAlign='center';
    for(let i=0;i<n;i++){const a=(i/n)*Math.PI*2-Math.PI/2;ctx.fillText(keys[i],cx+Math.cos(a)*(R+22),cy+Math.sin(a)*(R+22)+4)}
    // data
    ctx.beginPath();
    for(let i=0;i<n;i++){
      const a=(i/n)*Math.PI*2-Math.PI/2,ri=(vals[i]/100)*R*p;
      i===0?ctx.moveTo(cx+Math.cos(a)*ri,cy+Math.sin(a)*ri):ctx.lineTo(cx+Math.cos(a)*ri,cy+Math.sin(a)*ri);
    }
    ctx.closePath();
    ctx.fillStyle=color+'18';ctx.fill();
    ctx.strokeStyle=color;ctx.lineWidth=1.5;ctx.shadowColor=color;ctx.shadowBlur=8;ctx.stroke();ctx.shadowBlur=0;
    for(let i=0;i<n;i++){
      const a=(i/n)*Math.PI*2-Math.PI/2,ri=(vals[i]/100)*R*p;
      ctx.beginPath();ctx.arc(cx+Math.cos(a)*ri,cy+Math.sin(a)*ri,3,0,Math.PI*2);
      ctx.fillStyle=color;ctx.shadowColor=color;ctx.shadowBlur=6;ctx.fill();ctx.shadowBlur=0;
    }
  }
  (function anim(){if(progress<1){progress=Math.min(1,progress+.025);draw(progress);requestAnimationFrame(anim)}else draw(1)})();
}

/* ════ MODALS ════ */
function openTeamModal(id){
  const t=T.find(x=>x.id===id);
  const players=P.filter(p=>p.team===id);
  const inner=document.getElementById('modal-inner');
  inner.innerHTML=`
    <div style="display:flex;align-items:start;gap:20px;margin-bottom:12px">
      <span style="font-size:64px;filter:drop-shadow(0 0 24px ${t.color})">${t.flag}</span>
      <div>
        <div style="font-family:var(--font-ui);font-size:8px;letter-spacing:.3em;color:${t.color};margin-bottom:6px">${t.faction}</div>
        <h2 style="font-family:var(--font-d);font-size:clamp(44px,5.5vw,72px);line-height:.9;letter-spacing:.03em">${t.name}</h2>
        <div style="font-family:var(--font-b);font-size:13px;color:var(--muted);font-weight:300;margin-top:4px">${t.style}</div>
      </div>
    </div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin:24px 0">
      ${[['ATTACK',t.stats.atk,t.color],['DEFENSE',t.stats.def,'var(--cyan)'],['CHAOS',t.stats.chaos,'var(--gold)']].map(([l,v,c])=>`
        <div style="text-align:center;padding:16px;background:rgba(255,255,255,.025);border:1px solid rgba(255,255,255,.05)">
          <div style="font-family:var(--font-ui);font-size:28px;font-weight:700;color:${c}">${v}</div>
          <div style="font-family:var(--font-ui);font-size:7px;letter-spacing:.2em;color:var(--muted);margin-top:4px">${l}</div>
        </div>`).join('')}
    </div>
    <div style="margin-bottom:20px">
      <div class="m-sec-title">// FACTION LORE</div>
      <p style="font-family:var(--font-b);font-size:14px;color:var(--muted);line-height:1.75;font-weight:300">${t.lore}</p>
    </div>
    <div style="margin-bottom:28px">
      <div class="m-sec-title">// TACTICAL PROTOCOL</div>
      <p style="font-family:var(--font-b);font-size:14px;color:var(--muted);line-height:1.75;font-weight:300">${t.tactic}</p>
    </div>
    ${players.length?`<div class="m-sec-title">// OPERATIVE ROSTER</div>
    ${players.map(p=>`
      <div style="display:flex;align-items:center;justify-content:space-between;padding:14px;
        background:rgba(255,255,255,.018);border:1px solid rgba(255,255,255,.04);margin-bottom:8px;
        cursor:none;transition:border-color .3s;position:relative;overflow:hidden"
        onmouseenter="this.style.borderColor='${p.tc}44'" onmouseleave="this.style.borderColor='rgba(255,255,255,.04)'"
        onclick="closeModal();setTimeout(()=>openPlayerModal('${p.id}'),350)">
        <div>
          <div style="font-family:var(--font-d);font-size:22px;letter-spacing:.04em;color:${p.tc}">${p.code}</div>
          <div style="font-family:var(--font-b);font-size:12px;color:var(--muted)">${p.real} · ${p.role}</div>
        </div>
        <div style="font-family:var(--font-ui);font-size:8px;letter-spacing:.22em;color:${p.tc}">VIEW →</div>
      </div>`).join('')}`:''}`;
  openModal();
  setAmbient(t.color);
}

function openPlayerModal(id){
  const p=P.find(x=>x.id===id);
  const t=T.find(x=>x.id===p.team);
  const aurab=Array.from({length:10},(_,i)=>`<div class="pca-bar" style="height:10px;${i<p.aura?`background:${p.tc};box-shadow:0 0 6px ${p.tc}`:''}" ></div>`).join('');
  const skills4=p.skills.map(s=>`
    <div class="pb-row">
      <span class="pb-label">${s.n}</span>
      <div class="pb-track"><div class="pb-fill" data-v="${s.v}" style="width:${s.v}%;background:linear-gradient(90deg,${p.tc},${p.tc}70);box-shadow:0 0 8px ${p.tc}60"></div></div>
      <span class="pb-val">${s.v}</span>
    </div>`).join('');
  document.getElementById('modal-inner').innerHTML=`
    <div class="modal-header">
      <div>
        <div style="font-family:var(--font-ui);font-size:8px;letter-spacing:.3em;color:${p.tc};margin-bottom:8px">${t.flag} ${t.faction}</div>
        <div class="m-code" style="color:${p.tc}">${p.code}</div>
        <div class="m-name">${p.real}</div>
        <div style="margin-top:12px;display:flex;align-items:center;gap:10px">
          <span class="pc-role" style="border-color:${p.tc};color:${p.tc};display:inline-block">${p.role}</span>
        </div>
      </div>
      <div class="m-aura-vis" style="--pc:${p.tc}">
        <div class="ar" style="border-color:${p.tc};box-shadow:0 0 16px ${p.tc}44"></div>
        <div class="ar" style="border-color:${p.tc}80"></div>
        <div class="ar" style="border-color:${p.tc}40"></div>
        <div class="ar-val" style="color:${p.tc}">${p.aura}</div>
      </div>
    </div>
    <div class="m-grid">
      <div>
        <div class="m-sec-title">// STAT ANALYSIS</div>
        ${p.skills.map(s=>`<div class="m-stat-row"><span class="m-sk">${s.n}</span><span class="m-sv" style="color:${p.tc}">${s.v}</span></div>`).join('')}
        <div style="margin-top:16px">
          <div class="m-sec-title" style="margin-top:4px">AURA METER</div>
          <div class="pca-bars" style="gap:4px;height:10px">${aurab}</div>
        </div>
      </div>
      <div>
        <div class="m-sec-title">// RADAR CHART</div>
        <div class="radar-wrap"><canvas class="radar-canvas" id="rc-${p.id}" width="260" height="260"></canvas></div>
      </div>
    </div>
    <div class="m-sec-title">// SKILL BARS</div>
    <div style="margin-bottom:28px">${skills4}</div>
    <div class="sig-card">
      <div class="sig-anim"></div>
      <div class="sig-label">// SIGNATURE MOVE · CLASSIFIED</div>
      <div class="sig-name" style="color:${p.tc}">${p.sig}</div>
      <div class="sig-desc">${p.sigD}</div>
    </div>
    <div class="m-grid">
      <div>
        <div class="m-sec-title">// STRENGTHS</div>
        <p style="font-family:var(--font-b);font-size:13px;color:var(--muted);line-height:1.7;font-weight:300">${p.str}</p>
      </div>
      <div>
        <div class="m-sec-title">// WEAKNESSES</div>
        <p style="font-family:var(--font-b);font-size:13px;color:var(--muted);line-height:1.7;font-weight:300">${p.wk}</p>
      </div>
    </div>
    <div class="rivalry-c">
      <div class="rv-vs">⚔</div>
      <div><div class="rv-label">// PRIMARY RIVALRY</div><div class="rv-name">${p.rival}</div></div>
    </div>`;
  openModal();
  setAmbient(p.tc);
  setTimeout(()=>drawRadar(document.getElementById(`rc-${p.id}`),p.stats,p.tc),300);
}

function openModal(){
  const m=document.getElementById('main-modal');m.classList.add('open');
  gsap.to('#chroma',{opacity:.4,duration:.1,yoyo:true,repeat:1,onComplete:()=>gsap.to('#chroma',{opacity:0,duration:.3})});
}
function closeModal(){
  document.getElementById('main-modal').classList.remove('open');
  setAmbient('#00F0FF');
}
document.getElementById('main-modal').addEventListener('click',e=>{if(e.target===e.currentTarget)closeModal()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});

/* ════ VS SYSTEM ════ */
let viA=0,viB=2;
/* ════ VS SYSTEM RENDER ════ */
/* ════ VS SYSTEM RENDER ════ */
function renderVS(){
  const a = T[viA], b = T[viB];
  
  document.getElementById('vaf').textContent = a.flag;
  document.getElementById('van').textContent = a.name;
  document.getElementById('vbf').textContent = b.flag;
  document.getElementById('vbn').textContent = b.name;
  
  const stats = [
    {l:'ATTACK', a:a.stats.atk, b:b.stats.atk},
    {l:'DEFENSE', a:a.stats.def, b:b.stats.def},
    {l:'CHAOS', a:a.stats.chaos, b:b.stats.chaos},
    {l:'OVERALL', a:Math.round((a.stats.atk+a.stats.def+a.stats.chaos)/3), b:Math.round((b.stats.atk+b.stats.def+b.stats.chaos)/3)}
  ];
  
  // 1. Build the HTML string completely
  document.getElementById('vs-comp').innerHTML = `<div class="vs-comp-grid">
    ${stats.map(s => {
      const aw = s.a > s.b, bw = s.b > s.a;
      return `
        <div class="vca${aw ? ' win' : ''}" style="color:${aw ? a.color : 'var(--muted)'}">${s.a}</div>
        <div class="vcm">${s.l}</div>
        <div class="vcb${bw ? ' win' : ''}" style="color:${bw ? b.color : 'var(--muted)'}">${s.b}</div>
        <div class="vs-ba" style="background:linear-gradient(to right,transparent,${a.color});opacity:${s.a/100}"></div>
        <div class="vs-null"></div>
        <div class="vs-bb" style="background:linear-gradient(to left,transparent,${b.color});opacity:${s.b/100}"></div>`;
    }).join('')}
  </div>`;

  // 2. NOW run the GSAP fix after the HTML is inserted
  gsap.set('#vs-comp', { opacity: 0, y: 40, scale: 0.98, pointerEvents: 'none' });
}

function cycleA(){viA=(viA+1)%T.length;if(viA===viB)viA=(viA+1)%T.length;renderVS();spawnBurst(document.getElementById('vs-a').getBoundingClientRect().left+160,window.innerHeight/2,T[viA].color)}
function cycleB(){viB=(viB+1)%T.length;if(viB===viA)viB=(viB+1)%T.length;renderVS();spawnBurst(document.getElementById('vs-b').getBoundingClientRect().left+160,window.innerHeight/2,T[viB].color)}

/* ════ DYNAMIC CLASH SEQUENCE (UPGRADED) ════ */
function triggerVS(){
  const countdown = document.getElementById('vs-countdown');
  const num = document.getElementById('vs-count-num');
  const a = T[viA], b = T[viB];

  // 1. Setup the Arena
  countdown.style.display = 'flex';
  gsap.set(countdown, { opacity: 0, backgroundColor: 'rgba(3,3,13,0)' });
  
  // Hide the stats box initially to build suspense
// Slam the container back into view
gsap.to('#vs-comp', { opacity: 1, y: 0, scale: 1, pointerEvents: 'auto', duration: 0.6, ease: 'back.out(1.5)' });
  
  // Darken the room
  gsap.to(countdown, { opacity: 1, backgroundColor: 'rgba(3,3,13,.98)', duration: 0.4 });

  const seq = [3, 2, 1];
  let i = 0;

  function next() {
    if (i >= seq.length) {
      // ════ THE IMPACT ════
      num.textContent = 'CLASH!';
      num.style.color = '#FFFFFF';
      // Mix both faction colors into the text shadow
      num.style.textShadow = `0 0 50px ${a.color}, 0 0 100px ${b.color}`;
      
      // Slam the text down
      gsap.fromTo(num, 
        { scale: 3, opacity: 1, filter: 'blur(15px)', letterSpacing: '0.2em' },
        { scale: 1, filter: 'blur(0px)', letterSpacing: '0.05em', duration: 0.15, ease: 'power4.in' }
      );

      // Violent Screen Shake
      gsap.to('body', { 
        x: () => Math.random() * 24 - 12, 
        y: () => Math.random() * 24 - 12, 
        duration: 0.05, 
        repeat: 6, 
        yoyo: true, 
        onComplete: () => gsap.set('body', {x: 0, y: 0}) 
      });

      // System Glitch & Heavy Chromatic Aberration
      gsap.to('#chroma', { opacity: 1, duration: 0.1, yoyo: true, repeat: 4 });
      
      // Dual-faction energy burst in the center of the screen
      for(let k = 0; k < 4; k++) {
        setTimeout(() => {
          spawnBurst(window.innerWidth/2 - 40, window.innerHeight/2, a.color);
          spawnBurst(window.innerWidth/2 + 40, window.innerHeight/2, b.color);
        }, k * 80);
      }

      // ════ THE AFTERMATH (STAT REVEAL) ════
      gsap.to(countdown, { 
        opacity: 0, 
        duration: 0.8, 
        delay: 0.6, 
        ease: 'power2.inOut',
        onComplete: () => {
          countdown.style.display = 'none';
          
          // Slam the container back into view
          gsap.to('#vs-comp', { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'back.out(1.5)' });
          
          // Animate the energy bars growing outward from the center!
          gsap.fromTo('.vs-ba, .vs-bb', 
            { scaleX: 0 }, 
            { 
              scaleX: 1, 
              // Team A grows right-to-left, Team B grows left-to-right
              transformOrigin: (index, target) => target.classList.contains('vs-ba') ? 'right center' : 'left center', 
              duration: 1.2, 
              ease: 'power3.out', 
              stagger: 0.1 
            }
          );
        }
      });
      return;
    }

    // ════ THE HEARTBEAT COUNTDOWN ════
    const val = seq[i]; 
    i++;
    num.textContent = val;
    num.style.color = 'var(--gold)';
    num.style.textShadow = '0 0 40px rgba(255,184,0,.5)';
    
    gsap.fromTo(num, 
      { scale: 1.8, opacity: 0, filter: 'blur(12px)' },
      { 
        scale: 1, opacity: 1, filter: 'blur(0px)', duration: 0.25, ease: 'back.out(2)', 
        onComplete: () => {
          // Shrink and fade before the next tick
          gsap.to(num, { scale: 0.7, opacity: 0, duration: 0.2, delay: 0.35, onComplete: next });
        }
      }
    );
  }
  
  // Kick off the sequence
  next();
}

/* ════ BRACKET ════ */
function renderBracket(){
  const wrap = document.getElementById('br-rounds');
  if (!wrap) return;
  wrap.innerHTML = '';

  const rounds = [
    { key: 'r16',   label: 'ROUND OF 16',  matches: BRACKET.r16 },
    { key: 'qf',    label: 'QUARTER FINALS', matches: BRACKET.qf },
    { key: 'sf',    label: 'SEMI FINALS',    matches: BRACKET.sf },
    { key: 'final', label: 'GRAND FINAL',    matches: BRACKET.final }
  ];

  rounds.forEach(round => {
    let html = `
      <div class="br-round">
        <div class="br-label">${round.label}</div>
    `;

round.matches.forEach((m, matchIdx) => {
  // Check our data to see who is currently selected to apply the glow class
  const selectedA = m.winner === 'a' ? 'selected' : '';
  const selectedB = m.winner === 'b' ? 'selected' : '';

  html += `
    <div class="br-match">
      <!-- Team A Slot -->
      <div
        class="br-team pickable ${selectedA}"
        onclick="pick('${round.key}', ${matchIdx}, 'a')"
      >
        <span>
          <span class="br-flag">${m.a?.f || ''}</span>
          ${m.a?.n || 'TBD'}
        </span>
      </div>

      <!-- Team B Slot -->
      <div
        class="br-team pickable ${selectedB}"
        onclick="pick('${round.key}', ${matchIdx}, 'b')"
      >
        <span>
          <span class="br-flag">${m.b?.f || ''}</span>
          ${m.b?.n || 'TBD'}
        </span>
      </div>

      ${m.note ? `<div class="br-note">${m.note}</div>` : ''}
    </div>
  `;
});

    html += '</div>';
    wrap.insertAdjacentHTML('beforeend', html);
  });

  // ════ Intersection Observers (Kept your exact animation logic) ════
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.querySelectorAll('.br-match').forEach((m, i) =>
          setTimeout(() => m.classList.add('vis'), i * 150)
        );
        io.unobserve(e.target);
      }
    });
  }, {threshold: .1});

  document.querySelectorAll('.br-round').forEach(el => io.observe(el));

  const io2 = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.classList.add('vis');
        io2.unobserve(e.target);
      }
    });
  }, {threshold: .3});

  const cb = document.getElementById('champ-banner');
  if(cb) io2.observe(cb);
}


/* ════ GSAP SCROLL ════ */
function initGSAP(){
  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray('.sec-head').forEach(el=>{
    gsap.from(el,{scrollTrigger:{trigger:el,start:'top 80%'},opacity:0,y:70,duration:1.1,ease:'power3.out'});
  });
  // section transition lighting
  const sections=['teams','players','vs-section','bracket'];
  sections.forEach((id,i)=>{
    const colors=['#00C851','#74ACDF','#FFB800','#00F0FF'];
    ScrollTrigger.create({
      trigger:`#${id}`,start:'top center',end:'bottom center',
      onEnter:()=>setAmbient(colors[i]),onEnterBack:()=>setAmbient(colors[i])
    });
  });
  // hero exit chromatic
  ScrollTrigger.create({
    trigger:'#hero',start:'80% top',
    onEnter:()=>{gsap.to('#chroma',{opacity:.3,duration:.2});setTimeout(()=>gsap.to('#chroma',{opacity:0,duration:.5}),300)}
  });
}

/* ════ HUD TIME ════ */
function initHUD(){
  function tick(){
    const now=new Date();
    const h=String(now.getHours()).padStart(2,'0'),m=String(now.getMinutes()).padStart(2,'0'),s=String(now.getSeconds()).padStart(2,'0');
    const el=document.getElementById('hud-time');if(el)el.textContent=`${h}:${m}:${s}`;
    requestAnimationFrame(tick);
  }
  tick();
}


/* ════ INIT ════ */
window.addEventListener('load',()=>{
  const isTouch = 'ontouchstart' in window;
  if (!isTouch) { initCursor(); initThree(); }
  initHUD();
  renderTeams();renderPlayers();renderBracket();renderVS();
  initGSAP();initMagnetic();initLoader();
  // reveal .ht-inner when vis class is added
  document.querySelectorAll('.ht-inner').forEach(el=>{
    const observer=new MutationObserver(()=>{if(el.classList.contains('vis'))el.style.transform='none'});
    observer.observe(el,{attributes:true,attributeFilter:['class']});
  });
});
// CSS class-based reveal for hero title lines
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.ht-inner').forEach(el=>{
    if(el.classList.contains('vis'))el.style.transform='none';
  });
});
if (!('ontouchstart' in window)) {
document.querySelectorAll('.pc').forEach(card=>{

  card.addEventListener('mousemove',e=>{

    const rect=card.getBoundingClientRect();

    const x=e.clientX-rect.left;
    const y=e.clientY-rect.top;

    const mx=(x/rect.width)*100;
    const my=(y/rect.height)*100;

    card.style.setProperty('--mx',`${mx}%`);
    card.style.setProperty('--my',`${my}%`);

    const rotateY=((x/rect.width)-0.5)*18;
    const rotateX=((y/rect.height)-0.5)*-18;

    card.style.transform=`
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-10px)
      scale(1.03)
    `;
  });

  card.addEventListener('mouseleave',()=>{

    card.style.transform=`
      rotateX(0deg)
      rotateY(0deg)
      translateY(0px)
      scale(1)
    `;
  });

});
}
const revealCards = () => {

  document.querySelectorAll('.pc').forEach((card,index)=>{

    setTimeout(()=>{

      card.classList.add('show');

    },index*120);

  });

};

window.addEventListener('load',revealCards);
const spotlight=document.querySelector('.spotlight');

window.addEventListener('mousemove',e=>{

  spotlight.style.setProperty('--sx',`${e.clientX}px`);

  spotlight.style.setProperty('--sy',`${e.clientY}px`);

});
const trails=document.querySelector('.cursor-trails');

window.addEventListener('mousemove',e=>{

  const t=document.createElement('div');

  t.className='trail';

  t.style.left=`${e.clientX}px`;
  t.style.top=`${e.clientY}px`;

  trails.appendChild(t);

  setTimeout(()=>{

    t.remove();

  },700);

});
const bootLoader=document.getElementById('bootLoader');
const bootPercent=document.getElementById('bootPercent');

let load=0;

const interval=setInterval(()=>{

  load++;

  bootPercent.textContent=`${load}%`;

  if(load>=100){

    clearInterval(interval);

    setTimeout(()=>{

      bootLoader.style.transition='opacity 1s ease';

      bootLoader.style.opacity='0';

      setTimeout(()=>{

        bootLoader.remove();

      },1000);

    },400);

  }

},30);
const battleIntro=document.getElementById('battleIntro');

const battleLeft=document.getElementById('battleLeft');

const battleRight=document.getElementById('battleRight');

const battleCount=document.getElementById('battleCount');

function startBattleIntro(teamA,teamB,callback){

  battleLeft.textContent=teamA;

  battleRight.textContent=teamB;

  battleIntro.classList.add('active');

  let count=3;

  battleCount.textContent=count;

  const timer=setInterval(()=>{

    count--;

    if(count<=0){

      battleCount.textContent='⚡';

      clearInterval(timer);

      setTimeout(()=>{

        battleIntro.classList.remove('active');

        if(callback) callback();

      },700);

    }else{

      battleCount.textContent=count;

    }

  },900);

}
// Keep this line at the top level of your script so it's accessible
const championName = document.getElementById('championName');

// ════ UPDATE CHAMPION FUNCTION ════
function updateChampion() {
  if (!championName) return;

  // Get the grand final match data
  const finalMatch = BRACKET.final?.[0];
  
  if (finalMatch && finalMatch.winner) {
    // Look up who the winner slot points to ('a' or 'b')
    const ultimateWinner = finalMatch[finalMatch.winner];
    
    if (ultimateWinner && ultimateWinner.n) {
      // Update the text on your website to show the champion!
      championName.textContent = ultimateWinner.n;
      return;
    }
  }

  // Fallback text if no champion is selected yet
  championName.textContent = 'TBD';
}

function pick(round, matchIndex, side) {
  const match = BRACKET[round]?.[matchIndex];
  if (!match) return;

  const winner = match[side];
  // If they click on an empty "TBD" slot, do nothing
  if (!winner || winner.n === 'TBD') return;

  // Save the winner flag on the current match so the glow class knows who won
  match.winner = side;

  // Handle Grand Final selection (choosing the ultimate champion)
  if (round === "final") {
    renderBracket();
    if (typeof updateChampion === "function") updateChampion();
    return;
  }

  // Determine the next round mapping
  let nextRound;
  if (round === "r16") nextRound = "qf";
  else if (round === "qf") nextRound = "sf";
  else if (round === "sf") nextRound = "final";

  if (nextRound) {
    // Mathematical tracking: Two matches feed into one next match
    const nextIndex = Math.floor(matchIndex / 2);
    
    // Even match indexes (0, 2, 4...) fill side 'a' of the next match
    // Odd match indexes (1, 3, 5...) fill side 'b' of the next match
    const nextSide = (matchIndex % 2 === 0) ? "a" : "b";

    // Ensure the next match data structure exists safely
    if (!BRACKET[nextRound][nextIndex]) {
      BRACKET[nextRound][nextIndex] = {};
    }

    // Pass the team object (name & flag) forward
    BRACKET[nextRound][nextIndex][nextSide] = {
      n: winner.n,
      f: winner.f
    };
  }

  // Repaint everything! Glows will apply and names will advance.
  renderBracket();
}
// Override: add reveal to ht-inner
// Override: add reveal to ht-inner
(function(){
  // polyfill for ht-inner vis tracking via CSS
  const style = document.createElement('style');

  style.textContent = `
    .ht-inner.vis{
      transform:translateY(0)!important;
      transition:transform .9s cubic-bezier(0.16,1,0.3,1)!important
    }
  `;

  document.head.appendChild(style);
})();
window.smoothTo = function(page) {
  // If it starts with '#', scroll to section; otherwise navigate to page
  if (page.startsWith('#')) {
    const id = page.slice(1);
    document.getElementById(id)?.scrollIntoView({behavior:'smooth'});
  } else {
    document.body.style.transition = 'opacity 0.3s ease';
    document.body.style.opacity = '0';
    setTimeout(() => { window.location.href = page; }, 300);
  }
}
window.scrollToSection = function(id) {
  document.getElementById(id)?.scrollIntoView({behavior:'smooth'});
}

/* ════ HAMBURGER NAV ════ */
window.toggleNav = function() {
  const menu = document.getElementById('nav-mobile-menu');
  const ham = document.getElementById('nav-hamburger');
  menu.classList.toggle('open');
  ham.classList.toggle('open');
}

// Close mobile menu on outside click
document.addEventListener('click', e => {
  const menu = document.getElementById('nav-mobile-menu');
  const ham = document.getElementById('nav-hamburger');
  if (menu && ham && !menu.contains(e.target) && !ham.contains(e.target)) {
    menu.classList.remove('open');
    ham.classList.remove('open');
  }
});

// Disable custom cursor on touch devices
if ('ontouchstart' in window) {
  document.body.style.cursor = 'auto';
  const curEl = document.getElementById('cur');
  const ringEl = document.getElementById('cur-r');
  if (curEl) curEl.style.display = 'none';
  if (ringEl) ringEl.style.display = 'none';
}
/* ════ BROWSER BACK BUTTON FIX ════ */
window.addEventListener("pageshow", function (event) {
  // Restore opacity in case we faded out before navigating
  document.body.style.opacity = '1';
  document.body.style.transition = '';
});
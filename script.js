const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  navLinks.classList.toggle('open', !isOpen);
});
navLinks.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false');
  navLinks.classList.remove('open');
}));

const mainNavLinks=[...document.querySelectorAll('.nav-links a')];
const sectionNavLinks=mainNavLinks.filter((link)=>link.getAttribute('href')?.startsWith('#'));
if(sectionNavLinks.length&&'IntersectionObserver' in window){
  const navSections=sectionNavLinks.map((link)=>({link,section:document.querySelector(link.getAttribute('href'))})).filter((item)=>item.section);
  const observer=new IntersectionObserver((entries)=>{
    const visible=entries.filter((entry)=>entry.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
    if(!visible)return;
    navSections.forEach(({link,section})=>{
      const selected=section===visible.target;
      link.classList.toggle('active-link',selected);
      if(selected)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');
    });
  },{rootMargin:'-20% 0px -65% 0px',threshold:[0,.15,.35,.6]});
  navSections.forEach(({section})=>observer.observe(section));
}
const successNotice=document.querySelector('[data-form-success]');
if(successNotice&&new URLSearchParams(window.location.search).has('submitted'))successNotice.hidden=false;


const gallery = document.querySelector('#product-gallery');
if (gallery) {
  const slides = [
    {src:'assets/backy-first-slide.webp',alt:'Backy wearable device with feature callouts',caption:'Backy wearable · feature overview'},
    {src:'assets/backy-on-shift-full.webp',alt:'Worker wearing Backy over a high-visibility vest, with haptic feedback waves shown around the device',caption:'Backy on shift'},
    {src:'assets/backy-unit.webp',alt:'Backy wearable sensor unit',caption:'Backy wearable unit'},
    {src:'assets/smart-dock.webp',alt:'Smart Dock for multi-device charging and syncing',caption:'Smart Dock · team setup'},
    {src:'assets/backy-feature-overview.png',alt:'Backy product feature overview showing cool comfort, durable sensors and the wearable module',caption:'Backy features · comfort, sensing and haptic feedback'}
  ];
  const image=gallery.querySelector('[data-gallery-image]');
  const caption=gallery.querySelector('[data-gallery-caption]');
  const dots=[...gallery.querySelectorAll('[data-gallery-index]')];
  const toggle=gallery.querySelector('[data-gallery-toggle]');
  let active=0;
  let timer;
  let playing=!window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const show=(index)=>{active=(index+slides.length)%slides.length;image.src=slides[active].src;image.alt=slides[active].alt;caption.textContent=slides[active].caption;dots.forEach((dot,i)=>dot.setAttribute('aria-pressed',String(i===active)));};
  const syncPlayback=()=>{
    window.clearInterval(timer);
    toggle.setAttribute('aria-pressed',String(playing));
    toggle.setAttribute('aria-label',playing?'Pause slideshow':'Play slideshow');
    toggle.textContent=playing?'Ⅱ':'▶';
    if(playing&&!gallery.matches(':hover')&&!gallery.contains(document.activeElement)&&!document.hidden)timer=window.setInterval(()=>show(active+1),6000);
  };
  dots.forEach((dot)=>dot.addEventListener('click',()=>show(Number(dot.dataset.galleryIndex))));
  gallery.querySelector('[data-gallery-prev]').addEventListener('click',()=>show(active-1));
  gallery.querySelector('[data-gallery-next]').addEventListener('click',()=>show(active+1));
  toggle.addEventListener('click',()=>{playing=!playing;syncPlayback();});
  gallery.addEventListener('mouseenter',()=>window.clearInterval(timer));
  gallery.addEventListener('mouseleave',syncPlayback);
  gallery.addEventListener('focusin',()=>window.clearInterval(timer));
  gallery.addEventListener('focusout',()=>window.setTimeout(syncPlayback,0));
  document.addEventListener('visibilitychange',syncPlayback);
  syncPlayback();
}

const priceTabs=[...document.querySelectorAll('[data-price-tab]')];
const pricePanels=[...document.querySelectorAll('[data-price-panel]')];
priceTabs.forEach((tab)=>tab.addEventListener('click',()=>{
  const selected=tab.dataset.priceTab;
  priceTabs.forEach((item)=>item.setAttribute('aria-selected',String(item===tab)));
  pricePanels.forEach((panel)=>{const isActive=panel.dataset.pricePanel===selected;panel.hidden=!isActive;panel.classList.toggle('is-active',isActive);});
}));

const rewardAction=document.querySelector('.reward-action');
if(rewardAction){rewardAction.addEventListener('click',()=>{const ideas=document.querySelector('.reward-ideas');const open=rewardAction.getAttribute('aria-pressed')==='true';rewardAction.setAttribute('aria-pressed',String(!open));ideas.hidden=open;rewardAction.innerHTML=open?'View reward ideas <span>＋</span>':'Hide reward ideas <span>−</span>';});}


const movementCarousel=document.querySelector('#movement-carousel');
if(movementCarousel){
 const figures=[...movementCarousel.querySelectorAll('[data-move-visual]')],steps=[...movementCarousel.querySelectorAll('[data-move-index]')];
 const label=movementCarousel.querySelector('[data-move-label]'),title=movementCarousel.querySelector('[data-move-title]'),copy=movementCarousel.querySelector('[data-move-copy]'),status=movementCarousel.querySelector('[data-move-status] span'),counter=movementCarousel.querySelector('[data-move-current]'),toggle=movementCarousel.querySelector('[data-move-toggle]');
 const slides=[
  {label:'01 / NOTICE',title:'A bend becomes high-risk.',copy:'When a repeated bend reaches a configured risk threshold, Backy can highlight the movement pattern and prompt a timely reset.',status:'RISK PATTERN'},
  {label:'02 / FEEL',title:'A discreet vibration cues a reset.',copy:'Backy gives the wearer a haptic cue at the moment it matters, without calling attention to them across the workplace.',status:'HAPTIC FEEDBACK'},
  {label:'03 / RESET',title:'Pause. Reposition. Bring the load closer.',copy:'The worker can step closer, bend through the hips and knees, and set up the lift around the task.',status:'RESET POSITION'},
  {label:'04 / LIFT',title:'Continue with a more neutral back.',copy:'A closer load and a steadier lift can reduce avoidable strain. The next pickup starts with a better setup.',status:'SAFER LIFT'}
 ];
 let current=0,timer,playing=!window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 const show=(index)=>{current=(index+slides.length)%slides.length;figures.forEach((el,i)=>{el.classList.toggle('is-active',i===current);el.setAttribute('aria-hidden',String(i!==current));});steps.forEach((el,i)=>el.setAttribute('aria-pressed',String(i===current)));const s=slides[current];label.textContent=s.label;title.textContent=s.title;copy.textContent=s.copy;status.textContent=s.status;counter.textContent=String(current+1).padStart(2,'0');movementCarousel.dataset.activeStep=String(current);};
 const sync=()=>{clearInterval(timer);toggle.setAttribute('aria-pressed',String(playing));toggle.setAttribute('aria-label',playing?'Pause movement sequence':'Play movement sequence');toggle.textContent=playing?'Ⅱ':'▶';if(playing&&!movementCarousel.matches(':hover')&&!movementCarousel.contains(document.activeElement)&&!document.hidden)timer=setInterval(()=>show(current+1),5600);};
 steps.forEach(el=>el.addEventListener('click',()=>{show(Number(el.dataset.moveIndex));sync();}));
 movementCarousel.querySelector('[data-move-prev]').addEventListener('click',()=>{show(current-1);sync();});
 movementCarousel.querySelector('[data-move-next]').addEventListener('click',()=>{show(current+1);sync();});
 toggle.addEventListener('click',()=>{playing=!playing;sync();});
 movementCarousel.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'){show(current-1);sync();}else if(e.key==='ArrowRight'){show(current+1);sync();}});
 movementCarousel.addEventListener('mouseenter',()=>clearInterval(timer));movementCarousel.addEventListener('mouseleave',sync);
 movementCarousel.addEventListener('focusin',()=>clearInterval(timer));movementCarousel.addEventListener('focusout',()=>setTimeout(sync,0));document.addEventListener('visibilitychange',sync);
 figures.forEach((el,i)=>el.setAttribute('aria-hidden',String(i!==0)));sync();
}


/* Auto-advancing four-step Backy instruction carousel */
const guideCarousel=document.querySelector('#backy-steps-carousel');
if(guideCarousel){
  const slides=[...guideCarousel.querySelectorAll('[data-guide-slide]')];
  const status=guideCarousel.querySelector('[data-guide-status]');
  const previous=guideCarousel.querySelector('[data-guide-prev]');
  const next=guideCarousel.querySelector('[data-guide-next]');
  const autoAdvance=!window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let active=0;
  let timer=null;
  const showStep=(index)=>{
    active=(index+slides.length)%slides.length;
    slides.forEach((slide,i)=>{
      slide.hidden=i!==active;
      slide.setAttribute('aria-current',String(i===active));
    });
    status.textContent='Step '+(active+1)+' of '+slides.length;
  };
  const syncTimer=()=>{
    clearInterval(timer);
    if(autoAdvance&&!guideCarousel.matches(':hover')&&!guideCarousel.contains(document.activeElement)&&!document.hidden){
      timer=setInterval(()=>showStep(active+1),6200);
    }
  };
  previous.addEventListener('click',()=>{showStep(active-1);syncTimer();});
  next.addEventListener('click',()=>{showStep(active+1);syncTimer();});
  guideCarousel.addEventListener('keydown',event=>{
    if(event.key==='ArrowLeft'){showStep(active-1);syncTimer();}
    if(event.key==='ArrowRight'){showStep(active+1);syncTimer();}
  });
  guideCarousel.addEventListener('mouseenter',()=>clearInterval(timer));
  guideCarousel.addEventListener('mouseleave',syncTimer);
  guideCarousel.addEventListener('focusin',()=>clearInterval(timer));
  guideCarousel.addEventListener('focusout',()=>setTimeout(syncTimer,0));
  document.addEventListener('visibilitychange',syncTimer);
  syncTimer();
}

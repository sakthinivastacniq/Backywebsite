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


const gallery = document.querySelector('#product-gallery');
if (gallery) {
  const slides = [
    {src:'assets/backy-first-slide.webp',alt:'Backy wearable and feature callouts from the opening slide of the TacnIQ.ai introduction',caption:'Backy wearable · slide one'},
    {src:'assets/backy-on-shift-full.webp',alt:'Worker wearing Backy over a high-visibility vest, with haptic feedback waves shown around the device',caption:'Backy on shift'},
    {src:'assets/backy-unit.webp',alt:'Backy wearable sensor unit',caption:'Backy wearable unit'},
    {src:'assets/smart-dock.webp',alt:'Smart Dock for multi-device charging and syncing',caption:'Smart Dock · team setup'}
  ];
  const image=gallery.querySelector('[data-gallery-image]');
  const caption=gallery.querySelector('[data-gallery-caption]');
  const dots=[...gallery.querySelectorAll('[data-gallery-index]')];
  let active=0;
  const show=(index)=>{active=(index+slides.length)%slides.length;image.src=slides[active].src;image.alt=slides[active].alt;caption.textContent=slides[active].caption;dots.forEach((dot,i)=>dot.setAttribute('aria-pressed',String(i===active)));};
  dots.forEach((dot)=>dot.addEventListener('click',()=>show(Number(dot.dataset.galleryIndex))));
  gallery.querySelector('[data-gallery-prev]').addEventListener('click',()=>show(active-1));
  gallery.querySelector('[data-gallery-next]').addEventListener('click',()=>show(active+1));
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

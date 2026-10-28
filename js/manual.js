
/* Índice: se arma una vez y se usa en la barra lateral y en el drawer */
const secs = [...document.querySelectorAll('.sec[id]')];
const ICON = {
  id:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/>',
  pal:'<path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.5-.8 1.5-1.5 0-.9-.7-1.2-.7-2s.6-1.5 1.5-1.5H17a4 4 0 0 0 4-4c0-5-4-9-9-9z"/><circle cx="7.5" cy="11" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="15" cy="7.5" r="1"/>',
  typo:'<path d="M4 7V5h16v2M9 19h6M12 5v14"/>',
  foto:'<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>',
  placas:'<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M5 16h14M8 7h8M8 10h5"/>',
  tono:'<path d="M4 5h16v11H9l-5 4z"/>',
  cierre:'<path d="M6 3h12v18l-6-4-6 4z"/>',
  video:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M10 9l5 3-5 3z"/>',
  ej:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/>',
  dl:'<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>'
};
const svg = k => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON[k]}</svg>`;
document.querySelectorAll('[data-nav]').forEach(list => {
  const short = list.dataset.nav === 'short';
  secs.forEach(s => {
    const li = document.createElement('li');
    li.innerHTML = `<a class="nav-link" href="#${s.id}">${svg(s.dataset.icon)}<span>${short ? s.dataset.short : s.dataset.title}</span></a>`;
    list.appendChild(li);
  });
});
const links = document.querySelectorAll('.nav-link');

/* Sección activa */
function updateActive(){
  let cur = '';
  secs.forEach(s => { if (scrollY >= s.offsetTop - 140) cur = s.id; });
  links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + cur));
}
addEventListener('scroll', updateActive, {passive:true}); updateActive();

/* Drawer */
const drawer = document.getElementById('drawer'), scrim = document.getElementById('scrim'), menuBtn = document.getElementById('menu-btn');
function setDrawer(open){
  drawer.classList.toggle('open', open); scrim.classList.toggle('open', open);
  drawer.setAttribute('aria-hidden', !open); menuBtn.setAttribute('aria-expanded', open);
  document.body.style.overflow = open ? 'hidden' : '';
  if (open) drawer.querySelector('.nav-link').focus(); else menuBtn.focus();
}
menuBtn.addEventListener('click', () => setDrawer(true));
document.getElementById('close-btn').addEventListener('click', () => setDrawer(false));
scrim.addEventListener('click', () => setDrawer(false));
addEventListener('keydown', e => {
  if (!drawer.classList.contains('open')) return;
  if (e.key === 'Escape') setDrawer(false);
  if (e.key === 'Tab') { /* foco atrapado dentro del drawer */
    const f = [...drawer.querySelectorAll('a,button')]; const first = f[0], last = f[f.length-1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});
drawer.addEventListener('click', e => { if (e.target.closest('.nav-link')) setDrawer(false); });

/* Copiar color */
const toast = document.getElementById('toast'); let tt;
function showToast(msg){ toast.textContent = msg; toast.classList.add('show'); clearTimeout(tt); tt = setTimeout(() => toast.classList.remove('show'), 3000); }
document.querySelectorAll('[data-copy]').forEach(b => b.addEventListener('click', () => {
  const hex = b.dataset.copy;
  (navigator.clipboard ? navigator.clipboard.writeText(hex) : Promise.resolve()).catch(()=>{}).finally(() => showToast(hex + ' copiado'));
}));


document.getElementById('year').textContent = new Date().getFullYear();

// ── COPY HEX ──
function copySwatch(hex) {
  navigator.clipboard.writeText(hex).then(() => {
    const t = document.getElementById('toast');
    t.textContent = '✓ ' + hex + ' copiado';
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2000);
  });
}

// ── HAMBURGER ──
const ham = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
function toggleSidebar() {
  ham.classList.toggle('open');
  sidebar.classList.toggle('open');
  overlay.classList.toggle('open');
}
ham.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', toggleSidebar);
// Close on nav link click (mobile)
document.querySelectorAll('#nav a').forEach(a => {
  a.addEventListener('click', () => {
    if(window.innerWidth <= 768) toggleSidebar();
  });
});

// ── ACTIVE NAV ──
const sections = document.querySelectorAll('section[id]');
const links = document.querySelectorAll('#nav a');
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting) {
      links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#'+e.target.id));
    }
  });
}, {rootMargin:'-25% 0px -65% 0px'});
sections.forEach(s => obs.observe(s));

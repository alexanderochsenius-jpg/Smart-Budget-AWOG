// ============================================================
// js/main.js — SmartBudget
// Lógica de interacción: modal, navegación, smooth scroll
// ============================================================

// --- Modal ---
function abrirModal() {
  const modal = document.getElementById('modalContacto');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  // Foco accesible al primer campo
  setTimeout(() => {
    const primerCampo = modal.querySelector('input');
    if (primerCampo) primerCampo.focus();
  }, 100);
}

function cerrarModal() {
  const modal = document.getElementById('modalContacto');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Cerrar con tecla Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') cerrarModal();
});

// --- Smooth scroll en anclas internas ---
document.querySelectorAll('a[href^="#"]').forEach((enlace) => {
  enlace.addEventListener('click', (e) => {
    const id = enlace.getAttribute('href');
    if (id.length > 1 && document.querySelector(id)) {
      e.preventDefault();
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// --- Navbar: toggle móvil ---
const toggle = document.querySelector('.navbar__toggle');
const nav    = document.querySelector('.navbar__nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const abierto = nav.classList.toggle('navbar__nav--abierto');
    toggle.setAttribute('aria-expanded', abierto);
  });
}


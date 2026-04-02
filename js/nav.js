/* ============================================================
   NAV.JS — Mobile toggle, scroll style, active link
   ============================================================ */

(function () {
    'use strict';

    const nav        = document.getElementById('main-nav');
    const mobileBtn  = document.getElementById('mobile-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileIcon = document.getElementById('mobile-icon');

    if (!nav || !mobileBtn || !mobileMenu) return;

    /* ---- Mobile toggle ---- */
    mobileBtn.addEventListener('click', () => {
        const isOpen = mobileMenu.style.display === 'block';
        mobileMenu.style.display = isOpen ? 'none' : 'block';
        mobileIcon.className     = isOpen ? 'fas fa-bars' : 'fas fa-times';
        mobileBtn.setAttribute('aria-expanded', String(!isOpen));
    });

    /* Close when a mobile link is clicked */
    mobileMenu.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.style.display = 'none';
            mobileIcon.className     = 'fas fa-bars';
            mobileBtn.setAttribute('aria-expanded', 'false');
        });
    });

    /* ---- Scroll: add/remove .scrolled class ---- */
    function onScroll() {
        nav.classList.toggle('scrolled', window.scrollY > 60);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on load

    /* ---- Active nav link on scroll ---- */
    const sections  = document.querySelectorAll('section[id], div[id]');
    const navLinks  = document.querySelectorAll('.nav-link[href^="#"]');

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    const isActive = link.getAttribute('href') === `#${id}`;
                    link.style.color = isActive ? 'var(--cyan)' : '';
                });
            }
        });
    }, { rootMargin: '-40% 0px -55% 0px' });

    sections.forEach(s => sectionObserver.observe(s));

})();

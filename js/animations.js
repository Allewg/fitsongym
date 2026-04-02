/* ============================================================
   ANIMATIONS.JS — IntersectionObserver para scroll reveals
   ============================================================ */

(function () {
    'use strict';

    /* ---- Fade-in scroll observer ---- */
    const SELECTORS = [
        '.fade-in',
        '.fade-in-left',
        '.fade-in-right',
        '.fade-in-scale',
    ];

    const fadeEls = document.querySelectorAll(SELECTORS.join(','));

    if (!fadeEls.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
    });

    fadeEls.forEach(el => observer.observe(el));

    /* ---- Counter animation para stat numbers ---- */
    function animateCounter(el) {
        const raw    = el.dataset.target || el.textContent.replace(/\D/g, '');
        const target = parseInt(raw, 10);
        const suffix = el.dataset.suffix || el.textContent.replace(/[0-9]/g, '');
        const prefix = el.dataset.prefix || '';
        if (isNaN(target)) return;

        const duration = 1400;
        const step     = 16;
        const steps    = Math.ceil(duration / step);
        let   current  = 0;
        let   count    = 0;

        const interval = setInterval(() => {
            count++;
            current = Math.round(target * (count / steps));
            el.textContent = prefix + current.toLocaleString('es-CL') + suffix;
            if (count >= steps) {
                el.textContent = prefix + target.toLocaleString('es-CL') + suffix;
                clearInterval(interval);
            }
        }, step);
    }

    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                statObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat-number[data-target]').forEach(el => {
        statObserver.observe(el);
    });

})();

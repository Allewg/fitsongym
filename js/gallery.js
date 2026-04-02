/* ============================================================
   GALLERY.JS — LightGallery init
   ============================================================ */

(function () {
    'use strict';

    const galleryEl = document.getElementById('gallery');
    if (!galleryEl) return;

    // LightGallery must be loaded before this script
    if (typeof lightGallery === 'undefined') {
        console.warn('[gallery.js] lightGallery not found. Make sure the CDN scripts are loaded.');
        return;
    }

    lightGallery(galleryEl, {
        selector:  'a',
        plugins:   [typeof lgZoom !== 'undefined' ? lgZoom : null,
                    typeof lgThumbnail !== 'undefined' ? lgThumbnail : null].filter(Boolean),
        speed:     450,
        download:  false,
        counter:   true,
        mobileSettings: {
            controls: true,
            showCloseIcon: true,
        },
    });

})();

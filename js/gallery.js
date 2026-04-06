/* ============================================================
   GALLERY.JS — LightGallery init
   ============================================================ */

(function () {
    'use strict';

    const galleryEl = document.getElementById('gallery');
    const scheduleGalleryEl = document.getElementById('schedule-gallery');

    // LightGallery must be loaded before this script
    if (typeof lightGallery === 'undefined') {
        console.warn('[gallery.js] lightGallery not found. Make sure the CDN scripts are loaded.');
        return;
    }

    const zoomPlugin = typeof lgZoom !== 'undefined' ? lgZoom : null;
    const thumbnailPlugin = typeof lgThumbnail !== 'undefined' ? lgThumbnail : null;
    const plugins = [zoomPlugin, thumbnailPlugin].filter(Boolean);

    if (galleryEl) {
        lightGallery(galleryEl, {
            selector:  'a',
            plugins,
            speed:     450,
            download:  false,
            counter:   true,
            mobileSettings: {
                controls: true,
                showCloseIcon: true,
            },
        });
    }

    if (scheduleGalleryEl) {
        lightGallery(scheduleGalleryEl, {
            selector: 'a',
            plugins: [zoomPlugin].filter(Boolean),
            speed: 450,
            download: false,
            counter: false,
            hideBarsDelay: 2500,
            mobileSettings: {
                controls: true,
                showCloseIcon: true,
            },
        });
    }

})();

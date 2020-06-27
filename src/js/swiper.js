// Init Swiper
var MySwiper = new Swiper('.swiper-container.preview', {
    spaceBetween: 50,
    watchSlidesProgress: true,
    observer: true,
    observeParents: true,
    keyboard: {
        enabled: true
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'progressbar',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
});

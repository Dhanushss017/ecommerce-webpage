$(".best-selling.owl-carousel").owlCarousel({
    // stagePadding: 50,
    // center: true,
    loop: true,
    margin: 20,
    items : 4,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        768:{
            items: 3,
        },
        1000: {
            items: 4,
            autoplay: false, 
        },
    },
});
$(".most-selling.owl-carousel").owlCarousel({
    // stagePadding: 50,
    // center: true,
    loop: true,
    margin: 20,
    items : 2,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        768:{
            items: 2,
        },
        1000: {
            items: 2,
        },
        1300: {
            items: 3,
            autoplay: false, 
        },
    },
});
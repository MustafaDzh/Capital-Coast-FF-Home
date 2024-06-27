
document.addEventListener('DOMContentLoaded', function () {
    //Project Statics
    let counters = document.querySelectorAll('.count');
    let speed = 100;
    let targets = [100000, 40000, 400];

    counters.forEach((counter, index) => {
        let target = targets[index];
        let count = 0;
        let increment = target / speed;

        let updateCount = function () {
            count += increment;
            if (count < target) {
                counter.textContent = Math.ceil(count).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                setTimeout(updateCount, 1);
            } else {
                counter.textContent = target.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            }
        };
        updateCount();
    });

    const swiper = new Swiper('.gallery-swiper_container', {
        direction: 'horizontal',
        loop: false,
        slidesPerView: 1,
        navigation: {
            nextEl: '.gallery-swiper_navigation-next',
            prevEl: '.gallery-swiper_navigation-prev',
        },
        pagination: {
            el: '.gallery-swiper_pagination--bullets',
            clickable: true,
            bulletClass: 'gallery-images_swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
        },
        on: {
            slideChange: function () {
                const currentSlide = swiper.realIndex + 1;
                const totalSlides = swiper.slides.length;

                document.querySelector('.gallery-swiper_pagination--text .current').textContent = currentSlide;
                document.querySelector('.gallery-swiper_pagination--text .total').textContent = totalSlides;
            }
        }
    });

    const newSwiper = new Swiper('.hero_swiper-container', {
        loop: true,
        pagination: {
            el: '.hero_swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true 
        },
        speed: 1000,
    });
})

//nav-mobile
document.addEventListener('DOMContentLoaded', function () {
    const hamburgerBtn = document.querySelector('#check-icon');
    const mobileNav = document.querySelector('.header-container--mobile');
    const bars = document.querySelectorAll('.bar');

    hamburgerBtn.addEventListener('change', function () {
        if (this.checked) {
            mobileNav.classList.add('open');
            bars.forEach(bar => bar.classList.add('cross'));
        } else {
            mobileNav.classList.remove('open');
            bars.forEach(bar => bar.classList.remove('cross'));
        }
    });
});

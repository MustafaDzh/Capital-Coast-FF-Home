
//Nav Mobile
document.addEventListener('DOMContentLoaded', function () {
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const mobileNav = document.querySelector('.mobile-nav');

    hamburgerBtn.addEventListener('click', function () {
        mobileNav.classList.toggle('open');
    });

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
    
})
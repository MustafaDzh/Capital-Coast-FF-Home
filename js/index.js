
//Nav Mobile
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const mobileNav = document.querySelector('.mobile-nav');

    hamburgerBtn.addEventListener('click', function() {
        mobileNav.classList.toggle('open');
    });

    //Project Statics
    let counters = document.querySelectorAll('.count');
    let speed = 800;
    let targets = [100000, 40000, 400]; 

    counters.forEach((counter, index) => {
        let target = targets[index];
        let count = 0;
        let increment = target / speed;

        let updateCount = function() {
            count += increment;
            if (count < target) {
                counter.textContent = Math.ceil(count).toLocaleString();
                setTimeout(updateCount, 1);
            } else {
                counter.textContent = target.toLocaleString(); 
            }
        };
        updateCount();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Swiper
    const swiper = new Swiper('.gallery-imager_swiper-container', {
        navigation: {
            nextEl: '.gallery-images_swiper-navigation-next',
            prevEl: '.gallery-images_swiper-navigation-prev',
        },
        pagination: {
            el: '.gallery-images_swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return `<span class="${className}"></span>`;
            },
        },
        slidesPerView: 1, // Display only one slide at a time
        spaceBetween: 0, // No space between slides
    });
});



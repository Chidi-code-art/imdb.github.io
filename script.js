const Menuicon = document.querySelector('.Menu-icon')
        const Menuiconimage  = document.querySelector('.menu-icon img')
        const dropdownmenu = document.querySelector('.dropdown_menu')
        Menuicon.onclick = function(){
          dropdownmenu.classList.toggle('open')
        }





var swiper = new Swiper(".slide-content", {
          slidesPerView: 1,
          centeredSlides: true,
          spaceBetween: 25,
          centerSlide: 'true',
          fade: 'true',
          grabCursor: 'true',
          pagination: {
            el: ".swiper-pagination",
            type: "fraction",
            Bullets: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },

          breakpoints:{
              0: {
                  slidesPerView: 0.7,
              },
              550: {
                  slidesPerView: 1,
              },
              950: {
                  slidesPerView: 1.8,
              },
              1000:{
                  slidesPerView: 1.68,
              },
          },
        });
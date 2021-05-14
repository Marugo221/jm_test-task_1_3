
const swiper = new Swiper('.swiper-container',{
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    allowTouchMove: false,
    cssMode: true,
    freeModeSticky: true,
  },
  breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.1,
        spaceBetween: 30,
        slidesPerGroup: 1,
      },

      480: {
        slidesPerView: 1.2,
        spaceBetween: 10
      },
    
      
      640: {
        slidesPerView: 1.5,
        spaceBetween: 10
      }
  },
  
});

if (window.innerWidth > 767) swiper.destroy();


  
  /*----------------------*/

  let show = document.querySelector(".show__showall");
  let items = document.querySelector(".brands-slide__items");
  let hide = document.querySelector(".show__hideall");

  show.addEventListener("click", function() {
    console.log(window.getComputedStyle(items,null).getPropertyValue("height"));
    items.style.height = "100%";
    show.style = "display:none";
    hide.style = "display:block";
  });

  hide.addEventListener("click", function() {
    console.log(window.getComputedStyle(items,null).getPropertyValue("height"));
    items.style.height = "195px";
    show.style = "display:block";
    hide.style = "display:none";
  });
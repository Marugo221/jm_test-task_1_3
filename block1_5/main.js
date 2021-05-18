
const swiper = new Swiper('.swiper-container',{
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    allowTouchMove: false,
    freeModeSticky: true,
    observer: true,
    followFinger: false,
  },
  breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.2,
        spaceBetween: 30,
        slidesPerGroup: 1,
      },

  },
  
});



window.addEventListener("resize", () => {
 swiper.pagination.bullets[swiper.pagination.bullets.length-1].style = "display:none";
  if (window.innerWidth >= 768) {
    document.querySelector(".swiper-wrapper").style = "transform: translate3d(0px, 0px, 0px)!important; transition-duration: 0ms;"
  }
})




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


// LOCOMOTIVE ISSUE WITH THE FOOTER AND HOVWER EFFEECT ON PAGE 3
const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: false,
});

function swiper() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 50,
  });
}
swiper();

function menuAnimation() {
  var menu = document.querySelector("nav h3");
  var full = document.querySelector("#full-scr");
  var navimg = document.querySelector("nav img");
  var flag = 0;
  menu.addEventListener("click", function () {
    if (flag == 0) {
      full.style.top = 0;
      navimg.style.opacity = 0;
      flag = 1;
    } else {
      full.style.top = "-100%";
      navimg.style.opacity = 1;
      flag = 0;
    }
  });
}
menuAnimation();

function loaderAnimation() {
  let loading = document.querySelector(".loading-page");
  let h1 = loading.querySelector("h2");
  function textChange() {
    console.log("no error");
    setTimeout(function () {
      h1.innerText = "CONTENT";
    }, 1000);
    setTimeout(function () {
      h1.innerText = "ENVIRONMENT";
    }, 2000);
  }
  textChange();
  setTimeout(function () {
    loading.style.top = "-100%";
  }, 3000);
}
loaderAnimation();

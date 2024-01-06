
const scroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
});

// image Animation on hover
function imageAnimation() {
    var elemC = document.querySelector(".elem-container");
    var fixed_Image = document.querySelector(".fixed-image");
    elemC.addEventListener("mouseenter", function () {
        fixed_Image.style.display = "block";
    });
    elemC.addEventListener("mouseleave", function () {
        fixed_Image.style.display = "none";
    });




    var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed_Image.style.backgroundImage = `url(${image})`;
        })
    })
}


// swiper js
function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 80,
        // pagination: {
        //     el: ".swiper-pagination",
        //     clickable: true,
        // },
    });
}
imageAnimation();
swiperAnimation();


function loaderAnimation() {
    var loader = document.querySelector(".loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4500)
}

loaderAnimation();

function menuAnimation() {
    var menu = document.querySelector(".nav h3")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector(".nav img")
    var flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    })
}
menuAnimation();
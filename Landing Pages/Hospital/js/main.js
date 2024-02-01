const navItems = document.getElementById("nav-items");
const openMenu = document.getElementById("open_nav-btn");
const closeMenu = document.getElementById("close_nav-btn");

openMenu.addEventListener("click", () => {
    navItems.style.display = "flex";
    openMenu.style.display = "none";
    closeMenu.style.display = "block";
})

closeMenu.addEventListener("click", () => {
    navItems.style.display = "none";
    closeMenu.style.display = "none";
    openMenu.style.display = "block";
})


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,  // Set as default for mobile can be change for other screens
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // Responsive Style
    breakpoints: {

        // Width >= 600
        600: {
            slidesPerView: 2
        },

        // Width >= 1024
        1024:{
            slidesPerView: 3
        }
    }
});
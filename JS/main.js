// ========= LOADER ========
let loader = document.querySelector('#loader');

window.addEventListener('load', () => {
  loader.style.display = 'none';
})
       

// ========= Adding Current Active Class to NAV ========
const navItems = document.querySelectorAll(".nav ul li");
const section = document.querySelectorAll("section");

for (let i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.classList.add("active");
  });
}


  
// window.addEventListener('scroll', () => {
//   let current = '';

//   section.forEach(section => {
//     //to get the distance from the page-top[0] uptill each section-start
//     let sectionTop = section.offsetTop;
//     //to get the section height to understand uptill how much we have scrolled
//     let sectionHeight = section.clientHeight;

//     //pageYoffset gives us the pixels of how much we have scrolled
//     if (scrollY >= (sectionTop - sectionHeight / 3)) {
//       current = section.getAttribute('id');
//     }
//   })

//   navItems.forEach(li => {
//     li.classList.remove('active');
//     if (li.classList.contains(current)) {
//       li.classList.add('active')
//     }
//   })

// })

//========== scroll top =============
let scrollBtn = document.getElementById("scrollBtn");

//hide scroll button until it reaches 20px
window.onscroll = function () {
  onScroll();
};

onScroll = function () {
  if (
    document.body.scrollTop > 150 ||
    document.documentElement.scrollTop > 150
  ) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

//click scroll button to go to top
scrollBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// ============= Hamburger Menu =============
// //====== Show NAV Menu =======

const menu = document.querySelector(".nav-menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
  closeBtn.style.display = "contents";
  menuBtn.style.display = "none";
  menu.style.display = "flex";
});

//======== Hide NAV Menu =======

closeBtn.addEventListener("click", () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "contents";
});

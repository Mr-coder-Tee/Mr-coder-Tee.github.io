const navMenu=document.getElementById('nav-menu');
const navToggle=document.getElementById('nav-toggle');
const navClose=document.getElementById('nav-close');
const navBackground=document.getElementById('nav__menu__container');
const navLink=document.querySelectorAll('.nav__link')
const tabs=document.querySelectorAll('[data-target]')
const tabContent=document.querySelectorAll('[data-content]')
const navHeader=document.getElementById('header')
const navTopBtn=document.getElementById('top-btn')
if(navToggle){ 
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
        navBackground.classList.add('show-background')
    })
}
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
        navBackground.classList.remove('show-background')
    })
}
navLink.forEach(link=>link.addEventListener('click',linkAction))
if(navTopBtn){
    navTopBtn.addEventListener('click',()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })
}
tabs.forEach(tab=>{
  tab.addEventListener('click',()=>{
    const target=document.querySelector(tab.dataset.target)
    tabContent.forEach(tabcontent=>{
      tabcontent.classList.remove('qulification_active')
    })
    target.classList.add('qulification_active')
    tabs.forEach(tab=>{
      tab.classList.remove('qulification_active')
    })
    tab.classList.add('qulification_active')
  })
})




var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    navHeader.classList.remove('header-slide')
  } else {
    navHeader.classList.add('header-slide')
  }
  if(currentScrollPos>80){
    navTopBtn.classList.add('to-top-btn-show')
  }else{
    navTopBtn.classList.remove('to-top-btn-show')
  }
  prevScrollpos = currentScrollPos;
}
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}








function linkAction(){
    const navMenu=document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu')
    navBackground.classList.remove('show-background')
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
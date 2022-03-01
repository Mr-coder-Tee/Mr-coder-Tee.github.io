const navMenu=document.getElementById('nav-menu');
const navToggle=document.getElementById('nav-toggle');
const navClose=document.getElementById('nav-close');
const navBackground=document.getElementById('nav__menu__container');
const navLink=document.querySelectorAll('.nav__link')
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









function linkAction(){
    const navMenu=document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu')
    navBackground.classList.remove('show-background')
}
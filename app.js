// LOADING PAGE 
setTimeout( function() {
  document.querySelector("body").classList.add("bodyScroll")
},2000);


//HAMBURG MENU BAR ICON FUNCTION AND SLIDER BAR
function from() {
  const sl = gsap.timeline()
  sl.from(".slider1 ul li", {
    y: 90,
    duration: 0.3,
    stagger: 0.2,
    opacity: 0,
  })
  sl.from(".slider2 ul li", {
    y: 90,
    duration: 0.5,
    stagger: 0.2,
    opacity: 0,
  })
}
function to() {
  gsap.to(".slider1 ul li", {
    y: 0,
    duration: 0,
  })
  gsap.to(".slider2 ul li", {
    y: 0,
    duration: 0,
  })
} 

let HAMBURGICON = document.querySelector('#HamburgerMenu');
let clickTime = 0;
HAMBURGICON.addEventListener('click', (e) => {
  document.querySelector('#HamburgerMenu .line1').classList.toggle("x")
  document.querySelector('#HamburgerMenu .line2').classList.toggle("y")
  document.querySelector('slider').classList.toggle("sliderShow")
  
 
  if( clickTime == 0){
    from();
    clickTime = 1;
  }else{
    to();
    clickTime = 0;
  }
  
}); 

//SLIDER HIDE ONCLICK ANY SLIDER1 OPTION 
document.querySelector('slider .slider1').addEventListener('click', (e) => {
  document.querySelector('slider').classList.remove("sliderShow")
  document.querySelector('#HamburgerMenu .line1').classList.remove("x")
  document.querySelector('#HamburgerMenu .line2').classList.remove("y")
})

//DARK THEME
clickTime1 = 0;
document.querySelector('#theme').addEventListener('click', (e) => {
  document.querySelector('body').classList.toggle("darkMode")
  if(clickTime1 == 0){
    document.querySelector('#theme').innerHTML = `<a>LIGHT THEME</a>`;
    clickTime1 = 1;
  }else{
    document.querySelector('#theme').innerHTML = `<a>DARK THEME</a>`;
    clickTime1 = 0;
  }
})

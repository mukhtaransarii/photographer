// NAV FUNCTION WHILE SCROLL
gsap.to("nav",{
   y:10,
   backdropFilter: "blur(5px)",
   height: 60,
   scrollTrigger:{
    trigger: "#page2",
    scroller: "body",
    end: "top 80%",
    scrub: 2,
   }
})
gsap.to("nav ul",{
   y: -50,
   opacity: 0,
   scrollTrigger:{
    trigger: "#page2",
    scroller: "body",
    end: "top 50%",
    scrub: 2,
   }
})
gsap.to("nav .logo",{
   left: "20px",
   opacity: 1,
   scrollTrigger:{
    trigger: "#page2",
    scroller: "body",
    end: "top 50%",
    scrub: 2,
   }
})

// NAV TIMELINE FUNCTION
const tl = gsap.timeline()
tl.to(".loading", {
  display: "none",
})
tl.from(".displayName p", {
  scale: 8,
  opacity: 0,
  duration: 1,
  delay: 0.5,
})
tl.from("nav ul, nav #HamburgerMenu", {
  yPercent: -200,
  opacity: 0,
  duration: 0.7,
  stagger: 0.2,
})
tl.from("#page1 .bottomNav .bottomBBS , .bottomNav ul", {
  yPercent: 200,
  opacity: 0,
  duration: 0.7,
  stagger: 0.2,
})


//PAGE 2 PARAGRAPH READING ANIMATION 
 const text = new SplitType('#page2 p')
       gsap.from("#page2 p .line .word .char", {
         opacity: 0.2,
         duration: 3,
         stagger: 1,
         scrollTrigger: {
           trigger: "#page2 .char",
           scroller : "body",
           scrub: 1,
           start: "top 60%",
           end: "top -10%", //DECREASE THIS IF PARAGRAPH LESS ..... INCREASE IF PARAGRAPH MORE
         }
       })
//PAGE 2 HEADING       
 gsap.from("#page2 .heading", {
         x: -50,
         opacity: 0,
         duration: 1,
         scrollTrigger: {
           trigger: "#page2 .heading",
           scroller : "body",
           scrub: 1,
           start: "top 70%",
           end: "top 40%",
         }
       })
       
  // HEADING PAGE3
  gsap.from("#page3 .heading", {
         x: -50,
         opacity: 0,
         duration: 1,
         scrollTrigger: {
           trigger: "#page3 .heading",
           scroller : "body",
           scrub: 1,
           start: "top 70%",
           end: "top 40%",
         }
       })
       
  //PAGE 3 CARD
  gsap.from("#page3 .card", {
         y: 70,
         opacity: 0,
         duration: 1,
         stagger: 1,
         scrollTrigger: {
           trigger: "#page3 .card",
           scroller : "body",
           scrub: 1,
           start: "top 60%",
           end: "top 10%",
         }
       })
    // HEADING PAGE4
  gsap.from("#page4 .heading", {
         x: -50,
         opacity: 0,
         duration: 1,
         scrollTrigger: {
           trigger: "#page4 .heading",
           scroller : "body",
           scrub: 1,
           start: "top 70%",
           end: "top 40%",
         }
       })
   // CARDS PAGE4
  gsap.from("#page4 .product", {
        y: 400,
        transform: "rotate(0deg)",
        opacity: 0,
        duration: 1,
        stagger: 1,
        scrollTrigger: {
          trigger: "#page4",
          scroller : "body",
          scrub: 2,
          start: "top 10%",
          end: "top -80%",
          pin: true,
        }
      })
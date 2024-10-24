
gsap.to("#page2 img",{
    width:"80%",
    duration:2,
    delay:0.1,
    scrollTrigger:{
        trigger:"#page2",
        start:"top 0%",
        end:"top -100%",
        scroller:"body",
        pin:true,
        scrub:5
        

    }

})
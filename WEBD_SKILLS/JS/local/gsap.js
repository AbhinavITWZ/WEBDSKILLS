gsap.registerPlugin(ScrollTrigger);

var t1 = gsap.timeline();

t1.from("ul li", {
    opacity: 0,
    y: -50,
    delay: 0.2,
    duration: 1.2,
    stagger: 0.3
});

t1.from("img", {
    opacity: 0,
    rotate: 180,
    delay: 0.3,
    duration: 3,
    stagger: 0.3
});

t1.to(".text h3", {
    opacity: 1,
    x: 30,
    delay: 0.3,
    duration: 3,
    stagger: 0.3
});

gsap.to("p", {
    opacity: 1,
    y: -100,
    duration: 2,
    delay: 0,
    scrollTrigger: {
        trigger: "p",
        start: "top 80%" // when the top of the p tag is 80% from the top of the vw
        
    }
});

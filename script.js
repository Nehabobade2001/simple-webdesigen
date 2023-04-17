function PageOneAnimation(){
var tl=gsap.timeline({
    scrollTrigger:{
        trigger:"#home",
        start:"top top",
        scrub:"1",
        pin:true,
        markers:true,
    }
})
tl
.to("#circle #btm img",{
    rotate:"-180deg",
    scale:.6,
    stagger:.1,
    ease:Power1
},"same")
.to("#circle #top img",{
    scale:.6,
    ease:Power1
},"same")
.to("#home #galleryo",{
    bottom:"-100%",
    ease:Power1
},"same")
.to("#cimage img",{
    scale:.6,
    ease:Power1
},"same")
.to("#centerimg h5",{
    opacity:0,
    ease:Power1
},"same")
.to("#circp",{
    top:"50%",
    scale:.6,
    ease:Power1
},"same")
.to("#circle",{
   scale:.5,
   ease:Power1
},"2same")
.to("#circp",{
    opacity:0,
    scale:.1,
    ease:Power1
},"2same")
.to("#smcircle",{
    scale:0,
    ease:Power1
},"2same")
.to("#circle",{
    opacity:0,
    ease:Power1
},"2same")
.to("#cimage img",{
    opacity:0,
    ease:Power1
},"2same")
.to("#overlay #toryblue",{
    bottom:"0%",
    rotate:0,
    delay:.5,
    duration:1,
    ease:Power1
},"same")
.to("#sidepurpule",{
    top:"-40%",
    daley:3,
    duration:3,
    ease:Power1
},"2same")
}

function PageTwoAnimation(){
var tl2=gsap.timeline({
    scrollTrigger:{
        trigger:"#second",
        start:"top top",
        scrub:1,
        markers: true,
        pin:true,
    }
})
tl2
.to(".circle", {
    top: "50%",
    stagger: .5,
    duration: 1,
    ease: Power1
})
.to(".circle", {
    left: "50%",
    duration: 1,
    ease: Power1
})
.to(".circle", {
    scale: 10,
    duration: 5,
    ease: Power1
})
.to(".pu", {
    background: `linear-gradient(to right, rgb(7, 33, 112), rgb(6, 41, 147))`,
    duration: 10,
    ease: Power1
}, "a")
.to("#stop h1", {
    left: "-150%",
    duration: 10,
    ease: Power1
}, "a")
.to("#stop h1", {
    left: "-150%",
    duration: 15,
    ease: Power1
}, "a")
.to("#p2", {
    opacity: 0,
    duration: 3,
    ease: Power1
}, "a")
.to("#p1", {
    opacity: 1,
    delay: 2,
    duration: 3,
    ease: Power1
}, "a")
.to(".pu", {
    background: `linear-gradient(to right, rgb(239, 231, 120),rgb(221, 217, 153))`,
    duration: 10,
    ease: Power1
}, "a")


.to("#stop-one",{
    y:"-20%",
    opacity:0,
    duration:15,
},"a")
.to("#stop-two",{
    y:"-20%",
    opacity:0,
    duration:15,
},"a")
.from("#verti1",{
    y:"100%",
    ease:Power1
},"b")
.from("#verti2",{
    y:"100%",
    delay:0.5,
    ease:Power1
},"b")
.from("#verti3",{
    y:"100%",
    delay:0.9,
    ease:Power1
},"b")
.from("#verti4",{
    y:"100%",
    delay:0.13,
    ease:Power1
},"b")
.from("#verti5",{
    y:"100%",
    delay:0.19,
    ease:Power1
},"b")
.to("#hori2up,#hori2bot",{
    x:"-40%",
    ease:Power1,
},"c")
.to("#hori3up,#hori3bot",{
    x:"-40%",
    ease:Power1,
},"c")
.to("#hori4up,#hori4bot",{
    x:"-40%",
    ease:Power1,
},"c")
.to("#hori5up,#hori5bot",{
    x:"-40%",
    ease:Power1,
},"c")
.to("#hori2bot",{
    x:"-80%",
    ease:Power1
},"d")
.to("#hori3bot",{
    x:"-80%",
    ease:Power1
},"d")
.to("#hori4bot",{
    x:"-80%",
    ease:Power1
},"d")
.to("#hori5bot",{
    x:"-80%",
    ease:Power1
},"d")
}
PageOneAnimation();
PageTwoAnimation();
function PageThreeAnimation(){
    var tl3=gsap.timeline({
        scrollTrigger:{
            trigger:"#theard",
            start:"top top",
            scrub:1,
            markers:"true",
            pin:"true",
        }
    })
    tl3
    .to("img",{
        rotate:360,
        duration:15,
    },"b")
    .to("#theard3>h1",{
       left:"-40%",
       duration:25,
    },"b")
    .to("#theard3>h1",{
        right:"-40%",
        duration:25,
     },"b")
     .from("#leftcircle",{
        left:".5%",
        delay:1,
     },"b")
     .from("#rightcircle",{
       right:".5%",
       delay:1,
     },"b")
}
PageThreeAnimation()
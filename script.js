function circleMouseFollower(xscale,yscale){
    window.addEventListener("mousemove",function(dets){
        document.querySelector("#mini-circle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale},${yscale})`

    })

}
circleMouseFollower()

function firstPageAnimation(){
    var tl = gsap.timeline();

    tl.from("#nav",{
        y: "-10",
        opacity:0,
        duration:2,
        ease:Expo.easeInOut,
    })
        .to(".boundingelem",{
        y: 0,
        ease: Expo.easeInOut,
        delay:-1.5,
        duration:2,
        stagger: .2,
    })
        .from('#hero_footer',{
        y: "-10",
        opacity:0,
        delay:-1,
        duration:1.5,
        ease:Expo.easeInOut,
        

        })
        
}
firstPageAnimation()


function circleChapta(){
     var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;


    window.addEventListener('mousemove',function(dets){
        var xdiff = dets.clientX-xprev;
        var ydiff = dets.clientY-yprev;

        xscale = gsap.utils.clamp(.8,1.2,xdiff);
        yscale = gsap.utils.clamp(.8,1.2,ydiff);

        xprev = dets.clientX;
        yprev = dets.clientY;

        circleMouseFollower(xscale,yscale)
    });
}
circleChapta();


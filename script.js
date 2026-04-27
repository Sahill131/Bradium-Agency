document.querySelectorAll(".img1").forEach((card) => {

    card.addEventListener("mousemove", (e) => {
        const img = card.querySelector("img");

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const midX = rect.width / 2;
        const midY = rect.height / 2;

        const rotateX = -(y - midY) / 10;
        const rotateY = (x - midX) / 10;

        img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`;
        img.style.boxShadow = `${-rotateY}px ${rotateX}px 30px rgba(0,0,0,0.3)`;
    });

    card.addEventListener("mouseleave", () => {
        const img = card.querySelector("img");
        img.style.transform = "rotateX(0) rotateY(0) scale(1)";
        img.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)";
    });

});





gsap.fromTo(".section1 h1",
    { y: -60, opacity: 0,color:"yellow" },
    { y: 0, opacity: 1, duration: 1.2, clearProps: "transform",color:"white",stagger:0.2 , ease:"power3.out",}
);
gsap.fromTo(".section1 p",
    { x: 60, opacity: 0 ,color:"yellow"},
    { x: 0, opacity: 1, duration: 1.2, clearProps: "transform",color:"white" , ease:"power3.in",})

gsap.fromTo("nav", {
    y: 60,
    stagger: true
},
    { y: 0, opacity: 1, duration: 1.2, clearProps: "transform" }

)

gsap.to(".w0",{
    width:"100%",
    duration:2.5,
    scrollTrigger:{
        trigger:".w0",
        scroller:"body",
        start:"top 70%",
        
    }
})

var cursor=document.querySelector(".gsap")


document.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.clientX,
        y:dets.clientY,
        duration:0.3,
        ease:"power3.out"
    
    })
})

document.querySelectorAll(".a").forEach(function(el){

     
   
  el.addEventListener("mouseenter",function(){

     document.querySelector(".gsap").innerHTML = "view more";

     gsap.to(".gsap",{
        scale:6,
       
        borderRadius:"50%",
        border:"0px",
        backgroundColor:"#11111164",
        duration:0.3,
       
     })
  })

  el.addEventListener("mouseleave",function(){

    document.querySelector(".gsap").innerHTML = "";
     gsap.to(".gsap",{
        scale:1,
        borderRadius:"50%",
        border:"2px solid white",
        backgroundColor:"white",
        borderColor:"white",
        duration:0.3
     })
  })

})




document.querySelectorAll(".a2").forEach(function(el){

     
   
  el.addEventListener("mouseenter",function(){

     document.querySelector(".gsap").innerHTML = "read article"
     ;

     gsap.to(".gsap",{
        scale:3,
       
        borderRadius:"50%",
        border:"0px",
        backgroundColor:"#111",
        duration:0.3,
       
     })
  })

  el.addEventListener("mouseleave",function(){

    document.querySelector(".gsap").innerHTML = "";
     gsap.to(".gsap",{
        scale:1,
        borderRadius:"50%",
        border:"2px solid white",
        backgroundColor:"white",
        borderColor:"white",
        duration:0.3
     })
  })

})


document.querySelectorAll(".s").forEach(function(el){

     
   
  el.addEventListener("mouseenter",function(){

     document.querySelector(".gsap").innerHTML = "new one's"
     ;

     gsap.to(".gsap",{
        scale:3,
       
        borderRadius:"50%",
        border:"0px",
        backgroundColor:"#111",
        duration:0.3,
       
     })
  })

  el.addEventListener("mouseleave",function(){

    document.querySelector(".gsap").innerHTML = "";
     gsap.to(".gsap",{
        scale:1,
        borderRadius:"50%",
        border:"2px solid white",
        backgroundColor:"white",
        borderColor:"white",
        duration:0.3
     })
  })

})

document.querySelectorAll(".pp").forEach(function(el){

     
   
  el.addEventListener("mouseenter",function(){

     document.querySelector(".gsap").innerHTML = 
     `<img src="p1.jpg" style="width:300%; height:300%;  object-fit:cover;border-radius:5px">`;

     gsap.to(".gsap",{
        scale:7,
       
        borderRadius:"0%",
        border:"0px",
        duration:0.3
     })
  })

  el.addEventListener("mouseleave",function(){

    document.querySelector(".gsap").innerHTML = "";
     gsap.to(".gsap",{
        scale:1,
        borderRadius:"50%",
        border:"2px solid white",
        backgroundColor:"white",
        borderColor:"white",
        duration:0.3
     })
  })

})


document.querySelectorAll(".ppp").forEach(function(el){

     
   
  el.addEventListener("mouseenter",function(){

     document.querySelector(".gsap").innerHTML = 
     `<img src="p2.jpg" style="width:300%; height:300%;  object-fit:cover;border-radius:5px">`;

     gsap.to(".gsap",{
        scale:7,
       
        borderRadius:"0%",
        border:"0px",
        duration:0.3
     })
  })

  el.addEventListener("mouseleave",function(){

    document.querySelector(".gsap").innerHTML = "";
     gsap.to(".gsap",{
        scale:1,
        borderRadius:"50%",
        border:"2px solid white",
        backgroundColor:"white",
        borderColor:"white",
        duration:0.3
     })
  })

})

ScrollTrigger.refresh()
ScrollTrigger.normalizeScroll(true)


document.querySelectorAll(".pppp").forEach(function(el){

     
   
  el.addEventListener("mouseenter",function(){

     document.querySelector(".gsap").innerHTML = 
     `<img src="p3.jpg" style="width:300%; height:300%;  object-fit:cover;border-radius:5px">`;

     gsap.to(".gsap",{
        scale:7,
       
        borderRadius:"0%",
        border:"0px",
        duration:0.3
     })
  })

  el.addEventListener("mouseleave",function(){

    document.querySelector(".gsap").innerHTML = "";
     gsap.to(".gsap",{
        scale:1,
        borderRadius:"50%",
        border:"2px solid white",
        backgroundColor:"white",
        borderColor:"white",
        duration:0.3
     })
  })

})



document.querySelectorAll(".ppppp").forEach(function(el){

     
   
  el.addEventListener("mouseenter",function(){

     document.querySelector(".gsap").innerHTML = 
     `<img src="p4.jpg" style="width:300%; height:300%;  object-fit:cover;border-radius:5px">`;

     gsap.to(".gsap",{
        scale:7,
       
        borderRadius:"0%",
        border:"0px",
        duration:0.3
     })
  })

  el.addEventListener("mouseleave",function(){

    document.querySelector(".gsap").innerHTML = "";
     gsap.to(".gsap",{
        scale:1,
        borderRadius:"50%",
        border:"2px solid white",
        backgroundColor:"white",
        borderColor:"white",
        duration:0.3
     })
  })

})


window.addEventListener("wheel", (dets) => {
    if (dets.deltaY > 0) {
        gsap.to(".wheel2 ", {
            x: "-100%",
            repeat: -1,
            duration: 90,
            ease: "none"

        })

        gsap.to(".wheel img",{
            rotate:180
        })

        gsap.to(".wheel2 h1",{
            color:"black"
        })




}

    else {
        gsap.to(".wheel2 ", {
            x: "0%",
            repeat: -1,
            duration: 2,
            ease: "none"

        })

        gsap.to(".wheel img", {
            rotate: 0
        })

         gsap.to(".wheel2 h1",{
            color:"white"
        })
        


    }


}

)



let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".section10",
        start: "top top",
        end: "+=1500",
        scrub: 2,
        pin: true,
        
    }
});

tl.to(".section10 img", {
    scale:5,
    ease: "none"
});


gsap.to(".ggg",{
   x:"-100%",
   repeat:"-1",
   duration:28
})

gsap.from(".section999 h1",{
   y:-40,
   opacity:0,
   duration:0.50,
   ease:"power3.out",
   stagger:0.3,
     scrollTrigger: {
        trigger: ".section999 h1",
        scroller: "body",
        start: "top 30%",
        end: "top -100%",
       
        

    }
})
   


gsap.from(".n p",{
   y:-40,
   opacity:0,
   duration:0.50,
   ease:"power3.out",
   stagger:0.3,
   scrollTrigger: {
        trigger: ".section999 h1",
        scroller: "body",
        start: "top 30%",
        end: "top -100%",
        
        

    }
   
})

var img1 = document.querySelector(".page1 .img1");
var img2 = document.querySelector(".page1 .img2");
var img3 = document.querySelector(".page1 .img3");
var img4 = document.querySelector(".page1 .img4");

function navabar(){
    document.addEventListener("wheel",function(dets){
        console.log(dets.deltaY)
  
      if(dets.deltaY>0){
       gsap.to("header",{
        y:"-15vh",
        // backgroundColor:"red",
        duration:.8,
        scrollTrigger:{
          trigger:"header",
          scroll:"body",
          start:"top 0%",
          end:"top -20%",
          // scrub:true
        }
        
       });
    }
      if(dets.deltaY<0){
        gsap.to("header",{
          y:"0vh",
          duration:.8,
          scrollTrigger:{
                  trigger:"header",
                  scroll:"body",
                  start:"top 0%",
                  end:"top -10%",
                  // markers:true,
                //   scrub:true
                }
         });
      }
    });
    
  
  }
  navabar();

var cursor=document.querySelector("#cursor");
 var box=document.querySelectorAll("#box");
// console.log(cursor);
// console.log(box);

box.forEach(function(elem){
    console.log(elem)
    elem.addEventListener("mousemove",function(dets){
        cursor.style.opacity=1;
        cursor.style.top=dets.y+"px";
        cursor.style.left=dets.x +"px";
        
    });
    elem.addEventListener("mouseleave",function(dets){
        cursor.style.opacity=0;
        cursor.style.top=dets.y+"px";
        cursor.style.left=dets.x +"px";
        
    });
    
});
 var box1=document.querySelectorAll("#box1");
 var cursor1=document.querySelector("#cursor1");

 box1.forEach(function(elem1){
    console.log(elem1)
    elem1.addEventListener("mousemove",function(dets){
        cursor1.style.opacity=1;
        cursor1.style.top=dets.y+"px";
        cursor1.style.left=dets.x +"px";
        
    });
    elem1.addEventListener("mouseleave",function(dets){
        cursor1.style.opacity=0;
        cursor1.style.top=dets.y+"px";
        cursor1.style.left=dets.x +"px";
        
    });
    
});
var box2=document.querySelectorAll("#box2");
 var cursor2=document.querySelector("#cursor2");

 box2.forEach(function(elem2){
    console.log(elem2)
    elem2.addEventListener("mousemove",function(dets){
        cursor2.style.opacity=1;
        cursor2.style.top=dets.y+"px";
        cursor2.style.left=dets.x +"px";
        
    });
    elem2.addEventListener("mouseleave",function(dets){
        cursor2.style.opacity=0;
        cursor2.style.top=dets.y+"px";
        cursor2.style.left=dets.x +"px";
        
    });
    
});



var loder = document.querySelector(".page1");
var tl = gsap.timeline();

tl.to("#box1", {
  opacity: 1,
  duration: 0.2,
});
tl.to("#box2", {
  opacity: 1,
  duration: 0.2,
});
tl.to("#box3", {
  opacity: 1,
  duration: 0.2,
});
tl.to("#box4", {
  opacity: 1,
  duration: 0.2,
});
tl.to("#box5", {
  opacity: 1,
  duration: 0.2,
});
tl.to("#box6", {
  opacity: 1,
  duration: 0.2,
});
tl.to("#box7", {
  opacity: 1,
  duration: 0.2,
});
tl.to("#box8", {
  opacity: 1,
  duration: 0.2,
});
tl.to("#box9", {
  opacity: 1,
  duration: 0.2,
});
tl.to("#box10", {
  opacity: 1,
  duration: 0.2,
});
tl.to("#box11", {
  opacity: 1,
  duration: 0.2,
});

tl.to(".page1", {
  top: "-120%",
  duration: 0.6,
  delay: 0.2,
});

tl.from(".page2>.text>h2", {
  duration: 0.3,
  y: 30,
  stagger: 0.2,
  opacity: 0,
});
tl.from(".page3>.center", {
  width: "20%",
  scrollTrigger: {
    scroll: "body",
    trigger: ".page3 .center",
    start: "top 70%",
    end: "top 40%",
    // markers:true,
    scrub: 3,
  },
});

tl.from(".page4>.content .text h1", {
  y: 50,
  duration: 1,
  stagger: 0.5,
  opacity: 0,
  scrollTrigger: {
    scroll: "body",
    trigger: ".page4 .content .text h1",
    // markers:true,
    start: "top 70%",
    end: "top 90%",
    scrub: 2,
  },
});

tl.from(".page4 .paragraph p", {
  y: 30,
  stagger: 0.4,
  opacity: 0,
  scrollTrigger: {
    scroll: "body",
    trigger: ".page4 .paragraph",
    start: "top 80%",
    end: "top 70%",
    // markers:true,
    scrub: 3,
  },
});
tl.to(".page8 h1", {
  x: "-120%",
  duration: 3,
  scrollTrigger: {
    trigger: ".page8 ",
    scroller: "body",
    start: "top 0%",
    end: "top -120%",
    pin: true,
    scrub: 2,
    // markers:true
  },
});

gsap.from(".page11 .text h1",{
y:50,
stagger:.2,
scrollTrigger:{
  trigger:".page11",
  scroll:"body",
  start:"top 70%",
  end:"top 40%",
  markers:true,
  scrub:true


}
});



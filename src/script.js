gsap.from(".line h1",{
    y:150,
    stagger:0.25,
    duration:0.6,
    delay:0.5
})
var h5Timer = document.querySelector("#line1-part1 h5")
var grow = 0
setInterval(function(){
    if(grow<100){
        h5Timer.innerHTML= grow++
    }else{
        h5Timer.innerHTML = grow
    }
   
},20)

var tl = gsap.timeline()
tl.to("#loader",{
    opacity:0,
    duration:0.4,
    delay:2.8
})
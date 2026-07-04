
const audio3 = new Audio( "audio/felixllanto.mp3" )

ScrollTrigger.create({
  
  trigger: '.cajatrigger3',
  
  start: 'top center',
  end: 'bottom center',
  
  onEnter() { audio3.currentTime = 0, audio3.play() },
  onLeave() { audio3.pause() },
  onEnterBack() { audio3.currentTime = 0, audio3.play() },
  onLeaveBack() { audio3.pause() },
  
  /*markers: true*/
  
})

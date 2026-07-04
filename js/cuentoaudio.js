
const audio = new Audio( "audio/CancionInicioFelix.mp3" )

ScrollTrigger.create({
  
  trigger: '.cajatrigger',
  
  start: 'top center',
  end: 'bottom center',
  
  onEnter() { audio.currentTime = 0, audio.play() },
  onLeave() { audio.pause() },
  onEnterBack() { audio.currentTime = 0, audio.play() },
  onLeaveBack() { audio.pause() },
  
  /*markers: true*/
  
})




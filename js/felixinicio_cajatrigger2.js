const audio2 = new Audio( "audio/felix_inicio.mp3" );
const audio2a = new Audio( "audio/felix_inicio.mp3" );
const audio2b = new Audio( "audio/felix_inicio.mp3" );
const audio2c = new Audio( "audio/felix_inicio.mp3" );


ScrollTrigger.create({
  
  trigger: '.cajatrigger2',
  
  start: 'top center',
  end: 'bottom center',
  
  onEnter() { audio2.currentTime = 0, audio2.play() },
  onLeave() { audio2.pause() },
  onEnterBack() { audio2.play() },
  onLeaveBack() { audio2.pause() }, 
  
  /*markers: true,*/
  scrub: true
  
})

ScrollTrigger.create({
  
  trigger: '.cajatrigger2a',
  
  start: 'top center',
  end: 'bottom center',
  
  onEnter() { audio2.currentTime = 0, audio2a.play() },
  onLeave() { audio2a.pause() },
  onEnterBack() { audio2a.play() },
  onLeaveBack() { audio2a.pause() },
  
  /*markers: true,*/
  scrub: true
  
})

ScrollTrigger.create({
  
  trigger: '.cajatrigger2b',
  
  start: 'top center',
  end: 'bottom center',
  
  onEnter() { audio2.currentTime = 0, audio2b.play() },
  onLeave() { audio2b.pause() },
  onEnterBack() { audio2b.play() },
  onLeaveBack() { audio2b.pause() },
  
  /*markers: true,*/
  scrub: true
})



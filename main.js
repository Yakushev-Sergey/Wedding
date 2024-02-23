gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if (ScrollTrigger.isTouch !== 1) {
  ScrollSmoother.create({
    wrapper: '.wrapper', 
    content: '.content',
    smooth: 1.5,
    effects: true, 
  })

  gsap.fromTo('.header', {opacity: 1}, {
    opacity: 0,
    scrollTrigger: {
      trigger: '.header',
      start: 'center',
      end: '720',
      scrub: true
    }
  })

  gsap.fromTo('.we', 
  { y: -200, opacity: 0}, {
    opacity: 1, y: 0,
    scrollTrigger: {
    trigger: '.we',
    start: '-350',
    end: '-10',
    opacity: 0,
    scrub: true
    }
  })

  gsap.fromTo('.data__wedding', 
  { y: -200, opacity: 0}, {
    opacity: 1, y: 0,
    scrollTrigger: {
    trigger: '.data__wedding',
    start: '-350',
    end: '-10',
    scrub: true
    }
  })

  gsap.fromTo('.data__img', 
  { y: -50, opacity: 0}, {
    opacity: 1, y: 0,
    scrollTrigger: {
    trigger: '.data__img',
    start: '-450',
    end: '-10',
    scrub: true
    }
  })

  gsap.fromTo('.program', 
  { x: -50, opacity: 0}, {
    opacity: 1, x: 0,
    scrollTrigger: {
    trigger: '.program',
    start: '-700',
    end: '-10',
    scrub: true
    }
  })

  gsap.fromTo('.dress__text', 
  { x: -50, opacity: 0}, {
    opacity: 1, x: 0,
    scrollTrigger: {
    trigger: '.dress__text',
    start: '-700',
    end: '-10',
    scrub: true
    }
  })

  gsap.fromTo('.dress__girls', 
  { x: -50, opacity: 0}, {
    opacity: 1, x: 0,
    scrollTrigger: {
    trigger: '.dress__girls',
    start: '-700',
    end: '-10',
    scrub: true
    }
  })

  gsap.fromTo('.dress__boy', 
  { x: 50, opacity: 0}, {
    opacity: 1, x: 0,
    scrollTrigger: {
    trigger: '.dress__boy',
    start: '-700',
    end: '-10',
    scrub: true
    }
  })

}

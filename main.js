gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


  ScrollSmoother.create({
    smooth: 1.5,
    effects: true,
    preventDefault: true
  })

  gsap.fromTo('.header', { opacity: 1 }, {
    opacity: 0,
    scrollTrigger: {
      trigger: '.header',
      start: 'center',
      end: '720',
      scrub: true
    }
  })

  let itemL = gsap.utils.toArray('.left')
  itemL.forEach(item => {
    gsap.fromTo(item, { opacity: 0, x: -100 }, {
      opacity: 1, x: 0,
      scrollTrigger: {
        trigger: item,
        start: '-900',
        end: '-300',
        scrub: true
      }
    })
  })

  let itemR = gsap.utils.toArray('.right')
  itemR.forEach(item => {
    gsap.fromTo(item, { opacity: 0, x: 100 }, {
      opacity: 1, x: 0,
      scrollTrigger: {
        trigger: item,
        start: '-900',
        end: '-300',
        scrub: true
      }
    })
  })


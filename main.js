gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


  ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 1.5,
    effects: true,
    normalizeScroll: true,
    ignoreMobileResize: true,
    smoothTouch: 0.1,
  })

  gsap.fromTo('.header', { opacity: 1 }, {
    opacity: 0,
    scrollTrigger: {
      trigger: '.header',
      start: 'center',
      end: 'bottom 20%',
      scrub: true
    }
  })

  
  let itemL = gsap.utils.toArray('.left')
  itemL.forEach(item => {
    gsap.fromTo(item, { opacity: 0, x: -100 }, {
      opacity: 1, x: 0,
      scrollTrigger: {
        trigger: item,
        start: 'top 90%',
        end: 'bottom 55%',
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
        start: 'top 90%',
        end: 'bottom 55%',
        scrub: true
      }
    })
  })


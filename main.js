gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


  ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 1.5,
    effects: true,
    ignoreMobileResize: true,
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
    gsap.fromTo(item, { opacity: 0, x: -150 }, {
      opacity: 1, x: 0,
      scrollTrigger: {
        invalidateOnRefresh: true,
        trigger: item,
        start: 'top 90%',
        end: 'bottom 80%',
        scrub: true
      }
    })
  })



  let itemR = gsap.utils.toArray('.right')
  itemR.forEach(item => {
    gsap.fromTo(item, { opacity: 0, x: 150 }, {
      opacity: 1, x: 0,
      scrollTrigger: {
        invalidateOnRefresh: true,
        trigger: item,
        start: 'top 90%',
        end: 'bottom 55%',
        scrub: true
      }
    })
  })


function windowSizeControl() {
  let elemLogo = document.querySelectorAll('.logo_element')
  let elemTech = document.querySelectorAll('.tech-type_element')
  let text = document.querySelector('.text')
  if (window.screen.width >= '1440') {
    text.children[1].style.display = 'none'
    text.children[2].style.display = 'block'
    for (let i = 0; i < 11; i++) {
      elemLogo[i].classList.remove('swiper-slide')
      elemLogo[i].classList.remove('swiper-slide-active')
      elemLogo[i].style.width = ''
      elemLogo[i].style.margin = ''
    }
    for (let j = 0; j < 7; j++) {
      elemTech[j].classList.remove('swiper-slide')
      elemTech[j].classList.remove('swiper-slide-active')
      elemTech[j].style.width = ''
      elemTech[j].style.margin = ''
    }
    if (document.querySelector('.menu').classList.contains('active')) {
      document.querySelector('.menu').classList.remove('active')
      document.querySelector('.content').style.opacity = '1'
    }
    // console.log("pc");
  } else if (window.screen.width >= '768') {
    text.children[1].style.display = 'block'
    text.children[2].style.display = 'none'
    for (let i = 0; i < 11; i++) {
      elemLogo[i].classList.remove('swiper-slide')
      elemLogo[i].classList.remove('swiper-slide-active')
      elemLogo[i].style.width = ''
      elemLogo[i].style.margin = ''
    }
    for (let j = 0; j < 7; j++) {
      elemTech[j].classList.remove('swiper-slide')
      elemTech[j].classList.remove('swiper-slide-active')
      elemTech[j].style.width = ''
      elemTech[j].style.margin = ''
    }
    // console.log("tablet");
  } else {
    // console.log("phone");
    text.children[1].style.display = 'none'
    if (
      !document
        .querySelector('.logo_element')
        .classList.contains('swiper_slide')
    ) {
      for (let i = 0; i < 11; i++) {
        elemLogo[i].classList.add('swiper-slide')
        elemLogo[i].classList.add('swiper-slide-active')
      }
    }
    if (
      !document
        .querySelector('.tech-type_element')
        .classList.contains('swiper_slide')
    ) {
      for (let j = 0; j < 7; j++) {
        elemTech[j].classList.add('swiper-slide')
        elemTech[j].classList.add('swiper-slide-active')
      }
    }
  }
}

window.addEventListener('load', windowSizeControl)
// window.addEventListener('load', function(){
//   console.log(this.window.innerWidth);
// });

window.addEventListener('resize', windowSizeControl)

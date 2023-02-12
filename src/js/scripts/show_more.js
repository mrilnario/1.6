function showMoreBrands() {
  let text = document.querySelector('.brands .show_more p')
  let showMore = document.getElementsByClassName('show_more')
  let img = document.querySelector('.brands .show_more img')
  let trigger = document.getElementById('brands__trigger')

  document.querySelector('.brands').classList.toggle('brands_full')
  document.querySelector('.logo').classList.toggle('logo_big')

  if (trigger.style.display === 'none') {
    trigger.style.display = 'inline'
    text.innerHTML = 'Показать все'
    showMore[0].style.width = '125px'
    showMore[0].style.transition = '0.1s'
    img.style.rotate = '0deg'
  } else {
    trigger.style.display = 'none'
    text.innerHTML = 'Скрыть'
    showMore[0].style.width = '82px'
    showMore[0].style.transition = '0.1s'
    img.style.rotate = '180deg'
  }
}

function showMoreTech() {
  let text = document.querySelector('.tech .show_more p')
  let showMore = document.getElementsByClassName('show_more')
  let img = document.querySelector('.tech .show_more img')
  let trigger = document.getElementById('tech__trigger')

  document.querySelector('.tech').classList.toggle('tech_full')
  document.querySelector('.tech-type').classList.toggle('tech-type_big')

  if (trigger.style.display === 'none') {
    trigger.style.display = 'inline'
    text.innerHTML = 'Показать все'
    showMore[1].style.width = '125px'
    showMore[1].style.transition = '0.1s'
    img.style.rotate = '0deg'
  } else {
    trigger.style.display = 'none'
    text.innerHTML = 'Скрыть'
    showMore[1].style.width = '82px'
    showMore[1].style.transition = '0.1s'
    img.style.rotate = '180deg'
  }
}

function readText() {
  let text = document.querySelector('.text')
  let inscript = document.querySelector('.read-next p')
  let readNext = document.getElementsByClassName('read-next')
  let img = document.querySelector('.read-next img')
  let trigger = document.getElementById('next__trigger')

  if (window.screen.width >= '1440') {
    if (trigger.style.display === 'none') {
      trigger.style.display = 'inline'
      text.children[2].children[1].style.display = 'none'
      inscript.innerHTML = 'Читать далее'
      readNext[0].style.width = '136px'
      readNext[0].style.height = '58px'
      readNext[0].style.transition = '.1s'
      readNext[0].style.marginTop = '-90px'
      img.style.rotate = '0deg'
    } else {
      trigger.style.display = 'none'
      text.children[2].children[1].style.display = 'block'
      inscript.innerHTML = 'Скрыть'
      readNext[0].style.width = '93px'
      readNext[0].style.height = '58px'
      readNext[0].style.transition = '.1s'
      readNext[0].style.marginTop = '-30px'
      img.style.rotate = '180deg'
    }
  } else if (window.screen.width >= '768') {
    if (trigger.style.display === 'none') {
      trigger.style.display = 'inline'
      text.children[1].children[1].style.display = 'none'
      inscript.innerHTML = 'Читать далее'
      readNext[0].style.width = '136px'
      readNext[0].style.transition = '.1s'
      readNext[0].style.marginTop = '-30px'
      img.style.rotate = '0deg'
    } else {
      trigger.style.display = 'none'
      text.children[1].children[1].style.display = 'block'
      inscript.innerHTML = 'Скрыть'
      readNext[0].style.width = '93px'
      readNext[0].style.height = '58px'
      readNext[0].style.transition = '.1s'
      readNext[0].style.marginTop = '-15px'
      img.style.rotate = '180deg'
    }
  } else {
    if (trigger.style.display === 'none') {
      trigger.style.display = 'inline'
      text.children[1].style.display = 'none'
      text.children[1].children[1].style.display = 'none'
      inscript.innerHTML = 'Читать далее'
      readNext[0].style.width = '136px'
      readNext[0].style.transition = '.1s'
      img.style.rotate = '0deg'
    } else {
      trigger.style.display = 'none'
      text.children[1].style.display = 'block'
      text.children[1].children[1].style.display = 'block'
      inscript.innerHTML = 'Скрыть'
      readNext[0].style.width = '93px'
      readNext[0].style.height = '58px'
      readNext[0].style.transition = '.1s'
      img.style.rotate = '180deg'
    }
  }

  window.addEventListener('resize', function () {
    if (window.screen.width >= '1440') {
      if (trigger.style.display === 'inline') {
        text.children[2].children[1].style.display = 'none'
      } else {
        text.children[2].children[1].style.display = 'block'
      }
    } else if (window.innerWidth >= '768') {
      if (trigger.style.display === 'inline') {
        text.children[1].children[1].style.display = 'none'
      } else {
        text.children[1].children[1].style.display = 'block'
      }
    } else {
      if (trigger.style.display === 'inline') {
        text.children[1].style.display = 'none'
        text.children[1].children[1].style.display = 'none'
      } else {
        text.children[1].style.display = 'block'
        text.children[1].children[1].style.display = 'block'
      }
    }
  })
}

let buttonBrands = document.querySelector('.brands .show_more')
let buttonTech = document.querySelector('.tech .show_more')
let buttonReadNext = document.querySelector('.read-next')
let trigger = document.getElementById('next__trigger')
buttonBrands.addEventListener('click', showMoreBrands)
buttonTech.addEventListener('click', showMoreTech)
buttonReadNext.addEventListener('click', readText)
// trigger.addEventListener('transitionend', readText);
// window.addEventListener('load', readText);

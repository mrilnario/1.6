function showMenu() {
  document.querySelector('.menu').classList.add('active')
  // document.querySelector('.table-menu').classList.add('active');
  document.querySelector('.content').style.opacity = '0.2'
  document.querySelector('.content').style.transition = '2s'
}

function removeMenu() {
  document.querySelector('.menu').classList.remove('active')
  // document.querySelector('.table-menu').classList.remove('active');
  document.querySelector('.content').style.opacity = '1'
  document.querySelector('.content').style.transition = '0.2s'
}

function showChat() {
  if (document.querySelector('.menu').classList.contains('active')) {
    document.querySelector('.menu').style.display = 'none'
  } else {
    document.querySelector('.menu').style.display = 'flex'
    document.querySelector('.menu').style.opacity = '0.2'
  }
  document.querySelector('.feedback').classList.add('feedback-active')
  document.querySelector('.content').style.opacity = '0.2'
  document.querySelector('.content').style.transition = '2s'
}

function showCall() {
  if (document.querySelector('.menu').classList.contains('active')) {
    document.querySelector('.menu').style.display = 'none'
  } else {
    document.querySelector('.menu').style.display = 'flex'
    document.querySelector('.menu').style.opacity = '0.2'
  }
  document.querySelector('.call').classList.add('call-active')
  document.querySelector('.content').style.opacity = '0.2'
  document.querySelector('.content').style.transition = '2s'
}

function removeChat() {
  if (document.querySelector('.menu').classList.contains('active')) {
    document.querySelector('.content').style.opacity = '0.2'
  } else {
    document.querySelector('.content').style.opacity = '1'
    document.querySelector('.menu').style.opacity = '1'
  }
  document.querySelector('.feedback').classList.remove('feedback-active')
  document.querySelector('.menu').style.display = 'flex'
  document.querySelector('.content').style.transition = '0.2s'
  document.querySelector('.big-close').remove()
}

function removeCall() {
  if (document.querySelector('.menu').classList.contains('active')) {
    document.querySelector('.content').style.opacity = '0.2'
  } else {
    document.querySelector('.content').style.opacity = '1'
    document.querySelector('.menu').style.opacity = '1'
  }
  document.querySelector('.call').classList.remove('call-active')
  document.querySelector('.menu').style.display = 'flex'
  document.querySelector('.content').style.transition = '0.2s'
  document.querySelector('.big-close').remove()
}

function windowSize() {
  if (window.screen.width >= '1440px') {
    if (document.querySelector('.menu').classList.contains('active')) {
      document.querySelector('.menu').classList.remove('active')
    }
    document.querySelector('.content').style.opacity = '1'
    document.querySelector('.content').style.transition = '0.1s'
  }
}

function closeCall() {
  let closeCall = document.createElement('button')
  closeCall.classList.add('big-close')
  let closeCallImage = document.createElement('img')
  closeCallImage.src = 'img/close.svg'
  closeCall.append(closeCallImage)
  document.querySelector('.call').before(closeCall)
  closeCall.addEventListener('click', removeCall)
}

function closeChat() {
  let closeFeedback = document.createElement('button')
  closeFeedback.classList.add('big-close')
  let closeFeedbackImage = document.createElement('img')
  closeFeedbackImage.src = 'img/close.svg'
  closeFeedback.append(closeFeedbackImage)
  document.querySelector('.call').after(closeFeedback)
  closeFeedback.addEventListener('click', removeChat)
}

let burger = document.querySelector('.burger')
let menuRemove = document.querySelector('.icons-top .close')

burger.addEventListener('click', showMenu)
menuRemove.addEventListener('click', removeMenu)
window.addEventListener('load', windowSize)
window.addEventListener('resize', windowSize)

let iconChat = document.querySelector('.icon_chat')
let iconCall = document.querySelector('.icon_call')
let iconTopChat = document.querySelector('.icons-right .icon_chat')
let iconTopCall = document.querySelector('.icons-right .icon_call')
let chatRemove = document.querySelector('.feedback .close')
let callRemove = document.querySelector('.call .close')
let menu = document.querySelector('.menu')
let feedback = document.querySelector('.feedback')
let call = document.querySelector('.call')

document.addEventListener('click', function (event) {
  if (
    !iconChat.contains(event.target) &&
    feedback.classList.contains('feedback-active') &&
    !iconTopChat.contains(event.target) &&
    !feedback.contains(event.target)
  ) {
    removeChat()
  }
})

document.addEventListener('click', function (event) {
  if (
    !iconCall.contains(event.target) &&
    call.classList.contains('call-active') &&
    !iconTopCall.contains(event.target) &&
    !call.contains(event.target)
  ) {
    removeCall()
  }
})

document.addEventListener('click', function (event) {
  if (
    !menu.contains(event.target) &&
    menu.classList.contains('active') &&
    !burger.contains(event.target) &&
    !chatRemove.contains(event.target) &&
    !callRemove.contains(event.target)
  ) {
    removeMenu()
  }
})

iconChat.addEventListener('click', showChat)
iconChat.addEventListener('click', closeChat)
iconCall.addEventListener('click', showCall)
iconCall.addEventListener('click', closeCall)
iconTopChat.addEventListener('click', showChat)
iconTopChat.addEventListener('click', closeChat)
iconTopCall.addEventListener('click', showCall)
iconTopCall.addEventListener('click', closeCall)
chatRemove.addEventListener('click', removeChat)
callRemove.addEventListener('click', removeCall)

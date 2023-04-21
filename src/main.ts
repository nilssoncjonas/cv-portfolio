import './scss/style.scss'

// DOM querySelector
const menuToggle = document.querySelector('#menuToggle') as HTMLSpanElement
const menuWrap = document.querySelector('#menuWrap') as HTMLDivElement
const body = document.querySelector('#body') as HTMLBodyElement

// menuToggle
menuToggle.addEventListener('click', () => {
	menuWrap.classList.toggle('show')
	body.classList.toggle('fixed')
})
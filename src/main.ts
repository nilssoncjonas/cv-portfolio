import './scss/style.scss'

// DOM querySelector
const menuToggle = document.querySelector('#menuToggle') as HTMLSpanElement
const menuWrap = document.querySelector('#menuWrap') as HTMLDivElement

menuToggle.addEventListener('click', () => {
	menuWrap.classList.toggle('show')
})
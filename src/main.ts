import './scss/style.scss'

// DOM querySelector
const menuToggle = document.querySelector('#menuBurger') as HTMLSpanElement
const menuWrap = document.querySelector('#menuWrap') as HTMLDivElement
const menuItems = Array.from(document.querySelectorAll('.menuItem')) as HTMLLIElement[]
const body = document.querySelector('#body') as HTMLBodyElement


// functions
const toggleMenu = () => {
	menuWrap.classList.toggle('show')
	body.classList.toggle('fixed')
	console.log('toggleMenu')
}

// evenlisteners
menuToggle.addEventListener('click',toggleMenu) 

menuItems.forEach(
	function(menuItem) {
		menuItem.addEventListener('click', toggleMenu)
	}
)
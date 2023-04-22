import './scss/style.scss'

// DOM querySelector
const menuToggle = document.querySelector('#menuBurger') as HTMLSpanElement
const menuWrap = document.querySelector('#menuWrap') as HTMLDivElement
const menu = document.querySelector('.menu') as HTMLUListElement
const menuItems = Array.from(document.querySelectorAll('.menuItem')) as HTMLLIElement[]
const body = document.querySelector('#body') as HTMLBodyElement

// const date = new Date();
// const year = date.getFullYear();
// const month = date.getMonth() + 1;
// const day = date.getDate();
// const hours = date.getHours();
// const minutes = date.getMinutes();
// const seconds = date.getSeconds();

// const timestamp = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

const timeStamp = () => new Date().toLocaleString("sv-SE", { timeZone: "Europe/Stockholm" });


// functions
const toggleMenu = () => {
	console.log('togglemenu @',timeStamp())
	menu.classList.toggle('show')
	menuWrap.classList.toggle('show')
	body.classList.toggle('fixed')
}

// evenlisteners
menuToggle.addEventListener('click',toggleMenu) 

menuItems.forEach(
	function(menuItem) {
		menuItem.addEventListener('click', toggleMenu)
	}
)
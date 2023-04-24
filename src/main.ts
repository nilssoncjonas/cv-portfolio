import './scss/style.scss'

// DOM querySelector
const menuToggle = document.querySelector('#menuBurger') as HTMLSpanElement
const menuWrap = document.querySelector('#menuWrap') as HTMLDivElement
const menu = document.querySelector('.menu') as HTMLUListElement
const menuItems = Array.from(document.querySelectorAll('.menuItem')) as HTMLLIElement[]
const body = document.querySelector('#body') as HTMLBodyElement

const bttopEl = document.querySelector('#test') as HTMLSpanElement


const timeStamp = () => new Date().toLocaleString("sv-SE", { timeZone: "Europe/Stockholm" });


// functions
const toggleMenu = () => {
	console.log('togglemenu @', timeStamp())
	menu.classList.toggle('show')
	menuWrap.classList.toggle('show')
	body.classList.toggle('fixed')
}



// evenlisteners
menuToggle.addEventListener('click', toggleMenu)

menuItems.forEach(
	function (menuItem) {
		menuItem.addEventListener('click', toggleMenu)
	}
)




let scrollPos = 0;


const checkPosition = () => {
  let windowY = window.scrollY;
  if (windowY < scrollPos) {
    // Scrolling UP
    bttopEl.classList.add('bttop__show');
    bttopEl.classList.remove('bttop__hide');
  } else {
    // Scrolling DOWN
    bttopEl.classList.add('bttop__hide');
    bttopEl.classList.remove('bttop__show');
  }
  scrollPos = windowY;
}

window.addEventListener('scroll', checkPosition);

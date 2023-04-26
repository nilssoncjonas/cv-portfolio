import './scss/style.scss'

// DOM querySelector
const menuToggle = document.querySelector('#menuBurger') as HTMLSpanElement
const menuWrap = document.querySelector('#menuWrap') as HTMLDivElement
const menu = document.querySelector('.menu') as HTMLUListElement
const menuItems = Array.from(document.querySelectorAll('.menuItem')) as HTMLLIElement[]
const body = document.querySelector('#body') as HTMLBodyElement
const logoHeader = document.querySelector('#logoHeader') as HTMLImageElement
const logoFooter = document.querySelector('#logoFooter') as HTMLImageElement
const bttopEl = document.querySelector('#test') as HTMLSpanElement

const colorThemes = document.querySelectorAll<HTMLInputElement>('[name="theme"]')
const timeStamp = () => new Date().toLocaleString("sv-SE", { timeZone: "Europe/Stockholm" });

// menu 
const toggleMenu = () => {
	console.log('togglemenu @', timeStamp())
	menu.classList.toggle('show')
	menuWrap.classList.toggle('show')
	body.classList.toggle('fixed')
}

menuToggle.addEventListener('click', toggleMenu)

menuItems.forEach(
	function (menuItem) {
		menuItem.addEventListener('click', toggleMenu)
	}
)


// 'Back to top'
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

// theme

// store theme
const storeTheme = (theme: string) => {
	localStorage.setItem('theme', theme)
}

colorThemes.forEach(theme => {
	theme.addEventListener('click', () => {
		storeTheme(theme.id)
		// fallback for no :has() support
		document.documentElement.className = theme.id
		setLogoFilter(theme.id)
	})
})

//apply theme
const setTheme = () => {
	const activeTheme = localStorage.getItem('theme')
	console.log(`loaded ${activeTheme} from localStorage...`)
	colorThemes.forEach(theme => {
		if (theme.id === activeTheme) {
			theme.checked = true
		}
	})
	// fallback for no :has() support
	document.documentElement.className = activeTheme!
	setLogoFilter(activeTheme!)
}

const setLogoFilter = (theme: string) => {
	logoHeader.classList.value = ''
	logoFooter.classList.value = ''
	logoFooter.classList.add(`${theme}_filter`)
	logoHeader.classList.add(`${theme}_filter`)
}

setTheme()


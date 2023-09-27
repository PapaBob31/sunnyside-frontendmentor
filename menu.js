let menuBtn = document.getElementById("menu-btn")
let menu =  document.querySelector("nav")
let menuIsShown = false

function toggleMenu(e) {
	if (menuIsShown) {
		menu.classList.remove("shown")
		menuIsShown = false;
	}else{
		if (e.target !== menuBtn) {
			return; // only menuBtn should open the menu when clicked
		}
		menu.classList.add("shown")
		menuIsShown = true;
	}
	e.stopPropagation();
}

menuBtn.addEventListener("click", toggleMenu)
document.addEventListener("click", toggleMenu)
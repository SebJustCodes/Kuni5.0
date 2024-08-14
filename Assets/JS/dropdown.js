const menu_btn = document.getElementById('menu-btn');
const menu_symbol = document.getElementById('menu-symbol');		// Gets all necessary variabls
const dropdown_menu = document.querySelector('.dropdown-menu');	// ie. Button, Menu, and optional symbol design

let click_count = 0;	// Sets a count variable for repeated event (click)

function checkViewportWidth() {
    if (window.innerWidth >= 612) {
		hideDropdown();		// If viewport is greater than the lowest viewport, hides the menu automatically
    }						// Ensures that the menu closes when the viewport is big enough
}

window.addEventListener('resize', checkViewportWidth);	// Checks window viewport changes
checkViewportWidth();

menu_btn.addEventListener('click', function(){
	if (click_count == 0){
		displayDropdown();
	}
	else{
		hideDropdown();
	}
})

function displayDropdown(){	//function for displaying dropdown
	click_count++;
	dropdown_menu.style.display = "flex";
	menu_symbol.textContent = "arrow_drop_down";
}

function hideDropdown(){	//function for hiding dropdown
	click_count = 0;
	dropdown_menu.style.display = "none";
	menu_symbol.textContent = "menu";
}
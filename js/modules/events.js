// Element Selectors
import {
	burgerMenuButton,
	overlay,
	sideNav,
	sideNavCloseButton,
	themeMenu,
	themeMenuButton,
	hoverMessege,
	searchBar,
	InputField,
	addListBtn,
	settingsBtn,
	deleteAllBtn,
} from "./domElements.js";

// Prevent default right-click context menu
document.body.addEventListener("contextmenu", (event) =>
	event.preventDefault()
);

// ================================================
// Side Navigation Functionality
// ================================================

burgerMenuButton.addEventListener("click", () => {
	sideNav.style.left = "0";
	sideNav.classList.remove("closed");
});

sideNavCloseButton.addEventListener("click", () => {
	sideNav.classList.add("closed");
});

// ================================================
// Theme Menu Functionality
// ================================================

themeMenuButton.addEventListener("click", toggleThemeMenu);
overlay.addEventListener("click", closeThemeMenu);

function toggleThemeMenu() {
	const isMenuOpen = themeMenu.style.opacity === "1";
	isMenuOpen ? closeThemeMenu() : openThemeMenu();
}

function openThemeMenu() {
	themeMenu.style.opacity = "1";
	themeMenu.style.top = "70px";
	themeMenu.style.pointerEvents = "all";
	themeMenu.style.zIndex = "10000000";
	overlay.style.display = "block";
}

function closeThemeMenu() {
	themeMenu.style.opacity = "0";
	themeMenu.style.top = "20px";
	themeMenu.style.pointerEvents = "none";
	overlay.style.display = "none";
}

// ================================================
// Hover Messege Functionality
// ================================================

searchBar.addEventListener("mouseenter", (e) => {
	displayHoverMessege("Search Your Tasks (Ctrl + K)", e.pageX, e.pageY);
});
searchBar.addEventListener("mouseleave", () => {
	hideHoverMessege();
});
InputField.addEventListener("mouseenter", (e) => {
	displayHoverMessege(`Add a task in "My Day" (Ctrl + F)`, e.pageX, e.pageY);
});
InputField.addEventListener("mouseleave", () => {
	hideHoverMessege();
});

addListBtn.addEventListener("mouseenter", (e) => {
	displayHoverMessege(`New List (Ctrl + L)`, e.pageX, e.pageY);
});
addListBtn.addEventListener("mouseleave", () => {
	hideHoverMessege();
});

settingsBtn.addEventListener("mouseenter", (e) => {
	displayHoverMessege(`Settings (Ctrl + S)`, e.pageX, e.pageY);
});

settingsBtn.addEventListener("mouseleave", () => {
	hideHoverMessege();
});

// themeMenu.addEventListener("mouseenter", (e) => {
// 	displayHoverMessege(`Tasks Options`, e.pageX, e.pageY);
// });
// themeMenu.addEventListener("mouseleave", () => {
// 	hideHoverMessege();
// });

function hideHoverMessege() {
	hoverMessege.style.opacity = "0";
}

function displayHoverMessege(messege, x, y) {
	hoverMessege.style.left = x + "px";
	hoverMessege.style.top = y + "px";
	hoverMessege.style.transform = `translate(-50%, -150%)`;
	setTimeout(() => {
		hoverMessege.innerHTML = `${messege}`;
		hoverMessege.style.opacity = "1";
	}, 1000);
	setTimeout(() => {
		hoverMessege.style.opacity = "0";
	}, 4000);
}

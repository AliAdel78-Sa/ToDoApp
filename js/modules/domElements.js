/**
 * Alias Function for Selecting DOM Elements
 * @param {string} selector The CSS Selector of an html element
 * @returns An Element From The Html By The Selector
 */
const $ = function (selector) {
	const element = document.querySelector(selector);
	if (element === null) {
		console.warn(`Warning: Element not found for selector "${selector}".`);
	}
	return element;
};
// Exporting DOM Elements So They Can Be Reused
export const burgerMenuButton = $("#burger");
export const sideNavCloseButton = $("#close");
export const sideNav = $("#nav");
export const themeMenuButton = $("#themes-menu");
export const overlay = $("#overlay");
export const themeMenu = $("#themes");
export const circle = $("#circle");
export const progress = $("#progress");
export const taskListContainer = $("#listOfTasks");
export const searchBar = $("#search");
export const initialMessege = $("#initialMessege");
export const completedTasksLink = $("#CLink");
export const ImportantTasksLink = $("#ILink");
export const mainToDoListLink = $("#DLink");
export const InputField = $("#inputField");
export const PageTitle = $("#pageTitle");
export const taskInputField = $("#taskInput");
export const deleteOverlay = $("#overlay2");
export const addTaskButton = $("#addbtn");
export const confirmationPopup = $("#popup");
export const confirmDeleteButton = $("#delete");
export const cancelDeleteButton = $("#cancel");
export const deleteAllBtn = $("#deleteAllBtn");
export const initialMessege__img = $("#initialMessege__img");
export const initialMessege__text = $("#initialMessege__text");
export const initialMessege__title = $("#initialMessege__title");
export const header = $("#header");
export const blueViolet = $("#blue-violet");
export const pink = $("#pink");
export const reddish = $("#reddish");
export const green = $("#green");
export const gray = $("#gray");
export const hippie = $("#hippi-blue");
export const pinkViolet = $("#pink-violet");
export const mount = $("#mount");
export const main = $("#main");
export const popupText = $(".popup-text");
export const audio = $("audio");
export const hoverMessege = $("#hover-messege");
export const addListBtn = $("#add-list-btn");
export const settingsBtn = $("#settings");

// DOM Elements
import { displayDate } from "./date.js";

import {
	progress,
	PageTitle,
	taskListContainer,
	sideNav,
	mainToDoListLink,
	ImportantTasksLink,
	completedTasksLink,
	initialMessege,
	InputField,
	initialMessege__text,
	initialMessege__title,
	circle,
} from "./domElements.js";
const links = [mainToDoListLink, completedTasksLink, ImportantTasksLink];

// Checking For List Emptyness To Display A Popup Messege
export function checkingTaskListEmptyness(mainToDoList, taskListContainer) {
	if (mainToDoList.length === 0) {
		taskListContainer.style.display = "none";
		initialMessege.style.display = "flex";
	} else {
		initialMessege.style.display = "none";
		taskListContainer.style.display = "flex";
		taskListContainer.style.flexFlow = "column";
	}
}

export function handleCurrentPageDisplaying(currentPage, taskList) {
	switch (currentPage) {
		case "mainToDoList":
			displayMainToDoListComponents(taskList);
			break;
		case "completedTasks":
			displayCompletedListComponents(taskList);
			break;
		case "importantTasks":
			displayImportantListComponents(taskList);
			break;
	}
}
function displayMainToDoListComponents(taskList) {
	initialMessege__title.textContent = "Focus On Your Day";
	initialMessege__text.textContent =
		"Get Things Done with My Day, a list that refreshes you every day";
	links.forEach((e) => {
		e.classList.remove("active");
	});
	mainToDoListLink.classList.add("active");
	taskListContainer.style.display = "flex";
	InputField.style.display = "flex";
	displayDate(true);
	PageTitle.textContent = "My Day";
	sideNav.classList.add("closed");
	circle.style.display = "flex";
	progress.style.display = "flex";
}

function displayCompletedListComponents(taskList) {
	initialMessege__title.textContent = "";
	initialMessege__text.textContent =
		"All Your Completed Tasks Will Show Up here";
	links.forEach((e) => {
		e.classList.remove("active");
	});
	completedTasksLink.classList.add("active");
	InputField.style.display = "none";
	taskListContainer.style.display = "flex";
	PageTitle.textContent = "Completed Tasks";
	sideNav.classList.add("closed");
	displayDate(false);
	circle.style.display = "none";
	progress.style.display = "none";
}

function displayImportantListComponents(taskList) {
	initialMessege__title.textContent = "";
	initialMessege__text.textContent =
		"All Your Important Tasks Will Show Up here";
	links.forEach((e) => {
		e.classList.remove("active");
	});
	ImportantTasksLink.classList.add("active");
	taskListContainer.style.display = "flex";
	InputField.style.display = "none";
	PageTitle.textContent = "Important Tasks";
	displayDate(false);
	sideNav.classList.add("closed");
	circle.style.display = "none";
	progress.style.display = "none";
}

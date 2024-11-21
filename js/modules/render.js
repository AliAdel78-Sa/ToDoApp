// DOM Elements
import {
	circle,
	progress,
	taskListContainer,
	searchBar,
} from "./domElements.js";
// Creating Elements For Task

export function createTaskHelpers(task, title) {
	// Create CheckBox
	const checkboxContainer = document.createElement("div");
	const checkboxIcon = document.createElement("i");
	checkboxContainer.id = "checkbox";
	checkboxIcon.className = "bx bx-check";
	if (task.completed) checkboxContainer.classList.add("active");
	checkboxContainer.appendChild(checkboxIcon);
	// Create Task Title
	const taskTitle = document.createElement("div");
	taskTitle.id = "text";
	taskTitle.textContent = title;
	// Create Action Icons
	const actionIcons = document.createElement("div");
	actionIcons.id = "icons";
	const deleteContainer = document.createElement("div");
	const deleteIcon = document.createElement("i");
	deleteContainer.className = "delete";
	deleteIcon.className = "fa-regular fa-trash-can";
	deleteIcon.style.pointerEvents = "none";
	deleteIcon.style.color = "#dc282b";
	deleteContainer.appendChild(deleteIcon);
	const favoriteContainer = document.createElement("div");
	const starIcon = document.createElement("i");
	favoriteContainer.id = "favourite";
	if (task.importance === true) {
		starIcon.className = "bx bxs-star";
	} else {
		starIcon.className = "bx bx-star";
	}
	starIcon.style.color = "var(--clr-500)";
	favoriteContainer.appendChild(starIcon);
	actionIcons.append(deleteContainer, favoriteContainer);
	// Returning Elements
	return [checkboxContainer, taskTitle, actionIcons];
}

// Searching Function

export function filterSearch(task, li, searchBar) {
	if (
		task.title.toLowerCase().includes(searchBar.value.trim().toLowerCase())
	) {
		li.style.display = "flex";
	} else {
		li.style.display = "none";
	}
}

// Calculating The Completed Tasks Progress

export function calcProgress(taskList) {
	let numberOfComletedTasks = 0;
	taskList.forEach((task) => {
		if (task.completed === true) {
			numberOfComletedTasks++;
		}
	});
	circle.textContent = `${numberOfComletedTasks}/${taskList.length}`;
	const progressPercentage = Math.round(
		(numberOfComletedTasks / taskList.length) * 100
	);
	progress.style.background = `conic-gradient(
		var(--main) 0%,
		var(--clr-800) 0% ${progressPercentage || 0}%,
		var(--main) ${progressPercentage || 0}% 100%
		)`;
	numberOfComletedTasks = 0;
}

export function createTasksDOM(currentPage, taskList, animate) {
	console.time("Timer")
	taskList.forEach((task) => {
		// Display Content Based On The CurrentPage
		if (currentPage === "completedTasks") {
			if (task.completed === false) {
				return; // If task isn't completed it will return and don't create the task dom element
			}
		}
		if (currentPage === "importantTasks") {
			if (task.importance === false) {
				return; // If task isn't important it will return and don't create the task dom element
			}
		}
		const listItem = document.createElement("li");
		listItem.id = String(task.id);
		listItem.classList.add("listItem");
		listItem.setAttribute("text", task.title);
		// Creating SubElements Of The Task
		const [checkboxContainer, taskTitle, actionIcons] = createTaskHelpers(
			task,
			task.title
		);
		if (task.importance === true) {
			listItem.style.order = "-1";
		}
		
		filterSearch(task, listItem, searchBar);
		listItem.append(checkboxContainer, taskTitle, actionIcons);
		taskListContainer.appendChild(listItem);
		if (animate) {
			for (let i = 0; i < taskListContainer.children.length; i++) {
				taskListContainer.children[i].style.backgroundColor =
				"var(--main)";
			}
			taskListContainer.lastElementChild.style.animationName = "appear";
		}
	});
	// taskListContainer.lastElementChild.style.animationName = "";
	animate = false;
	calcProgress(taskList);
	console.timeEnd("Timer")
}

// Save tasks to local storage
export function saveTasksToLocalStorage(list) {
	localStorage.setItem("mainToDoList", JSON.stringify(list));
}

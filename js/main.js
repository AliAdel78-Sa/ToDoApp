// Importing necessary modules
// ================================================
import {
	createTasksDOM,
	calcProgress,
	saveTasksToLocalStorage,
} from "./modules/render.js";

import {
	checkingTaskListEmptyness,
	handleCurrentPageDisplaying,
} from "./modules/display.js";

import {
	audio,
	ImportantTasksLink,
	addTaskButton,
	cancelDeleteButton,
	completedTasksLink,
	confirmDeleteButton,
	confirmationPopup,
	deleteAllBtn,
	deleteOverlay,
	mainToDoListLink,
	popupText,
	searchBar,
	taskInputField,
	taskListContainer,
} from "./modules/domElements.js";
// ================================================

// Variables for tasks
let taskIdToDelete = null; // Stores the task to be deleted,
let taskMessage = null; // Task message
let mainToDoList = JSON.parse(localStorage.getItem("mainToDoList")) || []; // main to-do list data

// Add event listeners for various actions
// ===================================
window.addEventListener("keydown", (e) => {
	// Shortcut: Ctrl + K to focus search bar
	if (e.key.toLowerCase() === "k" && e.ctrlKey) {
		e.preventDefault();
		searchBar.focus();
	}
	// Shortcut: Ctrl + F to focus task input field
	if (e.key.toLowerCase() === "f" && e.ctrlKey) {
		e.preventDefault();
		taskInputField.focus();
	}
});

searchBar.addEventListener("input", renderTaskList); // Updates task list on search
deleteAllBtn.addEventListener("click", () => {
	// Clears all tasks
	mainToDoList = [];
	updateTasks();
	calcProgress(mainToDoList);
});

// Task input field behaviors
taskInputField.addEventListener(
	"focus",
	() =>
		(taskInputField.placeholder =
			"Try Typing 'Pay Utilites bill by Friday 6pm'")
);
taskInputField.addEventListener(
	"blur",
	() => (taskInputField.placeholder = "Add a Task")
);
taskInputField.addEventListener("click", handleAddTask(true));
taskInputField.addEventListener("keydown", (event) => {
	if (event.key === "Enter") handleAddTask(true); // Add task on Enter key
});

// Adding tasks and handling clicks
addTaskButton.addEventListener("click", handleAddTask(true));
window.addEventListener("click", handleTaskActions);

// Delete confirmation popup actions
deleteOverlay.addEventListener("click", closeConfirmationPopup);
cancelDeleteButton.addEventListener("click", closeConfirmationPopup);
confirmDeleteButton.addEventListener("click", () =>
	confirmTaskDeletion(taskIdToDelete)
);

// Navigation links for switching task views
mainToDoListLink.addEventListener("click", () => {
	window.localStorage.setItem("currentPage", "mainToDoList");
	renderTaskList();
});
completedTasksLink.addEventListener("click", () => {
	window.localStorage.setItem("currentPage", "completedTasks");
	renderTaskList();
});
ImportantTasksLink.addEventListener("click", () => {
	window.localStorage.setItem("currentPage", "importantTasks");
	renderTaskList();
});
// ===================================

// Adds a new task to the list
function handleAddTask(animate) {
	const taskTitle = taskInputField.value.trim();
	if (taskTitle.length === 0) return;

	let taskObject = {
		title: taskTitle,
		id: Date.now(),
		completed: false,
		importance: false,
		subTasks: [],
	};

	mainToDoList.push(taskObject);
	taskInputField.value = "";
	updateTasks(animate);
}

// Renders tasks based on the current page
function renderTaskList(animate) {
	let currentPage =
		window.localStorage.getItem("currentPage") || "mainToDoList";
	taskListContainer.innerHTML = "";
	checkingTaskListEmptyness(mainToDoList, taskListContainer);
	handleCurrentPageDisplaying(currentPage, mainToDoList);
	createTasksDOM(currentPage, mainToDoList, animate);
}

// Handles user interactions with tasks (delete, toggle complete, mark important)
function handleTaskActions(event) {
	const targetClass = event.target.className;

	// Ensure the click is on a task item
	const listItem = event.target.closest("li");
	if (!listItem) return;

	const taskId = listItem.id;

	// Show delete confirmation
	if (targetClass.includes("delete")) {
		taskIdToDelete = taskId;
		taskMessage = listItem.getAttribute("text");
		showConfirmationPopup();
	}

	// Toggle task completion
	if (event.target.id === "checkbox" || event.target.id === "text") {
		if (!event.target.classList.contains("active")) {
			audio.currentTime = 0;
			audio.play();
		}

		const isCompleted =
			event.target.id === "checkbox"
				? event.target.classList.toggle("active")
				: event.target.previousSibling.classList.toggle("active");

		mainToDoList.forEach((task) => {
			if (String(task.id) === taskId) task.completed = isCompleted;
		});
		updateTasks();
	}

	// Toggle task importance
	if (event.target.id === "favourite") {
		if (event.target.firstChild.className === "bx bx-star") {
			event.target.firstChild.className = "bx bxs-star";
			mainToDoList.forEach((task) => {
				if (task.id == listItem.id) task.importance = true;
			});
		} else {
			event.target.firstChild.className = "bx bx-star";
			mainToDoList.forEach((task) => {
				if (task.id == listItem.id) task.importance = false;
			});
		}
		updateTasks();
	}
}

// Displays the delete confirmation popup
function showConfirmationPopup() {
	deleteOverlay.style.display = "flex";
	confirmationPopup.style.display = "flex";
	confirmationPopup.style.animationName = "fade-in";
	popupText.innerHTML = `"${taskMessage}" will be permanently deleted`;
	taskMessage = null;
}

// Closes the delete confirmation popup
function closeConfirmationPopup() {
	confirmationPopup.style.animationName = "fade-out";
	setTimeout(() => {
		confirmationPopup.style.display = "none";
		deleteOverlay.style.display = "none";
	}, 500);
}

// Confirms the deletion of a task
function confirmTaskDeletion(taskId) {
	mainToDoList = mainToDoList.filter(
		(task) => task.id !== parseInt(taskId, 10)
	);
	updateTasks();
	taskIdToDelete = null;
}

// Updates the task list in local storage and re-renders
function updateTasks(animate = false) {
	saveTasksToLocalStorage(mainToDoList);
	renderTaskList(animate);
}

// ================================================
// Initial render to display tasks on page load
// ================================================
renderTaskList();

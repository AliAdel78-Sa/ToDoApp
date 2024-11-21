// Constants for Date and Time
const dateDisplay = document.getElementById("date");
const weekDays = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

const currentDate = new Date();
const currentMonth = currentDate.getMonth();
const currentWeekDay = currentDate.getDay();

/**
 * If passd true date will be displayed, otherwise it won't
 * @param {boolean} displayDate
 */

export function displayDate(displayDate) {
	if (displayDate) {
		dateDisplay.textContent = `${weekDays[currentWeekDay]}, ${
			months[currentMonth]
		} ${currentDate.getDate()}`;
	} else {
		dateDisplay.textContent = "";
	}
}

// function createTaskElement(task) {
// 	const li = document.createElement("li");
// 	li.id = task.id;
// 	li.className = "listItem";
	
// 	const checkbox = document.createElement("div");
// 	checkbox.id = "checkbox";
// 	checkbox.className = task.completed ? "active" : "";
// 	checkbox.innerHTML = '<i class="bx bx-check" style="color: #ffffff"></i>';
	
// 	const text = document.createElement("div");
// 	text.id = "text";
// 	text.textContent = task.title;
	
// 	const icons = document.createElement("div");
// 	icons.id = "icons";
	
// 	const deleteIcon = document.createElement("div");
// 	deleteIcon.className = "delete";
// 	deleteIcon.innerHTML = '<i class="bx bx-trash"></i>';
	
// 	const favoriteIcon = document.createElement("div");
// 	favoriteIcon.id = "favourite";
// 	favoriteIcon.innerHTML = `<i class="${
// 		task.importance ? "bx bxs-star" : "bx bx-star"
// 	}" style="color: #788cde"></i>`;
	
// 	icons.append(deleteIcon, favoriteIcon);
// 	li.append(checkbox, text, icons);
	
// 	return li;
// }
// setInterval(() => {
// 	console.time("Timer");
// 	document.body.innerHTML = "";
// 	for (let i = 0; i < 100; i++) {
// 		document.body.append(
// 			createTaskElement({
// 				id: 1,
// 				title: "hello",
// 				completed: true,
// 				importance: true,
// 			})
// 		);
// 	}
// 	console.timeEnd("Timer");
// }, 100);

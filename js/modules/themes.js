import {
	reddish,
	gray,
	green,
	blueViolet,
	hippie,
	pinkViolet,
	pink,
	mount,
} from "./domElements.js";

let list = [reddish, blueViolet, pink, pinkViolet, green, gray, hippie];

mount.addEventListener("click", (e) => {
	console.log(mount);
	document.body.style.backgroundImage = 'url("../../assets/imgs/cities.jpg")';
});

reddish.addEventListener("click", (e) => {
	window.localStorage.setItem("currentTheme", "reddish");
	list.forEach((e) => e.classList.remove("active"));
	e.target.classList.add("active");
	checkingTheme();
});
blueViolet.addEventListener("click", (e) => {
	window.localStorage.setItem("currentTheme", "blueViolet");
	list.forEach((e) => e.classList.remove("active"));
	e.target.classList.add("active");
	checkingTheme();
});
hippie.addEventListener("click", (e) => {
	window.localStorage.setItem("currentTheme", "hippiBlue");
	list.forEach((e) => e.classList.remove("active"));
	e.target.classList.add("active");
	checkingTheme();
});
pinkViolet.addEventListener("click", (e) => {
	window.localStorage.setItem("currentTheme", "pinkViolet");
	list.forEach((e) => e.classList.remove("active"));
	e.target.classList.add("active");
	checkingTheme();
});
gray.addEventListener("click", (e) => {
	window.localStorage.setItem("currentTheme", "regentGray");
	list.forEach((e) => e.classList.remove("active"));
	e.target.classList.add("active");
	checkingTheme();
});
green.addEventListener("click", (e) => {
	window.localStorage.setItem("currentTheme", "green");
	list.forEach((e) => e.classList.remove("active"));
	e.target.classList.add("active");
	checkingTheme();
});
pink.addEventListener("click", (e) => {
	window.localStorage.setItem("currentTheme", "pink");
	list.forEach((e) => e.classList.remove("active"));
	e.target.classList.add("active");
	checkingTheme();
});

function checkingTheme() {
	const theme = window.localStorage.getItem("currentTheme") || "blueViolet";
	switch (theme) {
		case "blueViolet":
			document.body.setAttribute("theme", "blue-violet");
			blueViolet.classList.add("active");
			break;
		case "pinkViolet":
			document.body.setAttribute("theme", "pink-violet");
			pinkViolet.classList.add("active");
			break;
		case "pink":
			document.body.setAttribute("theme", "pink");
			pink.classList.add("active");
			break;
		case "reddish":
			document.body.setAttribute("theme", "reddish");
			reddish.classList.add("active");
			break;
		case "green":
			document.body.setAttribute("theme", "green");
			green.classList.add("active");
			break;
		case "hippiBlue":
			document.body.setAttribute("theme", "hippie-blue");
			hippie.classList.add("active");
			break;
		case "regentGray":
			document.body.setAttribute("theme", "regent-gray");
			gray.classList.add("active");
			break;
	}
}

checkingTheme();

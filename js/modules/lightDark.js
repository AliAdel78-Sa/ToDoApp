// Implementing Light & Dark Mode Feature
const mode = localStorage.getItem("mode") || "light";

switch (mode) {
	case "light":
		document.body.setAttribute("mode", "light");
		break;
	case "dark":
		document.body.setAttribute("mode", "dark");
		break;
}

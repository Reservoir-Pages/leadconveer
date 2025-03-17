const main = document.querySelector("main");
const headerEl = document.querySelector(".header");
const footerEl = document.querySelector(".footer");
let mainInitialHeight = main.clientHeight;

function getMainHeight() {
	const viewHeight = window.innerHeight;
	const headerHeight = headerEl.offsetHeight;
	const footerHeight = footerEl.offsetHeight;
	let mainHeight = viewHeight - headerHeight - footerHeight - 1;

	return mainHeight;
}

function setMainHeight() {
	main.style.minHeight = `${getMainHeight()}px`;
}

if (main && headerEl && footerEl) {
	setMainHeight();

	window.addEventListener("resize", (e) => {
		mainInitialHeight = main.offsetHeight;
		setMainHeight();
	});
}

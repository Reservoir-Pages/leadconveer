const menuBtn = document.querySelector("[data-js-burger]");
const menu = document.querySelector("[data-js-menu]");

function menuToggle() {
	if (menuBtn && menu) {
		document.body.classList.toggle("scroll-stop");
		menuBtn.classList.toggle("active");
		menu.classList.toggle("active");
	}
}

if (menuBtn && window.innerWidth <= 767) menuBtn.addEventListener("click", menuToggle);

window.addEventListener("resize", (e) => {
	if (window.innerWidth <= 767) {
		menuBtn.addEventListener("click", menuToggle);
	} else {
		menuBtn.removeEventListener("click", menuToggle);
		document.body.classList.remove("scroll-stop");
		menuBtn.classList.remove("active");
		menu.classList.remove("active");
	}
});

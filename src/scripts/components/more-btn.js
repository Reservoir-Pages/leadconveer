const moreText = document.querySelectorAll("[data-js-leadgeneration-text]");
const moreBtn = document.querySelector("[data-js-leadgeneration-btn]");

if (moreBtn) {
	moreBtn.addEventListener("click", (e) => {
		e.preventDefault();

		moreBtn.classList.toggle("is-active");

		if (moreBtn.classList.contains("is-active")) {
			moreText.forEach((paragraph) => {
				paragraph.classList.remove("is-hidden");
			});
			moreBtn.textContent = "Скрыть";
		} else {
			moreText.forEach((paragraph) => {
				paragraph.classList.add("is-hidden");
			});
			moreBtn.textContent = "Читать больше";
		}
	});
}

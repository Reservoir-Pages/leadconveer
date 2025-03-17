const fieldInputs = document.querySelectorAll(".js-fielset-input");
const fieldLabels = document.querySelectorAll(".js-fieldset-label");

function setNewElementWidth(element) {
	const tempElement = document.createElement("span");
	tempElement.textContent = element.value;
	tempElement.style.visibility = "hidden";
	tempElement.style.whiteSpace = "nowrap";
	tempElement.style.position = "absolute";
	document.body.append(tempElement);

	const { width } = getComputedStyle(tempElement);

	const newWidth = parseFloat(width);

	tempElement.remove();

	return newWidth;
}

setTimeout(() => {
	fieldInputs.forEach((input) => {
		input.style.maxWidth = setNewElementWidth(input) + 12 + "px";
	});

	fieldLabels.forEach((label) => {
		const input = label.querySelector("input");

		label.style.maxWidth = setNewElementWidth(input) + 29 + "px";
	});
}, 100);

"use strict";

// *** SELECT ELEMENTS ***
const container = document.querySelector(".container");
const picsumURL = "https://picsum.photos/";
const rows = 5;

const arrowTop = document.getElementById("arrowTop");

// *** FUNCTIONALITY ***

for (let i = 0; i < rows * 3; i++) {
	const img = document.createElement("img");
	img.src = `${picsumURL}${getRandomSizeImg()}`;
	container.appendChild(img);

	img.addEventListener("click", () => {
		if (!document.getElementById("overlay")) {
			const overlay = document.createElement("div");
			overlay.id = "overlay";
			container.append(overlay);
		}

		const imageURL = img.src;
		const newImage = document.createElement("img");
		newImage.alt = "Random Image";
		newImage.src = imageURL;
		newImage.id = "newImage";

		document.getElementById("overlay").innerHTML = newImage.outerHTML;
		document.getElementById("overlay").style.display = "block";
	});
}

// ***************************************************************
// ******************* Functions *******************
// ***************************************************************

// *** get random size image width + height (300 - 310). ***
function getRandomSizeImg() {
	return `${getRandomNumberImg()}/${getRandomNumberImg()}`;
}

// *** get random size image 300 - 310 px. ***
function getRandomNumberImg() {
	return Math.floor(Math.random() * 10) + 300;
}

// close overlay, click event.
container.addEventListener("click", (event) => {
	const overlay = document.getElementById("overlay");
	if (overlay && event.target === overlay) {
		overlay.remove();
	}
});

// close overlay, keyUp event.
document.addEventListener("keyup", (e) => {
	const overlay = document.getElementById("overlay");

	if (e.key === "Escape") overlay.remove();
});

// scroll event
window.addEventListener("scroll", () => {
	const windowHeight = 650;

	if (window.scrollY > windowHeight) {
		arrowTop.style.opacity = 1;
	} else {
		arrowTop.style.opacity = 0;
	}
});

arrowTop.addEventListener("click", () => {
	window.scrollTo({
		top: 10,
		behavior: "smooth",
	});
});

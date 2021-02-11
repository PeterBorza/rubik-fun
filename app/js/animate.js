const menuTabs = document.querySelectorAll(".drop-menu li");
const rubix = document.querySelectorAll(".box div");
const boxes = document.querySelectorAll(".box");
const rubikContainer = document.querySelector(".container");

const p = console.log;

const colors = [
	"D3C1C3",
	"E2D0BE",
	"EEE5BF",
	"E8F8C1",
	"D1FFC6",
	"3E4E50",
	"FACFAD",
	"F8BD7F",
	"F5AC72",
	"F2AA7E",
	"D8D4F2",
	"C4B2BC",
	"A29587",
	"846C5B",
	"332E3C",
	"ECC8AF",
	"E7AD99",
	"CE796B",
	"C18C5D",
	"495867",
];
const hex = colors.map((color) => `#${color}`);

const rubikColors = [
	"#009b48",
	"#ffffff",
	"#b71234",
	"#ffd500",
	"#0046ad",
	"#ff5800",
];
// const rubikColors2 = rubikColors1.concat(rubikColors1);
// const rubikColors4 = rubikColors2.concat(rubikColors2);
// const rubikColors = rubikColors4.concat(rubikColors4).concat(rubikColors1);

const finalColors = [];
const count = 9;
new Array(count).fill().forEach(_ => finalColors.push(...rubikColors));

const mixedColors = finalColors.sort((a, b) => 0.5 - Math.random());

// **********************************************
//  MAIN FUNCTION

menuTabs.forEach((tab) => {
	tab.addEventListener("click", (e) => {
		let target = e.target.textContent;

		flipper.style.transform += target;
		flipper.classList.toggle(target);
		switch (target) {
			case "left":
				x("-50");
				break;
			case "right":
				x("50");
				break;
			case "down":
				y("50");
				break;
			case "up":
				y("-50");
				break;
			case "rubik":
				rubix.forEach(
					(rubik, i) =>
						(rubix[i].style.backgroundColor = mixedColors[i])
				);
				break;
			case "bg-random":
				let randomBg = Math.floor(Math.random() * hex.length);
				rubikContainer.style.backgroundColor = hex[randomBg];
				break;
			case "transparent":
				rubix.forEach((rubik) => rubik.classList.toggle("transparent"));
				break;
			case "scale":
				rubix.forEach((rubik) => rubik.classList.toggle("scale"));
				break;
			case "clip-path":
				boxes.forEach((box) => box.classList.toggle("clipPath"));
				break;
			case "default":
				boxes.forEach((box) => box.setAttribute("class", "box"));
				rubix.forEach((box) =>
					box.setAttribute("class", "rubik-color")
				);
				break;
			default:
				return;
		}
	});
});

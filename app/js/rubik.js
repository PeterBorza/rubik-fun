const main = document.querySelector("main");

const bgs = [
	"3E4E50",
	"FACFAD",
	"F8BD7F",
	"F5AC72",
	"F2AA7E",
	"D8D4F2",
	"C4B2BC",
	"A29587",
	"846C5B",
];

const tag = (className, bgColor) => {
	let el = document.createElement("div");
	el.classList.add(className);
	el.style.backgroundColor = bgColor;
	return el;
};

// ******************************************
// colored rubik

const container = tag("container", "black");
const flipper = tag("flipper", "transparent");
container.append(flipper);
main.append(container);

const rubik = () => bgs.map((item) => tag("rubik-color", `#${item}`));

// ******************************************
//  rubik container

const rotZ = (angle) => (`rotateZ(${angle}deg)`);
const rotX = (angle) => (`rotateX(${angle}deg)`);
const rotY = (angle) => (`rotateY(${angle}deg)`);
const diag = (x, y) => (`translate(${x}px, ${y}px)`);
const z = (distance) =>
(flipper.style.transform += `translateZ(${distance}px)`);
const x = (distance) =>
	(flipper.style.transform += `translateX(${distance}px)`);
const y = (distance) =>
	(flipper.style.transform += `translateY(${distance}px)`);


const front = "150px";
// const transformers = [
// 	`${z('-150px')}`,
// 	`${x('100%')} ${rotY('270')} ${z('150px')}`,
// 	`${x('-100%')} ${rotY('90')} ${z('150px')}`,
// 	`${rotX('90')} ${z('150px')}`,
// 	` ${rotX('270')} ${z('150px')}`,
// 	`${z('150px')}`
// ];


const transforms = [
	`translateZ(-${front})`,
	`translateX(100%) rotateY(270deg) translateZ(${front})`,
	`translateX(-100%) rotateY(90deg) translateZ(${front})`,
	`rotateX(90deg) translateZ(${front})`,
	` rotateX(270deg) translateZ(${front})`,
	` translateZ(${front})`,
];
const renderRubik = () => {
	transforms.map((item) => {
		const box = tag("box", "black");
		box.style.transform = item;
		const rubiks = rubik();
		rubiks.forEach((rub) => box.append(rub));
		flipper.append(box);

		return box;
	});
};
renderRubik();


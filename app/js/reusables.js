const main = document.querySelector('main');
const header = document.querySelector('header');

const p = console.log;

const tag = (className, bgColor) => {
	let el = document.createElement('div');
	el.classList.add(className);
	el.style.backgroundColor = bgColor;
	return el;
};

const element = tagName => {
	const tag = document.createElement(tagName);
	return tag;
};

const toggleClass = (element, className) =>
	element.forEach(item => item.classList.toggle(className));

let random = arr => Math.floor(Math.random() * arr.length);

const randomBackground = (group, arr) => {
	group.forEach(
		(_, i) => (group[i].style.backgroundColor = arr[random(arr)])
	);
};

const rZ = angle => `rotateZ(${angle}deg)`;
const rX = angle => `rotateX(${angle}deg)`;
const rY = angle => `rotateY(${angle}deg)`;
const diag = (x, y) => `translate(${x}px, ${y}px)`;
const z = (distance, targetElement) =>
	(targetElement.style.transform += `translateZ(${distance}px)`);
const x = (distance, targetElement) =>
	(targetElement.style.transform += `translateX(${distance}px)`);
const y = (distance, targetElement) =>
	(targetElement.style.transform += `translateY(${distance}px)`);

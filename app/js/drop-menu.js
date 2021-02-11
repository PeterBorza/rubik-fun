const header = document.querySelector("header");

function element(tagName) {
	const tag = document.createElement(tagName);
	return tag;
}

// const links = [
// 	{
// 		title: "transform",
// 		options: [
// 			'diagonally',
// 			"right",
// 			"down",
// 			"rotateX(30deg)",
// 			"rotateY(30deg)",
// 			"rotateZ(30deg)",
// 		],
// 	},
// 	{
// 		title: "color",
// 		options: [
// 			"rgba(0,0,0, 0.8)",
// 			"lightgrey",
// 			"#BF8C3F",
// 			" #298C93",
// 			"#C14242",
// 		],
// 	},
// 	{
// 		title: "size and shape",
// 		options: ["width", "height", "scale", "opacity", "clip-path"],
// 	},
// 	{
// 		title: "animations",
// 		options: ["bounce", "roll", "shiver", "circle", "fade"],
// 	},
// ];

const rubikCommands = [
	{title: 'transform', options: ['left', 'right', 'down', 'up']},
	{title: 'rotate', options: ['rotateX(30deg)', 'rotateX(-30deg)', 'rotateY(30deg)', 'rotateY(-30deg)', 'rotateZ(30deg)', 'rotateZ(-30deg)']},
	{title: 'colors', options: ['rubik', 'random', 'bg-random', 'transparent']},
	{title: 'styles', options: ['opacity', 'scale', 'clip-path', 'default']},
	{title: 'animations', options: ['animation1', 'animation2', 'animation3', 'animation4']}
]

const renderDropMenu = (myArray) => {
	const navBar = element("nav");
	const ul = element("ul");
	const listElements = myArray.map(createListElements);

	listElements.forEach((item) => ul.append(item));
	navBar.append(ul);
	header.append(navBar);
};

const createListElements = (item, i) => {
	const li = element("li");

	const title = createTitle(item.title);
	li.append(title);
	const optionsList = element("ul");
	optionsList.classList.add("drop-menu", `menu-${i + 1}`);
	const options = item.options.map(createOptionListElement);
	options.forEach((option) => optionsList.append(option));
	li.append(optionsList);

	return li;
};

const createTitle = (titleItem) => {
	const p = element("p");
	p.textContent = titleItem;

	return p;
};

const createOptionListElement = (optionsItem) => {
	const optionLi = element("li");
    optionLi.textContent = optionsItem;

	return optionLi;
};

renderDropMenu(rubikCommands);

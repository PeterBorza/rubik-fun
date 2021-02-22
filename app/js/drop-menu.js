const transformSize = 30;
let animationCount = 4;

const rubikCommands = [
	{ title: 'transform', options: ['left', 'right', 'down', 'up'] },
	{
		title: 'rotate',
		options: [
			`rotateX(${transformSize}deg)`,
			`rotateX(-${transformSize}deg)`,
			`rotateY(${transformSize}deg)`,
			`rotateY(-${transformSize}deg)`,
			`rotateZ(${transformSize}deg)`,
			`rotateZ(-${transformSize}deg)`,
		],
	},
	{
		title: 'colors',
		options: ['rubik', 'random', 'bg-random', 'transparent'],
	},
	{ title: 'styles', options: ['opacity', 'scale', 'clip-path', 'default'] },
	{
		title: 'animation',
		options: new Array(animationCount).fill().map((_, i) => `${i + 1}`),
	},
];

// ****************************************************

const randomize = n => `#${Math.floor(Math.random() * n)}`;
const createColors = element => {
	element.style.backgroundColor = `${randomize(1000000)}`;
};
// ****************************************************

const renderDropMenu = myArray => {
	const navBar = element('nav');
	const ul = element('ul');
	const listElements = myArray.map(createListElements);

	listElements.forEach(item => ul.append(item));
	navBar.append(ul);
	return navBar;
};

const createListElements = (item, i) => {
	const navigationBlock = element('li');

	const title = createTitle(item.title);
	const optionsList = element('ul');
	optionsList.classList.add('drop-menu', `menu-${i + 1}`);
	const options = item.options.map(createOptionListElement);
	options.forEach(option => optionsList.append(option));
	navigationBlock.append(title, optionsList);

	navigationBlock.addEventListener('click', e => {
		let target = e.target.getAttribute('data-title');
		let block = title.getAttribute('data-title');
		let upDownSideMoves = 50;
		// p(block, target);

		if (block === 'rotate') {
			flipper.style.transform += target;
		} else if (block === 'transform') {
			switch (target) {
				case 'left':
					x(-upDownSideMoves, flipper);
					break;
				case 'right':
					x(upDownSideMoves, flipper);
					break;
				case 'down':
					y(upDownSideMoves, flipper);
					break;
				case 'up':
					y(-upDownSideMoves, flipper);
					break;
				default:
					return;
			}
		} else if (block === 'animation') {
			flipper.classList.toggle(block + target);
		} else if (target === 'bg-random') {
			createColors(container);
		}
	});

	return navigationBlock;
};

const createTitle = titleItem => {
	const linkTitle = element('p');
	linkTitle.innerText = titleItem;
	linkTitle.setAttribute('data-title', titleItem);

	return linkTitle;
};

const createOptionListElement = optionsItem => {
	const optionListItem = element('li');
	optionListItem.innerText = optionsItem;
	optionListItem.setAttribute('data-title', `${optionsItem}`);

	return optionListItem;
};

header.append(renderDropMenu(rubikCommands));

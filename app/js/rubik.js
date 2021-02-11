const container = tag('container', 'black');
const flipper = tag('flipper', 'transparent');
container.append(flipper);

// ****************************************
//  each side has 9 blocks

const bgs = [
	'3E4E50',
	'FACFAD',
	'F8BD7F',
	'F5AC72',
	'F2AA7E',
	'D8D4F2',
	'C4B2BC',
	'A29587',
	'846C5B',
];

const rubik = arr => arr.map(item => tag('rubik-color', `#${item}`));

// ******************************************
//  rubik container each side position in 3D preserve

const front = '150px';
const percent = '100%';
const degrees = '90';

const transforms = [
	`translateZ(-${front})`,
	`translateX(${percent}) ${rY(degrees * 3)} translateZ(${front})`,
	`translateX(-${percent}) ${rY(degrees)} translateZ(${front})`,
	`${rX(degrees)} translateZ(${front})`,
	` ${rX(degrees * 3)} translateZ(${front})`,
	` translateZ(${front})`,
];
const renderRubik = (sidesArray, sideBoxesArray) => {
	sidesArray.map(item => {
		const box = tag('box', 'black');
		box.style.transform = item;
		const rubiks = rubik(sideBoxesArray);
		rubiks.forEach(rub => box.append(rub));

		flipper.append(box);
		return box;
	});
};
renderRubik(transforms, bgs);

main.append(container);

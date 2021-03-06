const menuTabs = document.querySelectorAll('.drop-menu li');
const sideBlocks = document.querySelectorAll('.box > div');
const sides = document.querySelectorAll('.box');

const rubikColors = [
	'#0000FF',
	'#FFFFFF',
	'#FFFF00',
	'#008000',
	'rgb(230,125,60)',
	'#FF0000',
];

const finalColors = [];
const sideBlockscount = 9;
new Array(sideBlockscount)
	.fill()
	.forEach(_ => finalColors.push(...rubikColors));

const mixedColors = finalColors.sort(() => 0.5 - Math.random());

// **********************************************
//  MAIN FUNCTION

menuTabs.forEach(tab => {
	tab.addEventListener('click', e => {
		let target = e.target.getAttribute('data-title');

		switch (target) {
			case 'rubik':
				randomBackground(sideBlocks, mixedColors);

				break;
			case 'transparent':
				toggleClass(sideBlocks, 'transparent');
				break;
			case 'scale':
				toggleClass(sideBlocks, 'scale');
				break;
			case 'clip-path':
				toggleClass(sides, 'clipPath');
				break;
			case 'default':
				sides.forEach(side => side.setAttribute('class', 'box'));
				sideBlocks.forEach(block =>
					block.setAttribute('class', 'rubik-color')
				);
				break;
			default:
				return;
		}
	});
});

import CodeBlock from './CodeBlock'

const Ide = () => {

	const codeLines = [
		{number: 1, parts: [{cls: 'red', txt: 'body' }, {cls: 'white', txt: ' {' }]},
		{number: 2, parts: [{cls: 'purple', txt: 'background-color' }, {cls: 'white', text: ': black;' }]},
		{number: 3, parts: [{cls: 'white', txt: '}' }]},
		{number: 4, parts: [{cls: '', txt: ' ' }]},
		{number: 5, parts: [{cls: 'red', txt: 'h1' }, {cls: 'white', txt: ' {' }]},
		{number: 6, parts: [{cls: 'purple', txt: 'font-size' }, {cls: 'white', txt: ': ' }, {cls: 'rose', txt: '22px' }, {cls: 'white', txt: ';' }]},
		{number: 7, parts: [{cls: 'purple', txt: 'color' }, {cls: 'white', txt: ': ' }, {cls: 'hot', txt: '#ff0000' }, {cls: 'white', txt: ';' }]},
		{number: 8, parts: [{cls: 'white', txt: '}' }]},
		{number: 9, parts: [{cls: '', txt: ' ' }]},
		{number: 10, parts: [{cls: 'gelb', txt: '.siteHeader' }, {cls: 'white', txt: ' {' }]},
		{number: 11, parts: [{cls: 'purple', txt: 'font-size' }, {cls: 'white', txt: ': ' }, {cls: 'rose', txt: '22px' }, {cls: 'white', txt: ';' }]},
		{number: 12, parts: [{cls: 'purple', txt: 'color' }, {cls: 'white', txt: ': ' }, {cls: 'rose', txt: '22px' }, {cls: 'white', txt: ';' }]},
		{number: 13, parts: [{cls: 'purple', txt: 'color' }, {cls: 'white', txt: ': ' }, {cls: 'rose', txt: 'white' }, {cls: 'white', txt: ';' }]},
		{number: 14, parts: [{cls: 'white', txt: '}' }]},
	]
	
	return ( 
			<CodeBlock lines={codeLines} />
	 );
}
 
export default Ide;
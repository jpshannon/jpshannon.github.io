const path = require('path');

const outDir = 'public';
const srcDir = 'src';
const nodeModulesDir = 'node_modules'


module.exports = {
	outDir: outDir,
	srcDir: srcDir,
	entry: {
		app: path.join(__dirname, srcDir, 'index.js')
	},
	path: {
		outDir: path.resolve(__dirname, outDir),
		srcDir: path.resolve(__dirname, srcDir),
		nodeModulesDir: path.resolve(__dirname, nodeModulesDir),
		resume: path.join(__dirname, srcDir, 'joshua.resume.json')
	},
	resume: {
		template: path.join(srcDir, 'resume.html'),
		options: {
			url: path.resolve(__dirname, 'index.html'),
			path: path.resolve(__dirname),
			format: 'Letter',
			filename: 'resume.pdf',
			pageRanges: '1',
		}
	}
}
const path = require('path');

const outDir = 'public';
const srcDir = 'src';
const nodeModulesDir = 'node_modules'


module.exports = {
	outDir: outDir,
	srcDir: srcDir,
	resumeTemplate: path.join(srcDir, 'views', 'resume.hbs'),
	appEntry: path.join(__dirname, srcDir, 'main.js'),
	vendors: ['bootstrap','jquery'],
	path: {
		outDir: path.resolve(__dirname, outDir),
		srcDir: path.resolve(__dirname, srcDir),
		nodeModulesDir: path.resolve(__dirname, nodeModulesDir),
		partials: [ path.join(__dirname, srcDir, 'views', 'partials') ],
		helpers: [ path.join(__dirname, srcDir, 'helpers') ],
		resume: path.resolve(__dirname, 'joshua.resume.json')
	},
	resume: {
		template: path.join(srcDir, 'views', 'resume.hbs'),
		options: {
			url: path.resolve(__dirname, 'index.html'),
			path: path.resolve(__dirname),
			format: 'a4',
			filename: 'resume.pdf'
		}

	}
}
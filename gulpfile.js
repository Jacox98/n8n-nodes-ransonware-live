const { task, src, dest } = require('gulp');

task('build:icons', copyIcons);

function copyIcons() {
	const iconSources = [
		'nodes/**/*.{png,svg}',
		'credentials/**/*.{png,svg}',
	];

	return src(iconSources, { base: '.', encoding: false, allowEmpty: true }).pipe(dest('dist'));
}

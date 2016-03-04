import gulp from 'gulp'
import fs from 'fs'
import path from 'path'
import {merge} from 'event-stream'
import map from 'map-stream'
import {spawn} from 'child_process'
const $ = require('gulp-load-plugins')()

// Tasks
gulp.task('clean', () => {
	return pipe('./tmp', $.clean())
})

gulp.task('build', (cb) => {
	$.runSequence('clean', 'styles', 'safari', cb)
})

gulp.task('dist', ['build'], (cb) => {
	$.runSequence('safari:zip', cb)
})

gulp.task('styles', () => {
	return pipe(
		['./refined-github/extension/content.css', './refined-github/extension/custom.css'].concat('./src/refined-github.css'),
		$.concat('refined-github.css'),
		'./tmp'
		)
})

// Safari
gulp.task('safari:js', () => {
	const src = [
	'./refined-github/extension/content.js',
	'./refined-github/extension/vendor/gh-injection.js',
	'./refined-github/extension/vendor/sprint.min.js',
	]
	.concat('./src/refined-github.js')

	return pipe(
		src,
		$.babel(),
		$.concat('refined-github.js'),
		$.preprocess(),
		'./tmp'
		)
})

gulp.task('safari', ['safari:js'], () => {
	return merge(
		pipe('./refined-github/extension/icon.png', './tmp/safari/refined-github.safariextension/'),
		pipe(
			['./tmp/refined-github.*', './Info.plist'],
			'./tmp/safari/refined-github.safariextension/'
			)
		)
})

gulp.task('safari:zip', () => {
	return pipe(
		'./tmp/safari/**/*',
		$.zip('safari.zip'),
		'./dist/'
		)
})

// Helpers
function pipe(src, ...transforms) {
	return transforms.reduce((stream, transform) => {
		const isDest = typeof transform === 'string'
		return stream.pipe(isDest ? gulp.dest(transform) : transform)
	}, gulp.src(src))
}

var gulp = require('gulp'),
    gulppack = require('gulp-webpack'),
    webpack = require('webpack'),
    gls = require('gulp-live-server');

gulp.task('babel', () => {
  gulp.src('./src/js/**/**.js')
    .pipe(gulppack(require('./webpack.config.js'), webpack))
    .pipe(gulp.dest('./public/assets/js'));
});

gulp.task('watcher', () => {
  var server = gls.static(['public', '.']);
  server.start();
  gulp.watch('./src/js/**/**.js', ['babel']);
  gulp.watch(['./public/index.html', './src/js/**/**.js'], file => {
    server.notify.apply(server, [file]);
  });
});

gulp.task('default', ['babel']);

gulp.task('watch', ['default', 'watcher']);

// minify new images
var gulp = require('gulp'); 

var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');


gulp.task('imagemin', function() {
  var imgSrc = './public/images/**/*',
      imgDst = './build/images';

  gulp.src(imgSrc)
    .pipe(changed(imgDst))
    .pipe(imagemin())
    .pipe(gulp.dest(imgDst));
});
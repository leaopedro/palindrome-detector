var gulp = require('gulp');
var shell = require('gulp-shell');
var less = require('gulp-less');

var srcTasks = [
  'browserify-index',
  'less-index'
];

//Less Tasks:
var lessTasks = [
  'less-index'
];

gulp.task('less-index', function(){
  return gulp.src('./src/less/index.less')
    .pipe(less())
    .pipe(gulp.dest('./release/css/'));
});

//Browserify Tasks:
var browserifyTasks = [
  'browserify-index'
];

gulp.task('browserify-index', shell.task([
   'browserify ./src/js/index.jsx -v -o ./release/js/index.js -t [ babelify --presets [ react ] ]'
]));


//Watch Gulp - Default
gulp.task('default', srcTasks, function(){
  //Css manager
  gulp.watch('./src/less/*.less', lessTasks);
  gulp.watch('./src/less/*/*.less', lessTasks);


  //Js manager
  gulp.watch('./src/js/*', browserifyTasks);
  gulp.watch('./src/js/*/*', browserifyTasks);
});

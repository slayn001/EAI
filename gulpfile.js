var gulp = require('gulp');
var LiveServer = require('gulp-live-server');
var browserSync  = require('browser-sync');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('live-server', function(){
  var server = new LiveServer('server/main.js');
  server.start();
});

gulp.task('serve', ['bundle', 'live-server'], function(){
  // browserSync.init(null, {
  //   proxy:"http://localhost:7777"
  //   ,browser: "chrome"
  //   ,port: 9001
  // })
});

gulp.task('bundle',['copy'], function(){
  return browserify({
    entries: 'app/main.jsx',
    debug: true,
  })
  .transform(reactify)
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('./.tmp'));
});

gulp.task('copy', function(){
  gulp.src(['app/*.css'])
  .pipe(gulp.dest('./.tmp'));

  gulp.src(['bower_components/skeleton/css/*.css'])
  .pipe(gulp.dest('./.tmp'));

  gulp.src(['node_modules/bootstrap/dist/css/bootstrap.css'])
  .pipe(gulp.dest('./.tmp'));

  gulp.src(['node_modules/react-datepicker/dist/react-datepicker.css'])
  .pipe(gulp.dest('./.tmp'));

  gulp.src(['server/images/*.png'])
  .pipe(gulp.dest('./.tmp'));
})

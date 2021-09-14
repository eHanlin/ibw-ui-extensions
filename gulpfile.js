var gulp = require('gulp');
var connect = require('gulp-connect');
var recursive = require("recursive-readdir");
var fs = require('fs');
var embedTemplates = require('gulp-angular-embed-templates');
var replace = require('gulp-replace');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var less = require('gulp-less');

function getJsFiles(cb) {
  return recursive('src', function(err, files){
    cb(files.filter((file)=> /.js$/.test(file)));
  });
}

function rednerHomePage(res) {
  getJsFiles(function(files){
    var jsLinks = files.map((file)=> `<script src="${file}"></script>`).sort().join('');
    var index = fs.readFileSync('demo/index.html','utf-8').replace(/\${jsLinks}/g, jsLinks);
    res.end(index);
  });
}

gulp.task('server', function () {
  connect.server({
    name: 'Dev App',
    root: ['./'],
    port: 8000,
    middleware:function(){

    return [function(message, res, next){
      if(/^\/(index\.html)?$/.test(message.url)) {
            rednerHomePage(res);
      } else {
          next();
        }
      }];
    },
    livereload: true
  });
});

gulp.task('less', function () {
  return gulp.src('./src/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('./dist'));
});

gulp.task('js', function() {
    return gulp.src('src/js/**/*.js')
    .pipe(replace(/src\/js\/item/g, ''))
    .pipe(embedTemplates())
    .pipe(concat('ibw-ui-extensions.js'))
    .pipe(babel())
    .pipe(replace(/^/g, '(function(){ '))
    .pipe(replace(/$/g,` 
       if (typeof module !== 'undefined') module.exports = 'ibw.ui.extensions';
     })();
    `))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['less', 'js']);

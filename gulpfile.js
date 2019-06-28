// gulpfile.js

const gulp = require( "gulp" );
const sass = require( "gulp-sass" );
const postcss = require( "gulp-postcss" );
const autoprefixer = require( "autoprefixer" );

// Compile Sass
const compileSass = () => {
  return gulp
    .src( "src/sass/**/*.scss" )
    .pipe(
      sass({
        outputStyle: "expanded"
      })
    )
    .pipe(
      postcss([
        autoprefixer({
          cascade: false
        })
      ])
    )
    .pipe(
      gulp.dest( "src/css" )
    );
};

// Watch Sass Files
const watchSass = () => {
  return gulp
    .watch( "src/sass/**/*.scss", compileSass );
};

exports.sass = watchSass;

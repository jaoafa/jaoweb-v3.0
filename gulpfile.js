// Gulp
const gulp = require( "gulp" );
// Compile Sass Plugin
const sass = require( "gulp-sass" );
// Post CSS
const postcss = require( "gulp-postcss" );
// Autoprefixer
const autoprefixer = require( "autoprefixer" );

/**
 * Compile Sass
 */
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

/**
 * Watch Sass Files
 */
const watchSassFiles = () => {
    return gulp
        .watch( "src/sass/**/*.scss", compileSass );
};

exports.default = watchSassFiles;

// Gulp
const gulp = require( "gulp" );
// Compile Sass Plugin
const sass = require( "gulp-sass" );

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

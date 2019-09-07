/* -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- *
 *      =====================^==================^=====================      *
 *                     (c) 2019 jao Minecraft Server                        *
 *                           https://jaoafa.com                             *
 *      ==============================================================      *
 * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- */

const browsersync       = require( "browser-sync" );
const gulp              = require( "gulp" );
const sass              = require( "gulp-sass" );
const postcss           = require( "gulp-postcss" );
const autoprefixer      = require( "autoprefixer" );
const ejs               = require( "gulp-ejs" );
const rename            = require( "gulp-rename" );
const imagemin          = require( "gulp-imagemin" );
const pngmin            = require( "imagemin-pngquant" );
const jpgmin            = require( "imagemin-mozjpeg" );
const webpack           = require( "webpack" );
const webpackstream     = require( "webpack-stream" );

const webpackconfig     = require( "./webpack.config" );

const paths = {
  html: {
    src: {
      all:        "./src/html/**/*.ejs",
      components: "./src/html/components/**/*.ejs",
      pages:      "./src/html/pages/**/!(_)*.ejs"
    },
    dest: "./dist"
  },
  styles: {
    src:  "./src/sass/**/*.scss",
    dest: "./dist/css"
  },
  js: {
    src:  "./src/js/**/*.js",
    dest: "./dist/js"
  },
  image: {
    src:  "./src/img/**/*.{jpg,png,svg,gif}",
    dest: "./dist/img"
  }
};


// -----------------------------------------------------------------
// Tasks
// -----------------------------------------------------------------

// Start Browser Sync
const startSync = ( cb ) => {
  browsersync({
    server: {
      baseDir: paths.html.dest,
      index: "index.html"
    }
  });
  cb();
};

// Reload Browser
const reloadBrowser = ( cb ) => {
  browsersync.reload();
  cb();
};

// Compile Sass Files
const compileSass = () => {
  return gulp
  .src(
    paths.styles.src,
    { sourcemaps: true }
  )
  .pipe(
    sass({ outputStyle: "expanded" })
  )
  .pipe(
    postcss([
      autoprefixer({ cascade: false })
    ])
  )
  .pipe(
    gulp.dest(
      paths.styles.dest,
      { sourcemaps: "." }
    )
  );
}

// Compile EJS Files
const compileEjs = () => {
  return gulp
  .src( paths.html.src.pages )
  .pipe(
    ejs()
  )
  .pipe(
    rename({ extname: ".html" })
  )
  .pipe(
    gulp.dest( paths.html.dest )
  );
};

// Bundle JavaScript Files
const bundleJS = () => {
  return gulp
  .src( paths.js.src )
  .pipe(
    webpackstream( webpackconfig, webpack )
  )
  .pipe(
    gulp.dest( paths.js.dest )
  );
};

// Minify Image Files
const minifyImage = () => {
  return gulp
  .src(
    paths.image.src,
    { since: gulp.lastRun( minifyImage ) }
  )
  .pipe(
    imagemin([
      pngmin({ quality: [0.65, 0.8] }),
      jpgmin({ quality: 85 }),
      imagemin.gifsicle({
        interlaced: false,
        optimizationLevel: 1,
        colors: 256
      }),
      imagemin.svgo()
    ])
  )
  .pipe(
    gulp.dest( paths.image.dest )
  );
};

// Watch Sass Files
const watchSass = ( cb ) => {
  gulp
  .watch(
    paths.styles.src,
    gulp.series( compileSass, reloadBrowser )
  );
  cb();
};

// Watch EJS Files
const watchEjs = ( cb ) => {
  gulp
  .watch(
    paths.html.src.all,
    gulp.series( compileEjs, reloadBrowser )
  );
  cb();
}

// Watch JavaScript Files
const watchJS = ( cb ) => {
  gulp
  .watch(
    paths.js.src,
    gulp.series( bundleJS, reloadBrowser )
  );
  cb();
};

// Watch Image Files
const watchImage = ( cb ) => {
  gulp
  .watch(
    paths.image.src,
    gulp.series( minifyImage, reloadBrowser )
  );
  cb();
};


// -----------------------------------------------------------------
// Exports
// -----------------------------------------------------------------

exports.build = gulp.series(
  startSync,
  gulp.parallel(
    watchSass,
    watchEjs,
    watchJS,
    watchImage
  )
);

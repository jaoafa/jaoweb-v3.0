/* -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- *
 *      =====================^==================^=====================      *
 *                     (c) 2019 jao Minecraft Server                        *
 *                           https://jaoafa.com                             *
 *      ==============================================================      *
 * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- */

const gulp              = require( "gulp" );
const fs                = require( "fs" );
const browsersync       = require( "browser-sync" );
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
      pages:      "./src/html/pages/**/!(_)*.ejs",
      json:       "./src/html/data.json"
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
  },
  asset: {
    src: "./src/asset/**/*",
    dest: "./dist/asset"
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
    },
    notify: false
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
  let json = JSON.parse( fs.readFileSync( paths.html.src.json ) );
  return gulp
  .src( paths.html.src.pages )
  .pipe(
    ejs({ data: json })
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
      imagemin.svgo({
        plugins: [
          { optimizationLevel: 3 },
          { interlaced: true },
          { removeViewBox: false },
          { removeUselessStrokeAndFill: false },
          { cleanupIDs: false }
        ]
      })
    ])
  )
  .pipe(
    gulp.dest( paths.image.dest )
  );
};

// Copy Asset Files
const copyAsset = () => {
  return gulp
  .src( paths.asset.src )
  .pipe(
    gulp.dest( paths.asset.dest )
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

// Watch Asset Files
const watchAsset = ( cb ) => {
  gulp
  .watch(
    paths.asset.src,
    gulp.series( copyAsset, reloadBrowser )
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
    watchImage,
    watchAsset
  )
);

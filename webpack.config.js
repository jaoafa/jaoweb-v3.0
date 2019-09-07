/* -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- *
 *      =====================^==================^=====================      *
 *                     (c) 2019 jao Minecraft Server                        *
 *                           https://jaoafa.com                             *
 *      ==============================================================      *
 * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- */

module.exports = {
  mode  : "production",
  entry : "./src/js/main.js",
  output: {
    path    : __dirname + "/dist/js",
    filename: "main.js"
  }
};
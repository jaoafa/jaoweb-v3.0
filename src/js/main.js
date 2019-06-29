(function() {

'use strict';

/* -^------------------^-
 * Toggle Navigation
 * ---------------------- */
var hamburger            = document.getElementById( 'header-navigation-toggle' );
var hamburgerBars        = hamburger.querySelector( 'span' );
var headerNavigation     = document.getElementById( 'header-navigation' );
var headerNavigationList = document.getElementsByClassName( 'p-header-nav__list-item--first' );
hamburger.addEventListener( 'click', function() {
  hamburgerBars.classList.toggle( 'is-view' );
  headerNavigation.classList.toggle( 'is-view' );
});
for( let index = 0; index < headerNavigationList.length; index++ ) {
  headerNavigationList[index].addEventListener( 'click', function() {
    if( headerNavigationList[index].querySelector( 'ul' ) != null ) {
      headerNavigationList[index].querySelector( 'ul' ).classList.toggle( 'is-view' );
    }
  });
}

/* -^------------------^-
 * Toggle Header
 * ---------------------- */
var header             = document.getElementById( 'header' );
var headerNavigation   = document.getElementById( 'header-navigation' );
var headerLoginUser    = document.getElementById( 'header-loginuser' );
var headerToggleButton = document.getElementById( 'header-navigation-toggle' );
window.addEventListener( 'scroll', function() {
  let scrollValue = document.scrollingElement.scrollTop;
  if( header !== null ) {
    if( scrollValue > 0 ) {
      header.classList.add( 'is-notTop' );
      headerNavigation.classList.add( 'is-notTop' );
      headerLoginUser.classList.add( 'is-notTop' );
      headerToggleButton.classList.add( 'is-notTop' );
    }
    else {
      header.classList.remove( 'is-notTop' );
      headerNavigation.classList.remove( 'is-notTop' );
      headerLoginUser.classList.remove( 'is-notTop' );
      headerToggleButton.classList.remove( 'is-notTop' );
    }
  }
});

})();
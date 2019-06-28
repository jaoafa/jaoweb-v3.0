(function() {

'use strict';

/* -^------------------^-
 * Toggle Navigation
 * ---------------------- */
var hamburger = document.getElementById( 'header-navigation-toggle' );
var hamburgerBars = hamburger.querySelector( 'span' );
var headerNavigation = document.getElementById( 'header-navigation' );
var headerNavigationList = document.getElementsByClassName( 'header-navigation-list' );
hamburger.addEventListener( 'click', function() {
  hamburgerBars.classList.toggle( 'toggle-navigation-view' );
  headerNavigation.classList.toggle( 'toggle-navigation-view' );
});
for( let index = 0; index < headerNavigationList.length; index++ ) {
  headerNavigationList[index].addEventListener( 'click', function() {
    if( headerNavigationList[index].querySelector( 'ul' ) != null ) {
      headerNavigationList[index].querySelector( 'ul' ).classList.toggle( 'toggle-navigation-list' );
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
      header.classList.add( 'toggle-header-background' );
      headerNavigation.classList.add( 'toggle-header-background' );
      headerLoginUser.classList.add( 'toggle-header-background' );
      headerToggleButton.classList.add( 'toggle-header-background' );
    }
    else {
      header.classList.remove( 'toggle-header-background' );
      headerNavigation.classList.remove( 'toggle-header-background' );
      headerLoginUser.classList.remove( 'toggle-header-background' );
      headerToggleButton.classList.remove( 'toggle-header-background' );
    }
  }
});

})();
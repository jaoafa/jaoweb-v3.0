(function() {

'use strict';

/* -^------------------^-
 * Toggle Navigation
 * ---------------------- */
var hamburger = document.getElementsByClassName( 'p-header__hamburger' )[0];
var hamburgerBars        = hamburger.querySelector( 'span' );
var headerNavigation = document.getElementsByClassName( 'p-header__nav' )[0];
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
var header          = document.getElementsByClassName( 'p-header' )[0];
var headerLoginUser = document.getElementsByClassName( 'p-login-user' )[0];
window.addEventListener( 'scroll', function() {
  let scrollValue = document.scrollingElement.scrollTop;
  if( header !== null ) {
    if( scrollValue > 0 ) {
      header.classList.add( 'is-notTop' );
      headerNavigation.classList.add( 'is-notTop' );
      headerLoginUser.classList.add( 'is-notTop' );
      hamburger.classList.add( 'is-notTop' );
    }
    else {
      header.classList.remove( 'is-notTop' );
      headerNavigation.classList.remove( 'is-notTop' );
      headerLoginUser.classList.remove( 'is-notTop' );
      hamburger.classList.remove( 'is-notTop' );
    }
  }
});

})();
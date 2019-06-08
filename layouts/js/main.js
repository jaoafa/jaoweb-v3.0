(function() {

'use strict';

/* -^------------------^-
 * Toggle Navigation
 * ---------------------- */
// Global Navigation
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

})();
/* -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- *
 *      =====================^==================^=====================      *
 *                     (c) 2019 jao Minecraft Server                        *
 *                           https://jaoafa.com                             *
 *      ==============================================================      *
 * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- */

(function() {

  'use strict';

  var hamburger = document.getElementsByClassName( 'p-globalNavigation__hamburger' )[0];
  var globalNavigation = document.getElementsByClassName( 'p-globalNavigation__container' )[0];
  hamburger.addEventListener( 'click', function() {
    hamburger.querySelector( 'span' ).classList.toggle( 'is-view' );
    globalNavigation.classList.toggle( 'is-view' );
  });

  var globalNavigationChildItems = document.getElementsByClassName( 'p-globalNavigation__item' );
  for( let index = 0; index < globalNavigationChildItems.length; index++ ) {
    globalNavigationChildItems[index].addEventListener( 'click', function() {
      for( let count = 0; count < globalNavigationChildItems.length; count++ ) {
        let elem = globalNavigationChildItems[count].querySelector( '.p-globalNavigation__childContainer' );
        if( elem != null ) {
          if( count === index ) {
            elem.classList.toggle( 'is-view' );
          }
          else {
            elem.classList.remove( 'is-view' );
          }
        }
      }
    });
  }

})();

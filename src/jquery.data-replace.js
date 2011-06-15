/*
 * jQuery Data Replace 0.0.1pre
 *
 * Copyright 2011, Scott González (http://scottgonzalez.com)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 */
(function( $ ) {

$( "a[data-replace]" ).live( "click", function( event ) {
	var anchor = $( this ),
		replace = $( "#" + anchor.attr( "data-replace" ) ),
		href = anchor.attr( "href" );

	replace
		.trigger( "replaceSend", [ {
			anchor: anchor,
			href: href
		} ] )
		.load( href, function( response, status, xhr ) {
			if ( status === "error" ) {
				replace.trigger( "replaceError", [ {
					xhr: xhr
				} ] );
			} else {
				replace.trigger( "replaceSuccess" );
			}

			replace.trigger( "replaceComplete" );
		} );

	event.preventDefault();
});

}( jQuery ) );

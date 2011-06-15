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

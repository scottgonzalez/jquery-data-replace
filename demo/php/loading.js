$( document )
	.bind( "replaceSend", function( event ) {
		$( event.target ).stop().fadeTo( 200, 0.5 );
	})
	.bind( "replaceComplete", function( event ) {
		$( event.target ).stop().fadeTo( 200, 1 );
	});

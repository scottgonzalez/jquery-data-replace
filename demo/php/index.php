<?php

$ajax = !empty( $_SERVER[ 'HTTP_X_REQUESTED_WITH' ] ) &&
	$_SERVER[ 'HTTP_X_REQUESTED_WITH' ] === 'XMLHttpRequest';

if ( !$ajax ) {
	echo file_get_contents( 'header.html' );
}

// simulate network latency/server load
if ( $ajax ) {
	sleep( 1 );
}

?>

<div class="results">
<?php
	$page = empty( $_GET[ 'page' ] ) ? 1 : $_GET[ 'page' ];
	$start = ( $page - 1 ) * 10;
	$end = $start + 10;
	for ( $i = $start; $i < $end; $i++ ) {
		echo '<span class="result">' . $i . '</span>';
	}
?>
</div>
<div class="pagination">
	<a href="?page=1" data-replace="content">1</a>
	<a href="?page=2" data-replace="content">2</a>
	<a href="?page=3" data-replace="content">3</a>
	<a href="?page=4" data-replace="content">4</a>
	<a href="?page=5" data-replace="content">5</a>
	<a href="?page=6" data-replace="content">6</a>
	<a href="?page=7" data-replace="content">7</a>
	<a href="?page=8" data-replace="content">8</a>
	<a href="?page=9" data-replace="content">9</a>
</div>

<?php

if ( !$ajax ) {
	echo file_get_contents( 'footer.html' );
}

?>

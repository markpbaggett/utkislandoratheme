/* Theme Stuff */
jQuery(document).ready(function() {
	jQuery("head").append("<link rel='stylesheet' type='text/css' href='http://digital.lib.utk.edu/collections/sites/all/libraries/utk/splashstyle.css'>");
	var collectionname = jQuery("#splashintrotext").attr('href');
	if ( collectionname == 'http://digital.lib.utk.edu/collections/derriscollection'){
		jQuery(("option[value='gsmrc:derris']")).prependTo("#edit-collection-select");
		jQuery(("option[value='gsmrc:derris']")).attr('selected','selected');
	}
});
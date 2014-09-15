/* Theme Stuff */
jQuery(document).ready(function() {
	jQuery("head").append("<link rel='stylesheet' type='text/css' href='../collections/sites/all/libraries/utk/splashstyle.css'>");
	jQuery(("option[value='gsmrc:derris']")).prependTo("#edit-collection-select");
	jQuery(("option[value='gsmrc:derris']")).attr('selected','selected');
});
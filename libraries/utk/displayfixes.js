jQuery(document).ready(function() {
	/* Add Overarching CSS */
	jQuery("head").append("<link rel='stylesheet' type='text/css' href='http://digital.lib.utk.edu/collections/sites/all/libraries/utk/overarching.css'>");
	/* Fix PIDs in Breadcrumbs */
	jQuery(("a[value='gsmrc:derris']")).text('The William Derris Slide Collection');
});
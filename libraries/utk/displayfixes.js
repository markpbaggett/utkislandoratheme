jQuery(document).ready(function() {
	/* Add Overarching CSS */
	jQuery("head").append("<link rel='stylesheet' type='text/css' href='http://digital.lib.utk.edu/collections/sites/all/libraries/utk/overarching.css'>");
	/* Fix PIDs in Breadcrumbs */
	jQuery(".breadcrumb > a").attr('class','breadcrumbanchor');
	var breadcrumbname = jQuery(".breadcrumbanchor").last().html();
	if ( breadcrumbname == "gsmrc:derris"){
		jQuery(".breadcrumbanchor").last().html('The William Derris Slide Collection');
	}
	if ( breadcrumbname == "digital:collections"){
		jQuery(".breadcrumbanchor").last().html('Digital Collections');
	}
});
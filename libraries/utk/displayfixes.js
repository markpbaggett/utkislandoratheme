jQuery(document).ready(function() {
	/* Add Overarching CSS */
	jQuery("head").append("<link rel='stylesheet' type='text/css' href='http://digital.lib.utk.edu/collections/sites/all/libraries/utk/overarching.css'>");
	
	/* Fix PIDs in Breadcrumbs */
	jQuery(".breadcrumb > a").attr('class','breadcrumbanchor');
	jQuery(".breadcrumbanchor").each(function(i) {
	/* alert(jQuery(this).html()); */
		if ( jQuery(this).html() == "digital:collections"){
			jQuery(this).html("Digital Collections");
		} 
		else if (jQuery(this).html() == "gsmrc:derris"){
			jQuery(this).html("The William Derris Slide Collection");
		}
		else if (jQuery(this).html() == "collections:gsmrc"){
			jQuery(this).html("Great Smoky Mountains Regional Collection");
		}
		else if (jQuery(this).html() == "gsmrc:adams"){
			jQuery(this).html("Paul J. Adams Photograph Collection");
		}
		else if (jQuery(this).html() == "collections:sanborn"){
			jQuery(this).html("Sanborn Fire Insurance Maps Collection");
		}
		else if (jQuery(this).html() == "gsmrc:kintner"){
			jQuery(this).html("Panoramic Images of Elgin P. Kintner, M.D.");
		}	
	});
	
	/* Fix Names in Dropdown List */
	jQuery(("option[value='gsmrc:derris']")).html("William Derris Slide Collection");
	jQuery(("option[value='gsmrc:adams']")).html("Paul J. Adams Photograph Collection");
});
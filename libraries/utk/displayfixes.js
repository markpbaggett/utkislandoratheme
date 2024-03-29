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
		else if (jQuery(this).html() == "collections:mpabaker"){
			jQuery(this).html("Photographs from the Life and Career of Howard Baker");
		}
	});
	
		/* Remove Collection Titles from Splash Pages*/
	var pagetitle = jQuery("#page-title").html();
		if ((pagetitle) == "derriscollection"){
			jQuery("#page-title").remove();
		}
		else if ((pagetitle) == "danielcartooncollection"){
			jQuery("#page-title").remove();
		}
		else if ((pagetitle) == "Sanborn Fire Insurance Maps"){
			jQuery("#page-title").remove();
		}
		else if ((pagetitle) == "Panoramic Images of Elgin P. Kintner, M.D. "){
			jQuery("#page-title").remove();
		}
		else if ((pagetitle) == "Adams Splash Page"){
			jQuery("#page-title").remove();
		}
		else if ((pagetitle) == "WWII Oral Histories Splash Page"){
			jQuery("#page-title").remove();
		}
		else if ((pagetitle) == "Howard Baker Splash Page"){
			jQuery("#page-title").remove();
		}
				
	/* Fix Names in Dropdown List */
	jQuery(("option[value='gsmrc:derris']")).html("William Derris Slide Collection");
	jQuery(("option[value='gsmrc:adams']")).html("Paul J. Adams Photograph Collection");
	jQuery(("option[value='gsmrc:kintner']")).html("Panoramic Images of Elgin P. Kintner, M.D.");
	jQuery(("option[value='cDanielEdCartoon:cDanielCauses']")).remove();
	jQuery(("option[value='cDanielEdCartoon:cDanielInternat']")).remove();
	jQuery(("option[value='cDanielEdCartoon:cDanielKnoxvl']")).remove();	
	jQuery(("option[value='cDanielEdCartoon:cDanielLabor']")).remove();
	jQuery(("option[value='cDanielEdCartoon:cDanielNatPol']")).remove();
	jQuery(("option[value='cDanielEdCartoon:cDanielSports']")).remove();
	jQuery(("option[value='cDanielEdCartoon:cDanielTVA']")).remove();
	jQuery(("option[value='cDanielEdCartoon:cDanielTaxes']")).remove();	
	jQuery(("option[value='cDanielEdCartoon:cDanielTenn']")).remove();
	jQuery(("option[value='cDanielEdCartoon:cDanielUT']")).remove();	

	/* Remove \ from Breadcrumbs */
	jQuery(".breadcrumbanchor").each(function(i) {
		var breadcrumbvalue = jQuery(this).html();
		var newbreadcrumb = breadcrumbvalue.replace(/\\/gi, "");
		jQuery(this).html(newbreadcrumb);
	});

});
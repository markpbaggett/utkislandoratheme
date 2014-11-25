/* Theme Stuff */
jQuery(document).ready(function() {
	jQuery("head").append("<link rel='stylesheet' type='text/css' href='http://digital.lib.utk.edu/collections/sites/all/libraries/utk/splashstyle.css'>");
	var collectionname = jQuery("#splashintrotext").attr('href');
	
	/* Collection Dropdown Selector */
	if ( collectionname == 'http://digital.lib.utk.edu/collections/derriscollection'){
		jQuery(("option[value='gsmrc:derris']")).prependTo("#edit-collection-select");
		jQuery(("option[value='gsmrc:derris']")).attr('selected','selected');
	}
	if ( collectionname == 'http://digital.lib.utk.edu/collections/danielcartooncollection'){
		jQuery(("option[value='collections:cDanielEdCartoon']")).prependTo("#edit-collection-select");
		jQuery(("option[value='collections:cDanielEdCartoon']")).attr('selected','selected');
	}
	if ( collectionname == 'http://digital.lib.utk.edu/collections/sanbornmapcollection'){
		jQuery(("option[value='collections:sanborn']")).prependTo("#edit-collection-select");
		jQuery(("option[value='collections:sanborn']")).attr('selected','selected');
	}	
	if ( collectionname == 'http://digital.lib.utk.edu/collections/kintnercollection'){
		jQuery(("option[value='gsmrc:kintner']")).prependTo("#edit-collection-select");
		jQuery(("option[value='gsmrc:kintner']")).attr('selected','selected');
	}
	
	/* ID Images in Content */
	jQuery("#leftside > img").attr('id','splashpageimg');
	jQuery("#rightside > img").attr('id','splashpageimg');
});
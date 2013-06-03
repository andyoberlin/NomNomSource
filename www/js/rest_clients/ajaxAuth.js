(function($){
	/**
		JQuery Ajax Plugin for abstracting authorization on requests
		Author: Andrew Oberlin
		Date: June 2, 2013
		
		Dependencies:
			jQuery 1.7.2 or higher
	**/
	var public_methods = {
		/**
			Calls the zoomable plugin on initialization and only does so on load of the
			image so that it can properly get the height and width
		**/
		init: function(options) {
			options['beforeSend'] = function(jqXHR, settings) {
				console.log(jqXHR);
				console.log(settings);
			};
			
			$.ajax(options);
		}
	};

	$.fn.ajaxAuth = function(method) {
		// Method calling logic
		if ( public_methods[method] ) {
			return public_methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} 
		else if ( typeof method === 'object' || ! method ) {
			return public_methods.init.apply( this, arguments );
		} 
		else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.collapser' );
		}  
	};
})( jQuery );
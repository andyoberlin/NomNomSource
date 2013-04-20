var navbar = {
    // Application Constructor
    initialize: function() {
        //this.bindEvents();
        this.onDeviceReady();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
    	var resize = function() {
    		$('body').height($(window).height());
    	};
    	
    	resize();
    	
    	$(window).on('resize', resize);
    
    	$('#home').on('click', function() {
			window.location = 'home.html';
		});

		$('#settings').on('click', function() {
			window.location = 'settings.html';
		});
		
		$('#home').on('touchstart touchend', function(e) {
			$(this).toggleClass('navbarActive', e.type = 'touchstart');
		});
		
		$('#settings').on('touchstart touchend', function(e) {
			$(this).toggleClass('navbar-active', e.type = 'touchstart');
		});
    }
};

navbar.initialize();
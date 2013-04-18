$('#home').on('click', function() {
	window.location = 'home.html';
});

$('#settings').on('click', function() {
	window.location = 'settings.html';
});

$(document).bind('scrollstart', function() {
         e.preventdefault();
});
$(document).bind('scrollstop', function() {
         e.preventdefault();
});

$('#settings').on('touchstart touchend', function(e) {
	$(this).toggleClass('active', e.type = 'touchstart');
});

$('#settings').on('click', function() {
	window.location = 'settings.html';
});
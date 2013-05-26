$('#home').on('click', function() {
	window.location = 'home.html';
});

$('#settings').on('click', function() {
	window.location = 'settings.html';
});

$('#option1-container').on('click', function() {
	$('#option1-switch').toggle();
});

$('#option2-container').on('click', function() {
	$('#option2-switch').toggle();
});
$('#home').on('click', function() {
	window.location = 'home.html';
});

$('#settings').on('click', function() {
	window.location = 'settings.html';
});

$('#create-game').on('click', function() {
	window.location = 'settings.html';
});

// Prevent scrolling
document.body.addEventListener('touchmove', function(e) {
	e.preventDefault();
}, false);
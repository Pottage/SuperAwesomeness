// deps	 - jquery, Game

// g - global variable

window.g = {};
g.game = undefined;
g.messages = {};
g.messages.sideToMove = function(side) {
	return side + "'s turn to move";
};

function draw(game) {
	$("#messageHolder .message").html(g.messages.sideToMove(game.sideToMove()));
}

function resetGame(game) {
	game.init();

	$(".liveOptions").show();
	draw(game);
}

$(document).ready(function(){
	$(".liveOptions").hide();

	$(".button.start").click(function() {
		$(".startOptions").hide()
		g.game = new Game();
		resetGame(g.game);
	});

	$(".button.reset").click(function() {
		resetGame(g.game);
	})
});

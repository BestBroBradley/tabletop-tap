

// Search Event
$("form.gameName").on("submit", function(e) {
	e.preventDefault();
	console.log();
	let title = $(this).find("input").val().trim();

	searchGame(title);

});

function parseBoardGameData(data) {
	var game = data.games[0];
	var boardGame = {
		image_thumb: game.thumb_url,
		image_original: game.image_url,
		url: game.url,
		game_name: game.name,
		rating: game.average_user_rating,
		min_time: game.min_playtime,
		max_time: game.max_playtime,
		min_players: game.min_players,
		max_players: game.max_players,
		short_description: game.description_preview,
		long_description: game.description,
		categories: game.categories
	};
	console.log(boardGame);
}

function searchGame(title){
	var apiKey = 'CEx4Nnqb8e' //get rid of it
	var queryURL = `https://www.boardgameatlas.com/api/search?name=${title}&client_id=${apiKey}`; 
	$.ajax({
	url: queryURL,
	method: "GET"
}).then(function(response) {
	// console.log(response);
	// renderRow(response);
	parseBoardGameData(response);
	// This is where we will run a post route

}).catch(err => {
	throw err;
});
};

		// $(".input[name=gameName]").val().trim();
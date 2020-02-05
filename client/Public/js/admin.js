

// Search Event
$("#add-game").on("submit", function(e) {
	e.preventDefault();
	let title = $(this).find("input").val().trim();
	searchGame(title);
});

function parseBoardGameData(data) {
	var game = data.games[0];
	var boardGame = {
		img_thumb: game.thumb_url,
		img_original: game.image_url,
		url: game.url,
		game_name: game.name,
		rating: parseFloat(game.average_user_rating).toFixed(2),
		min_time: parseInt(game.min_playtime),
		max_time: parseInt(game.max_playtime),
		min_players: parseInt(game.min_players),
		max_players: parseInt(game.max_players),
		short_description: game.description_preview,
		long_description: game.description,
		categories: game.categories[0].id
	};
	return boardGame
}

function searchGame(title){
	var apiKey = 'CEx4Nnqb8e' //get rid of it
	var queryURL = `https://www.boardgameatlas.com/api/search?name=${title}&client_id=${apiKey}`; 
	$.ajax({
	url: queryURL,
	method: "GET"
}).then(function(response) {
	// renderRow(response);
	var boardGame = parseBoardGameData(response);
	console.log(boardGame);
	// This is where we will run a post route
	$.post("/api/games", boardGame);
}).catch(err => {
	throw err;
});
};

function onLoad() {
	
}
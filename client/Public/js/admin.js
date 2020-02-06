

// Search Event
$("#add-game").on("submit", function(e) {
	e.preventDefault();
	let title = $(this).find("input").val().trim();
	$("#add-game").children().val("")
	searchGame(title);
});

$("#add-beer").on("submit", function(e) {
	e.preventDefault();
	const newBeer = {
		beer_name: $("#new-beer-name").val(),
		brewery: $("#new-brewery-name").val(),
		brewery_location: $("#new-brewery-location").val(),
		short_description: $("#new-beer-short").val(),
		long_description: $("#new-beer-long").val(),
		abv: $("#new-abv").val(),
		price: $("#new-price").val()
	}
	$("#add-beer").children().val("")
	$.post("/api/beers", newBeer).then((data) => {
		console.log("Success!")
	}).catch(err => {
		throw err
	})
})

$("#select-beer").on("submit", function(e) {
	$.get("")
})

function parseBoardGameData(data) {
	var game = data.games[0];
	var boardGame = {
		img_thumb: game.thumb_url,
		img_original: game.image_url,
		url: game.url,
		game_name: game.name,
		rating: parseFloat(game.average_user_rating).toFixed(2),
		min_time: game.min_playtime,
		max_time: game.max_playtime,
		min_players: game.min_players,
		max_players: game.max_players,
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
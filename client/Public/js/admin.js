// GAME FUNCTIONALITY BELOW
// Search board game api and populate field
$("#api-board-game").on("submit", function (e) {
	e.preventDefault();
	let title = $(this).find("input").val().trim();
	$("#api-board-game").children().val("")
	searchGame(title);
});

// API call to boardgame and form population
function searchGame(title) {
	var apiKey = 'CEx4Nnqb8e' //get rid of it
	var queryURL = `https://www.boardgameatlas.com/api/search?name=${title}&client_id=${apiKey}`;
	$.ajax({
	url: queryURL,
	method: "GET"
}).then(function(response) {
	var boardGame = parseBoardGameData(response);
	if (boardGame === false) return $("#api-board-game").find("input").val("Couldn't find the game");
	for (let key in boardGame) {
		if (key === "short_description" || key === "long_description"){
			$(`textarea[name=${key}]`).val(boardGame[key])
			continue;
		};
		$(`input[name=${key}]`).val(boardGame[key]);
	};
}).catch(err => {
	throw err;
});
};

// Parses the data from the board game api call
function parseBoardGameData(data) {
	var game = data.games[0];
	if (game === undefined) return false
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
	};
	if (game.categories.length) {
		boardGame.categories = game.categories[0].id;
	} else {
		boardGame.categories = "Unknown";
	}
	return boardGame
}

// Put for the selected board
$("#select-board-game").on("submit", function (e) {
	e.preventDefault();
	let id = $("#choose-game option:selected").val();
	console.log(id);
	if (id > 0) {
		//  Make sure dynamically generated options have a id of the beer's id
		$.get(`/api/games/${id}`).then((data) => {
			for (let key in data) {
				if (key === "short_description" || key === "long_description"){
					$(`textarea[name=${key}]`).val(data[key]);
					continue;
				};
				$(`input[name=${key}]`).val(data[key]);
			};
		}).catch(err => {
			throw err
		})
	} else {
		$("#board-game-form").children().val("")
	}
})

// Post board game if dropdown isn't default || Put board game otherwise
$("#board-game-form").on("submit", function (e) {
	e.preventDefault();
	var boardGame = {
		img_thumb: "",
		img_original: "",
		url: "",
		game_name: "",
		rating: "",
		min_time: "",
		max_time: "",
		min_players: "",
		max_players: "",
		short_description: "",
		long_description: "",
		categories: ""
	};
	for (let key in boardGame) {
		if (key === "short_description" || key === "long_description"){
			boardGame[key] = $(`textarea[name=${key}]`).val();
			continue;
		};
		boardGame[key] = $(`input[name=${key}]`).val();
	};
	let id = parseInt($("#choose-game option:selected").val())
	// If id is not equal to 0 then
	if (id > 0) {
		// We run a put
		console.log("doing a put");
		$.ajax({
			url: `/api/games/${id}`,
			type: 'PUT',
			data: boardGame
		}).then((data) => {
			console.log(data.changedRows)
			$("#board-game-form").children().val("")
			init()
		}).catch((err) => {
			throw err
		});
	// If id is equal to 0 then we run a post
	} else {
		console.log("doing a post");
		$.post("/api/games", boardGame).then((data) => {
			$("#board-game-form").children().val("")
			console.log(`Added a board game!`);
			init()
		}).catch((err) => {
			throw err
		});	
	}
})

// Delete a game
$("#del-game").on("submit", function (e) {
	e.preventDefault()
	let id = $("#del-game-select option:selected").val();
	$.ajax({
		url: `/api/games/${id}`,
		type: 'DELETE',
	}).then((data) => {
		console.log(`Deleted game with id ${data.affectedRows}`)
		init();
	}).catch((err) => {
		throw err
	});
})

// BEER FUNCTIONALITY BELOW
// Create a new beer
$("#add-beer").on("submit", function (e) {
	e.preventDefault();
	const newBeer = {
		beer_name: $("#new-beer-name").val().trim(),
		brewery: $("#new-brewery-name").val().trim(),
		brewery_location: $("#new-brewery-location").val().trim(),
		short_description: $("#new-beer-short").val().trim(),
		long_description: $("#new-beer-long").val().trim(),
		abv: $("#new-abv").val().trim(),
	}
	$("#add-beer").children().val("")
	$.post("/api/beers", newBeer).then((data) => {
		console.log("Added a new beer")
		init();
	}).catch(err => {
		throw err
	})
})

// Select beer functionality
$("#select-beer").on("submit", function (e) {
	e.preventDefault()
	let id = $("#choose-beer option:selected").val();
	if (id > 0) {
		//  Make sure dynamically generated options have a id of the beer's id
		$.get(`/api/beers/${id}`).then((data) => {
			console.log(data.id);
			$("#chosen-beer").val(data.beer_name)
			$("#update-brewery").val(data.brewery)
			$("#update-location").val(data.brewery_location)
			$("#update-abv").val(data.abv)
			$("#update-short").val(data.short_description)
			$("#update-long").val(data.long_description)
		}).catch(err => {
			throw err
		})
	};
	$("#update-beer").children().val("");
})

// Update beer
$("#update-beer").on("submit", function (e) {
	e.preventDefault()
	const updatedBeer = {
		beer_name: $("#chosen-beer").val().trim(),
		brewery: $("#update-brewery").val().trim(),
		brewery_location: $("#update-location").val().trim(),
		abv: $("#update-abv").val().trim(),
		short_description: $("#update-short").val().trim(),
		long_description: $("#update-long").val().trim()
	}
	let id = $("#choose-beer option:selected").val();
	$.ajax({
		url: `/api/beers/${id}`,
		type: 'PUT',
		data: updatedBeer
	}).then((data) => {
		console.log(`Updated beer with id ${data.changedRows}`)
		$("#update-beer").children().val("") // Clears everything
		$("#choose-beer option:selected").val(0);
		init();
	}).catch((err) => {
		throw err
	});
});

// Delete a beer
$("#del-beer").on("submit", function (e) {
	e.preventDefault()
	let id = $("#del-beer-select option:selected").val();
	$.ajax({
		url: `/api/beers/${id}`,
		type: 'DELETE',
	}).then((data) => {
		console.log(`Deleted beer with id ${data.affectedRows}`)
		init();
	}).catch((err) => {
		throw err
	});
})

// SELECTOR POPULATORS BELOW
// OnLoad we want to grab the information from our database and store in a global variable
function init() {
	getTableData("games", data =>	{
		populateDeleteSelector("game", data);
		populateUpdateSelector("game", data);
	});
	getTableData("beers", data =>	{
		populateDeleteSelector("beer", data);
		populateUpdateSelector("beer", data);
	});
	// Functionality currently not added
	getTableData("permissions", data =>	{
		// console.log(data);
		populateDeleteSelector("login", data);
		populateUpdateSelector("login", data);
	});

}
// Gets the table data //permission
function getTableData(table, cb) {
	$.get(`/api/${table}`, function(data) {
		// console.log(data)
		return cb(data)
	}).catch(err => {
		throw err;
	});
}
// Populate delete selectors function
function populateDeleteSelector(row, data) {
	row = row;
	$(`#del-${row}-select`).empty();
	$(`#del-${row}-select`).append($(`<option value="0">None Selected</option>`));
	for (let item of data) {
		// console.log(item);
		let selectionId = item.id;
		let selectionName = item[`${row}_name`];
		if (row === "login") {
			selectionName = item[row];
		};
		$(`#del-${row}-select`).append($(`<option value="${selectionId}">${selectionName}</option>`));
	}
}
// Populate update selectors function
function populateUpdateSelector(row, data) {
	$(`#choose-${row}`).empty();
	$(`#choose-${row}`).append($(`<option value="0">None Selected</option>`));
	for (let item of data) {
		// console.log(item);
		let selectionId = item.id;
		let selectionName = item[`${row}_name`];
		if (row === "login") {
			selectionName = item[row];
		};
		$(`#choose-${row}`).append($(`<option value="${selectionId}">${selectionName}</option>`));
	}
}

// This initializes all of the selector fields
init();
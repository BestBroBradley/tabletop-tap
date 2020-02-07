

// Search board game api and populate field
$("#api-board-game").on("submit", function (e) {
	e.preventDefault();
	let title = $(this).find("input").val().trim();
	$("#api-board-game").children().val("")
	console.log(title);
	searchGame(title);
});

// Put for the selected board
$("#select-board-game").on("submit", function (e) {
	e.preventDefault();
	let id = $("#choose-game option:selected").val();
	//  Make sure dynamically generated options have a id of the beer's id
	console.log(id);
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
})

// Post board game || Put board game if 
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
	if (id) {
		// We run a put
		$.ajax({
			url: `/api/games/${id}`,
			type: 'PUT',
			data: boardGame
		}).then((data) => {
			console.log(data.id)
		}).catch((err) => {
			throw err
		});
	// If id is equal to 0 then we run a post
	} else {
		$.post("/api/games", boardGame).then((data) => {
			console.log(data.id);
		}).catch((err) => {
			throw err
		});	
	}
})

// Update a beer
$("#update-beer").on("submit", function (e) {
	e.preventDefault()
	const updatedBeer = {
		beer_name: $("#chosen-beer").val().trim(),
		brewery: $("#update-brewery").val().trim(),
		brewery_location: $("#update-location").val().trim(),
		abv: $("#update-abv").val().trim(),
		price: $("#update-price").val().trim(),
		short_description: $("#update-short").val().trim(),
		long_description: $("#update-long").val().trim()
	}
	let id = $("#choose-beer option:selected").val();
	$("#update-beer").children().val("") // Clears everything
	$.ajax({
		url: `/api/beers/${id}`,
		type: 'PUT',
		data: updatedBeer
	}).then((data) => {
		console.log(data.id)
	}).catch((err) => {
		throw err
	});
});





$("#add-beer").on("submit", function (e) {
	e.preventDefault();
	const newBeer = {
		beer_name: $("#new-beer-name").val().trim(),
		brewery: $("#new-brewery-name").val().trim(),
		brewery_location: $("#new-brewery-location").val().trim(),
		short_description: $("#new-beer-short").val().trim(),
		long_description: $("#new-beer-long").val().trim(),
		abv: $("#new-abv").val().trim(),
		price: $("#new-price").val().trim()
	}
	$("#add-beer").children().val("")
	$.post("/api/beers", newBeer).then((data) => {
		console.log("Success!")
	}).catch(err => {
		throw err
	})
})

$("#select-beer").on("submit", function (e) {
	e.preventDefault()
	let id = $("#choose-beer option:selected").val();
	//  Make sure dynamically generated options have a id of the beer's id
	$.get(`/api/beers/${id}`).then((data) => {
		console.log(data.id);
		$("#chosen-beer").val(data.beer_name)
		$("#update-brewery").val(data.brewery)
		$("#update-location").val(data.brewery_location)
		$("#update-abv").val(data.abv)
		$("#update-price").val(data.price)
		$("#update-short").val(data.short_description)
		$("#update-long").val(data.long_description)
		$("#update-beer").attr("id", data.id)
	}).catch(err => {
		throw err
	})
})

$("#update-beer").on("submit", function (e) {
	e.preventDefault()
	const updatedBeer = {
		beer_name: $("#chosen-beer").val().trim(),
		brewery: $("#update-brewery").val().trim(),
		brewery_location: $("#update-location").val().trim(),
		abv: $("#update-abv").val().trim(),
		price: $("#update-price").val().trim(),
		short_description: $("#update-short").val().trim(),
		long_description: $("#update-long").val().trim()
	}
	let id = $("#choose-beer option:selected").val();
	$("#update-beer").children().val("") // Clears everything
	$.ajax({
		url: `/api/beers/${id}`,
		type: 'PUT',
		data: updatedBeer
	}).then((data) => {
		console.log(data.id)
	}).catch((err) => {
		throw err
	});
});

// Working
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


// Parses the data from the board game api call
function parseBoardGameData(data) {
	var game = data.games[0];
	console.log(game);
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

init();




// TIME FUNCTIONALITY
$("#update-hours").on("submit", function (e) {
	e.preventDefault();
	var days = ["mon", "tues", "weds", "thurs", "fri", "sat", "sun"];
	var timeOutput = {};
	for (let day of days) {
		let closed = $(`input[name=${day}]:checked`).val();
		if (closed === "closed") {
			var open = "closed";
			var close = "closed";
		} else {
			close = "open"
			var open = $(`select[name=${day}-open] option:selected`).val();
			var close = $(`select[name=${day}-close] option:selected`).val();
			// need to modulus by 24 if greater than 24 to get the proper hour
		}
		timeOutput[day] = {
			closed,
			open,
			close
		}
	}
	// // Check this functionality with Juan before using it
	// $.ajax({
	// 	url: `/api/hours`,
	// 	type: 'PUT',
	// 	data: timeOutput
	// }).then((data) => {
	// 	console.log(`Time table updated`);
	// }).catch((err) => {
	// 	throw err
	// });
})

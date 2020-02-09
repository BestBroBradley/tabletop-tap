var categoryArr = ["123","4x","Abstract","Adventure","Age of Reason","Aliens","Alternate History","American West","Ancient","Animals","Apocalyptic","Art","Aviation","Bluffing","Campaign","Card Game","Children's Game","City Building","Civil War","Civilization","Collectible Components","Comic Book / Strip","Conversation","Cooperative","Cube Rail","Cyberpunk","Deduction","Dexterity","Dice","Dinosaurs","Drinking","Dungeons & Dragons","Economic","Educational","Electronic","Environmental","Espionage","Eurogame","Expansion","Exploration","Family Game","Fan Made","Fantasy","Farming","Fighting","Fishing","Flicking","Food","Gay","Halloween","Horror","Humor","Industry/Manufacturing","Japan","Kickstarter","Legacy","Luck","Mafia","Math","Mature / Adult","Mecha","Medical","Medieval","Memory","Miniatures","Modern Warfare","Movie Theme","Movies / TV / Radio theme","Murder/Mystery","Mythology","Napoleonic","Nautical","Negotiation","Ninja's","Ninjas","Novel-based","Party Game","Pirates","Political","Post-Apocalyptic","Post-Napoleonic","Prehistoric","Print & Play","Prison Escape","Puzzle","Queer","RPG","Racing","Real-time","Religious","Renaissance","Resource Management","Roman Empire","Romance","Sci-Fi","Socialite","Solo / Solitaire","Space Exploration","Spies/Secret Agents","Sports","Strategy","Superhero","Tech","Territory Building","Theme Park","Trains","Transportation","Travel","Trivia","Vampire","Video Game Theme","War","Wargame","Werewolves","Western","Word Game","World War I","World War II","World War III","Zombies"];
var categoryIdArr = ["WnxKtlGfdR", "85OKv8p5Ow", "hBqZ3Ar4RJ", "KUBCKBkGxV", "20iDvpbh7A", "tJxatX2ZbW", 	"nWDac9tQzt", "4mOtRRwSoj", "a8NM5cugJX", "MWoxgHrOJD", "eFaACC6y2c", "k0dglq5j6N", "QB4sEpx1Uu", "PinhJrhnxU", 	"fW5vusE96B", "eX8uuNlQkQ", "HKaYVNIxAJ", "ODWOjWAJj3", "w8XD66FUZ2", "329DxyFL9D", "vXxLT0FDTZ", "G5kfqnPBP6", 	"iTvYWFmD1c", "ge8pIhEUGE", "nfQONtMbDU", "Ef4oYLHNhI", "bCBXJy9qDw", "bKrxqD9mYc", "mavSOM8vjH", "UuxiExraPF", 	"We3MM46qBr", "ZEW7DPFAE6", "N0TkEGfEsF", "B3NRLMK4xD", "crxgUzJSEz", "gsekjrPJz0", "u5ZiYctU6T", "h8wfZG0j3I", 	"v4SfYtS2Lr", "yq6hVlbM2R", "7rV11PKqME", "ctumBZyj5l", "ZTneo8TaIO", "Wr8uXcoR9p", "upXZ8vNfNO", "zNxFBqBHXA", 	"3NDxCLUny4", "YrDuNj8lvr", "H9Ef643lYf", "NR0vgCx5R7", "cAIkk5aLdQ", "TYnxiuiI3X", "zqFmdU4Fp2", "R7PTH00PmO", "rrvd68LjOR", "XeYUw9159M", "nHZiDOXNla", "pIMmuVYnQp", "POlqwScVxD", "ZhlfIPxYsw", "c1AnMUJrTF", "AeWXMxbm91", "QAYkTHK1Dd", "AujCle9cUq", "FC6ElKI9tk", "L6NUwNdblq", "TJnR5obHsQ", "Sod2YBWMKi", "Kk70K0524Z", "MHkqIVxwtx", "IpcJzp0TVC", "vqZ5XzGWQD", "jZEDOpx07e", "mWb5kHTAg1", "rtslXnT90O", "dO9HVl2TW7", "X8J7RM6dxX", "9EIayX6n5a", "TKQncFVX74", "8Z7nWG2kOw", "5APB1MWk6X", "YyszHun1HP", "ov6sEmlkiC", "dAyk5NtNTV", "WVMOS3s2pb", "c6nnwyDdnl", "2Gu62aKdma", "tQGLgwdbYH", "PzWI2uaif0", "DRqeVkXWqX", "nuHYRFmMjU", "zyj9ZK3mHB", "KSBdPfxs6F", "E5rYwP0Ybr", "3B3QpKvXD3", "c6ei4hkUxm", "VzyslQJGrG", "0MdRqhkNpw", "Hc6vcim5DS", "hShsL2DktG","O0ogzwLUe8","usFW8szGAq","yHTeXNjln0","buDTYyPw4D","vCzpbYT7RU","JwHcKqxh33","CWYOF9xu7O","TR4CiP8Huj","YGHGDjahKY","CH0R8pZsem","djokexoK0U","ssZjU3HETz","jX8asGGR6o","uJgSEPT6zE","EHUBCITA3t","rHvAx4hH2f","wTLJSVEbm6","fl3TogdUzX","OlkGBmu4Va","FmGV9rVu1c"];
var apiKey = 'CEx4Nnqb8e' //get rid of it
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
		let indexCategory = categoryIdArr.indexOf(game.categories[0].id)
		if(indexCategory > -1) {
			boardGame.category = categoryArr[indexCategory];
		} else {
			boardGame.category = "Unknown";
		}
	} else {
		boardGame.category = "Unknown";
	}
	return boardGame
}

// Put for the selected board
$("#select-board-game").on("submit", function (e) {
	e.preventDefault();
	let id = $("#choose-game option:selected").val();
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
		category: ""
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
		$.ajax({
			url: `/api/games/${id}`,
			type: 'PUT',
			data: boardGame
		}).then((data) => {
			console.log("Updated board game")
			$("#board-game-form").children().val("")
			init()
		}).catch((err) => {
			throw err
		});
	// If id is equal to 0 then we run a post
	} else {
		$.post("/api/games", boardGame).then((data) => {
			$("#board-game-form").children().val("")
			console.log(`Added board game!`);
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
		console.log(`Deleted game`)
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
		console.log("Added beer")
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
		console.log(`Updated beer`)
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
		console.log(`Deleted beer`)
		init();
	}).catch((err) => {
		throw err
	});
})

// Populate update selectors function
function populateUpdateSelector(row, data) {
	$(`#choose-${row}`).empty();
	$(`#choose-${row}`).append($(`<option value="0">None Selected</option>`));
	for (let item of data) {
		let selectionId = item.id;
		let selectionName = item[`${row}_name`];
		if (row === "login") {
			selectionName = item[row];
		};
		$(`#choose-${row}`).append($(`<option value="${selectionId}">${selectionName}</option>`));
	}
}

// TIME FUNCTIONALITY
// Put functionality
function initTime() {
	$.ajax({
		url: `/api/hours`,
		type: `GET`,
	}).then((data) => {
		if (data.length) {
			console.log("We have days in our database")
		} else {
			postDefaultTime();
		}
	});
}

$("#update-hours").on("submit", function (e) {
	e.preventDefault();
	var timeOutput = gatherFormData();
	// Check this functionality with Juan before using it
	for (let day in timeOutput) {
		$.ajax({
			url: `/api/hours/${timeOutput[day]["id"]}`,
			type: 'PUT',
			data: timeOutput[day]
		}).then((data) => {
			console.log(`Time table updated`);
		}).catch((err) => {
			throw err
		});
	}
})

function gatherFormData () {
	var days = ["mon", "tues", "weds", "thurs", "fri", "sat", "sun"];
	var timeOutput = {};
	var closed_day;
	for (let day of days) {
		let closed = $(`input[name=${day}]:checked`).val();
		let id = parseInt(days.indexOf(day)) + 1;
		if (closed === "closed") {
			var open = 0.01;
			var close = 1.01;
			closed_day = true;
		} else {
			var open = $(`select[name=${day}-open] option:selected`).val();
			var close = $(`select[name=${day}-close] option:selected`).val();
			closed_day = false; 
			// need to modulus by 24 if greater than 24 to get the proper hour
		}
		timeOutput[day] = {
			closed_day,
			open_time: open,
			close_time: close,
			day: day,
			id
		}
	}
	return timeOutput
}

function postDefaultTime () {
	var timeOutput = gatherFormData();
	for (let day in timeOutput) {
		$.post({
			url: "/api/hours",
			data: timeOutput[day]
		}).then(response => {
			console.log(`Added ${day}`)
		}).catch((err) => {
			throw err;
		});
	}
}

// EMPLOYEE FUNCTIONALITY
// Add functionality
$("#add-employee").on("submit", function (e) {
	e.preventDefault();
	let login = $("#login").val().trim();
	let password = $("#password").val().trim();
	let email = $("#email").val().trim();
	let tier = $("#tier").val().trim();
	let user = { login, password, email, tier };
	$.ajax({
		url: "/api/permissions",
		data: user,
		method: "POST"
	}).then(response => {
		console.log(`Added user`)
		$("#add-employee").children().val("");
		init();
	}).catch((err) => {
		throw err;
	})
})
// Remove functionality
$("#del-login").on("submit", function(e) {
	e.preventDefault();
	let id = $("#del-login-select option:selected").val();
	$.ajax({
		url: `/api/permissions/${id}`,
		method: "DELETE"
	}).then(response => {
		console.log("Deleted user");
		init();
		$("#del-login").children().val("");
	}).catch(err => {
		throw err;
	})
})
// Currently no update functionality


// Runs our initialize functions
init();
initTime();

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
		populateDeleteSelector("login", data);
		populateUpdateSelector("login", data);
	});
}
// Gets the table data //permission
function getTableData(table, cb) {
	$.get(`/api/${table}`, function(data) {
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
		let selectionId = item.id;
		let selectionName = item[`${row}_name`];
		if (row === "login") {
			selectionName = item[row];
		};
		$(`#del-${row}-select`).append($(`<option value="${selectionId}">${selectionName}</option>`));
	}
}
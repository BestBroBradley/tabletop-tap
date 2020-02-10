// TIME Update
$(document).ready(function() {
	populateTime(); 

	function populateTime() {
		var days = ["mon", "tues", "weds", "thurs", "fri", "sat", "sun"];
		var daysText = ["Monday:", "Tuesday:", "Wednesday:", "Thursday:", "Friday:", "Saturday:", "Sunday:"];
		// Check this functionality with Juan before using it
		$.ajax({
			url: `/api/hours`,
			type: 'GET'
		}).then((data) => {
			for (let i = 0; i < days.length; i++) {
				console.log(data[i]["closed_day"])
				if (data[i]["closed_day"]){
					$(`#${days[i]}`).text(`${daysText[i]} CLOSED!`);
				} else {
					let open = intToTime(data[i]["open_time"]);
					let close = intToTime(data[i]["close_time"]);
					$(`#${days[i]}`).text(`${daysText[i]} ${open}-${close}`);
				}
			}
		}).catch((err) => {
			throw err
		});
	}

	function intToTime (time) {
		let timeArr = time.split("").slice(0,2);
		var result;
		if (timeArr[1] === ".") {
			result = `${timeArr[0]}am`
		} else {
			let newTime = parseInt(timeArr.join("")); 
			console.log(newTime);
			switch (true) {
				case newTime > 24:
					result = String((newTime % 24)) + "am";
					break;
				case newTime === 24:
					result = "12am"
					break;
				case newTime > 12:
					result = String((newTime - 12)) + "pm";
					break;
				case newTime === 12:
					result = "12pm";
					break;
				default:
					result = String(newTime) + "am";
					break;
			}
		}
		return result
	}
})
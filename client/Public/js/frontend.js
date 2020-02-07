// TIME Update
function populateTime() {
  
	e.preventDefault();
	var days = ["mon", "tues", "weds", "thurs", "fri", "sat", "sun"];
	var daysText = ["Monday:", "Tuesday:", "Wednesday:", "Thursday:", "Friday:", "Saturday:", "Sunday:"];
	// Check this functionality with Juan before using it
	$.ajax({
		url: `/api/hours`,
		type: 'GET'
	}).then((data) => {
    console.log(`Time table fetched`);
    for (let i = 0; i < days.length; i++) {
      $(`#${days[i]}`).text(`${daysText[i]}`)
    }
	}).catch((err) => {
		throw err
	});
}

// div(class="column ff7Box is-three-quarters-mobile is-one-third-desktop" id="hoursBox")
//   p.head Hours
//   p.body#mon Monday: 2pm-11pm
//   p.body#tues Tuesday: 2pm-11pm
//   p.body#weds Wednesday: 2pm-11pm
//   p.body#thurs Thursday: 2pm-11pm
//   p.body#fri Friday: 12pm-12am
//   p.body#sat Saturday: 12pm-12pm
//   p.body#sun Sunday: 12pm-11pm

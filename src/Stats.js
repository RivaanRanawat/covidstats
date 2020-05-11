window.onload = function() {
	Stats();
}

function Stats() {
	fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations/131')
	.then(function(resp) { 
		return resp.json() 
	})
	.then(function(data) {
		console.log(data);
		let population = data.location.country_population;
		let update = data.location.last_updated;
		let confirmedCases = data.location.latest.confirmed;
		let deaths = data.location.latest.deaths;
		
		document.getElementById('population').innerHTML = population.toLocaleString('en');
		document.getElementById('cases').innerHTML = confirmedCases.toLocaleString('en');
		document.getElementById('deaths').innerHTML = deaths.toLocaleString('en');
		document.getElementById('totdeathper').innerHTML = ((Number(deaths)/Number(population))*100).toLocaleString("en", {minimumFractionDigits: 7, maximumFractionDigits: 7}) + "%";
		document.getElementById('casedeathper').innerHTML = ((Number(deaths)/Number(confirmedCases))*100).toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "%";

	})
	.catch(function() {
		console.log("error");
	})
	setTimeout(Stats, 21600000)
}
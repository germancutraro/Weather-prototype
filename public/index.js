
const city = document.getElementById('city-name');
const icon = document.getElementById('weather-icon');

city.addEventListener('keyup', e => {
	if (e.key === 'Enter') getTemperature(e.target.value)
	
});


function getTemperature(cityName) {
	const API = `api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=7c02b1090f42b77e30cac4cd89ffea05&units=metric`;

	axios.get('https://' + API)
		.then(res => {
			console.log(res.data)
			let data = res.data,
				temp = Math.ceil(data.main.temp);

			document.getElementById('country-output').textContent = temp + '°C';

			icon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
		})
		.catch(err => console.log(err));
}

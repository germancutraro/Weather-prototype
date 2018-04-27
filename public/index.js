// 42.3601 (lat)
		// 	-71.0589 (long)
const proxy = 'https://cors-anywhere.herokuapp.com/';
const API = 'https://api.darksky.net/forecast/49ff293b41c80f38af83a5248333d4d5/37.8267,-122.4233';

const farenheitToCelsius = temp => Math.floor((temp - 32) / 1.8);


axios.get(proxy + API)
	.then(res => {
		console.log(res.data)
		let data = res.data,
			temp = farenheitToCelsius(data.currently.temperature);

		document.getElementById('country-output').textContent = 
			`
				Hace en ${data.timezone.substring(8, 20)} ${temp}°
			`;
	})
	.catch(err => console.log(err));


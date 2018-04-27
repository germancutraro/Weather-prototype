// 42.3601 (lat)
		// 	-71.0589 (long)
const proxy = 'https://cors-anywhere.herokuapp.com/';
const API = 'api.openweathermap.org/data/2.5/weather?q=Buenos Aires&appid=7c02b1090f42b77e30cac4cd89ffea05&units=metric';

axios.get('https://' + API)
	.then(res => {
		console.log(res.data)
		let data = res.data,
			temp = Math.ceil(data.main.temp);

		document.getElementById('country-output').textContent = 
			`
				Hace ${temp}° en ${data.name} 
			`;
	})
	.catch(err => console.log(err));


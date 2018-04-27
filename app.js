const express = require('express');
const app = express();
//const cors = require('cors');
const path = require('path');
//app.use(cors());
app.use(express.static(path.join(__dirname, '/public')));


app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/index.html');
});


app.listen(3000, () => console.log('App running on port 3000'));

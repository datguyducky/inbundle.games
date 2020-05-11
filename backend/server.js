var express = require("express");
var cors = require('cors');
const db = require('./queries');

const PORT = process.env.PORT || 8888;
let app = express();
app.use(cors());

app.get('/api/v1', (req, res) => {
	res.status(200).send('welcome to API! :)');
})

app.get('/api/v1/games', db.getGame);


app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
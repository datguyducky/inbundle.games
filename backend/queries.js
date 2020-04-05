const Pool = require('pg').Pool


const isProduction = process.env.NODE_ENV === 'production';

const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_HOST}:5432/${process.env.DB_NAME}`

const pool = new Pool({
 	 connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
	ssl: {
		rejectUnauthorized: isProduction ? true : false
  	}
})


const getGame = (req, res) => {
	const game_title = req.query.title.toString();
  
	pool.query('SELECT * FROM games INNER JOIN bundles ON games.bundles = bundles.id WHERE title = $1', [game_title], (error, results) => {
		if (error) {
			throw error
		}

	  	res.status(200).json(results.rows)
	})
}


module.exports = { getGame }
const config = {
	production: {
		SECRET: process.env.SECRET,
		DATABASE: process.env.MONGODB_URI
	},
	default: {
		SECRET: 'SUPERSECRET',
		DATABASE: 'mongodb://localhost:27017/gamesReviews'
	}
};

exports.get = function get(env){
  return config[env] || config.default;
}
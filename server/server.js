const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const config = require('./config/config').get(process.env.NODE_ENV);

const { User } = require('./models/user');
const { Game } = require('./models/game');

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());

mongoose.Promise = global.Promise;
mongoose.connect(config.DATABASE);

// GET ALL GAMES
app.get('/api/games', (req,res) =>{
  let skip = parseInt(req.query.skip);
  let limit = parseInt(req.query.limit);
  let order = req.query.order;

  Game.find().skip(skip).sort({_id:order}).limit(limit).exec((err,doc) => {
    if (err) return res.status(400).send(err);
    res.send(doc);
  })
})

// GET GAME BY ID
app.get('/api/getGame', (req,res) => {
  let id = req.query.id;

  Game.findById(id, (err,doc) => {
    if (err) return res.status(400).send(err);
    res.send(doc)
  })
})

// POST GAME
app.post('/api/game', (req, res) => {
	const game = new Game(req.body);

	game.save((err, doc) => {
		if (err) return res.status(400).send(err);
		res.status(200).json({
			post: true,
			bookId: doc._id
		});
	});
});

// UPDATE GAME
app.post('/api/game_update',(req,res) => {
  Game.findByIdAndUpdate(req.body._id, req.body, {new: true}, (err,doc) => {
    if (err) return res.status(400).send(err);
    res.json({
      success: true,
      doc
    })
  })
})

// DELETE GAME
app.delete('/api/game_delete',(req,res)=>{
  let id = req.query.id;
  Game.findByIdAndRemove(id,(err,doc)=>{
    if (err) return res.status(400).send(err);
    res.json(true)
  })
})

const port = process.env.PORT || 3001;
app.listen(port, () => {
	console.log(`Server running at ${port}`);
});

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addGame, clearNewGame } from '../../actions';

import styles from './addGame.css';
class AddGame extends Component {
	state = {
		formdata: {
			name: '',
			developer: '',
			review: '',
			released: '',
			rating: '',
			price: ''
		}
	};

	handleInput = (event, name) => {
		const newFormData = {
			...this.state.formdata
		};
		newFormData[name] = event.target.value;
		this.setState({ formdata: newFormData });
	};

	submitForm = e => {
		e.preventDefault();
		this.props.dispatch(
			addGame({
				...this.state.formdata,
				ownerId: this.props.user.login.id
			})
		);
	};

	showNewGame = game =>
		game.post ? (
			<div className={styles.conf_link}>
				<Link to={`/game/${game.gameId}`}>Click to see the post</Link>
			</div>
		) : null;

	componentWillUnmount = () => {
		this.props.dispatch(clearNewGame());
	};

	render() {
		return (
			<div className={styles.ag_container}>
				<form onSubmit={this.submitForm}>
					<h2>Add a review</h2>
					<div className={styles.form_element}>
						<input
							type="text"
							placeholder="Enter name"
							value={this.state.formdata.name}
							onChange={event => this.handleInput(event, 'name')}
						/>
						<input
							type="text"
							placeholder="Enter developer"
							value={this.state.formdata.developer}
							onChange={event => this.handleInput(event, 'developer')}
						/>
						<textarea
              value={this.state.formdata.review}
              placeholder="Add review"
							onChange={event => this.handleInput(event, 'review')}
						/>
						<input
							type="number"
							placeholder="Enter released year"
							value={this.state.formdata.released}
							onChange={event => this.handleInput(event, 'released')}
						/>
						<div>
							<select
								value={this.state.formdata.rating}
								onChange={event => this.handleInput(event, 'rating')}
							>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
							</select>
						</div>
						<input
							type="number"
							placeholder="Enter price"
							value={this.state.formdata.price}
							onChange={event => this.handleInput(event, 'price')}
						/>
					</div>
					<button type="submit">Add Review</button>
					{this.props.games.newGame
						? this.showNewGame(this.props.games.newGame)
						: null}
				</form>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		games: state.games
	};
}

export default connect(mapStateToProps)(AddGame);

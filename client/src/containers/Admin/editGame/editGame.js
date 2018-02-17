import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getGame, updateGame, clearGame, deleteGame } from '../../../actions';

import styles from '../addGame/addGame.css';

class EditGame extends PureComponent {
	state = {
		formdata: {
			_id: this.props.match.params.id,
			name: '',
			developer: '',
			review: '',
			released: '',
			rating: '',
			price: ''
		}
	};

	componentWillMount = () => {
		this.props.dispatch(getGame(this.props.match.params.id));
	};

	componentWillReceiveProps = nextProps => {
    let game = nextProps.games.game;
    
		this.setState({
			formdata: {
				_id: game._id,
				name: game.name,
				developer: game.developer,
				review: game.review,
				released: game.released,
				rating: game.rating,
				price: game.price
			}
    });
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
    this.props.dispatch(updateGame(this.state.formdata))
	};

	render() {
    let games = this.props.games;
    console.log(games)
		return (
			<div className={styles.ag_container}>
				<form onSubmit={this.submitForm}>
					<h2>Edit a review</h2>
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
					<button type="submit">Edit Review</button>
					<div className={styles.delete_game}>
						<div className={styles.button}>Delete review</div>
					</div>
          {
            games.updateGame
            ? <div className={styles.edit_confirm}>
                <div>
                  Post updated, <Link to={`/game/${games.game._id}`}>Click here to see your post</Link>
                </div>
              </div>
            : null
          }
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

export default connect(mapStateToProps)(EditGame);

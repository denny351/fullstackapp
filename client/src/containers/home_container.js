import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGames } from '../actions';

import GameItem from '../widgetsUI/game_item';

class HomeContainer extends Component {
	componentWillMount = () => {
		this.props.dispatch(getGames(1, 0, 'desc'));
	};

	renderItems = games =>
		games.list
			? games.list.map(item => <GameItem {...item} key={item._id} />)
			: null;

	loadmore = () => {
		let count = this.props.games.list.length;
		this.props.dispatch(getGames(1, count, 'desc', this.props.games.list));
	};

	render() {
		const loadmoreStyles = {
			background: '#dbdbdb',
			textAlign: 'center',
			textTransform: 'uppercase',
			color: '#ffffff',
			padding: '20px',
			fontWeight: 500,
			cursor: 'pointer'
		};

		return (
			<div>
				{this.renderItems(this.props.games)}
				<div
					className="loadmore"
					onClick={this.loadmore}
					style={loadmoreStyles}
				>
					Load More
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		games: state.games
	};
}

export default connect(mapStateToProps)(HomeContainer);

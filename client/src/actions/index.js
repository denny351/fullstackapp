import axios from 'axios';

export function getGames(limit = 10, start = 0, order = 'asc', list = '') {
	const request = axios
		.get(`/api/games?limit=${limit}&skip=${start}&order=${order}`)
		.then(response => {
			if (list) {
				return [...list, ...response.data];
			} else {
				return response.data;
			}
		});

	return {
		type: 'GET_GAMES',
		payload: request
	};
}

export function getGameWithReviewer(id) {
	const request = axios.get(`/api/getGame?id=${id}`);

	return dispatch => {
		request.then(response => {
			let game = response.data;

			axios.get(`/api/getReviewer?id=${game.ownerId}`).then(response => {
				let gameData = {
					game,
					reviewer: response.data
				};
				dispatch({
					type: 'GET_GAME_W_REVIEWER',
					payload: gameData
				});
			});
		});
	};
}

export function clearGamePage() {
	return {
		type: 'CLEAR_GAME_PAGE',
		payload: {
			game: {},
			reviewer: {}
		}
	};
}

// USERS

export function loginUser({ email, password }) {
	const request = axios.post('/api/login', { email, password })
		              .then(response => response.data);
	return {
		type: 'USER_LOGIN',
		payload: request
	};
}

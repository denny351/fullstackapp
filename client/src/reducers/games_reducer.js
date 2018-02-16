export default function(state = {}, action) {
	switch (action.type) {
		case 'GET_GAMES':
			return { ...state, list: action.payload };
		case 'GET_GAME_W_REVIEWER':
			return {
				...state,
				game: action.payload.game,
				reviewer: action.payload.reviewer
      };
    case 'CLEAR_GAME_PAGE':
  		return {
				...state,
				game: action.payload.game,
				reviewer: action.payload.reviewer
      };
    case 'ADD_GAME':
      return {...state, newGame: action.payload}
    case 'CLEAR_NEWGAME':
      return { ...state, newGame: action.payload }
		default:
			return state;
	}
}

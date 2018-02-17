export default function(state = {}, action) {
	switch (action.type) {
		case 'GET_GAMES':
      return { ...state, list: action.payload };
    case 'GET_GAME':
      return {...state, game: action.payload};
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
    case 'UPDATE_GAME':
      return {...state, updateGame: action.payload.success, game: action.payload.doc }
    case 'DELETE_GAME':
      return {...state, postDeleted: action.payload}
    case 'CLEAR_GAME':
      return {...state, 
        updateGame: action.payload.updateGame, 
        game: action.payload.game, 
        postDeleted: action.payload.postDeleted}
		default:
			return state;
	}
}

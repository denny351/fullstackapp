export default function(state={},action){
  switch(action.type){
    case 'GET_GAMES':
      return {...state, list: action.payload}
    default: return state;
  }
}
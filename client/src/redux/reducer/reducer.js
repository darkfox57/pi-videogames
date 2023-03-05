import { GET_ERRORS, GET_GAME, GET_GAMES, GET_GENRES, RESET_GAME, SEARCH_GAME } from '../actions/actions';

const initialState = {
 game: {},
 error: null,
 games: [],
 genres: [],
 searched: [],
 addedgame: {},
}

export default function (state = initialState, action) {
 switch (action.type) {
  case GET_GAMES:
   return {
    ...state,
    games: action.payload
   }
  case SEARCH_GAME:
   return {
    ...state,
    searched: action.payload
   }
  case GET_GAME:
   return {
    ...state,
    game: action.payload
   }
  case 'ADD_GAME':
   return {
    ...state,
    addedgame: action.payload,
   }
  case RESET_GAME:
   return {
    ...state,
    game: {},
   };
  case GET_GENRES:
   return {
    ...state,
    genres: action.payload
   }
  case GET_ERRORS:
   return {
    ...state,
    errors: action.payload
   }
  default: return state
 }
}


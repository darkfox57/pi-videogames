import { ADD_GAME, FILTER_GENRES, FILTER_ORIGIN, GET_ERRORS, GET_GAME, GET_GAMES, GET_GENRES, ORDER_NAMES, ORDER_RATINGS, RESET_GAME, SEARCH_GAME } from '../actions/actions';

const initialState = {
 game: {},
 error: null,
 games: [],
 filtredGames: [],
 genres: [],
 searched: [],
 addedgame: {}
}

export default function (state = initialState, action) {
 switch (action.type) {
  case GET_GAMES:
   return {
    ...state,
    games: action.payload,
    filtredGames: action.payload
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
  case ADD_GAME:
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


  case ORDER_NAMES:
   const copyfilter = [...state.games];
   let ordered;
   if (action.payload === 'Ascendent') {
    ordered = copyfilter.sort((a, b) => {
     if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
     if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
     return 0;
    });
   } else if (action.payload === 'Descendent') {
    ordered = copyfilter.sort((a, b) => {
     if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
     if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
     return 0;
    });
   } else if (action.payload === 'Default') {
    return { ...state, filtredGames: copyfilter };
   }
   return { ...state, filtredGames: ordered };




  case ORDER_RATINGS:
   const copyratings = [...state.games];
   let ratingOrder;
   if (action.payload === 'Ascendent') {
    ratingOrder = copyratings.sort((a, b) => a.rating - b.rating);
   } else if (action.payload === 'Descendent') {
    ratingOrder = copyratings.sort((a, b) => b.rating - a.rating);
   } else if (action.payload === 'Default') {
    return { ...state, filtredGames: copyratings };
   }
   return { ...state, filtredGames: ratingOrder };


  case FILTER_GENRES:
   const copygenres = [...state.games];
   let genresFilter;
   if (action.payload === "Default") {
    genresFilter = copygenres;
   } else {
    genresFilter = copygenres.filter((g) =>
     g.genres.some((genre) => genre.name === action.payload)
    );
   }
   return { ...state, filtredGames: genresFilter };


  case FILTER_ORIGIN:
   const copyOrigins = [...state.games];
   let originFilter;
   if (action.payload === 'Api') {
    // Filtre los juegos que tienen números en su ID
    originFilter = copyOrigins.filter((game) => /^\d+$/.test(game.id));
   } else if (action.payload === 'Created') {
    // Filtre los juegos que tienen guiones en su ID
    originFilter = copyOrigins.filter((game) => isNaN(game.id));
   } else if (action.payload === 'Default') {
    // Si no se especifica origen, retornar estado original
    return { ...state, filtredGames: copyOrigins };
   }
   return { ...state, filtredGames: originFilter };
  case GET_ERRORS:
   return {
    ...state,
    errors: action.payload
   }
  default: return state
 }
}


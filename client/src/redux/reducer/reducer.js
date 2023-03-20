import { ADD_GAME, FILTER_GENRES, FILTER_ORIGIN, GET_ERRORS, GET_GAME, GET_GAMES, GET_GENRES, ORDER_NAMES, ORDER_RATINGS, RESET_GAME, SEARCH_GAME, SET_CURRENT_PAGE } from '../actions/actions';

const initialState = {
 game: {},
 error: null,
 games: [],
 filtredGames: [],
 genres: [],
 searched: [],
 addedgame: {},
 currentPage: 1
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
  case SET_CURRENT_PAGE:
   return {
    ...state,
    currentPage: action.payload,
   }
  case GET_ERRORS:
   return {
    ...state,
    error: action.payload,
   };
  case ORDER_NAMES:
   const copyNames = [...state.filtredGames];
   let orderedNames;
   if (action.payload === "Ascendent") {
    orderedNames = copyNames.sort((a, b) => {
     if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
     if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
     return 0;
    });
   } else if (action.payload === "Descendent") {
    orderedNames = copyNames.sort((a, b) => {
     if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
     if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
     return 0;
    });
   } else if (action.payload === "Default") {
    orderedNames = [...state.games];
   }
   return { ...state, filtredGames: orderedNames };

  case ORDER_RATINGS:
   const copyRating = [...state.filtredGames];
   let orderedRating;
   if (action.payload === "Ascendent") {
    orderedRating = copyRating.sort((a, b) => a.rating - b.rating);
   } else if (action.payload === "Descendent") {
    orderedRating = copyRating.sort((a, b) => b.rating - a.rating);
   } else if (action.payload === "Default") {
    orderedRating = [...state.games];
   }
   return { ...state, filtredGames: orderedRating };

  case FILTER_GENRES:
   const copyGenres = [...state.games];
   let genresFilter = copyGenres;
   if (action.payload !== "Default") {
    genresFilter = genresFilter.filter((g) =>
     g.genres.some((genre) => genre.name === action.payload)
    );
   }
   const copyGenresAbc = [...genresFilter];
   let orderedGenres = copyGenresAbc.sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
    return 0;
   });
   return { ...state, filtredGames: orderedGenres, currentPage: 1 };

  case FILTER_ORIGIN:
   const copyOrigins = [...state.games];
   let originFilter = copyOrigins;
   if (action.payload === "Api") {
    // Filtre los juegos que tienen números en su ID
    originFilter = originFilter.filter((game) => /^\d+$/.test(game.id));
   } else if (action.payload === "Created") {
    // Filtre los juegos que tienen guiones en su ID
    originFilter = originFilter.filter((game) => isNaN(game.id));
   }
   const copyfilterAbc = [...originFilter];
   let orderedOrigin = copyfilterAbc.sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
    return 0;
   });
   return { ...state, filtredGames: orderedOrigin, currentPage: 1 };


  default: return state
 }
}


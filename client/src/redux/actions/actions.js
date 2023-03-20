import axios from 'axios';

export const GET_GAMES = 'GET_GAMES'
export const GET_GAME = 'GET_GAME'
export const GET_ERRORS = 'GET_ERRORS'
export const SEARCH_GAME = 'SEARCH_GAME'
export const RESET_GAME = 'RESET_GAME';
export const GET_GENRES = 'GET_GENRES'
export const ADD_GAME = 'ADD_GAME'
export const ORDER_NAMES = 'ORDER_NAMES'
export const FILTER_GENRES = 'FILTER_GENRES'
export const ORDER_RATINGS = 'ORDER_RATINGS'
export const FILTER_ORIGIN = 'FILTER_ORIGIN'
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'


export const getGames = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3001/videogames');
    dispatch({
      type: GET_GAMES,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.message,
    });
  }
};

export const searchGame = (name) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:3001/videogames/?name=${name}`);
    dispatch({
      type: SEARCH_GAME,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.message,
    });
  }
};

export const getGame = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:3001/videogame/${id}`);
    dispatch({
      type: GET_GAME,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error,
    });
  }
};

export const getGenres = () => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:3001/genres/get`)
    dispatch({
      type: GET_GENRES,
      payload: response.data
    })
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error
    })
  }
}

export const addGame = (gameData) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:3001/videogames/', gameData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    dispatch({
      type: ADD_GAME,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error
    })
  }
};

export const resetGame = () => ({
  type: RESET_GAME,
  payload: {},
});

export const orderNames = (name) => ({
  type: ORDER_NAMES,
  payload: name
})

export const orderRating = (rating) => ({
  type: ORDER_RATINGS,
  payload: rating
})



export const filterByGenres = (genre) => ({
  type: FILTER_GENRES,
  payload: genre
})

export const filterByOrigin = (origin) => ({
  type: FILTER_ORIGIN,
  payload: origin
})

export const setCurrentPage = (page) => {
  return {
    type: SET_CURRENT_PAGE,
    payload: page,
  }
}






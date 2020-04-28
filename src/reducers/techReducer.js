import {
  GET_TECHS,
  SET_LOADING,
  ADD_TECH,
  TECHS_ERROR,
  DELETE_TECH,
} from "../actions/Types";

const initialState = {
  techs: null,
  loading: false,
  error: null,
};

const techReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TECHS:
      return {
        ...state,
        techs: action.payload,
        loading: false,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case ADD_TECH:
      return {
        ...state,
        techs: [...state.techs, action.payload],
        loading: false,
      };

    case DELETE_TECH:
      return {
        ...state,
        techs: state.techs.filter((t) => {
          return t.id !== action.payload;
        }),
      };

    case TECHS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default techReducer;

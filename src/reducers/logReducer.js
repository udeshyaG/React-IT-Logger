import {
  SET_LOADING,
  GET_LOGS,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
  SEARCH_LOGS,
} from "../actions/Types";

const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null,
};

const logReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false,
      };

    case ADD_LOG:
      return {
        ...state,
        logs: [...state.logs, action.payload],
        loading: false,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case LOGS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };

    case DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter((log) => {
          return log.id !== action.payload;
        }),
        loading: false,
      };

    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };

    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };

    case UPDATE_LOG:
      return {
        ...state,
        logs: state.logs.map((log) => {
          if (log.id === action.payload.id) {
            return action.payload;
          } else {
            return log;
          }
        }),
      };

    case SEARCH_LOGS:
      return {
        ...state,
        logs: action.payload,
      };

    default:
      return state;
  }
};

export default logReducer;

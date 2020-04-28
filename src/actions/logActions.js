import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
  SEARCH_LOGS,
} from "./Types";
import axios from "axios";

// export const getLogs = () => {
//     return async (dispatch) => {
//         setLoading();

//         const res = await axios.get('http://localhost:5000/logs');

//         dispatch({
//             type: GET_LOGS,
//             payload : res.data
//         })
//     }
// };

//Get logs from Server
export const getLogs = () => async (dispatch) => {
  try {
    setLoading();

    const res = await axios.get("http://localhost:5000/logs");

    dispatch({
      type: GET_LOGS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

//Add new Log
export const addLog = (log) => async (dispatch) => {
  try {
    setLoading();

    const res = await axios.post("http://localhost:5000/logs", log, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    dispatch({
      type: ADD_LOG,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

//Delete Log from server
export const deleteLog = (id) => async (dispatch) => {
  try {
    setLoading();

    await axios.delete(`http://localhost:5000/logs/${id}`);

    dispatch({
      type: DELETE_LOG,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

//Set current log for updating
export const setCurrent = (log) => {
  return {
    type: SET_CURRENT,
    payload: log,
  };
};

//Clear current log
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

//Update log on server
export const updateLog = (log) => async (dispatch) => {
  try {
    setLoading();

    const res = await axios.put(`http://localhost:5000/logs/${log.id}`, log, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    dispatch({
      type: UPDATE_LOG,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

//Search server logs
export const searchLogs = (text) => async (dispatch) => {
  try {
    setLoading();

    const res = await axios.get(`http://localhost:5000/logs/?q=${text}`);

    dispatch({
      type: SEARCH_LOGS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

//set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

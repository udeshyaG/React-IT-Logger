import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR,
} from "./Types";
import axios from "axios";

//Get techs from server
export const getTechs = () => async (dispatch) => {
  try {
    setLoading();

    const res = await axios.get("http://localhost:5000/techs");

    dispatch({
      type: GET_TECHS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText,
    });
  }
};

//Add technician to server
export const addTech = (tech) => async (dispatch) => {
  try {
    setLoading();

    const res = await axios.post("http://localhost:5000/techs", tech, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    dispatch({
      type: ADD_TECH,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText,
    });
  }
};

//Delete a technician from server
export const deleteTech = (id) => async (dispatch) => {
  try {
    setLoading();

    await axios.delete(`http://localhost:5000/techs/${id}`);

    dispatch({
      type: DELETE_TECH,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText,
    });
  }
};

//Get techs from server
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

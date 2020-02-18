import {
  GET_STUDENTS,
  ADD_STUDENT,
  DELETE_STUDENT,
  STUDENT_LOADING
} from "../actions/types";
import { tokenConfig } from "../actions/authAction";
import { returnErrors } from "./errorAction";
import axios from "axios";

export const getStudents = () => dispatch => {
  //caling setStudentLoading will set it true cause we invoked it
  dispatch(setStudentsLoading());
  axios
    .get("/api/students")
    .then(res =>
      //we are sending the type of action and also sending the data to the payload
      dispatch({
        type: GET_STUDENTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
export const addStudent = studentName => (dispatch, getState) => {
  axios
    .post("/api/students", studentName, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: ADD_STUDENT,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteStudent = id => (dispatch, getState) => {
  axios
    .delete(`/api/students/${id}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: DELETE_STUDENT,
        payload: id
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
//sending the studeing laoding to the reducer which it calls it true in the studentReducer
export const setStudentsLoading = () => {
  return {
    type: STUDENT_LOADING
  };
};

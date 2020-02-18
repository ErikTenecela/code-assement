import {
  GET_STUDENTS,
  ADD_STUDENT,
  DELETE_STUDENT,
  STUDENT_LOADING
} from "../actions/types";

const initalState = {
  studentName: [],
  loading: false
};

export default function(state = initalState, action) {
  switch (action.type) {
    case GET_STUDENTS:
      return {
        ...state,
        studentName: action.payload,
        loading: false
      };
    case DELETE_STUDENT:
      return {
        ...state,
        studentName: state.studentName.filter(
          name => name._id !== action.payload
        )
      };

    case ADD_STUDENT:
      return {
        ...state,
        studentName: [action.payload, ...state.studentName]
      };
    case STUDENT_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}

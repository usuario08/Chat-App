import {
  LIST_USER,
  LOADING,
} from "../actions/actionsName";
const initialState = {
  users: [],
  user: null,
  loading: false,
};

// function rootReducer(state = initialState, action)
function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case LIST_USER:
      return {
        ...state,
        users: payload,
      };
    case LOADING:
      return {
        ...state,
        loading: payload,
      };

    default:
      return state;
  }
}
export default rootReducer;

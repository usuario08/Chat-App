import { LIST_USER } from "../actions/actionsName";
const initialState = {
  users: [],
};

// function rootReducer(state = initialState, action)
function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case LIST_USER:
      return {
        ...state,
        users: payload,
      };
    default:
      return state;
  }
}
export default rootReducer;

import { LIST_USER } from "./actionsName";
import axios from "axios";

export function listUser() {
  return async function (dispatch) {
    let { data } = await axios.get(`https://localhost:3001/api/users`);
    return dispatch({
      type: LIST_USER,
      payload: data,
    });
  };
}

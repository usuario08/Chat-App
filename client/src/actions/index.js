import { LIST_USER } from "./actionsName";
import axios from "axios";

export function listUser() {
  return async function (dispatch) {
    let { data } = await axios.get(`/users`);
    return dispatch({
      type: LIST_USER,
      payload: data,
    });
  };
}

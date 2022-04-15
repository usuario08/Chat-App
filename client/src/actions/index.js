import { LIST_USER } from "./actionsName";
import postService from "../services/post_service";

export function listUser() {
  return async function (dispatch) {
    let users = await postService.getAllUser();
    return dispatch({
      type: LIST_USER,
      payload: users,
    });
  };
}

import { LIST_USER, LOADING } from "./actionsName";
import postService from "../services/post_service";

export const listUser = () => {
  return async function (dispatch) {
    let users = await postService.getAllUser();
    return dispatch({
      type: LIST_USER,
      payload: users,
    });
  };
};

export const loading = (val) => {
  return {
    type: LOADING,
    payload: val,
  };
};

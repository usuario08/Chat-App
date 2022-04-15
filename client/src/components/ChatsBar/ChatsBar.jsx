import "./ChatsBar.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { listUser } from "../../actions";
import { useNavigate } from "react-router-dom";

export const ChatsBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(listUser()).then(
      () => {},
      (error) => {
        console.log(error.response)
        if (error.response && error.response.status === 401) {
          navigate("/login");
        }
      }
    );
  }, []);
  return (
    <div className="chatsBar">
      <ul className="chatList">
        {allUsers?.map((e) => {
          return (
            <li className="friend" key={e._id}>
              <div className="nameContainer">
                <span className="userName">{e.username}</span>
                <span className="online"></span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

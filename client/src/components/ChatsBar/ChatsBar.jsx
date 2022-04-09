import "./ChatsBar.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { listUser } from "../../actions";

export const ChatsBar = () => {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(listUser());
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

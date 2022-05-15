import { useEffect } from "react";
import { Messaje } from "../Message/Messaje";
import "./ContentChat.css";

export const ContentChat = () => {
  useEffect(() => {});
  return (
    <div className="contentChat">
      <div className="chatBoxTop">
        <Messaje own={false} />
        <Messaje own={true} />
        <Messaje own={false} />
        <Messaje own={true} />
        <Messaje own={false} />
        <Messaje own={true} />
        <Messaje own={false} />
        <Messaje own={true} />
        <Messaje own={false} />
        <Messaje own={true} />
        <Messaje own={false} />
        <Messaje own={true} />
        <Messaje own={false} />
        <Messaje own={true} />
        <Messaje own={false} />
        <Messaje own={true} />
        <Messaje own={false} />
        <Messaje own={true} />
        <Messaje own={false} />
        <Messaje own={true} />
        <Messaje own={false} />
        <Messaje own={true} />
      </div>
      <div className="chatBox">
        <textarea
          className="chatInput"
          placeholder="Write something..."
        ></textarea>
        <button className="chatBtn">Send</button>
      </div>
    </div>
  );
};

import "./Messaje.css";

export const Messaje = ({ own }) => {
  return (
    <div className={own ? "msgContainer own" : "msgContainer"}>
      <div className="message">
        <p className="messageContent">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non vol
        </p>
        <p className="messageHour">15/04/2022 12:00pm</p>
      </div>
    </div>
  );
};

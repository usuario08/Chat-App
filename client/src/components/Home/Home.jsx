import "./Home.css";
import React from "react";
import { TopBar } from "../TopBar/TopBar";
import { ContentChat } from "../ContentChat/ContentChat";
import { ChatsBar } from "../ChatsBar/ChatsBar";


export const Home = () => {

  return (
    <>
      <TopBar />
      <div className="homeContainer">
        <ContentChat />
        <ChatsBar />
      </div>
    </>
  );
};

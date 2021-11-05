import React, { Component } from "react";
import Avatar from "../chatList/Avatar";

function  ChatItem() {
    return (
      <div
        style={{ animationDelay: `0.8s` }}
        className={`chat__item`}
      >
        <div className="chat__item__content">
          <div className="chat__msg">{}</div>
          <div className="chat__meta">
            <span>16 mins ago</span>
            <span>Seen 1.03PM</span>
          </div>
        </div>
        <Avatar  />
      </div>
    );
  }

  export default ChatItem


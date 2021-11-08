import React, { Component } from "react";
import AvatarReply from "../chatList/AvatarReply";
import Styles from "./chatContent.module.css"

function  ChatItem() {
    return (
      <>
        <div className={Styles.chat__item__content}>
          <div className={Styles.chat__item__header}>
          
          <AvatarReply/>
          <div>
          <div className={Styles.chat__user_name}>
            <span className={Styles.name}>Trần Thanh Tâm</span>
            <span className={Styles.dash}>-</span>
            <span className={Styles.role}>Giáo Viên</span>
            
          </div>
          <div className="chat__user_time">
            <span className={Styles.time_year}>22 tháng 10, 2020</span>
            <span className={Styles.time_hour}>10:14</span>
              
            </div>
            </div>
            </div>
            <div className={Styles.chat__user_content}>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam voluptatem quis rerum impedit, 
                quo, explicabo inventore esse eos veritatis quod ullam repellat assumenda voluptas magnam 
                nostrum cupiditate harum, non doloribus!</p>
            </div>
        </div>

      
        </>
    );
  }

  export default ChatItem


import React, { useState } from "react";
import "./chatContent.css";
import AvatarReply from "../../QuestionAndAnswer/chatList/AvatarReply";
import ChatItem from "../../QuestionAndAnswer/chatContent/ChatItem";
import TextArea from "rc-textarea";
import { MessageTeacher, PaperclipTeacher } from "../../../assets/svg/icon";
import Styles from "./chatContent.module.css"


function ChatContent(){
// [
//     {
//       key: 1,
//       image:
//         "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
//       type: "",
//       msg: "Hi Tim, How are you?",
//     },
//     {
//       key: 2,
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
//       type: "other",
//       msg: "I am fine.",
//     },
//     {
//       key: 3,
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
//       type: "other",
//       msg: "What about you?",
//     },
//     {
//       key: 4,
//       image:
//         "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
//       type: "",
//       msg: "Awesome these days.",
//     },
   
//   ];



const [show, setShow] = useState(false);

    return (
      <div className={Styles.main__chatcontent}>
        <div className={Styles.content__header}>
            <div className={Styles.blocks}>
                <AvatarReply
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU"
                />
                  <div>
                      <div className={Styles.current_chatting_user}>
                          <span className={Styles.name}>Hiền Mai</span>
                      </div>
                      <div className="chat__user-time">
                          <span className={Styles.time_year}>22 tháng 10, 2020</span>
                          <span className={Styles.time_hour}>10:14</span>            
                      </div>
                  </div>
            </div>

            <div className={Styles.blocks}>              
                <button className="btn-reply-teacher" onClick={() => setShow(!show)}  >Trả lời             
                </button>
            </div>
        </div>


        <div className={Styles.content_all}>
              <div className={Styles.chat__user_content}>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam voluptatem quis rerum impedit, 
                      quo, explicabo inventore esse eos veritatis quod ullam repellat assumenda voluptas magnam 
                      nostrum cupiditate harum, non doloribus!</p>

                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam voluptatem quis rerum impedit, 
                      quo, explicabo inventore esse eos veritatis quod ullam repellat assumenda voluptas magnam 
                      nostrum cupiditate harum, non doloribus!</p>
              </div>
            
              <div className={Styles.content__body}>
                    <div className={Styles.chat__items}>     
                          <ChatItem
                          />
                          <ChatItem
                          />        

                          <ChatItem
                          />   
                          <ChatItem
                          />   
                          <ChatItem
                          />      
                    </div>
              </div>
        </div>
        {show &&
        <div className={Styles.content__footer}>
            <form>       
                <div className={Styles.sendNewMessage}>
                  <button className={Styles.paperclip}>
                      <img src={PaperclipTeacher}/>
                  </button>
                  <TextArea        
                    placeholder="Nhập câu trả lời..."
                  />
                  <button id="sendMsgBtn">
                      <img src={MessageTeacher}/>
                  </button>
                </div>
            </form> 
        </div>}
      </div>
    );
  }


export default ChatContent

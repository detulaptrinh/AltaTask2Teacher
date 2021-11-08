import React, { useState, useEffect } from "react";
import "./chatListTopic.css";
import ChatListItemsTopic from "../chatList/ChatListItemsTopic";
import { Input } from "antd";


interface IRecipeProps {
    title?:string;
    content?:string;
    views?:number;
    comment?:string;
    date?:string;
    key?:string;
    data1?:number;
}

function ChatListTopic() {
  const[data,setData] = useState<any[]>([]);

  var dataList = data.length;

  useEffect(()=>{
    fetch('./data/topic.json')
      .then(response => {
        console.log(response)
        return response.json();
      })
      .then(data => {
        console.log(data.length);
        setData(data)
      })
      .catch(err => {
        console.log("lỗi")
      });
  }
  ,[])
    return (
      <div className="main__chatlist">
        <div className="chatList__search">
        <div className="tab-search-right"> 
            <Input className="tab-search-right__input" placeholder="Tìm kiếm theo tên topic" />
        </div>
        </div>
        <div className="chatlist__items">
          {data && data.length>0 && data.map((item) =>{
            return (
              <ChatListItemsTopic
                title={item.title}
                content={item.content}
                date={item.date}
                views={item.views}
                comment={item.comment}
                key={item.id}                  
                data1={dataList}
              />
            );
          })}
        </div>
      </div>
    );
}

export default ChatListTopic


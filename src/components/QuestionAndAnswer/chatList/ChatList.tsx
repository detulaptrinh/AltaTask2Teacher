import React, { useState, useEffect } from "react";
import "./chatList.css";
import ChatListItems from "../chatList/ChatListItems";
import { Input } from "antd";


interface IRecipeProps {
    image?: string;
    active?:string;
    name?:string;
    views?:number;
    question?:string;
    date?:string;
}

function ChatList() {
  const[data,setData] = useState<any[]>([]);

  useEffect(()=>{
    fetch('./data/question.json')
      .then(response => {
        console.log(response)
        return response.json();
      })
      .then(data => {
        console.log(data);
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
            <Input className="tab-search-right__input"  placeholder="Tìm kiếm theo tên topic" />
        </div>
        </div>
        <div className="chatlist__items">
          {data && data.length>0 && data.map((item)=> {
            return (
              <ChatListItems
                name={item.name}
                date={item.date}
                views={item.views}
                question={item.question}
                key={item.id}            
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    );
}

export default ChatList


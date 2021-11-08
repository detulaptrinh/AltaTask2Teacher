import React, { useState, useEffect } from "react";
import chatlistAllTopicCSS from "./chatList.module.css";
import "./chatList.css"
import ChatListItems from "../chatList/ChatListItems";
import { Input } from "antd";


interface IRecipeProps {
    image?: string;
    active?:string;
    name?:string;
    views?:number;
    question?:string;
    date?:string;
    key?:string;
    data1?:number;
}

function ChatList() {
  const[data,setData] = useState<any[]>([]);

  const [seach, setSearch] = useState('');

  var dataList = data.length;

  useEffect(()=>{
    fetch('./data/question.json')
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
      <div className={chatlistAllTopicCSS.main__chatlist}>
        <div className={chatlistAllTopicCSS.chatList__search}>
        <div className="tab-search-right"> 
            <Input className="tab-search-right__input" onChange={event => {setSearch(event.target.value)}} placeholder="Tìm kiếm theo tên topic" />
        </div>
        </div>
        <div className={chatlistAllTopicCSS.chatlist__items}>
          {data && data.length>0 && data.filter((item) =>{
          if(seach == ""){
            return item
          }else if(item.name.toLowerCase().includes(seach.toLocaleLowerCase())){
            return item
          }
        }).map((item) => {
            return (
              <ChatListItems
                name={item.name}
                date={item.date}
                views={item.views}
                question={item.question}
                key={item.id}     
                image={item.image}
                data1={dataList}
              />
            );
          })}
        </div>
      </div>
    );
}

export default ChatList


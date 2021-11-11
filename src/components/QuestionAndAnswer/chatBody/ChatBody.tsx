import React, { useState, useEffect} from "react";
import "./chatBody.css";
import ChatList from "../../QuestionAndAnswer/chatList/ChatList";
import ChatContent from "../../QuestionAndAnswer/chatContent/ChatContent";
import { Tabs } from 'antd';
import ChatListTopic from "../chatList/ChatListTopic";
import BreadcrumbQA from "../breadcrumbQ&A/breadcrumb"
import SwitchtabQA from "../switchtabsQ&A/switchtab"
import Styles from "./chatBody.module.css"


const { TabPane } = Tabs;



function ChatBody() {
 const[data,setData] = useState<any[]>([]);

 const[dataTopic,setDataTopic] = useState<any[]>([]);

 const [show1, setShow1] = useState(false);

  var dataList = data.length;

  var dataListTopics = dataTopic.length;
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


  useEffect(()=>{
    fetch('./data/topic.json')
      .then(response => {
        console.log(response)
        return response.json();
      })
      .then(dataTopic => {
        console.log(dataTopic.length);
        setDataTopic(dataTopic)
      })
      .catch(err => {
        console.log("lỗi")
      });
  }
  ,[])
    
    return (
      <>
        <BreadcrumbQA />
        <SwitchtabQA />
        
        {show1 &&
        <button className={Styles.create_topics}>Tạo topic mới</button> }
       
        <div className="tabs-question">
          <Tabs defaultActiveKey="1" type="card"> 
            <TabPane 
            tab={
            <span>
                Tất cả câu hỏi
                <div className={Styles.all_question_bg}>
                    <span className={Styles.all_question}>{dataList}</span>
                </div>
            </span> } key="1"           
            > 
              <div className={Styles.main__chatbody}>
                <ChatList />
                <ChatContent />
              </div>
            </TabPane>

            <TabPane tab="Đã trả lời" key="2">
              <div className={Styles.main__chatbody}>
                <ChatList />
                <ChatContent />
              </div>
            </TabPane>

            <TabPane tab="Gần đây nhất" key="3">
              <div className={Styles.main__chatbody}>
                <ChatList />
                <ChatContent />
              </div>
            </TabPane>

            <TabPane tab={<span onClick={() => setShow1(!show1)} >
                Topics
                <div className={Styles.all_question_bg}>
                    <span className={Styles.all_question}>{dataListTopics}</span>
                </div>
            </span> } key="4">
              <div className={Styles.main__chatbody}>
                <ChatListTopic />
                <ChatContent />
              </div>
            </TabPane>
          </Tabs>
        </div>
      </>
    );
  }

export default ChatBody

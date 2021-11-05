import React, { Component } from "react";
import "./chatBody.css";
import ChatList from "../../QuestionAndAnswer/chatList/ChatList";
import ChatContent from "../../QuestionAndAnswer/chatContent/ChatContent";
import { Tabs, Radio, Breadcrumb } from 'antd';

const { TabPane } = Tabs;

export default class ChatBody extends Component{
  render() {
    return (
<>  
<div className="title">
                          <Breadcrumb separator=">">
                                <Breadcrumb.Item className="tittle__breadcrumb__left">
                                    Thông tin lớp học
                                </Breadcrumb.Item>
                                <Breadcrumb.Item className="tittle__breadcrumb__left">
                                    Toán đại số
                                </Breadcrumb.Item>
                                <Breadcrumb.Item className="tittle__breadcrumb__right">
                                    Hỏi đáp
                                </Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                        <div className="switch-list">
                                
                                <div className="switch-list__tab-left">
                                    <a>Thông tin lớp học</a>
                                </div>
       
                                <div className="switch-list__tab-right">
                                    <a>Hỏi đáp Q & A</a>
                                </div>
                                
                            </div>
      <div className="tabs-question">
      <Tabs defaultActiveKey="1" type="card">
          <TabPane tab="Tất cả câu hỏi" key="1">
          <div className="main__chatbody">
        <ChatList />
        <ChatContent />
      </div>
          </TabPane>

          <TabPane tab="Đã trả lời" key="2">
          <div className="main__chatbody">
        <ChatList />
        <ChatContent />
      </div>
          </TabPane>

          <TabPane tab="Gần đây nhất" key="3">
          <div className="main__chatbody">
        <ChatList />
        <ChatContent />
      </div>
          </TabPane>

          <TabPane tab="Topics" key="4">
          <div className="main__chatbody">
        <ChatList />
        <ChatContent />
      </div>
          </TabPane>
        </Tabs>
        </div>
  </>
    );
  }
}

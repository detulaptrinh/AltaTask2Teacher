import React, { useState, useEffect} from "react";
import "./chatBody.css";
import ChatList from "../../QuestionAndAnswer/chatList/ChatList";
import ChatContent from "../../QuestionAndAnswer/chatContent/ChatContent";
import { Tabs } from 'antd';
import ChatListTopic from "../chatList/ChatListTopic";
import BreadcrumbQA from "../breadcrumbQ&A/breadcrumb"
import SwitchtabQA from "../switchtabsQ&A/switchtab"
import Styles from "./chatBody.module.css"
import { Modal, Form, Button, Input, TimePicker, DatePicker, Upload} from "antd";
import TextArea from "rc-textarea";

import moment from 'moment';


const format = 'HH:mm';

const dateFormatList = 'DD Tháng MM, YYYY';

const { TabPane } = Tabs;

function ChatBody() {

          const [addNewModal, setaddNewModal] = useState(false);

          const showaddNewModal = () => {
            setaddNewModal(true);
          };

          const handleSave = () => {
              setaddNewModal(false);
          };

          const handleCancel = () => {
              setaddNewModal(false);
          };

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
                <button className={Styles.create_topics} onClick={showaddNewModal}>Tạo topic mới</button> }
              
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

      {/* Modal Thêm mới topic*/}
                  <Modal className="modal-groupuser" title="Thiết lập người dùng" visible={addNewModal}>
                    <Form>
                        <div className="form-control">                          
                            <Input placeholder="Chủ để topic"/>
                        </div>

                        <div className="form-control">                         
                            <TextArea rows={7} className="modal-group-textarea" placeholder="Mô tả và câu hỏi cho topic này..." />
                        </div>
                      <div className={Styles.group_topics}>
                        <div className={Styles.time_end}>
                        <label>Thời gian đóng topics</label>
                        <div className={Styles.time_select}>
                        <TimePicker className="time_pick" defaultValue={moment('16:00', format)} format={format} />
                        <DatePicker className="date_pick" defaultValue={moment('20/10/2020', dateFormatList[0])} format={dateFormatList} />
                        </div>
                        </div>

                        <div className={Styles.choose_file}>
                        <label>File đính kèm</label>
                        <div className={Styles.time_select}>
                        <Upload>
                            <Button className="upload_file">Chọn tệp tải lên...</Button>
                        </Upload>
                        </div>
                        </div>
                        </div>

                        <div className="btn-group__modal">
                            <Button className="modal__btn-group__cancel" onClick={handleCancel}>Hủy</Button>
                            <Button className="modal__btn-group__save" onClick={handleSave}>Lưu</Button>
                        </div>
                    </Form>
                </Modal>
      </>
    );
  }

export default ChatBody

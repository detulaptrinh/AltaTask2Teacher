import React, { Component,useState }  from 'react'
import helpTeacherCss from './HelpTeacher.module.css';
import { Row, Col, Form, Radio ,Input, Button, Modal } from 'antd';
import {
    IconMap,
    IconPhone,
    IconMail
  } from "../../assets/svg/icon";

const { TextArea } = Input;

function HelpTeacher(){
    const [isModalInfo, setIsModalInfo] = useState(false);
    const showModalInfo = () => {
        setIsModalInfo(true);
    };
    return (
        <>
            <Row>
                <Col className={helpTeacherCss.Col_boxTeacherHelp}>
                    <div>
                        <p className={helpTeacherCss.HelpTeacher_Text_Thacmac}>Bạn có thắc mắc?</p> 
                        <p className={helpTeacherCss.HelpTeacher_Text_phanhoi}>Chúng tôi sẽ phản hồi bạn trong thời gian sớm nhất có thể.</p> 
                        <div className={helpTeacherCss.HelpTeacher_Radio}>
                            <Radio.Group >
                            <Radio value={1}>Đào tạo</Radio>
                            <Radio value={2}>Học vụ</Radio>
                            <Radio value={3}>Sample</Radio>
                            <Radio value={4}>Sample</Radio>
                            </Radio.Group>
                        </div>
                        <Form.Item>
                            <TextArea rows={2}  placeholder="Chủ đề" className={helpTeacherCss.HelpTeacher_TextArea_inputchude}/>
                        </Form.Item>
                        <Form.Item >
                            {/* <b className={helpTeacherCss.HelpTeacher_b}/> */}
                            <TextArea rows={14}  placeholder="Để lại lời nhắn của bạn tại đây..." className={helpTeacherCss.HelpTeacher_TextArea_inputchude}/>
                        </Form.Item>
                        <Button className={helpTeacherCss.HelpTeacher_button} onClick={showModalInfo} disabled>
                            <p className={helpTeacherCss.HelpTeacher_button_text}>Gửi</p>
                        </Button>
                    </div>
                    <div className={helpTeacherCss.div_boxright}>
                    <Col className={helpTeacherCss.Col_boxRightHelpTeacher}>
                    </Col>    
                    <Col className={helpTeacherCss.Col_boxRightInforHelpTeacher}>                   
                         <p className={helpTeacherCss.HelpTeacher_Text_Thongtin}>Thông tin</p>
                         <div>
                            <img src={IconMap} className={helpTeacherCss.HelpTeacher_iconMap}/>
                            <b className={helpTeacherCss.HelpTeacher_Map_b}/>
                            <Form.Item >
                            <p className={helpTeacherCss.HelpTeacher_text_CN1}>CN1: 86/33 Âu Cơ, Phường 9, Quận Tân Bình</p>
                            </Form.Item>
                            <Form.Item >
                            <p className={helpTeacherCss.HelpTeacher_text_CN2}>CN2: 86/33 Âu Cơ, Phường 9, Quận Tân Bình</p>
                            </Form.Item>
                            <Form.Item >
                            <p className={helpTeacherCss.HelpTeacher_text_CN3}>CN3: 86/33 Âu Cơ, Phường 9, Quận Tân Bình</p>
                            </Form.Item>
                         </div>
                         <div>
                            <img src={IconPhone} className={helpTeacherCss.HelpTeacher_iconPhone}/>
                            <b className={helpTeacherCss.HelpTeacher_Phone_b}/>
                            <Form.Item >
                            <p className={helpTeacherCss.HelpTeacher_text_Phone1}>(028) 2243 6888</p>
                            </Form.Item>
                            <Form.Item >
                            <p className={helpTeacherCss.HelpTeacher_text_Phone2}>(028) 6268 1426</p>
                            </Form.Item>
                         </div>
                         <div>
                            <img src={IconMail} className={helpTeacherCss.HelpTeacher_iconMail}/>
                            <b className={helpTeacherCss.HelpTeacher_Mail_b}/>
                            <Form.Item >
                            <p className={helpTeacherCss.HelpTeacher_text_Mail}>media_infor@alta.com.vn</p>
                            </Form.Item>
                         </div>
                    </Col>
                    </div>
                </Col>                
            </Row>
            {/* Modal gui*/}
            <Modal className={helpTeacherCss.HelpTeacher_modal} title="Đã nhận thông tin" visible={isModalInfo}>
                    <p className={helpTeacherCss.HelpTeacher_modal_content}>Hệ thống đã nhận được thông tin, thắc mắc từ bạn. 
                    Chúng tôi sẽ cố gắng phản hồi bạn trong thời gian sớm nhất.
                     Mong bạn sẽ kiên nhẫn chờ đợi...</p>
                </Modal>
      

        </>
    )
}
export default HelpTeacher;
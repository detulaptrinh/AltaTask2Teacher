import React, { Component,useState }  from 'react'
import joinClassTeacherCss from './JoinClassTeacher.module.css';
import { Col, Form ,Input, Button } from 'antd';
import {
    IconArrow,
    IconMinus,
    IconSend,
    IconInsert,
    IconCamera,
    IconCamera1,
    IconMicro,
    IconMicro1,
    IconMicro2,
    IconMicro3,
    IconLogout,
    IconLogout1,
    IconForm,
    IconZoom,
    IconSlide,
    IconSpeak,
    IconSpeakbar,
    IconSpeakbar1,
    IconCircle,
    Icon3cham
} from "../../assets/svg/icon.js";
import {
    HocVien10,
    HocVien1,
    HocVien11,
    HocVien9,
    HocVien7,
    HocVien5,
    HocVien3,
    HocVien2
} from "../../assets/images/index";

const { TextArea } = Input;
function JoinClassTeacher(){
    return (
        <>
        {/* khung danh sach hoc vien */}
        <div className={joinClassTeacherCss.joinclass_div_col_student}>
            <Col className={joinClassTeacherCss.joinclass_col_student}>
                <Col className={joinClassTeacherCss.joinclass_col_student_danhsach}>
                    <p className={joinClassTeacherCss.joinclass_col_student_text_danhsach}>Danh sách học viên</p>
                    <img src={Icon3cham} className={joinClassTeacherCss.joinclass_col_student_icon3cham}/>
                </Col>
                <img src={HocVien10} className={joinClassTeacherCss.joinclass_col_student_hocvien}/>
                <img src={HocVien1} className={joinClassTeacherCss.joinclass_col_student_hocvien}/>
                <img src={HocVien11} className={joinClassTeacherCss.joinclass_col_student_hocvien}/>
                <img src={HocVien9} className={joinClassTeacherCss.joinclass_col_student_hocvien}/>
                <img src={HocVien7} className={joinClassTeacherCss.joinclass_col_student_hocvien}/>
                <img src={HocVien5} className={joinClassTeacherCss.joinclass_col_student_hocvien}/>
                <img src={HocVien3} className={joinClassTeacherCss.joinclass_col_student_hocvien}/>
                <img src={HocVien2} className={joinClassTeacherCss.joinclass_col_student_hocvien}/>
                <div className={joinClassTeacherCss.joinclass_icon_insert_col_student}>
                    <img src={IconInsert} className={joinClassTeacherCss.joinclass_col_icon_insert}/>
                </div>
            </Col>
        </div>
             {/* hinh anh video mon hoc */}
            <div className={joinClassTeacherCss.img_joinclass_images}>
                {/* khung vien tren hinh anh*/}
                <Col className={joinClassTeacherCss.joinclass_col_top_images}>
                    <img src={IconLogout} className={joinClassTeacherCss.joinclass_images_icon_logout}/>
                    <img src={IconLogout1} className={joinClassTeacherCss.joinclass_images_icon_logout1}/>
                    <img src={IconForm} className={joinClassTeacherCss.joinclass_images_icon_form}/>
                    <img src={IconZoom} className={joinClassTeacherCss.joinclass_images_icon_zoom}/>
                    <Col className={joinClassTeacherCss.joinclass_col_top_images_90}>
                        <p className={joinClassTeacherCss.joinclass_col_top_images_90_text}>90%</p></Col>
                    <p className={joinClassTeacherCss.joinclass_col_top_images_text_slide}>09/45 slides</p> 
                    <img src={IconSlide} className={joinClassTeacherCss.joinclass_images_icon_slide}/> 
                    <img src={IconSpeak} className={joinClassTeacherCss.joinclass_images_icon_speak}/> 
                    <img src={IconSpeakbar} className={joinClassTeacherCss.joinclass_images_icon_speakbar}/>
                    <img src={IconSpeakbar1} className={joinClassTeacherCss.joinclass_images_icon_speakbar1}/> 
                    <img src={IconCircle} className={joinClassTeacherCss.joinclass_images_icon_circle}/>   
                </Col>              
                <div className={joinClassTeacherCss.joinclass_icon_images_share}>
                </div>
                <div className={joinClassTeacherCss.joinclass_icon_images_micro}>
                    <img src={IconCamera} className={joinClassTeacherCss.joinclass_images_icon_camera}/>
                    <img src={IconCamera1} className={joinClassTeacherCss.joinclass_images_icon_camera1}/>
                </div>
                <div className={joinClassTeacherCss.joinclass_icon_images_camera}>
                    <img src={IconMicro} className={joinClassTeacherCss.joinclass_images_icon_micro}/>
                    <img src={IconMicro1} className={joinClassTeacherCss.joinclass_images_icon_micro1}/>
                    <img src={IconMicro2} className={joinClassTeacherCss.joinclass_images_icon_micro2}/>
                    <img src={IconMicro3} className={joinClassTeacherCss.joinclass_images_icon_micro3}/>
                </div>
                {/* khung vien duoi hinh anh */}
                <Col className={joinClassTeacherCss.joinclass_col_bottom_images}>
                    <p className={joinClassTeacherCss.joinclass_col_bottom_text}>Lịch Sử Tiết 5: Tìm hiểu văn hóa Hy Lạp - GV: Trần Thanh Tâm </p>
                </Col>
                {/*khung chat voi lop */}
                <Col className={joinClassTeacherCss.joinclass_col_chat}>
                    <Col className={joinClassTeacherCss.joinclass_col_chatvoilop}>
                      <img src={IconArrow} className={joinClassTeacherCss.joinclass_col_iconarrow}/>
                      <p className={joinClassTeacherCss.joinclass_col_text_chatvoilop}>Chat với lớp</p>
                      <img src={IconMinus} className={joinClassTeacherCss.joinclass_col_iconminus}/>
                    </Col>
                    <Form.Item>
                            <TextArea rows={5} placeholder="Nhập tin nhắn..." className={joinClassTeacherCss.joinclass_textinput_col_chat}>
                                
                            </TextArea>
                            <img src={IconSend} className={joinClassTeacherCss.joinclass_col_icon_send}/>
                    </Form.Item>
                </Col>
                {/* chia se tiet hoc cuoi box */}
                <div>
                    <p className={joinClassTeacherCss.joinclass_text_share_class}>Chia sẻ tiết học:</p>
                    <Form.Item>
                            <TextArea rows={2}  placeholder="https://school.edu.vn/baigiang/???????" className={joinClassTeacherCss.joinclass_textinput_share_class}/>
                    </Form.Item>
                    <Button className={joinClassTeacherCss.joinclass_button_share_class}>
                        <p className={joinClassTeacherCss.joinclass_button_text_share_class}>Copy link</p>
                    </Button>
                </div>
            </div>
            
        </>
    )
}
export default JoinClassTeacher;    
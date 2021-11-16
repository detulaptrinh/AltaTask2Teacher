import React, { Component,useState }  from 'react'
import joinClassTeacherCss from './JoinClassTeacher.module.css';
import "./modaljoinClass.css";
import { Col, Form ,Modal, Button,Input } from 'antd';
import { SearchOutlined,CloseOutlined} from '@ant-design/icons';
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
    Icon3cham,
    MessageTeacher, 
    PaperclipTeacher,
    IconAdd
} from "../../assets/svg/icon.js";
import {
    HocVien10,
    HocVien1,
    HocVien11,
    HocVien9,
    HocVien7,
    HocVien5,
    HocVien3,
    HocVien2,
    ThanhtamGv,
    HienMai,
    TranThiM,
    PhamVanC,
    ThanhAn,
    TrinhTrinh,
    BaoLoc,
    BaoLam
} from "../../assets/images/index";
import TextArea from "rc-textarea";

const JoinClassTeacher = (): JSX.Element => {
    const [islogoutModal, setlogoutModal] = useState<boolean>(false);
    const [isAddModal, setAddModal] = useState<boolean>(false);
    const [isSettingModal, setSettingModal] = useState<boolean>(false);

    // modal logout
    const showlogoutModal = (): void => {
        setlogoutModal(true);
      };
    
      const handleOklogout = (): void => {
        setlogoutModal(true);
      };
    
      const handleCancellogout = (): void => {
        setlogoutModal(false);
      };

      //modal add
      const showModalAdd = (): void => {
        setAddModal(true);
      };
      const handleAddCourse = (values: any): void => {
        console.log(values);
      };

      //modal setting
      const showsettingModal = (): void => {
        setSettingModal(true);
      };
     
    return (
        <>
        {/* khung danh sach hoc vien */}
        <div>
            <Col className={joinClassTeacherCss.joinclass_col_student}>
                <Col className={joinClassTeacherCss.joinclass_col_student_danhsach}>
                    <p className={joinClassTeacherCss.joinclass_col_student_text_danhsach}>Danh sách học viên</p>
                    <img src={Icon3cham} className={joinClassTeacherCss.joinclass_col_student_icon3cham} onClick={showsettingModal}/>
                </Col>
                <img src={HocVien10} className={joinClassTeacherCss.joinclass_col_student_hocvien}/>
                <img src={HocVien1} className={joinClassTeacherCss.joinclass_col_student_hocvien}/>
                <img src={HocVien11} className={joinClassTeacherCss.joinclass_col_student_hocvien}/>
                <img src={HocVien9} className={joinClassTeacherCss.joinclass_col_student_hocvien}/>
                <img src={HocVien7} className={joinClassTeacherCss.joinclass_col_student_hocvien}/>
                <img src={HocVien5} className={joinClassTeacherCss.joinclass_col_student_hocvien}/>
                <img src={HocVien3} className={joinClassTeacherCss.joinclass_col_student_hocvien}/>
                <img src={HocVien2} className={joinClassTeacherCss.joinclass_col_student_hocvien}/>
                <div className={joinClassTeacherCss.joinclass_icon_insert_col_student}  onClick={showModalAdd}>
                    <img src={IconInsert} className={joinClassTeacherCss.joinclass_col_icon_insert}/>
                </div>
            </Col>
        </div>
             {/* hinh anh video mon hoc */}
            <div className={joinClassTeacherCss.img_joinclass_images}>
                {/* khung vien tren hinh anh*/}
                <Col className={joinClassTeacherCss.joinclass_col_top_images}>
                    <img src={IconLogout} className={joinClassTeacherCss.joinclass_images_icon_logout} onClick={showlogoutModal}/>
                    <img src={IconLogout1} className={joinClassTeacherCss.joinclass_images_icon_logout1} onClick={showlogoutModal}/>
                    <img src={IconForm} className={joinClassTeacherCss.joinclass_images_icon_form}/>
                    <img src={IconZoom} className={joinClassTeacherCss.joinclass_images_icon_zoom}/>
                    <Col className={joinClassTeacherCss.joinclass_col_top_images_90}>
                        <p className={joinClassTeacherCss.joinclass_col_top_images_90_text}>90%</p>
                    </Col>
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
                <div className={joinClassTeacherCss.joinclass_col_bottom_images}>
                    <p className={joinClassTeacherCss.joinclass_col_bottom_text}>Lịch Sử Tiết 5: Tìm hiểu văn hóa Hy Lạp - GV: Trần Thanh Tâm </p>
                </div>
                {/*khung chat voi lop */}
                <Col className={joinClassTeacherCss.joinclass_col_chat}>
                    <Col className={joinClassTeacherCss.joinclass_col_chatvoilop}>
                      <img src={IconArrow} className={joinClassTeacherCss.joinclass_col_iconarrow}/>
                      <p className={joinClassTeacherCss.joinclass_col_text_chatvoilop}>Chat với lớp</p>
                      <img src={IconMinus} className={joinClassTeacherCss.joinclass_col_iconminus}/>
                    </Col>
                    {/* thanh tam gv */}
                    <Form.Item >
                            <img src={ThanhtamGv} className={joinClassTeacherCss.joinclass_col_chat_image_thanhtamgv}/>
                            <p className={joinClassTeacherCss.joinclass_col_chat_label_text_GV}>Thanh Tâm (GV):</p>
                            <p className={joinClassTeacherCss.joinclass_col_chat_label_text_GV1}>Các bạn có nghe rõ cô nói hong?</p>
                    </Form.Item>
                    {/* hien mai*/}
                    <Form.Item >
                            <img src={HienMai} className={joinClassTeacherCss.joinclass_col_chat_image_hienmai}/>
                            <p className={joinClassTeacherCss.joinclass_col_chat_label_text_hienmai}>Hiền Mai:</p>
                            <p className={joinClassTeacherCss.joinclass_col_chat_label_text_hienmai1}>Có nè cô :)</p>
                    </Form.Item>
                    {/* tran thi m*/}
                    <Form.Item >
                            <img src={TranThiM} className={joinClassTeacherCss.joinclass_col_chat_image_tranthim}/>
                            <p className={joinClassTeacherCss.joinclass_col_chat_label_text_tranthim}>Trần Thị M:</p>
                            <p className={joinClassTeacherCss.joinclass_col_chat_label_text_tranthim1}>Kiểm tra miệng hong cô êi =))</p>
                    </Form.Item>
                    {/* thanh tam gv */}
                    <Form.Item >
                            <img src={ThanhtamGv} className={joinClassTeacherCss.joinclass_col_chat_image_thanhtamgv2}/>
                            <p className={joinClassTeacherCss.joinclass_col_chat_label_text_GV2}>Thanh Tâm (GV):</p>
                            <p className={joinClassTeacherCss.joinclass_col_chat_label_text_GV22}>Địa điểm xuất phát phát triển của nền văn minh Hy Lạp là đồng bằng Thessalia màu mỡ, rộng lớn ở vùng bắc Hy Lạp cùng với các đồng bằng Attike, Beotia ở trung Hy Lạp và bán đảo Peloponnese ở phía nam Hy Lạp.</p>
                    </Form.Item>
                     {/* thanh tam gv */}
                     <Form.Item >
                            <img src={ThanhtamGv} className={joinClassTeacherCss.joinclass_col_chat_image_thanhtamgv3}/>
                            <p className={joinClassTeacherCss.joinclass_col_chat_label_text_GV3}>Thanh Tâm (GV):</p>
                            <p className={joinClassTeacherCss.joinclass_col_chat_label_text_GV33}>Có ai ý kiến gì không?</p>
                    </Form.Item>
                    {/* tran thi m*/}
                    <Form.Item >
                            <img src={TranThiM} className={joinClassTeacherCss.joinclass_col_chat_image_tranthim2}/>
                            <p className={joinClassTeacherCss.joinclass_col_chat_label_text_tranthim2}>Trần Thị M:</p>
                            <p className={joinClassTeacherCss.joinclass_col_chat_label_text_tranthim22}>Có nè cô :)</p>
                    </Form.Item>
                    {/*pham van c*/}
                    <Form.Item >
                            <img src={PhamVanC} className={joinClassTeacherCss.joinclass_col_chat_image_phamvanc}/>
                            <p className={joinClassTeacherCss.joinclass_col_chat_label_text_phamvanc}>Phạm Văn C:</p>
                            <p className={joinClassTeacherCss.joinclass_col_chat_label_text_phamvanc1}>Hôm nào kiểm tra ạ?</p>
                    </Form.Item>
                     {/* thanh tam gv */}
                     <Form.Item >
                            <img src={ThanhtamGv} className={joinClassTeacherCss.joinclass_col_chat_image_thanhtamgv4}/>
                            <p className={joinClassTeacherCss.joinclass_col_chat_label_text_GV4}>Thanh Tâm (GV):</p>
                            <p className={joinClassTeacherCss.joinclass_col_chat_label_text_GV44}>https://nordiccoder.com/blog</p>
                    </Form.Item>
                    <div className={joinClassTeacherCss.joinclass_col_chat_content__footer}>
                        <div className={joinClassTeacherCss.joinclass_col_chat_sendNewMessage}>
                            <button className={joinClassTeacherCss.joinclass_col_chat_paperclip}>
                                <img src={PaperclipTeacher}/>
                            </button>
                            <TextArea rows={5}  className={joinClassTeacherCss.joinclass_col_chat_textinput}     
                            placeholder="Nhập tin nhắn..."
                            />
                            <button>
                            <img src={MessageTeacher}/>
                            </button>
                        </div>
                    </div>
                </Col>
                {/* chia se tiet hoc cuoi box */}
                <div>
                    <p className={joinClassTeacherCss.joinclass_text_share_class}>Chia sẻ tiết học:</p>
                    <Form.Item>
                            <TextArea placeholder="https://school.edu.vn/baigiang/???????" className={joinClassTeacherCss.joinclass_textinput_share_class}/>
                    </Form.Item>
                    <a className={joinClassTeacherCss.joinclass_button_share_class}>
                        <p className={joinClassTeacherCss.joinclass_button_text_share_class}>Copy link</p>
                    </a>
                </div>
            </div>
            {/* Modal logout*/}
                <Modal
                    className="joinclass_modal joinclass_modal-logout"
                    title="Kết thúc lớp học"
                    visible={islogoutModal}
                    onOk={handleOklogout}
                    onCancel={handleCancellogout}
                    okText="Xác nhận"
                    cancelText="Huỷ"
                    centered
                >
                    <p className="joinclass_modal-logout-desc">
                    Mọi người không còn quyền tham gia vào lớp học này nếu giáo viên kết thúc lớp học. Xác nhận kết thúc?
                    </p>
                </Modal>
            {/* MODAL add  */}
                <Modal
                    className="joinclass_modal joinclass_modal-add-edit"
                    title="Thêm học viên"
                    visible={isAddModal}
                    onCancel={handleAddCourse}
                    centered>
                    <Form
                    className="joinclass_form"
                    name="validate_other"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 8 }}
                    onFinish={handleAddCourse}>
                        <CloseOutlined className="joinclass_icon-close" onClick={() => setAddModal(false)} style={{  color: '#C83901' }}/>
                        <div className="joinclass_col-search">
                            <input className="joinclass_table-headers-search"  placeholder="Tìm kết quả theo ID, tên,..."  />
                            {/* <SearchOutlined className="joinclass_icon-search"/> */}
                        </div>
                        <div className="joinclass_col-modal-student">
                            <img src={ThanhAn} className="joinclass_image-modal-add"/>
                            <p className="joinclass_text-modal-add">Trần Ngọc Thanh An</p>
                            <img src={IconAdd}  className="joinclass_icon-modal-add"/>
                        </div>
                        <div className="joinclass_col-modal-student-trinhtrinh">
                            <img src={TrinhTrinh} className="joinclass_image-modal-add"/>
                            <p className="joinclass_text-modal-add">Nguyễn Thái Trình Trình</p>
                            <img src={IconAdd}  className="joinclass_icon-modal-add"/>
                        </div>
                        <div className="joinclass_col-modal-student-baoloc">
                            <img src={BaoLoc} className="joinclass_image-modal-add"/>
                            <p className="joinclass_text-modal-add">Lê Dương Bảo Lộc</p>
                            <img src={IconAdd}  className="joinclass_icon-modal-add"/>
                        </div>
                        <div className="joinclass_col-modal-student-baolam">
                            <img src={BaoLam} className="joinclass_image-modal-add"/>
                            <p className="joinclass_text-modal-add">Lê Dương Bảo Lâm</p>
                            <img src={IconAdd}  className="joinclass_icon-modal-add"/>
                        </div>

                    <Form.Item wrapperCol={{ span: 24 }}>
                        <div className="joinclass_form-btns">
                    
                        <Button
                            className="joinclass_form-submit"
                            type="primary"
                            htmlType="submit"
                        >
                            Thêm
                        </Button>
                        </div>
                    </Form.Item>
                    </Form>
                </Modal> 
                 {/* MODAL setting  */}
                 <Modal
                    className="joinclass_modal_setting joinclass_modal-setting-edit"
                    visible={isSettingModal}
                    centered>
                    <Form
                    className="joinclass_form"
                    name="validate_other"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 8 }}
                    >
                       <p className="joinclass_modal_setting_text_voice">Tắt tiếng tất cả học viên</p>
                       <b className="joinclass_modal_setting_b"/>
                       <p className="joinclass_modal_setting_text_camera">Tắt camera tất cả học viên</p>
                    </Form>
                </Modal>       
        </>
    )
}
export default JoinClassTeacher;    
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
                    <p className={joinClassTeacherCss.joinclass_col_student_text_danhsach}>Danh s??ch h???c vi??n</p>
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
                    <p className={joinClassTeacherCss.joinclass_col_bottom_text}>L???ch S??? Ti???t 5: T??m hi???u v??n h??a Hy L???p - GV: Tr???n Thanh T??m </p>
                </div>
                {/*khung chat voi lop */}
                <Col className={joinClassTeacherCss.joinclass_col_chat}>
                    <Col className={joinClassTeacherCss.joinclass_col_chatvoilop}>
                      <img src={IconArrow} className={joinClassTeacherCss.joinclass_col_iconarrow}/>
                      <p className={joinClassTeacherCss.joinclass_col_text_chatvoilop}>Chat v???i l???p</p>
                      <img src={IconMinus} className={joinClassTeacherCss.joinclass_col_iconminus}/>
                    </Col>
                    {/* thanh tam gv */}
                    <Form.Item >
                            <img src={ThanhtamGv} className={joinClassTeacherCss.joinclass_col_chat_image_thanhtamgv}/>
                            <p className={joinClassTeacherCss.joinclass_col_chat_label_text_GV}>Thanh T??m (GV):</p>
                            <p className={joinClassTeacherCss.joinclass_col_chat_label_text_GV1}>C??c b???n c?? nghe r?? c?? n??i hong?</p>
                    </Form.Item>
                    {/* hien mai*/}
                    <Form.Item >
                            <img src={HienMai} className={joinClassTeacherCss.joinclass_col_chat_image_hienmai}/>
                            <p className={joinClassTeacherCss.joinclass_col_chat_label_text_hienmai}>Hi???n Mai:</p>
                            <p className={joinClassTeacherCss.joinclass_col_chat_label_text_hienmai1}>C?? n?? c?? :)</p>
                    </Form.Item>
                    {/* tran thi m*/}
                    <Form.Item >
                            <img src={TranThiM} className={joinClassTeacherCss.joinclass_col_chat_image_tranthim}/>
                            <p className={joinClassTeacherCss.joinclass_col_chat_label_text_tranthim}>Tr???n Th??? M:</p>
                            <p className={joinClassTeacherCss.joinclass_col_chat_label_text_tranthim1}>Ki???m tra mi???ng hong c?? ??i =))</p>
                    </Form.Item>
                    {/* thanh tam gv */}
                    <Form.Item >
                            <img src={ThanhtamGv} className={joinClassTeacherCss.joinclass_col_chat_image_thanhtamgv2}/>
                            <p className={joinClassTeacherCss.joinclass_col_chat_label_text_GV2}>Thanh T??m (GV):</p>
                            <p className={joinClassTeacherCss.joinclass_col_chat_label_text_GV22}>?????a ??i???m xu???t ph??t ph??t tri???n c???a n???n v??n minh Hy L???p l?? ?????ng b???ng Thessalia m??u m???, r???ng l???n ??? v??ng b???c Hy L???p c??ng v???i c??c ?????ng b???ng Attike, Beotia ??? trung Hy L???p v?? b??n ?????o Peloponnese ??? ph??a nam Hy L???p.</p>
                    </Form.Item>
                     {/* thanh tam gv */}
                     <Form.Item >
                            <img src={ThanhtamGv} className={joinClassTeacherCss.joinclass_col_chat_image_thanhtamgv3}/>
                            <p className={joinClassTeacherCss.joinclass_col_chat_label_text_GV3}>Thanh T??m (GV):</p>
                            <p className={joinClassTeacherCss.joinclass_col_chat_label_text_GV33}>C?? ai ?? ki???n g?? kh??ng?</p>
                    </Form.Item>
                    {/* tran thi m*/}
                    <Form.Item >
                            <img src={TranThiM} className={joinClassTeacherCss.joinclass_col_chat_image_tranthim2}/>
                            <p className={joinClassTeacherCss.joinclass_col_chat_label_text_tranthim2}>Tr???n Th??? M:</p>
                            <p className={joinClassTeacherCss.joinclass_col_chat_label_text_tranthim22}>C?? n?? c?? :)</p>
                    </Form.Item>
                    {/*pham van c*/}
                    <Form.Item >
                            <img src={PhamVanC} className={joinClassTeacherCss.joinclass_col_chat_image_phamvanc}/>
                            <p className={joinClassTeacherCss.joinclass_col_chat_label_text_phamvanc}>Ph???m V??n C:</p>
                            <p className={joinClassTeacherCss.joinclass_col_chat_label_text_phamvanc1}>H??m n??o ki???m tra ????</p>
                    </Form.Item>
                     {/* thanh tam gv */}
                     <Form.Item >
                            <img src={ThanhtamGv} className={joinClassTeacherCss.joinclass_col_chat_image_thanhtamgv4}/>
                            <p className={joinClassTeacherCss.joinclass_col_chat_label_text_GV4}>Thanh T??m (GV):</p>
                            <p className={joinClassTeacherCss.joinclass_col_chat_label_text_GV44}>https://nordiccoder.com/blog</p>
                    </Form.Item>
                    <div className={joinClassTeacherCss.joinclass_col_chat_content__footer}>
                        <div className={joinClassTeacherCss.joinclass_col_chat_sendNewMessage}>
                            <button className={joinClassTeacherCss.joinclass_col_chat_paperclip}>
                                <img src={PaperclipTeacher}/>
                            </button>
                            <TextArea rows={5}  className={joinClassTeacherCss.joinclass_col_chat_textinput}     
                            placeholder="Nh???p tin nh???n..."
                            />
                            <button>
                            <img src={MessageTeacher}/>
                            </button>
                        </div>
                    </div>
                </Col>
                {/* chia se tiet hoc cuoi box */}
                <div>
                    <p className={joinClassTeacherCss.joinclass_text_share_class}>Chia s??? ti???t h???c:</p>
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
                    title="K???t th??c l???p h???c"
                    visible={islogoutModal}
                    onOk={handleOklogout}
                    onCancel={handleCancellogout}
                    okText="X??c nh???n"
                    cancelText="Hu???"
                    centered
                >
                    <p className="joinclass_modal-logout-desc">
                    M???i ng?????i kh??ng c??n quy???n tham gia v??o l???p h???c n??y n???u gi??o vi??n k???t th??c l???p h???c. X??c nh???n k???t th??c?
                    </p>
                </Modal>
            {/* MODAL add  */}
                <Modal
                    className="joinclass_modal joinclass_modal-add-edit"
                    title="Th??m h???c vi??n"
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
                            <input className="joinclass_table-headers-search"  placeholder="T??m k???t qu??? theo ID, t??n,..."  />
                            {/* <SearchOutlined className="joinclass_icon-search"/> */}
                        </div>
                        <div className="joinclass_col-modal-student">
                            <img src={ThanhAn} className="joinclass_image-modal-add"/>
                            <p className="joinclass_text-modal-add">Tr???n Ng???c Thanh An</p>
                            <img src={IconAdd}  className="joinclass_icon-modal-add"/>
                        </div>
                        <div className="joinclass_col-modal-student-trinhtrinh">
                            <img src={TrinhTrinh} className="joinclass_image-modal-add"/>
                            <p className="joinclass_text-modal-add">Nguy???n Th??i Tr??nh Tr??nh</p>
                            <img src={IconAdd}  className="joinclass_icon-modal-add"/>
                        </div>
                        <div className="joinclass_col-modal-student-baoloc">
                            <img src={BaoLoc} className="joinclass_image-modal-add"/>
                            <p className="joinclass_text-modal-add">L?? D????ng B???o L???c</p>
                            <img src={IconAdd}  className="joinclass_icon-modal-add"/>
                        </div>
                        <div className="joinclass_col-modal-student-baolam">
                            <img src={BaoLam} className="joinclass_image-modal-add"/>
                            <p className="joinclass_text-modal-add">L?? D????ng B???o L??m</p>
                            <img src={IconAdd}  className="joinclass_icon-modal-add"/>
                        </div>

                    <Form.Item wrapperCol={{ span: 24 }}>
                        <div className="joinclass_form-btns">
                    
                        <Button
                            className="joinclass_form-submit"
                            type="primary"
                            htmlType="submit"
                        >
                            Th??m
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
                       <p className="joinclass_modal_setting_text_voice">T???t ti???ng t???t c??? h???c vi??n</p>
                       <b className="joinclass_modal_setting_b"/>
                       <p className="joinclass_modal_setting_text_camera">T???t camera t???t c??? h???c vi??n</p>
                    </Form>
                </Modal>       
        </>
    )
}
export default JoinClassTeacher;    
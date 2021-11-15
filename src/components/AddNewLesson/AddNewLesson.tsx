import React, { Component } from 'react';
import AddNewLessonCss from './AddNewLessonCss.module.css';
import './AddNewLesson.css';
import { Row, Col, Input, Radio, Select, Checkbox, DatePicker, Space } from 'antd';
import { IconVisibility } from "../../assets/svg/icon";

const { Option } = Select;

const AddNewLesson = (): JSX.Element => {
    return (
        <div className="addnewlesson">
            <Row>
                <Col span={24}>
                    <div className={AddNewLessonCss.title}>
                        <div><span>Quản lý lớp học</span></div>
                        <i className='bx bx-chevron-right'></i>
                        <div className={AddNewLessonCss.title_new_test}>Thêm buổi học mới</div>
                    </div>
                </Col>
            </Row>
            <div className={AddNewLessonCss.body_new_test}>
                <Row className={AddNewLessonCss.new_test_row}>
                    <Col span={24}>
                        <Row className={AddNewLessonCss.ant_row_text}>
                            <Col className={AddNewLessonCss.text_left} span={8}>Chủ đề</Col>
                            <Col className={AddNewLessonCss.text_right} span={16}>
                                <Input className={AddNewLessonCss.text_right_input} />
                            </Col>
                        </Row>
                        <Row className={AddNewLessonCss.ant_row_text}>
                            <Col className={AddNewLessonCss.text_left} span={8}>Mô tả</Col>
                            <Col className={AddNewLessonCss.text_right} span={16}>
                                <div className={AddNewLessonCss.text_right_textarea_box}>
                                    <textarea className={AddNewLessonCss.text_right_textarea} name="" id="" ></textarea>
                                </div>
                            </Col>
                        </Row>
                        <Row className={AddNewLessonCss.ant_row_text} style={{ marginTop: 60 }}>
                            <Col className={AddNewLessonCss.text_left} span={8}>Trợ giảng</Col>
                            <Col className={AddNewLessonCss.text_right} span={16}>
                                <Input className={AddNewLessonCss.text_right_input} />
                            </Col>
                        </Row>
                        <Row className={AddNewLessonCss.ant_row_text}>
                            <Col className={AddNewLessonCss.text_left} span={8}>Thời lượng</Col>
                            <Col className={AddNewLessonCss.text_right} span={16}>
                                <div className={AddNewLessonCss.text_right_select_time_box1}>
                                    <Select className={AddNewLessonCss.text_right_select_time} defaultValue="1" onChange={handleChange}>
                                        <Option value="1">0</Option>
                                        <Option value="2">1</Option>
                                    </Select>
                                    <p>Giờ</p>
                                </div>
                                <div className={AddNewLessonCss.text_right_select_time_box2}>
                                    <Select className={AddNewLessonCss.text_right_select_time} defaultValue="1" onChange={handleChange}>
                                        <Option value="1">00</Option>
                                        <Option value="2">01</Option>
                                    </Select>
                                    <p>Phút</p>
                                </div>
                            </Col>
                        </Row>
                        <Row className={AddNewLessonCss.ant_row_text}>
                            <Col className={AddNewLessonCss.text_left} span={8}>Ngày bắt đầu</Col>
                            <Col className={AddNewLessonCss.text_right} span={16}>
                                <DatePicker className={AddNewLessonCss.text_right_datepicker} placeholder="dd/mm/yy" />
                                <Select className={AddNewLessonCss.text_right_select_date} defaultValue="1" onChange={handleChange}>
                                    <Option value="1">00</Option>
                                    <Option value="2">01</Option>
                                </Select>
                            </Col>
                        </Row>
                        <Row className={AddNewLessonCss.ant_row_text}>
                            <Col className={AddNewLessonCss.text_left} span={8}>Ngày kết thúc</Col>
                            <Col className={AddNewLessonCss.text_right} span={16}>
                                <DatePicker className={AddNewLessonCss.text_right_datepicker} placeholder="dd/mm/yy" />
                                <Input className={AddNewLessonCss.text_right_input_time} placeholder="14:45" />
                            </Col>
                        </Row>
                        <Row className={AddNewLessonCss.ant_row_text}>
                            <Col className={AddNewLessonCss.text_left} span={8}>Bảo mật</Col>
                            <Col className={AddNewLessonCss.text_right} span={16}>
                                <div>
                                    <Input className={AddNewLessonCss.text_right_security_input} />
                                    <img className={AddNewLessonCss.text_right_security_icon} src={IconVisibility} alt="" />
                                </div>
                            </Col>
                        </Row>
                        <Row className={AddNewLessonCss.ant_row_text}>
                            <Col className={AddNewLessonCss.text_left} span={8}>Cài đặt khác</Col>
                            <Col className={AddNewLessonCss.text_right} span={16}>
                                <Checkbox.Group>
                                    <Row className={AddNewLessonCss.text_right_checkbox}>
                                        <Col span={24}>
                                            <Checkbox value="1">Tự động kích hoạt buổi học khi đến thời gian bắt đầu</Checkbox>
                                        </Col>
                                        <Col span={24}>
                                            <Checkbox value="2">Bật tính năng lưu lại buổi học</Checkbox>
                                        </Col>
                                        <Col span={24}>
                                            <Checkbox value="3">Cho phép học viên/cá nhân tham gia chia sẻ buổi học</Checkbox>
                                        </Col>
                                    </Row>
                                </Checkbox.Group>
                            </Col>
                        </Row>
                        <Row className={AddNewLessonCss.ant_row_text} style={{ marginTop: 70 }}>
                            <Col className={AddNewLessonCss.text_left} span={8}>Link chia sẻ</Col>
                            <Col className={AddNewLessonCss.text_right} span={16}>
                                <Row>
                                    <Col span={17}>
                                        <Input className={AddNewLessonCss.text_right_link_input} />
                                    </Col>
                                    <Col span={7}>
                                        <button className={AddNewLessonCss.text_right_link_button}>
                                            Copy Link
                                        </button>
                                    </Col>
                                </Row>

                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div >

            <div className={AddNewLessonCss.button_new_test}>
                <button className={AddNewLessonCss.button_new_test_cancel}>
                    Hủy
                </button>
                <button className={AddNewLessonCss.button_new_test_save}>
                    Lưu
                </button>
            </div>

        </div >
    );
}
export default AddNewLesson

// checkbox
function onChange(e: any) {
    console.log(`checked = ${e.target.checked}`);
}

// select
function handleChange(value: any) {
    console.log(`selected ${value}`);
}
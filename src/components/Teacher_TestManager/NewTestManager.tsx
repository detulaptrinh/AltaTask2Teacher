import React, { Component } from 'react';
import NewTestManagerCss from './NewTestManager.module.css';
import { Row, Col, Input, Radio, Select, Checkbox, DatePicker, Space } from 'antd';
import { IconUpload } from "../../assets/svg/icon";

const { Option } = Select;

const NewTestManager = (): JSX.Element => {
    return (
        <div className="newtestmanager">
            <Row>
                <Col span={24}>
                    <div className={NewTestManagerCss.title}>
                        <div><span>Hồ sơ học viên</span></div>
                        <i className='bx bx-chevron-right'></i>
                        <div className={NewTestManagerCss.title_new_test}>Thêm học viên</div>
                    </div>
                </Col>
            </Row>
            <div className={NewTestManagerCss.body_new_test}>
                <Row className={NewTestManagerCss.new_test_row}>
                    <Col span={24}>
                        <Row className={NewTestManagerCss.ant_row_text}>
                            <Col className={NewTestManagerCss.text_left} span={8}>Chủ đề</Col>
                            <Col className={NewTestManagerCss.text_right} span={16}>
                                <Input className={NewTestManagerCss.text_right_input} placeholder="Lorem ipsum dolor sit amet" />
                            </Col>
                        </Row>
                        <Row className={NewTestManagerCss.ant_row_text}>
                            <Col className={NewTestManagerCss.text_left} span={8}>Hình thức</Col>
                            <Col className={NewTestManagerCss.text_right} span={16}>
                                <Radio.Group defaultValue={1}>
                                    <Radio className={NewTestManagerCss.text_right_radio} value={1}>Trắc nghiệm</Radio>
                                    <Radio className={NewTestManagerCss.text_right_radio} value={2}>Tự luận</Radio>
                                </Radio.Group>
                            </Col>
                        </Row>
                        <Row className={NewTestManagerCss.ant_row_text}>
                            <Col className={NewTestManagerCss.text_left} span={8}>Khối</Col>
                            <Col className={NewTestManagerCss.text_right} span={16}>
                                <Row>
                                    <Col span={24}>
                                        <Select className={NewTestManagerCss.text_right_select} defaultValue="1" onChange={handleChange}>
                                            <Option value="1">10</Option>
                                            <Option value="2">9</Option>
                                        </Select>
                                        <Checkbox className={NewTestManagerCss.text_right_checkbox} onChange={onChange}>Chọn tất cả các lớp</Checkbox>
                                    </Col>
                                    <Col span={24}>
                                        <button className={NewTestManagerCss.text_right_btn}>10A1</button>
                                        <button className={NewTestManagerCss.text_right_btn}>10A2</button>
                                        <button className={NewTestManagerCss.text_right_btn}>10A3</button>
                                        <button className={NewTestManagerCss.text_right_btn}>10A4</button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row className={NewTestManagerCss.ant_row_text} style={{ marginTop: 70 }}>
                            <Col className={NewTestManagerCss.text_left} span={8}>Thời lượng</Col>
                            <Col className={NewTestManagerCss.text_right} span={16}>
                                <div className={NewTestManagerCss.text_right_select_time_box1}>
                                    <Select className={NewTestManagerCss.text_right_select_time} defaultValue="1" onChange={handleChange}>
                                        <Option value="1">0</Option>
                                        <Option value="2">1</Option>
                                    </Select>
                                    <p>Giờ</p>
                                </div>
                                <div className={NewTestManagerCss.text_right_select_time_box2}>
                                    <Select className={NewTestManagerCss.text_right_select_time} defaultValue="1" onChange={handleChange}>
                                        <Option value="1">00</Option>
                                        <Option value="2">01</Option>
                                    </Select>
                                    <p>Phút</p>
                                </div>
                            </Col>
                        </Row>
                        <Row className={NewTestManagerCss.ant_row_text}>
                            <Col className={NewTestManagerCss.text_left} span={8}>Phân loại</Col>
                            <Col className={NewTestManagerCss.text_right} span={16}>
                                <Select className={NewTestManagerCss.text_right_classify} defaultValue="1" onChange={handleChange}>
                                    <Option value="1">Giữa kì I</Option>
                                    <Option value="2">Giữa kì II</Option>
                                </Select>
                            </Col>
                        </Row>
                        <Row className={NewTestManagerCss.ant_row_text}>
                            <Col className={NewTestManagerCss.text_left} span={8}>Ngày bắt đầu</Col>
                            <Col className={NewTestManagerCss.text_right} span={16}>
                                <DatePicker className={NewTestManagerCss.text_right_datepicker} placeholder="dd/mm/yy" />
                                <Select className={NewTestManagerCss.text_right_select_date} defaultValue="1" onChange={handleChange}>
                                    <Option value="1">00</Option>
                                    <Option value="2">01</Option>
                                </Select>
                            </Col>
                        </Row>
                        <Row className={NewTestManagerCss.ant_row_text}>
                            <Col className={NewTestManagerCss.text_left} span={8}>Ngày kết thúc</Col>
                            <Col className={NewTestManagerCss.text_right} span={16}>
                                <DatePicker className={NewTestManagerCss.text_right_datepicker} placeholder="dd/mm/yy" />
                                <Input className={NewTestManagerCss.text_right_input_time} placeholder="14:45" />
                            </Col>
                        </Row>
                        <Row className={NewTestManagerCss.ant_row_text}>
                            <Col className={NewTestManagerCss.text_left} span={8}>Mô tả</Col>
                            <Col className={NewTestManagerCss.text_right} span={16}>
                                <div className={NewTestManagerCss.text_right_textarea_box1}>
                                    <textarea className={NewTestManagerCss.text_right_textarea} name="" id="" ></textarea>
                                </div>
                                <div className={NewTestManagerCss.text_right_textarea_box2}>
                                    <p>Tệp đính kèm</p>
                                    <button className={NewTestManagerCss.text_right_icon_upload}>
                                        <img src={IconUpload} alt="" />
                                    </button>
                                </div>
                            </Col>
                        </Row>
                        <Row className={NewTestManagerCss.ant_row_text} style={{ marginTop: 100 }}>
                            <Col className={NewTestManagerCss.text_left} span={8}>Cài đặt khác</Col>
                            <Col className={NewTestManagerCss.text_right} span={16}>
                                <Checkbox className={NewTestManagerCss.text_right_checkbox_seting} onChange={onChange}>Yêu cầu học viên đính kèm tệp</Checkbox>
                            </Col>
                        </Row>
                        <Row className={NewTestManagerCss.ant_row_text}>
                            <Col className={NewTestManagerCss.text_left} span={8}>Quy định nộp bài</Col>
                            <Col className={NewTestManagerCss.text_right} span={16}>
                                <Row className={NewTestManagerCss.text_right_rules}>
                                    <Col span={12}>
                                        <p>Định dạng</p>
                                        <Checkbox.Group>
                                            <Row className={NewTestManagerCss.text_right_checkbox_rules}>
                                                <Col span={24}>
                                                    <Checkbox value="1">Doc, Docx</Checkbox>
                                                </Col>
                                                <Col span={24}>
                                                    <Checkbox value="2">Power Point</Checkbox>
                                                </Col>
                                                <Col span={24}>
                                                    <Checkbox value="3">Xxls</Checkbox>
                                                </Col>
                                                <Col span={24}>
                                                    <Checkbox value="4">Jpeg</Checkbox>
                                                </Col>
                                            </Row>
                                        </Checkbox.Group>
                                    </Col>
                                    <Col span={3} style={{ textAlign: 'center' }}>
                                        <p>10MB</p>
                                        <Radio.Group>
                                            <Row className={NewTestManagerCss.text_right_checkbox_rules}>
                                                <Col span={24}>
                                                    <Radio value={1}></Radio>
                                                </Col>
                                                <Col span={24}>
                                                    <Radio value={2}></Radio>
                                                </Col>
                                                <Col span={24}>
                                                    <Radio value={3}></Radio>
                                                </Col>
                                                <Col span={24}>
                                                    <Radio value={4}></Radio>
                                                </Col>
                                            </Row>
                                        </Radio.Group>
                                    </Col>
                                    <Col span={3} style={{ textAlign: 'center' }}>
                                        <p>20MB</p>
                                        <Radio.Group>
                                            <Row className={NewTestManagerCss.text_right_checkbox_rules}>
                                                <Col span={24}>
                                                    <Radio value={1}></Radio>
                                                </Col>
                                                <Col span={24}>
                                                    <Radio value={2}></Radio>
                                                </Col>
                                                <Col span={24}>
                                                    <Radio value={3}></Radio>
                                                </Col>
                                                <Col span={24}>
                                                    <Radio value={4}></Radio>
                                                </Col>
                                            </Row>
                                        </Radio.Group>
                                    </Col>
                                    <Col span={3} style={{ textAlign: 'center' }}>
                                        <p>30MB</p>
                                        <Radio.Group>
                                            <Row className={NewTestManagerCss.text_right_checkbox_rules}>
                                                <Col span={24}>
                                                    <Radio value={1}></Radio>
                                                </Col>
                                                <Col span={24}>
                                                    <Radio value={2}></Radio>
                                                </Col>
                                                <Col span={24}>
                                                    <Radio value={3}></Radio>
                                                </Col>
                                                <Col span={24}>
                                                    <Radio value={4}></Radio>
                                                </Col>
                                            </Row>
                                        </Radio.Group>
                                    </Col>
                                    <Col span={3} style={{ textAlign: 'center' }}>
                                        <p>40MB</p>
                                        <Radio.Group>
                                            <Row className={NewTestManagerCss.text_right_checkbox_rules}>
                                                <Col span={24}>
                                                    <Radio value={1}></Radio>
                                                </Col>
                                                <Col span={24}>
                                                    <Radio value={2}></Radio>
                                                </Col>
                                                <Col span={24}>
                                                    <Radio value={3}></Radio>
                                                </Col>
                                                <Col span={24}>
                                                    <Radio value={4}></Radio>
                                                </Col>
                                            </Row>
                                        </Radio.Group>
                                    </Col>
                                    <Col span={24} className={NewTestManagerCss.text_right_rules_txt}>
                                        <p>*Lưu ý: Tổng dung lượng tối đa là 50MB</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>

            <div className={NewTestManagerCss.button_new_test}>
                <button className={NewTestManagerCss.button_new_test_cancel}>
                    Hủy
                </button>
                <button className={NewTestManagerCss.button_new_test_save}>
                    Lưu
                </button>
            </div>

        </div>
    );
}
export default NewTestManager

// checkbox
function onChange(e: any) {
    console.log(`checked = ${e.target.checked}`);
}

// select
function handleChange(value: any) {
    console.log(`selected ${value}`);
}
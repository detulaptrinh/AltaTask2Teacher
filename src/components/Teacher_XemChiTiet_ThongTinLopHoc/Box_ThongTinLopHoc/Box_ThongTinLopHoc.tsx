import React, { Component } from "react";

import "./Box_ThongTinLopHoc.css";

import Avatar from "../../../assets/img/Ellipse 43.png";

import {
    IconInsert50,
    IconFiCirclex,
    IconFiEdit
} from "../../../assets/svg/icon"

import { Row, Col } from 'antd';
import { Input, Space, Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

import { Checkbox } from 'antd';


function onChange(checkedValues: any) {
    console.log('checked = ', checkedValues);
}

export default class Box_ThongTinLopHoc extends Component {
    render() {
        const options = [
            { label: 'Tự động kích hoạt buổi học khi đến thời gian bắt đầu', value: '1' },
            { label: 'Bật tính năng lưu lại buổi học', value: '2' },
            { label: 'Cho phép học viên/ cá nhân tham gia chia sẻ buổi học', value: '3' },
        ];
        return (
            <div className="box-thong-tin-chi-tiet">
                <div className="box-1">
                    <div className="img">
                        <img src={Avatar} alt="Avatar" />
                    </div>
                    <div className="row"></div>
                    <div>
                        <div className="giao-vien">Giáo viên:</div>
                        <div className="ten-giao-vien">Nguyễn Võ Văn A</div>
                    </div>
                    <div>
                        <div className="bo-mon">Bộ môn:</div>
                        <div className="ten-bo-mon">Lịch sử</div>
                    </div>
                    <div className="row-1"></div>
                    <div>
                        <div className="mo-ta">Mô tả:</div>
                        <div className="ten-mo-ta">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat, nulla nec tincidunt tincidunt, neque erat bibendum lectus</div>
                    </div>
                    <div>
                        <div className="lop">Lớp:</div>
                        <div className="ten-lop">10A1</div>
                    </div>
                </div>

                {/* box 2 */}
                <div className="box-2">
                    <div className="lich-hoc">
                        <div className="lable-lich-hoc">Lịch học:</div>
                        <div className="text-lich-hoc">Tổng số <span>06</span> buổi</div>
                    </div>
                    <div className="ngay-bat-dau">
                        <div className="lable-ngay-bat-dau">Ngày bắt đầu:</div>
                        <div className="text-ngay-bat-dau">19/08/2020</div>
                    </div>
                    <div className="ngay-ket-thuc">
                        <div className="lable-ngay-ket-thuc">Ngày kết thúc:</div>
                        <div className="text-ngay-ket-thuc">24/09/2020</div>
                    </div>

                    <div className="group-buoi-hoc">
                        <div className="arrow">
                            <div className="arrow-left"><a href=""><i className='bx bx-chevron-left'></i></a></div>
                            <div className="arrow-right"><a href=""><i className='bx bx-chevron-right' ></i></a></div>
                        </div>

                        <div className="group-box">
                            <div>
                                <div className="box-buoi-hoc">
                                    <div className="lable-buoi-hoc"><p>Buổi 1</p></div>
                                    <div className="text-ngay-hoc">19/08/2020</div>
                                    <div className="text-gio-hoc">14:00-14:45</div>
                                </div>
                            </div>
                            <div>
                                <div className="box-buoi-hoc background-cam">
                                    <div className="lable-buoi-hoc color-cam"><p>Buổi 2</p></div>
                                    <div className="text-ngay-hoc">19/08/2020</div>
                                    <div className="text-gio-hoc">14:00-14:45</div>
                                </div>
                            </div>
                            <div>
                                <div className="box-buoi-hoc background-blue">
                                    <div className="lable-buoi-hoc color-blue"><p>Buổi 3</p></div>
                                    <div className="text-ngay-hoc">19/08/2020</div>
                                    <div className="text-gio-hoc">14:00-14:45</div>
                                </div>
                                <div className="icon-edit">
                                    <a href=""><img src={IconFiEdit} alt="" /></a>
                                    <a href=""><img src={IconFiCirclex} alt="" /></a>
                                </div>
                            </div>
                            <div>
                                <div className="box-buoi-hoc background-blue">
                                    <div className="lable-buoi-hoc color-blue"><p>Buổi 4</p></div>
                                    <div className="text-ngay-hoc">19/08/2020</div>
                                    <div className="text-gio-hoc">14:00-14:45</div>
                                </div>
                                <div className="icon-edit">
                                    <a href=""><img src={IconFiEdit} alt="" /></a>
                                    <a href=""><img src={IconFiCirclex} alt="" /></a>
                                </div>
                            </div>
                            <div>
                                <div className="box-buoi-hoc background-blue">
                                    <div className="lable-buoi-hoc color-blue"><p>Buổi 5</p></div>
                                    <div className="text-ngay-hoc">19/08/2020</div>
                                    <div className="text-gio-hoc">14:00-14:45</div>
                                </div>
                                <div className="icon-edit">
                                    <a href=""><img src={IconFiEdit} alt="" /></a>
                                    <a href=""><img src={IconFiCirclex} alt="" /></a>
                                </div>
                            </div>
                            <div>
                                <div className="box-buoi-hoc background-blue">
                                    <div className="lable-buoi-hoc color-blue"><p>Buổi 6</p></div>
                                    <div className="text-ngay-hoc">19/08/2020</div>
                                    <div className="text-gio-hoc">14:00-14:45</div>
                                </div>
                                <div className="icon-edit">
                                    <a href=""><img src={IconFiEdit} alt="" /></a>
                                    <a href=""><img src={IconFiCirclex} alt="" /></a>
                                </div>
                            </div>
                            <div>
                                <div className="box-buoi-hoc background-blue">
                                    <a href=""><img src={IconInsert50} alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* box 3 */}
                <div className="box-3">
                    <Row>
                        <Col span={3}>
                            <div className="lable">Mã Lớp:</div>
                        </Col>
                        <Col span={21}>
                            <div className="text">785 4512 6325</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={3}>
                            <div className="lable">Bảo mật:</div>
                        </Col>
                        <Col span={21}>
                            <Space direction="vertical">
                                <Input.Password
                                    placeholder="input password"
                                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                />
                            </Space>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={3}>
                            <div className="lable">Cài đặt khác:</div>
                        </Col>
                        <Col span={21}>
                            <Checkbox.Group options={options} defaultValue={['Pear']} onChange={onChange} />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={3}>
                            <div className="lable">Link chia sẻ:</div>
                        </Col>
                        <Col span={21}>
                            <Input placeholder="https://school.edu.vn/baigiang/10a1daisob1t1" />
                            <Button type="primary">Copy link</Button>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

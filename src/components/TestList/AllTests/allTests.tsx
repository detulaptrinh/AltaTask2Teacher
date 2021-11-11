import { Breadcrumb, Button, Col, Row, Tabs, Select, DatePicker, Input, Table, Space, Tag, Pagination, InputNumber, Modal } from 'antd';
import React, { Component, useState } from 'react';
import TestList from '../testList';
import { SearchOutlined } from '@ant-design/icons';
import AllTestsCss from './allTests.module.css'
import './allTests.css'
import { IconFiEdit, IconInfo } from '../../../assets/svg/icon';
import { allTest } from '../data';


const { TabPane } = Tabs;
const { Option } = Select;



const AllTests = (): JSX.Element => {
    const data: allTests[] = allTest;
    interface allTests {
        class: string,
        content: string,
        subjects: string,
        date: string,
        time: string,
        status: string,
        assignment: string,
        icon: string
    }

    const columns = [
        {
            title: 'Lớp',
            dataIndex: 'class',
        },
        {
            title: 'Nội dung kiểm tra',
            dataIndex: 'content',
        },
        {
            title: 'Môn học',
            dataIndex: 'subjects',
        },
        {
            title: 'Ngày làm bài',
            dataIndex: 'date',
        },
        {
            title: 'Thời lượng',
            dataIndex: 'time',
        },
        {
            title: 'Tình trạng',
            dataIndex: 'status',
            render: (status: string) => {
                switch (status) {
                    case "noStarted":
                        return <span className={AllTestsCss.no_Started}>Chưa bắt đầu</span>;
                    case "inProcess":
                        return <span className={AllTestsCss.in_Process}>Đang tiến hành</span>;
                    case "finished":
                        return <span className={AllTestsCss.finished}>Đã kết thúc</span>;
                }
            },
        },
        {
            title: "Bài làm",
            dataIndex: "assignment",
            render: (assignment: string) => {
                switch (assignment) {
                    case "started":
                        return <Button className={AllTestsCss.btn_Started} onClick={showModal}>Bắt đầu</Button>

                    case "mark":
                        return <Button className={AllTestsCss.btn_Score}>Chấm điểm</Button>;
                    case "tagScore":
                        return <div className={AllTestsCss.btn_Tag_Score}>
                            <span className={AllTestsCss.btn_Tag_Score_Txt} >
                                Chấm điểm
                            </span>
                        </div>;
                    case "inputScore":
                        return <div className={AllTestsCss.tag_input_Score}>
                            <span className={AllTestsCss.tag_input_Score_Txt} >
                                Nhập điểm
                            </span>
                        </div>;
                }
            },
        },
        {
            dataIndex: 'icon',
            render: () => (
                <Space>
                    <img src={IconFiEdit} className={AllTestsCss.edit_Icon} alt="" style={{ width: 32, height: 32 }} />
                    <img src={IconInfo} className={AllTestsCss.info_Icon} alt="" style={{ width: 32, height: 32 }} />
                </Space>
            )
        },
    ];

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };



    return (

        <>
            <div className={AllTestsCss.header_Container}>
                <Row>
                    <Col span={12} className={AllTestsCss.col_Choose_Group}>
                        <div className={AllTestsCss.choose_Subject_Group}>
                            <label className={AllTestsCss.label_Choose_Subject}>Chọn bộ môn</label>
                            <div className={AllTestsCss.choose_Subject}>
                                <Select
                                    className="select_Subject"
                                    defaultValue="Ngữ Văn"
                                    style={{ width: 136 }}
                                >
                                    <Option value="maths">Toán</Option>
                                    <Option value="physical">Lý</Option>
                                    <Option value="chemistry">Hóa</Option>
                                </Select>
                            </div>
                        </div>

                        <div className={AllTestsCss.choose_Block_Group}>
                            <label className={AllTestsCss.label_Choose_Block}>Chọn khối</label>
                            <div className={AllTestsCss.choose_Block}>
                                <Select
                                    className="select_Block"
                                    defaultValue="10"
                                    style={{ width: 98 }}
                                >
                                    <Option value="9">9</Option>
                                    <Option value="8">8</Option>
                                    <Option value="7">7</Option>
                                    <Option value="6">6</Option>
                                </Select>
                            </div>
                        </div>

                        <div className={AllTestsCss.choose_Date_Group}>
                            <label className={AllTestsCss.label_Choose_Date}>Chọn ngày</label>
                            <div className={AllTestsCss.choose_Date}>
                                <DatePicker style={{ width: 136 }} />
                            </div>
                        </div>

                        <div className={AllTestsCss.choose_Btn_Filter_Results}>
                            <Button className={AllTestsCss.btn_Filter_Results}>
                                Lọc kết quả
                            </Button>
                        </div>
                    </Col>

                    <Col span={12} className={AllTestsCss.col_Search_Group}>
                        <div className={AllTestsCss.box_Searchs}>
                            <Input className={AllTestsCss.allTest_Searchs} title="Search" placeholder="Tìm Kiếm" prefix={<SearchOutlined />} />
                        </div>
                    </Col>

                </Row>
            </div>
            <div className={AllTestsCss.body_Container}>
                <div className="allTest_table">
                    <Table dataSource={data} columns={columns} pagination={false} />
                </div>
            </div>
            <div className={AllTestsCss.footer_Container}>
                <Row>
                    <Col span={12} className={AllTestsCss.col_footer_left}>
                        <div className={AllTestsCss.footer_pagination_txt}>
                            <div className="pagination-text">
                                <p className="pagination-text-view">
                                    Hiển thị
                                </p>
                                <InputNumber min={1} max={10} defaultValue={8} />
                                <p className="pagination-text-rol">
                                    hàng trong một trang
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col span={12} className={AllTestsCss.col_footer_right}>
                        <div className={AllTestsCss.footer_pagination_numb}>
                            <div className="pagination-number">
                                <Pagination
                                    showSizeChanger
                                    defaultCurrent={1}
                                    total={50}
                                />
                            </div>
                        </div>
                    </Col>
                </Row>

                <Modal
                className="modal_It_All_Test"
                    centered
                    visible={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                   <p className={AllTestsCss.modal_txt_1}>Xác nhận</p>
                   <p className={AllTestsCss.modal_txt_2}>Giáo viên có chắc chắn muốn Bắt đầu kiểm tra?</p>
                   <Button className={AllTestsCss.btn_Cancel} onClick={handleCancel}>Hủy</Button>
                   <Button className={AllTestsCss.btn_Confirm}>Xác Nhận</Button>

                </Modal>

            </div>
        </>

    );
}
export default AllTests;



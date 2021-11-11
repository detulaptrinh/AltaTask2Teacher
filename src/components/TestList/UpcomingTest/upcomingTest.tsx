import { Button, Col, Row, Tabs, Select, DatePicker, Input, Table, Space, Tag, Pagination, InputNumber, Modal } from 'antd';
import React, { Component, useState } from 'react';
import { IconEdit, IconInfo } from '../../../assets/svg/icon';
import { SearchOutlined } from '@ant-design/icons';
import { upcomingTest } from '../data';
import UpcomingTestCss from './upcomingTest.module.css'
import './upcomingTest.css'

const { TabPane } = Tabs;
const { Option } = Select;




const UpcomingTest = (): JSX.Element => {
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
    const data: upcomingTest[] = upcomingTest;

    interface upcomingTest {
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
                        return <span className={UpcomingTestCss.no_Started}>Chưa bắt đầu</span>;
                    case "inProcess":
                        return <span className={UpcomingTestCss.in_Process}>Đang tiến hành</span>;
                    case "finished":
                        return <span className={UpcomingTestCss.finished}>Đã kết thúc</span>;
                }
            },
        },
        {
            title: "Bài làm",
            dataIndex: "assignment",
            render: (assignment: string) => {
                switch (assignment) {
                    case "started":
                        return <Button className={UpcomingTestCss.btn_Started} onClick={showModal}>Bắt đầu</Button>;
                    case "mark":
                        return <Button className={UpcomingTestCss.btn_Score}>Chấm điểm</Button>;
                    case "tagScore":
                        return <div className={UpcomingTestCss.btn_Tag_Score}>
                            <span className={UpcomingTestCss.btn_Tag_Score_Txt} >
                                Chấm điểm
                            </span>
                        </div>;
                    case "inputScore":
                        return <div className={UpcomingTestCss.tag_input_Score}>
                            <span className={UpcomingTestCss.tag_input_Score_Txt} >
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
                    <img src={IconEdit} className={UpcomingTestCss.edit_Icon} alt="" style={{ width: 32, height: 32 }} />
                    <img src={IconInfo} className={UpcomingTestCss.info_Icon} alt="" style={{ width: 32, height: 32 }} />
                </Space>
            )
        },
    ];



    return (
        <>
            <div className={UpcomingTestCss.header_Container}>
                <Row>
                    <Col span={12} className={UpcomingTestCss.col_Choose_Group}>
                        <div className={UpcomingTestCss.choose_Subject_Group}>
                            <label className={UpcomingTestCss.label_Choose_Subject}>Chọn bộ môn</label>
                            <div className={UpcomingTestCss.choose_Subject}>
                                <Select
                                    className="select_Subject_Upcoming_Test"
                                    defaultValue="Ngữ Văn"
                                    style={{ width: 136 }}
                                >
                                    <Option value="maths">Toán</Option>
                                    <Option value="physical">Lý</Option>
                                    <Option value="chemistry">Hóa</Option>
                                </Select>
                            </div>
                        </div>

                        <div className={UpcomingTestCss.choose_Block_Group}>
                            <label className={UpcomingTestCss.label_Choose_Block}>Chọn khối</label>
                            <div className={UpcomingTestCss.choose_Block}>
                                <Select
                                    className="select_Block_Upcoming_Test"
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

                        <div className={UpcomingTestCss.choose_Date_Group}>
                            <label className={UpcomingTestCss.label_Choose_Date}>Chọn ngày</label>
                            <div className={UpcomingTestCss.choose_Date}>
                                <DatePicker style={{ width: 136 }} />
                            </div>
                        </div>

                        <div className={UpcomingTestCss.choose_Btn_Filter_Results}>
                            <Button className={UpcomingTestCss.btn_Filter_Results}>
                                Lọc kết quả
                            </Button>
                        </div>
                    </Col>

                    <Col span={12} className={UpcomingTestCss.col_Search_Group}>
                        <div className={UpcomingTestCss.box_Searchs}>
                            <Input className={UpcomingTestCss.allTest_Searchs} title="Search" placeholder="Tìm Kiếm" prefix={<SearchOutlined />} />
                        </div>
                    </Col>

                </Row>
            </div>
            <div className={UpcomingTestCss.body_Container}>
                <div className="Upcoming_Test_table">
                    <Table dataSource={data} columns={columns} pagination={false} />
                </div>
            </div>
            <div className={UpcomingTestCss.footer_Container}>
                <Row>
                    <Col span={12} className={UpcomingTestCss.col_footer_left}>
                        <div className={UpcomingTestCss.footer_pagination_txt}>
                            <div className="pagination-text-Upcoming-Test">
                                <p className="pagination-text-view-Upcoming-Test">
                                    Hiển thị
                                </p>
                                <InputNumber min={1} max={10} defaultValue={8} />
                                <p className="pagination-text-rol-Upcoming-Test">
                                    hàng trong một trang
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col span={12} className={UpcomingTestCss.col_footer_right}>
                        <div className={UpcomingTestCss.footer_pagination_numb}>
                            <div className="pagination-number-Upcoming-Test">
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
                    className="modal_It_Upcoming_Test"
                    centered
                    visible={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                    <p className={UpcomingTestCss.modal_txt_1}>Xác nhận</p>
                    <p className={UpcomingTestCss.modal_txt_2}>Giáo viên có chắc chắn muốn Bắt đầu kiểm tra?</p>
                    <Button className={UpcomingTestCss.btn_Cancel} onClick={handleCancel}>Hủy</Button>
                    <Button className={UpcomingTestCss.btn_Confirm}>Xác Nhận</Button>
                </Modal>
            </div>
        </>

    );

}
export default UpcomingTest;



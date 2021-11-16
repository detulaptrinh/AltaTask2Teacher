import { Button, Col, Row, Tabs, Select, DatePicker, Input, Table, Space, Tag, Pagination, InputNumber } from 'antd';
import React, { Component } from 'react';
import UngradedTestCss from '../moduleCss/ungradedTest.module.css'
import'../css/ungradedTest.css'
import { SearchOutlined } from '@ant-design/icons';
import { IconFiEdit, IconInfo } from '../../../assets/svg/icon';
import { ungradedTest } from '../data';

const { TabPane } = Tabs;
const { Option } = Select;


const UngradedTest = (): JSX.Element => {

    

const data: ungradedTest[] = ungradedTest;

interface ungradedTest {
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
                    return <span className={UngradedTestCss.no_Started}>Chưa bắt đầu</span>;
                case "inProcess":
                    return <span className={UngradedTestCss.in_Process}>Đang tiến hành</span>;
                case "finished":
                    return <span className={UngradedTestCss.finished}>Đã kết thúc</span>;
            }
        },
    },
    {
        title: "Bài làm",
        dataIndex: "assignment",
        render: (assignment: string) => {
            switch (assignment) {
                case "started":
                    return <Button className={UngradedTestCss.btn_Started}>Bắt đầu</Button>;
                case "mark":
                    return <Button className={UngradedTestCss.btn_Score}>Chấm điểm</Button>;
                case "tagScore":
                    return <div className={UngradedTestCss.btn_Tag_Score}>
                        <span className={UngradedTestCss.btn_Tag_Score_Txt} >
                            Chấm điểm
                        </span>
                    </div>;
                case "inputScore":
                    return <div className={UngradedTestCss.tag_input_Score}>
                        <span className={UngradedTestCss.tag_input_Score_Txt} >
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
                <img src={IconFiEdit} className={UngradedTestCss.edit_Icon} alt="" style={{ width: 32, height: 32 }} />
                <img src={IconInfo} className={UngradedTestCss.info_Icon} alt="" style={{ width: 32, height: 32 }} />
            </Space>
        )
    },
];



 
        return (
            
            <>
                <div className={UngradedTestCss.header_Container}>
                    <Row>
                        <Col span={12} className={UngradedTestCss.col_Choose_Group}>
                            <div className={UngradedTestCss.choose_Subject_Group}>
                                <label className={UngradedTestCss.label_Choose_Subject}>Chọn bộ môn</label>
                                <div className={UngradedTestCss.choose_Subject}>
                                    <Select
                                        className="select_Subject_Ungraded_Test"
                                        defaultValue="Ngữ Văn"
                                        style={{ width: 136 }}
                                    >
                                        <Option value="maths">Toán</Option>
                                        <Option value="physical">Lý</Option>
                                        <Option value="chemistry">Hóa</Option>
                                    </Select>
                                </div>
                            </div>

                            <div className={UngradedTestCss.choose_Block_Group}>
                                <label className={UngradedTestCss.label_Choose_Block}>Chọn khối</label>
                                <div className={UngradedTestCss.choose_Block}>
                                    <Select
                                        className="select_Block_Ungraded_Test"
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

                            <div className={UngradedTestCss.choose_Date_Group}>
                                <label className={UngradedTestCss.label_Choose_Date}>Chọn ngày</label>
                                <div className={UngradedTestCss.choose_Date}>
                                    <DatePicker style={{ width: 136 }} />
                                </div>
                            </div>

                            <div className={UngradedTestCss.choose_Btn_Filter_Results}>
                                <Button className={UngradedTestCss.btn_Filter_Results}>
                                    Lọc kết quả
                                </Button>
                            </div>
                        </Col>

                        <Col span={12} className={UngradedTestCss.col_Search_Group}>
                            <div className={UngradedTestCss.box_Searchs}>
                                <Input className={UngradedTestCss.allTest_Searchs} title="Search" placeholder="Tìm Kiếm" prefix={<SearchOutlined />} />
                            </div>
                        </Col>

                    </Row>
                </div>
                <div className={UngradedTestCss.body_Container}>
                    <div className="Ungraded_Test_table">
                        <Table dataSource={data} columns={columns} pagination={false} />
                    </div>
                </div>
                <div className={UngradedTestCss.footer_Container}>
                    <Row>
                        <Col span={12} className={UngradedTestCss.col_footer_left}>
                               <div className={UngradedTestCss.footer_pagination_txt}>
                               <div className="pagination-text-Ungraded-Test">
                                    <p className="pagination-text-view-Ungraded-Test">
                                        Hiển thị
                                    </p>
                                    <InputNumber min={1} max={10} defaultValue={8} />
                                    <p className="pagination-text-rol-Ungraded-Test">
                                        hàng trong một trang
                                    </p>
                                </div>
                               </div>
                        </Col>
                        <Col span={12} className={UngradedTestCss.col_footer_right}>
                            <div className={UngradedTestCss.footer_pagination_numb}>
                                <div className="pagination-number-Ungraded-Test">
                                    <Pagination
                                        showSizeChanger
                                        defaultCurrent={1}
                                        total={50}
                                    />
                                </div>
                            </div>
                        </Col>
                    </Row>

                </div>
            </>
        
        );
    
}

export default UngradedTest;
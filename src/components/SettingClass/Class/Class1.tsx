import React, { Fragment, useState } from "react";
import { Row, Col, Table, Input, Select, DatePicker, Button, Pagination, InputNumber } from "antd";
import { Link } from "react-router-dom";
import Class from "../../../data/Class1.json";
import { IconInfo } from "../../../assets/svg/icon";
import IconArrow from "../../../assets/components/IconArrow"
import Setting from "../Setting.module.css";
import '../Settingclass.css';
import { SearchOutlined } from '@ant-design/icons';
import AllTestsCss from "../../TestList/moduleCss/allTests.module.css";


const { Option } = Select;

interface ICourse {
    objectname: string;
    idclass: string;
    time: string;
    times: string;
    teacher: string;
}

const data: ICourse[] = Class;

const Class1 = (): JSX.Element => {
    const [isModalDel, setIsModalDel] = useState<boolean>(false);

    const columns = [
        {
            title: 'Mã lớp',
            dataIndex: 'idclass',
        },
        {
            title: 'Môn học',
            dataIndex: 'objectname',

        },
        {
            title: 'Thời gian',
            render: (_text: any, record: { time: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; times: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => (
                <><span>{record.time}</span><br /><span>{record.times}</span></>
            ),
        },
        {
            title: 'Giảng viên',
            dataIndex: 'teacher',
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            render: (status: boolean) =>
                status ? (
                    <button  className={` ${Setting.status_coming}`}>
                        <span className="font-bold">Bắt đầu</span>
                    </button>
                ) : (
                    <button className={` ${Setting.status_done}`}>
                        <span className="font-bold">Bắt đầu</span>
                    </button>
                ),
        },
        {
            title: "",
            render: () => (
                <>
                <Link to="/class">
                    <button className={Setting.btn__img} onClick={showModalDel}>
                        <img src={IconInfo} alt="IconEdit" />
                    </button>
                </Link>
                </>


            ),
        },
    ];

    const showModalDel = (): void => {
        setIsModalDel(true);
    };

    const handleOkDel = (): void => {
        setIsModalDel(false);
    };

    const handleCancelDel = (): void => {
        setIsModalDel(false);
    };

    return (
        <Fragment>
            <>
            <div className="class1">
                <Row>
                    <Col span={12} className={`mt-6 ml-9`}>
                        <div className="flex">
                            <Col span={7}>
                                <div className="flex flex-col items-start">
                                    <label className={`font-bold ${Setting.label_group}`}>Chọn tổ</label>
                                    <Select
                                        className="select_group flex items-center mt-3"
                                        defaultValue="THCS - Tổ Văn Sử Địa"
                                        style={{ width: 238 }}
                                        suffixIcon={<IconArrow />}
                                    >
                                        <Option value="maths">THCS - Tổ Toán Lý Hóa</Option>
                                        <Option value="physical">THCS - Tổ Sinh Sử Địa</Option>
                                        <Option value="chemistry">THCS - Tổ Nghệ thuật</Option>
                                    </Select>
                                </div>
                            </Col>
                            <Col span={6}>
                                <div className="flex flex-col items-start ml-8">
                                    <label className={`font-bold ${Setting.label_group}`}>Chọn bộ môn</label>
                                    <Select
                                        className="select_group"
                                        defaultValue="Ngữ Văn"
                                        style={{ width: 136 }}
                                        suffixIcon={<IconArrow />}
                                    >
                                        <Option value="maths">Toán</Option>
                                        <Option value="physical">Lý</Option>
                                        <Option value="chemistry">Hóa</Option>
                                    </Select>
                                </div>
                            </Col>
                        </div>
                    </Col>

                    <Col span={11} className="mt-12">
                        <div className="flex justify-end ml-5">
                            <Input className={Setting.box_search} title="Search" placeholder="Tìm kiếm theo topic" prefix={<SearchOutlined />} />
                        </div>
                    </Col>
                </Row>

                    <Col span={24} className="ml-9 mt-6">
                        <Table
                            className={`table__class text-center font-normal`}
                            columns={columns}
                            dataSource={data}
                            pagination={false}
                        />
                    </Col>
                <Row>
                <Col span={12} className={Setting.pag_left}>
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
                </div>
            </>
        </Fragment>
    );
};

export default Class1;

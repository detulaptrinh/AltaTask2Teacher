import React, { Component } from 'react';
import TestScheduleCss from './TestSchedule.module.css';
import './SelectCalendar.css';
import { Row, Col, Input, Radio, Select, Checkbox, DatePicker, Badge, Calendar } from 'antd';
import { IconUpload } from "../../assets/svg/icon";

const { Option } = Select;

const TestSchedule = (): JSX.Element => {
    function getListData(value: any) {
        let listData;
        switch (value.date()) {
            case 8:
                listData = [
                    { content: 'This is warning event.' },
                    { content: 'This is usual event.' },
                ];
                break;
            case 10:
                listData = [
                    { content: 'This is warning event.' },
                    { content: 'This is usual event.' },
                    { content: 'This is error event.' },
                ];
                break;
            case 15:
                listData = [
                    { content: 'This is error event 1.' },
                    { content: 'This is error event 2.' },
                    { content: 'This is error event 3.' },
                    { content: 'This is error event 4.' },
                ];
                break;
            default:
        }
        return listData || [];
    }

    function dateCellRender(value: any) {
        const listData = getListData(value);
        return (
            <ul className={TestScheduleCss.events}>
                {listData.map(item => (
                    <li key={item.content}>
                        {item.content}
                    </li>
                ))}
            </ul>
        );
    }

    // function getMonthData(value: any) {
    //     if (value.month() === 8) {
    //         return 1394;
    //     }
    // }

    // function monthCellRender(value: any) {
    //     const num = getMonthData(value);
    //     return num ? (
    //         <div className={TestScheduleCss.notes_month}>
    //             <section>{num}</section>
    //             <span>Backlog number</span>
    //         </div>
    //     ) : null;
    // }

    return (
        <>
            <div className={TestScheduleCss.title}>
                Lịch thi
            </div>
            <div className={TestScheduleCss.select_block}>
                <p>Chọn khối</p>
                <Select className={TestScheduleCss.schedule_select_block} defaultValue="1" onChange={handleChange}>
                    <Option value="1">Khối 10</Option>
                    <Option value="2">Khối 9</Option>
                </Select>
            </div>
            <div className={TestScheduleCss.test_schedule_box_left}>
                <div className={TestScheduleCss.test_schedule_header_calendar}>

                </div>
                <div className="test_schedule_box_calendar">
                    <Calendar
                        className={TestScheduleCss.test_schedule_box_calendar}
                        dateCellRender={dateCellRender}
                    // monthCellRender={monthCellRender} 
                    />
                </div>
            </div>
            <div className={TestScheduleCss.test_schedule_box_right}>
                <div className={TestScheduleCss.test_schedule_top}>
                    <div className={TestScheduleCss.test_schedule_top_calendar}>
                        <Row>
                            <Col className={TestScheduleCss.test_schedule_top_calendar_left} span={10}>12</Col>
                            <Col className={TestScheduleCss.test_schedule_top_calendar_right} span={14}>
                                <p>Thứ 5</p>
                                <p>Tháng 8</p>
                                <p>Năm 2020</p>
                            </Col>
                        </Row>
                        <div className={TestScheduleCss.test_schedule_top_bot}></div>
                    </div>
                    <div className={TestScheduleCss.test_schedule_top_math}>
                        <div className={TestScheduleCss.test_schedule_top_math_title}>
                            <i className='bx bxs-circle' ></i>
                            <p>Toán Đại Số</p>
                        </div>
                        <Row>
                            <Col className={TestScheduleCss.test_schedule_top_math_left} span={10}>Đối tượng:</Col>
                            <Col className={TestScheduleCss.test_schedule_top_math_right} span={14}>Kiểm tra tập trung</Col>
                        </Row>
                        <Row>
                            <Col className={TestScheduleCss.test_schedule_top_math_left} span={10}>Thời lượng:</Col>
                            <Col className={TestScheduleCss.test_schedule_top_math_right} span={14}>45 phút</Col>
                        </Row>
                        <Row>
                            <Col className={TestScheduleCss.test_schedule_top_math_left} span={10}>Nội dung:</Col>
                            <Col className={TestScheduleCss.test_schedule_top_math_right} span={14}>Ôn tập chương 5</Col>
                        </Row>
                        <Row>
                            <Col className={TestScheduleCss.test_schedule_top_math_left} span={10}>Hình thức:</Col>
                            <Col className={TestScheduleCss.test_schedule_top_math_right} span={14}>Tự luận</Col>
                        </Row>
                    </div>
                    <div className={TestScheduleCss.test_schedule_top_english}>
                        <div className={TestScheduleCss.test_schedule_top_english_title}>
                            <i className='bx bxs-circle' ></i>
                            <p>Toán Đại Số</p>
                        </div>
                        <Row>
                            <Col className={TestScheduleCss.test_schedule_top_math_left} span={10}>Đối tượng:</Col>
                            <Col className={TestScheduleCss.test_schedule_top_math_right} span={14}>10C1, 10C2</Col>
                        </Row>
                        <Row>
                            <Col className={TestScheduleCss.test_schedule_top_math_left} span={10}>Thời lượng:</Col>
                            <Col className={TestScheduleCss.test_schedule_top_math_right} span={14}>15 phút</Col>
                        </Row>
                        <Row>
                            <Col className={TestScheduleCss.test_schedule_top_math_left} span={10}>Nội dung:</Col>
                            <Col className={TestScheduleCss.test_schedule_top_math_right} span={14}>Academic</Col>
                        </Row>
                        <Row>
                            <Col className={TestScheduleCss.test_schedule_top_math_left} span={10}>Hình thức:</Col>
                            <Col className={TestScheduleCss.test_schedule_top_math_right} span={14}>Trắc nghiệm</Col>
                        </Row>
                    </div>
                    <p className={TestScheduleCss.test_schedule_top_end}>Cố gắng ôn tập cho các bài kiểm tra sắp tới nhé!</p>
                </div>
                <div className={TestScheduleCss.test_schedule_bottom}>
                    <p>Lọc lịch thi</p>
                    <Checkbox.Group>
                        <Row className={TestScheduleCss.text_right_checkbox_rules}>

                            <Checkbox className="calendar_checkbox" value="1">Kiểm tra 15 phút</Checkbox>

                            <Checkbox className="calendar_checkbox" value="2">Kiểm tra 45 phút</Checkbox>

                            <Checkbox className="calendar_checkbox" value="3">Kiểm tra giữa kì</Checkbox>

                            <Checkbox className="calendar_checkbox" value="4">Kiểm tra cuối kì</Checkbox>

                        </Row>
                    </Checkbox.Group>
                </div>
            </div>

        </>
    );
}
export default TestSchedule

// checkbox
function onChange(e: any) {
    console.log(`checked = ${e.target.checked}`);
}

// select
function handleChange(value: any) {
    console.log(`selected ${value}`);
}
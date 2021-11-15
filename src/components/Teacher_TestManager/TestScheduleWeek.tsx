import React, { Component } from 'react';
import TestScheduleCss from './TestScheduleWeek.module.css';
import './SelectCalendar.css';
import { Row, Col, Select, Checkbox, Calendar } from 'antd';
import { Link } from "react-router-dom";

const { Option } = Select;

const TestScheduleWeek = (): JSX.Element => {
    function getListData(value: any) {
        let listData;
        switch (value.date()) {
            case 6:
                listData = [
                    { content: 'Vật lý - 15 phút' },
                    { content: '10C6' },
                ];
                break;
            case 9:
                listData = [
                    { content: 'Lịch sử - Giữa kì II' },
                    { content: 'Khối 10' },
                ];
                break;
            case 12:
                listData = [
                    { content: 'Toán đại số - 45 phút' },
                    { content: 'Khối 10' },
                    { content: 'Tiếng anh - 15 phút' },
                    { content: '10C1, 10C2' },
                ];
                break;
            case 17:
                listData = [
                    { content: 'Tiếng anh - 45 phút' },
                    { content: '10C6, 10C8' },
                ];
                break;
            case 27:
                listData = [
                    { content: 'Vật lý - Cuối kì II' },
                    { content: 'Khối 10' },
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
                    <Row>
                        <Col className={TestScheduleCss.test_schedule_header_calendar_left} span={11}>
                            <button className={TestScheduleCss.test_schedule_header_calendar_left_btn}>
                                Hôm nay
                            </button>
                            <span>8 - 14 Tháng 8</span>
                            <i className='bx bx-chevron-down'></i>
                        </Col>
                        <Col className={TestScheduleCss.test_schedule_header_calendar_right} span={12}>
                            <div className={TestScheduleCss.test_schedule_header_calendar_right_btn}>
                                <button className={TestScheduleCss.test_schedule_header_calendar_right_btn2}>
                                    <Link to="/TestScheduleWeek">Tuần</Link>
                                </button>
                                <button className={TestScheduleCss.test_schedule_header_calendar_right_btn1}>
                                    <Link to="/TestScheduleMonth">Tháng</Link>
                                </button>
                            </div>
                        </Col>
                    </Row>
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
                    <div className={TestScheduleCss.test_schedule_top_history}>
                        <div className={TestScheduleCss.test_schedule_top_history_title}>
                            <i className='bx bxs-circle' ></i>
                            <p>Lịch sử</p>
                        </div>
                        <Row>
                            <Col className={TestScheduleCss.test_schedule_top_history_left} span={10}>Đối tượng:</Col>
                            <Col className={TestScheduleCss.test_schedule_top_history_right} span={14}>Kiểm tra tập trung</Col>
                        </Row>
                        <Row>
                            <Col className={TestScheduleCss.test_schedule_top_history_left} span={10}>Thời lượng:</Col>
                            <Col className={TestScheduleCss.test_schedule_top_history_right} span={14}>45 phút</Col>
                        </Row>
                        <Row>
                            <Col className={TestScheduleCss.test_schedule_top_history_left} span={10}>Nội dung:</Col>
                            <Col className={TestScheduleCss.test_schedule_top_history_right} span={14}>Ôn tập chương 5</Col>
                        </Row>
                        <Row>
                            <Col className={TestScheduleCss.test_schedule_top_history_left} span={10}>Hình thức:</Col>
                            <Col className={TestScheduleCss.test_schedule_top_history_right} span={14}>Tự luận</Col>
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
export default TestScheduleWeek

// checkbox
function onChange(e: any) {
    console.log(`checked = ${e.target.checked}`);
}

// select
function handleChange(value: any) {
    console.log(`selected ${value}`);
}
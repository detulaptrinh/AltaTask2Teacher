import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./Menu.css";
import {
    Bell,
    BookOpen,
    CalendarAlt,
    CommentQuestion,
    Eyes,
    FileEditAlt,
    Vector
} from "../../assets/svg/icon.js"

export default class Menu extends Component {
    render() {
        return (
            <div className="menu-component">
                <div className="menu-vector">
                    <img src={Vector} alt="Logo Vector" />
                </div>
                <div id="menu">
                    <ul>
                        <li className="active"><Link to=""><img src={Eyes} alt="" /></Link></li>
                        <li><Link to=""><img src={BookOpen} alt="" /></Link></li>
                        <li><Link to=""><img src={FileEditAlt} alt="" /></Link></li>
                        <li><Link to=""><img src={CalendarAlt} alt="" /></Link></li>
                        <li><Link to=""><img src={Bell} alt="" /></Link></li>
                        <li><Link to=""><img src={CommentQuestion} alt="" /></Link></li>
                    </ul>
                </div>

                <div className="sub-menu">
                    <ul>
                        <li><p><Link to="">Tổng quan</Link></p></li>
                        <li>
                            <p>Quản lý lớp học</p>
                            <ul className="sub-menu-1">
                                <li><Link to="/settingclass">Danh sách lớp học</Link></li>
                                <li><Link to="/addnewlesson">Thêm buổi học mới</Link></li>
                                <li><Link to="/join">Tham gia vào lớp học</Link></li>
                            </ul>
                        </li>
                        <li>
                            <p>Bài kiểm tra</p>
                            <ul className="sub-menu-1">
                                <li><Link to="/testlist">Danh sách bài kiểm tra</Link></li>
                                <li><Link to="/ewtestmanager">Thêm bài kiểm tra mới</Link></li>
                                <li><Link to="">Nhập điểm</Link></li>
                                <li><Link to="">Bảng điểm</Link></li>
                            </ul>
                        </li>
                        <li><p><Link to="/testschedulemonth">Lịch thi</Link></p></li>
                        <li><p><Link to="">Thông báo</Link></p></li>
                        <li><p><Link to="/helpTeacher">Trợ giúp</Link></p></li>
                    </ul>
                </div>
            </div>
        )
    }
}

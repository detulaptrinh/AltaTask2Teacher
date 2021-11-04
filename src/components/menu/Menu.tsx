import React, { Component } from 'react'

// css
import "./Menu.css";

// icon menu
import {
    Bell,
    BookOpen,
    CalendarAlt,
    CommentQuestion,
    Eyes,
    FileEditAlt,
    Vector
} from "../../assets/svg/icon"

export default class Menu extends Component {
    render() {
        return (
            <div className="menu-component">
                <div className="menu-vector">
                    <img src={Vector} alt="Logo Vector" />
                </div>
                <div id="menu">
                    <ul>
                        <li className="active"><a href=""><img src={Eyes} alt="" /></a></li>
                        <li><a href=""><img src={BookOpen} alt="" /></a></li>
                        <li><a href=""><img src={FileEditAlt} alt="" /></a></li>
                        <li><a href=""><img src={CalendarAlt} alt="" /></a></li>
                        <li><a href=""><img src={Bell} alt="" /></a></li>
                        <li><a href=""><img src={CommentQuestion} alt="" /></a></li>
                    </ul>
                </div>

                <div className="sub-menu">
                    <ul>
                        <li><p><a href="">Tổng quan</a></p></li>
                        <li>
                            <p>Quản lý lớp học</p>
                            <ul className="sub-menu-1">
                                <li><a href="">Danh sách lớp hoc</a></li>
                                <li><a href="">Thêm buổi học mới</a></li>
                                <li><a href="">Tham gia vào lớp học</a></li>
                            </ul>
                        </li>
                        <li>
                            <p>Bài kiểm tra</p>
                            <ul className="sub-menu-1">
                                <li><a href="">Danh sách bài kiểm tra</a></li>
                                <li><a href="">Thêm bài kiểm tra mới</a></li>
                                <li><a href="">Nhập điểm</a></li>
                                <li><a href="">Bảng điểm</a></li>
                            </ul>
                        </li>
                        <li><p><a href="">Lịch thi</a></p></li>
                        <li><p><a href="">Thông báo</a></p></li>
                        <li><p><a href="">Trợ giúp</a></p></li>
                    </ul>
                </div>
            </div>
        )
    }
}

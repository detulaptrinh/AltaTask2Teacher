import React, { Component } from 'react'

import "./Breadcrumb.css";

export default class Breadcrumb extends Component {
    render() {
        return (
            <div className="breadcrumb-5">
                <a href="">Quản lý lớp học</a>
                <i className='bx bx-chevron-right'></i>
                <a href="">Thông tin lớp học</a>
                <i className='bx bx-chevron-right'></i>
                <p>Lịch sử</p>
            </div>
        )
    }
}

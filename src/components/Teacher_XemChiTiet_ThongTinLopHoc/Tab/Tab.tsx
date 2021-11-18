import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './Tab.css';

export default class Tab extends Component {
    render() {
        return (
            <div className="tab-5">
                <div className="tab-left">
                    <Link to="/class">Thông tin lớp học</Link>
                </div>
                <div className="tab-right">
                    <Link to="/chat">Hỏi đáp Q & A</Link>
                </div>
            </div>
        )
    }
}

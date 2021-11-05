import React, { Component } from 'react'

import './Tab.css';

export default class Tab extends Component {
    render() {
        return (
            <div className="tab-5">
                <div className="tab-left">
                    <a>Thông tin lớp học</a>
                </div>
                <div className="tab-right">
                    <a>Hỏi đáp Q & A</a>
                </div>
            </div>
        )
    }
}

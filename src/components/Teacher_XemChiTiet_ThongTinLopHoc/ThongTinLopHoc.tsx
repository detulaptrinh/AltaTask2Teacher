import React, { Component } from 'react';

import './ThongTinLopHoc.style.css';

import Breadcrumb from './Breadcrumb/Breadcrumb';
import Tab from './Tab/Tab';
import Box_ThongTinLopHoc from './Box_ThongTinLopHoc/Box_ThongTinLopHoc';

import { Button } from 'antd';

export default class ThongTinLopHoc extends Component {
    render() {
        return (
            <div className="thong-tin-lop-hoc">
                <Breadcrumb />
                <Tab />

                <main>
                    <Box_ThongTinLopHoc />
                </main>
                <div className="btn">
                    <Button type="primary">Bắt đầu lớp học</Button>
                </div>
            </div>
        )
    }
}

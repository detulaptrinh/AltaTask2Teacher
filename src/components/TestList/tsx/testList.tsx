import { Breadcrumb, Button, Col, Modal, Row, Tabs } from 'antd';
import React, { Component } from 'react';
import AllTests from './allTests';
import GradedTest from './gradedTest';
import TestListCss from '../moduleCss/testList.module.css'
import '../css/testList.css'

import UngradedTest from './ungradedTest';
import UpcomingTest from './upcomingTest';
import { Link } from 'react-router-dom';
const { TabPane } = Tabs;

export default class TestList extends Component {
    render() {
        return (
            <>
                <div>
                    <div>
                        <Breadcrumb separator=">" className="separator_Breadcrumb">
                            <Breadcrumb.Item className={TestListCss.title_Left}>
                                Bài kiểm tra
                            </Breadcrumb.Item>
                            <Breadcrumb.Item className={TestListCss.title_Right}>
                                Danh sách bìa kiểm tra
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div>
                        <div className="tab_Group">
                            <div className="tab_Group_tabs">
                                <Tabs defaultActiveKey="1" type="card">
                                    <TabPane tab="Tất cả bài kiểm tra" key="1">
                                        <AllTests />
                                    </TabPane>
                                    <TabPane tab="Bài kiểm tra sắp tới" key="2">
                                        <UpcomingTest />
                                    </TabPane>
                                    <TabPane tab="Bài kiểm tra đã chấm" key="3">
                                        <GradedTest />
                                    </TabPane>
                                    <TabPane tab="Bài kiểm tra chưa chấm" key="4">
                                        <UngradedTest />
                                    </TabPane>
                                </Tabs>
                            </div>
                        </div>
                        <div className={TestListCss.btn_Group}>
                            <Link to="#">
                                <Button className={TestListCss.btn_New_Test}>
                                    Thêm bài kiểm tra
                                </Button>
                            </Link>

                        </div>
                    </div>


                  
                </div>
            </>
        );
    }
}


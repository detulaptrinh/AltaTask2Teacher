import { Breadcrumb, Button, Col, Row, Tabs, Select, DatePicker, Input, Table, Space, Tag, Pagination, InputNumber } from 'antd';
import React, { Component } from 'react';
import NotificationsCss from './notificationss.module.css'
import './notificationss.css'
import { Link } from 'react-router-dom';
import UserNotice from './UserNotice/userNotice';


const { TabPane } = Tabs;


export default class Notifications extends Component {
    render() {
        return (
            <>
                <div>
                    <Breadcrumb separator=">" className="separator_Breadcrumb_Notifications">
                        <Breadcrumb.Item className={NotificationsCss.title_Left}>
                            Bài kiểm tra
                        </Breadcrumb.Item>
                        <Breadcrumb.Item className={NotificationsCss.title_Right}>
                            Danh sách bìa kiểm tra
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div>
                    <div className="tab_Group_Notifications">
                        <div className="tab_Group_tabs_Notifications">
                            <Tabs defaultActiveKey="1" type="card">
                                <TabPane tab="Thông báo người dùng" key="1">
                                    <UserNotice/>
                                </TabPane>
                                <TabPane tab="Thông báo hệ thống" key="2">
                                    Thông báo hệ thống
                                </TabPane>
                            </Tabs>
                        </div>
                    </div>
                    <div className={NotificationsCss.btn_Group}>
                        <Link to="#">
                            <Button className={NotificationsCss.btn_New_Test}>
                                Thêm bài kiểm tra
                            </Button>
                        </Link>

                    </div>
                </div>
            </>
        );
    }
}


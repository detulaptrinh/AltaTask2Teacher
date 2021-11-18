import { Breadcrumb, Button, Tabs, Modal, Input, Image } from 'antd';
import React, { useState } from 'react';
import NotificationsCss from '../moduleCss/notificationss.module.css'
import '../css/notificationss.css'
import { Link } from 'react-router-dom';
import UserNotice from './userNotice';
import SystemNotice from './systemNotice';
import { fontChangerBar } from '../../../assets/images';

const { TabPane } = Tabs;

const Notifications = (): JSX.Element => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };


    
    return (
        <>
            <div>
                <Breadcrumb separator=">" className="separator_Breadcrumb_Notifications">
                    <Breadcrumb.Item className={NotificationsCss.title_Left}>
                        Bài kiểm tra
                    </Breadcrumb.Item>
                    <Breadcrumb.Item className={NotificationsCss.title_Right}>
                        Danh sách bài kiểm tra
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div>
                <div className="tab_Group_Notifications">
                    <div className="tab_Group_tabs_Notifications">
                        <Tabs defaultActiveKey="1" type="card">
                            <TabPane tab="Thông báo người dùng" key="1">
                                <UserNotice />
                            </TabPane>
                            <TabPane tab="Thông báo hệ thống" key="2">
                                <SystemNotice />
                            </TabPane>
                        </Tabs>
                    </div>
                </div>
                <div className={NotificationsCss.btn_Group}>
                    <Link to="#">
                        <Button className={NotificationsCss.btn_New_Test} onClick={showModal}>
                            Thêm bài kiểm tra
                        </Button>
                    </Link>
                </div>
                <Modal
                    className="modal_Notifications"
                    centered
                    visible={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    title="Gửi thông báo mới"
                >
                    <Input placeholder="Đối tượng nhận" className={NotificationsCss.input_receiving} />
                    <Input placeholder="Chủ đề" className={NotificationsCss.input_theme} />
                    <Button className={NotificationsCss.btn_Send}>Gửi</Button>
                    <div  className={NotificationsCss.input_text_area_container}>
                        <Image src={fontChangerBar} className={NotificationsCss.img_input}/>
                        <div className={NotificationsCss.block_1}></div>
                    </div>
                </Modal>
            </div>
        </>
    );

}
export default Notifications;



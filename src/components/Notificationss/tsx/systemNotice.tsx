import { Input, Table, Image, Dropdown, Menu } from 'antd';
import React, { useState, useEffect } from 'react';
import SystemNoticeCss from '../moduleCss/systemNotice.module.css'
import '../css/systemNotice.css'
import 'antd/dist/antd.css';
import { SearchOutlined, MoreOutlined } from '@ant-design/icons';

import { imgNotice } from '../../../assets/images';
import { systenNoticeData } from '../data';


const SystemNotice = (): JSX.Element => {
    const menu = (
        <Menu>
            <Menu.Item>
                <a>Đánh dấu đã đọc</a>
            </Menu.Item>
            <Menu.Item>
                <a>Xóa</a>
            </Menu.Item>
        </Menu>
    );
    const columns = [
        {
            key: "1",
            title: "",
            dataIndex: 'img',
            width: '5%',
            render: (status: string) => {
                switch (status) {
                    case "img1":
                        return <Image src={imgNotice} style={{ width: 40, height: 40 }}></Image>;
                }
            },
        },
        {
            key: "2",
            title:
                <div className={SystemNoticeCss.box_Searchs}>
                    <Input className={SystemNoticeCss.systemNoticeCss} title="Search" placeholder="Tìm Kiếm" prefix={<SearchOutlined />} />
                </div>,
            dataIndex: 'notice',
            width: '80%',

        },
        {
            key: "3",
            title:
                <div className={SystemNoticeCss.dropdown_MoreOutlined}>
                    <Dropdown overlay={menu}>
                        <a onClick={e => e.preventDefault()}>
                            <MoreOutlined />
                        </a>
                    </Dropdown>
                </div>,
            dataIndex: 'time',
            width: '10%',

        },
    ]
    const data: SystemNotice[] = systenNoticeData;
    interface SystemNotice {
        img: string,
        notice: string,
        time: string
    }
    return (
        <>
            <div className="system_Notice_notice">
                <Table
                    columns={columns}
                    dataSource={data}
                    rowSelection={{
                        type: 'checkbox',
                        onSelect: (record) => {
                            console.log({ record })
                        },
                        selections: [

                            {
                                key:'all',
                                text:'Tất cả'
                            },
                            {
                                key:'read',
                                text:'Chưa đọc'
                            },
                            {
                                key:'Uunread',
                                text:'Đã đọc'
                            }
                            
                        ]
                    }}
                >
                </Table>
            </div>
        </>
    );

}
export default SystemNotice;


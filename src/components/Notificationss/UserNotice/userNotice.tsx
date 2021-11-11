import { Input, Table, Image } from 'antd';
import React, { useState, useEffect } from 'react';
import UserNoticeCss from './userNotice.module.css'
import './userNotice.css'
import 'antd/dist/antd.css';
import { SearchOutlined } from '@ant-design/icons';

import { imgNotice } from '../../../assets/images';

const columns = [
    {
        key: "1",
        title: "",
        dataIndex: 'img',
        width: '5%',
        render: (status: string) => {
            switch (status) {
                case "img1":
                    return <Image src={imgNotice} style={{width:40,height:40}}></Image>;
            }
        },
    },
    {
        key: "2",
        title:
            <div className={UserNoticeCss.box_Searchs}>
                <Input className={UserNoticeCss.allTest_Searchs} title="Search" placeholder="Tìm Kiếm" prefix={<SearchOutlined />} />
            </div>,
        dataIndex: 'notice',
        width: '80%',

    },
    {
        key: "3",
        title: '',
        dataIndex: 'time',
        width: '10%',

    },
]
const data = [{}];
for (let i = 0; i < 7; i++) {
    data.push({
        key: i,
        img: `img1`,
        notice: `Lorem Ipsum đã thích một bình luận của bạn`,
        time: `5 phút trước`,
    });
}
const UserNotice = (): JSX.Element => {
    const [alreadySelectRows, setAlreadySelectRows] = useState()
    return (
        <>
            <div className="table_user_notice">
                <Table
                    columns={columns}
                    dataSource={data}
                    rowSelection={{
                        type: 'checkbox',
                        onSelect: (record) => {
                            console.log({ record })
                        },
                        selections: [
                            Table.SELECTION_ALL,
                            Table.SELECTION_INVERT,
                        ]
                    }}
                >

                </Table>
            </div>
        </>
    );

}
export default UserNotice;


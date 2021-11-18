import React from 'react'
import { Breadcrumb, Tabs } from 'antd'
import Setting from "./Setting.module.css"
import './Settingclass.css'
import { Class1, Class2 } from "./Class/class";

const { TabPane } = Tabs;

function Settingclass() {
    return (
        <>
            <div className="settingclass">
                <div className={Setting.title}>
                    <span className="font-bold">Quản lý lớp học</span>
                </div>
                <div className="settingclass">
                    <div className="tab_switch mt-8 font-bold">
                        <Tabs defaultActiveKey="1" type="card">
                            <TabPane tab="Lớp học sắp tới" key="1">
                                <Class1 />
                            </TabPane>
                            <TabPane tab="Lớp học đã tổ chức" key="2">
                                <Class2 />
                            </TabPane>
                        </Tabs>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Settingclass

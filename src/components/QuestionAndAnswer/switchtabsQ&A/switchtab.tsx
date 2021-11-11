import React from "react";
import {  Breadcrumb } from 'antd';
import switchTab from "./switchtab.module.css"

function SwitchtabQA() {
    return (
      <>
        <div className={switchTab.switch_list}>
            <div className={switchTab.switch_list_tab_left}>
                <a>Thông tin lớp học</a>
            </div>

            <div className={switchTab.switch_list_tab_right}>
                <a>Hỏi đáp Q & A</a>
            </div>
        </div>
    
      </>
    );
  }

export default SwitchtabQA

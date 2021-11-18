import React from "react";
import { Link } from "react-router-dom";
import switchTab from "./switchtab.module.css"

function SwitchtabQA() {
    return (
      <>
        <div className={switchTab.switch_list}>
            <div className={switchTab.switch_list_tab_left}>
              <Link to="/class">Thông tin lớp học</Link>
            </div>

            <div className={switchTab.switch_list_tab_right}>
              <Link to="/chat">Hỏi đáp Q & A</Link>
            </div>
        </div>
    
      </>
    );
  }

export default SwitchtabQA

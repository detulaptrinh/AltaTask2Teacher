import React, { Component,useState }  from 'react'
import "./boxjoin.css";
import TextArea from "rc-textarea";
import { Link } from "react-router-dom";
import Password from 'antd/lib/input/Password';


function boxjoin(){
    return (
        <>
            <div className= "box_join">  </div>
                <p className = "box_join_text_thamgialophoc">Tham gia lớp học</p>
                <div className="col_join">
                    <p className = "box_join_text_thamgia">Tham gia lớp học</p>
                    <input placeholder="ID hoặc link lớp học" className="col_input_join_id" />
                    <input placeholder="Mật khẩu lớp học" className="col_input_join_pass" type="password" />
                    <a className="col_join_btn_huy">
                        <p className="col_join_text_huy">Hủy</p>
                    </a>
                    <a className="col_join_btn_thamgia">
                    <Link to="/joinclass"><p className="col_join_text_thamgia">Tham gia</p></Link>
                    </a>
                </div>
          
        </>
    );

}

export default boxjoin    
import React, { Component } from "react";

import "./Box_ThongTinLopHoc.css";

import Avatar from "../../../assets/img/Ellipse 43.png";

export default class Box_ThongTinLopHoc extends Component {
    render() {
        return (
            <div className="box-thong-tin-chi-tiet">
                <div className="box-1">
                    <div className="img">
                        <img src={Avatar} alt="Avatar" />
                    </div>
                    <div className="row"></div>
                    
                </div>
            </div>
        );
    }
}

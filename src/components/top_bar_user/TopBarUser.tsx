import React, { Component } from "react";

import "./TopBarUser.css";

import { UserCircle } from "../../assets/svg/icon";

export default class TopBarUser extends Component {
    render() {
        return (
            <div className="top-bar">
                <div className="top-bar-user">
                    <img src={UserCircle} alt="" />
                    <div className="top-bar-user-name">Thanh Tâm</div>
                    <div className="top-bar-user-logout">
                        <a>Đăng xuất</a>
                    </div>
                </div>
            </div>
        );
    }
}

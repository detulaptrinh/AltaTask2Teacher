import React, { Component } from 'react'

import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
// componet menu
import Menu from './components/menu/Menu';
import TopBarUser from './components/top_bar_user/TopBarUser';

//Question And Answer Components
import ChatBody from './components/QuestionAndAnswer/chatBody/ChatBody';
// component Thông tin lớp học
import ThongTinLopHoc from './components/Teacher_XemChiTiet_ThongTinLopHoc/ThongTinLopHoc';
import HelpTeacher from './components/HelpTeacher/HelpTeacherBox';
import JoinClassTeacher from './components/JoinClassTeacher/JoinClassTeacher';


import "./App.css"; // css

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div className="App">
                        {/* left */}
                        <div className="app-left">
                            <Menu />
                        </div>

                        {/* right */}
                        <div className="app-right">
                            <TopBarUser />
                            <main>
                            <ChatBody/>
                                
                                {/* 5. Thông tin lớp học */}
                                <ThongTinLopHoc />
                                <JoinClassTeacher />
                                {/* <Route path="/helpTeacher" component={HelpTeacher} />
                                <Route path="/joinClass" component={JoinClassTeacher} /> */}
                            </main>
                        </div>
                    </div>
                </Router>
            </div>
        )
    }
}

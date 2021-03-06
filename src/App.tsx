import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
// componet menu
import Menu from './components/Menu/Menu';
import TopBarUser from './components/top_bar_user/TopBarUser';
import ChatBody from './components/QuestionAndAnswer/chatBody/ChatBody';
import ThongTinLopHoc from './components/Teacher_XemChiTiet_ThongTinLopHoc/ThongTinLopHoc';
import HelpTeacher from './components/HelpTeacher/HelpTeacherBox';
import JoinClassTeacher from './components/JoinClassTeacher/JoinClassTeacher';
import Boxjoin from './components/JoinClassTeacher/JoinClass/BoxJoin';
import "./App.css"; // css
import AddNewLesson from './components/AddNewLesson/AddNewLesson';
import NewTestManager from './components/AddNewTestManager/NewTestManager';
import TestScheduleMonth from './components/TestSchedule/TestScheduleMonth';
import TestScheduleWeek from './components/TestSchedule/TestScheduleWeek';

import TestList from './components/TestList/tsx/testList';
import AllTests from './components/TestList/tsx/allTests';
import Notifications from './components/Notificationss/tsx/notifications';
import Dashboard from './components/Dashboard/Dashboard';
import Settingclass from './components/SettingClass/Settingclass';

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
                                <Route exact path="/" component={Dashboard} />
                                <Route path="/settingclass"  component={Settingclass}/>
                                <Route path="/chat" component={ChatBody} />
                                <Route path="/class" component={ThongTinLopHoc} />
                                <Route path="/joinclass" component={JoinClassTeacher} />
                                <Route path="/helpTeacher" component={HelpTeacher} />  
                                <Route path="/join" component={Boxjoin} />  

                                {/* Tri */}
                                <Route path="/testlist" component={TestList} />
                                <Route path="/notifications" component={Notifications} />
                                <Route path="/allTest" component={AllTests} />
                                <Route path="/newtestmanager" component={NewTestManager} />
                                <Route path="/testschedulemonth" component={TestScheduleMonth} />
                                <Route path="/testscheduleweek" component={TestScheduleWeek} />
                                <Route path="/addnewlesson" component={AddNewLesson} />

                            </main>
                        </div>
                    </div>
                </Router>
            </div>
        )
    }
}

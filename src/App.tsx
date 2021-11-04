import React, { Component } from 'react'

import { BrowserRouter as Router, Route } from "react-router-dom";

// componet menu
import Menu from './components/menu/Menu';
import TopBarUser from './components/top_bar_user/TopBarUser';

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
                                
                            </main>
                        </div>
                    </div>
                </Router>
            </div>
        )
    }
}

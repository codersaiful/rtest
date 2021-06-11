import React, { Component } from 'react';
import Logo from './logo';
import Menu from './menu'

class MyHeader extends Component{

    render(){
        return(
            <header className="my-header">
                <div className="topbar">
                    <Logo />
                </div>
                <div className="menu-area">
                    <Menu />
                </div>
            </header>
        );
    }
}

export default MyHeader;
import React, {Component} from 'react';

class Menu extends Component{

    render(){
        return(
            <div className="menubar">
                <ul className="navbar">
                    <li><a href="./home">Home</a></li>
                    <li><a href="./about">About</a></li>
                    <li><a href="./service">Service</a></li>
                    
                </ul>
            </div>
        );
    }
}

export default Menu;
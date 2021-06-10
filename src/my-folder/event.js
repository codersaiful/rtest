import React from 'react';

class MyEvent extends React.Component{
    
    shoot = (a) => {
        alert( "Alert is about: " + a );
    }
    render(){
        return(
            <div className="event-controller">
                <h2>Event Management</h2>
                <button onClick={() => this.shoot("Hello Bangladesh")}>Click - {this.props.text}</button>
            </div>
        );
    }
}
export default MyEvent;
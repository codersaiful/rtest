import React from 'react';

class Form extends React.Component{
    constructor(){
        super();
        this.state = {username: ""};
    }

    myChangeEvent = (event) => {
        this.setState({username: event.target.value});
    }

    render() {
        let name = <p>Please Enter name</p>;
        if(this.state.username !== ''){
            name = '';
        }
        return (
             <div className="my-forms">
                 {name}
                 <h1>Hello {this.state.username}</h1>
                 <input
                 type="text" 
                 onChange={this.myChangeEvent}
                 placeholder="Your name please" />
             </div>
        );
    }
}

export default Form;
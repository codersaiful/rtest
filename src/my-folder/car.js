import React from 'react';

class Car extends React.Component{
    constructor(){
      super();
      this.state = {color: "Red"};
    }
    render(){
      return <h2>I love Car. which color will be {this.state.color}. and brand: {this.props.brand}.</h2>;
    }
  }

  export default Car;
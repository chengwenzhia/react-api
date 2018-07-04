import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class Clock extends Component {
	constructor(props) {
	    super(props);
	    this.state = {date: new Date()};
    }	
    
	componentDidMount() {
		this.Timer = setInterval(
			()=> this.tick(),1000
		)
 	};

    componentWillUnmount() {
		clearInterval(this.Timer);
    };

    tick() {
	    this.setState({
	      date: new Date()
	    });
    }

	render() {
		return(
			<div className="">
				<h1>hello,world!</h1>
				<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
			</div>
			)
	}
}



class Cdn extends Component {
  render() {
    return (
      <div className="App">
        <Clock />
      </div>
    );
  }
}

export default Cdn;

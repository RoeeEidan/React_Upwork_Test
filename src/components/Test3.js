// The bug happened because the function incrementCounter is using the 
// keyword "this" which refers to the object that owns the function,
// unless the function is bounded (you can bind a function to an object only once, 
// and once the function is bounded to an object the word "this" will always refer to that object).
// So when when making the function incrementCounter an event listner (onClick) of a DOM element we are attaching it 
// to the window object and then if the function is not bounded the word "this" will refer to the window.
// so all I did is bind the function incrementCounter to its class (Test3)


import React, { Component } from "react";

class Test3 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0
		}
	}

	incrementCounter() {
		this.setState({ counter: this.state.counter + 1 });
	}

	render() {
		return (
			<div>
				<div>Counter value {this.state.counter}</div>
				<input
					type="button"
					value="Click here"
					onClick={this.incrementCounter.bind(this)}
				/>
			</div>
		);
	}
}

export default Test3;

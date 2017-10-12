import React, { Component } from "react";


// class ImproveThis extends Component {

// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			fullname: `${props.first_name} ${props.last_name}`
// 		};
// 	}

// 	render() {
// 		return (
// 			<span>{this.state.fullname}</span>
// 		);
// 	}
// }

const ImproveThis = props => <span>{`${props.first_name} ${props.last_name}`}</span>


export default ImproveThis;

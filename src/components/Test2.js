import React, { Component } from "react";

class Test2 extends Component {

	constructor(props) {
		super(props);
		this.state = {
			fetched: null,
			err: false,
			message: 'Welcome!'
		};
	}

	componentDidMount() {
		this.setState({ message: 'Fetching...' })
		fetch("https://maps.googleapis.com/maps/api/geocode/json?address=Oxford%20University,%20uk&sensor=false", { method: "GET" })
			.then((resp => {
				if (resp.status === 200) {
					this.setState(({ fetched: true, message: 'Fetching Completed!' }))
				}
			}).bind(this))
			.catch((err => {
				this.setState((state) => ({ err: true, message: 'Error fetching data' }))
			}).bind(this))
	}

	render() {
		const style = {
			border: "1px solid black",
			padding: "10px"
		};
		return (
			<div style={style}>
				{this.state.message}
			</div>
		)
	}
}

export default Test2;

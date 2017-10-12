import React, { Component } from "react";

class Test2 extends Component {

	constructor(props) {
		super(props);
		this.state = {
			fetching: false,
			fetched: null,
			err: false
		};
	}

	componentDidMount() {
		this.setState({fetching: true})
		fetch("https://maps.googleapis.com/maps/api/geocode/json?address=Oxford%20University,%20uk&sensor=false", { method: "GET" })
			.then((resp => {
				if (resp.status === 200) {
					this.setState(({ fetched: true, fetching: false}))
				}
			}).bind(this))
			.catch((err => {
				this.setState((state) => ({ err: true }))
			}).bind(this))
	}

	getMessage(){
		if( this.state.fetching && !this.state.err ){
			return 'Fetching...'
		}else if( this.state.fetched ){
			return 'Fetching Completed'
		}else if ( this.state.err ){
			'Error fetching!!!'
		}else{
			'About to fetch'
		}
	}

	render() {
		const style = {
			border: "1px solid black",
			padding: "10px"
		};
		return (
			<div style={style}>
				{this.getMessage()}
			</div>
		)
	}
}

export default Test2;

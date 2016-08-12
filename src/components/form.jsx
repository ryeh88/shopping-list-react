require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

export default class Form extends React.Component {
	render() {		
			return (
	 			<form onSubmit={this.handleCreate.bind(this)}>
		       	<input ref="newText" type="text" placeholder="item here"></input>
		        <button>Save</button>
		        </form>
	  			)
	}

	handleCreate(e){
		e.preventDefault();
		
		this.props.createItem(this.refs.newText.value);
	}
}



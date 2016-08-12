require('normalize.css/normalize.css');
require('styles/App.css');
import React from 'react';
import Form from './form';

export default class List extends React.Component {
  constructor(props) {
    super(props);
  	this.state = {items:[]};
  }
  
  render() {
    return (
      <div className="shopping-list-wrapper">
      	<h1>Shopping List</h1>
      	<Form createItem={this.createItem.bind(this)} itemArray={this.state.items}/>
      	<ul>
      		{this.state.items.map((item, i ) => <li key={i}>{this.state.items[i]}</li>)}
      	</ul>
      </div>
    )
  }
  
  createItem(item){
    this.state.items.push(item);
    this.setState({items: this.state.items});
    console.log(this.state.items);
  }
}

import React, { Component } from 'react';
import DataTable from './DataTable';

export default class Home extends Component {

  constructor(){
    super();
    this.state = {
    	response:[]
    };
  }


  componentWillMount(){
  	this.search();
  }
  render() {
    return (
	  <div>
	  	<DataTable
	  	  header={['Nombre','Descripción']}
	  	  data={this.state.response}
	  	/>
	  </div>
    );
  }

  async search(){
 
    const response  = await fetch('http://localhost:3000/api/channels', {
      headers: {
      "Content-Type": "application/json",
       authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwcm9qZWN0X2lkIjoiSUQtMDEiLCJleHAiOjE1Mzc2NDQ5OTR9.niKzVHZZpcVHMBpVQ04bawZU8Un2z2fUOiWG7Ygw0mg'
      }
    })
    .then(response => response.json())
    .then(paserJSON => paserJSON.response)

    this.setState({
    	response: response,
    })
  }
}
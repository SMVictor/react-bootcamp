import React, { Component } 		  from 'react';

export default class About extends Component {

  constructor(){
    super();
    this.state = {};
  }


  componentWillMount(){
  	this.search();
  }
  render() {
    return (
      <h1>Home Screen</h1>
    );
  }

  search(query = "star"){
 
    const request = require('superagent');


    var url = "http://localhost:3000/api/channels";
    request.get(url)
    .set('Access-Control-Allow-Origin', '*')
    .end((err, res) => {
    // Do something
     });
  }
}
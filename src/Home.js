import React, { Component } 		  from 'react';

export default class About extends Component {

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
	  this.state.response.map((dynamicData, i)=> 
	  	<div>
	  	<div className="row mt-1 ml-1  mr-1 pt-3 tbl_head d-none d-md-flex">
	    <div className="col-12 col-md-4">
	      <p className="text-uppercase">Nombre</p>
	    </div>
	    <div className="col-12 col-md-4">
	      <p className="text-uppercase">Descripción</p>
	    </div>
	  </div>
	    <div className="row ml-1 mr-1 tbl_row">
          <div class="col-12 col-md-3 pt-md-3">
            <p className="d-md-none font-weight-bold">Nombre</p>
            <p className="text-md-center">{ dynamicData.name }</p>
          </div>
          <div className="col-12 col-md-4  pt-md-3">
            <p className="d-md-none font-weight-bold">Descripción</p>
            <p className="text-md-center">{ dynamicData.description }</p>
          </div>
        </div>
        </div>
	  )
    );
  }

  async search(){
 
    const response  = await fetch('http://localhost:3000/api/channels', {
      headers: {
      "Content-Type": "application/json",
       authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwcm9qZWN0X2lkIjoiSUQtMDEiLCJleHAiOjE1Mzc1NTQzMDJ9.053sGp9s-y6BWQYl6g-LGJpm5qD0BeBwkLis1fSkddE'
      }
    })
    .then(response => response.json())
    .then(paserJSON => paserJSON.response)

    this.setState({
    	response: response,
    })
  }
}
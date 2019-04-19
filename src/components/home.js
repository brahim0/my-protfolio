import React, { Component } from 'react'
import brahim from './img/brahim.jpg'

export default class Home extends Component {
  render() {
    return (
        
        <div id="home" className="row home-main">
        <div className="col-12">
          <img src={brahim} className="mx-auto d-block img-fluid img-thumbnail main-img my-4" />
          <div className="mx-auto d-block my-2 text-center name text-capitalize">
            <span className="first-name">brahim</span>  <span className="last-name">hmida</span>
          </div>
          <div className="mx-auto d-block text-center title-job">
            I'm a FullStack Developer
          </div>

        </div>



      </div>
    )
  }
}

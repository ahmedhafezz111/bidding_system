import React, { Component } from 'react'
import Child from '../Child/Child'

export default class Parent extends Component {

  render() {
    return (
      <>
        <h1 className='bg-info'>Hello Parent</h1>
            <div className="container">
              <div className="row">
                {this.props.allProduct.map((product , index)=> <Child key={index}  index={index} productDetails={product} update={this.props.update} delete={this.props.delete} />) /* product shayel el obj*/ } 

              </div>
            </div>

      </>
    )
  }
}

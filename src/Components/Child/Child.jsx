import React, { Component } from 'react'

export default class Child extends Component {

  render() {
    let {id , productName , price , count , onSale} = this.props.productDetails //destructing
    return (
    <>
    <div className="col-lg-4">
      <div className="card mt-4">
        <div className="card-body">
        <h5>Product ID: {id} </h5>
          <h5>Product Name: {productName} </h5>
          <h6>Product Price:{price} </h6>
          <h6>Product Count:{count}</h6>
          <p>Lorem ipsum dolor sit amet.</p>
          {onSale == true ? <p className='bg-danger my-1  p-1 position-absolute end-0 top-0 text-light '>Sale</p> :`` }
          <button className='btn btn-danger my-1 w-100' onClick={() => this.props.delete(id)}>Delete</button>
          <button className='btn btn-info my-1 w-100' onClick={()=> this.props.update(this.props.index,1)}>+</button>
          <button className='btn btn-warning my-1 w-100'  onClick={()=> this.props.update(this.props.index,-1)}>-</button>
          

        </div>
      </div>
    </div>
    </>
    )
  }
}

import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import Style from "./Product.module.css"
export default function Product() {
  let [product , setProduct] = useState([])

  useEffect(() => {
    const getApi = async () => {
      try {
        const response = await axios.get("http://localhost:9001/products");
        if (Array.isArray(response.data) && response.data.length > 0) {
          setProduct(response.data);
          console.log(response.data);
        } else {
          console.error("Response data is not an array or is empty:", response);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getApi();

    return () => {
    };
  }, []);

  return (
    <>
    <section className='py-5 bg-light '>
        <div className="container">
        <div className="row">
          <h1>Product</h1>
          {product.length > 0 ? product.map((sProduct , ind)=> <div key={ind}  className="col-lg-4">
            <div className={`card my-2 ${Style.card}`}>
              <img src={sProduct.image_url} className='card-img-top' height={200}  alt="" />
              <div className="card-body text-center ">
                <h5 className='card-title text-center'>{sProduct.product_name}</h5>
                <p className='card-text text-center'>{sProduct.title}</p>
                <p className='card-text text-center'>Start Price: {sProduct.start_price} <span>$</span></p>
                <Link to={`/product/${sProduct.id}`} className='btn btn-success '>Start Bidding</Link>
                
              </div>
            </div>
          </div> ) :  <div class="d-flex justify-content-center">
  <div class={`spinner-border text-warning ${Style.lwh}`}  role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>}
        </div>
        </div>
    </section>
    </>
  )
}

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';

export default function ProductDetail() {
  const [product, setProduct] = useState({});
  const [currentBid, setCurrentBid] = useState('');
  const [storedBid, setStoredBid] = useState('');
  const { productId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:9001/products/${productId}`)
      .then((res) => res.json())
      .then((product) => {
        console.log(product);
        setProduct(product);
      });
  }, [productId]);

  useEffect(() => {
    const bidFromLocalStorage = localStorage.getItem(`product_${productId}_bid`);
    if (bidFromLocalStorage) {
      setStoredBid(bidFromLocalStorage);
    }
  }, [productId]);

  const handleBidChange = (e) => {
    setCurrentBid(e.target.value);
  };

  const handleBidSubmit = () => {
    const minBid = parseInt(storedBid, 10) + 99 || product.start_price + 99;
    if (parseInt(currentBid) <= minBid) {
      alert(`Please enter a bid at least 100 dollars greater than the previous bid.`);
      return;
    }
    localStorage.setItem(`product_${productId}_bid`, currentBid);
    setStoredBid(currentBid);
    console.log('Bid submitted:', currentBid);
  };

  return (
    <>
      <section className='pdetail py-5'>
        <div className='container'>
          <div className='row d-flex justify-content-between'>
            <div className='col-lg-6'>
              <img src={product.image_url} width={500} height={400} alt='' />
            </div>
            <div className='col-lg-6'>
              <h2>Product Name: {product.title}</h2>
              <p>Product Start Price: {product.start_price}<span>$</span></p>
              <label className='bidValue' htmlFor='bidValue'>
                Your Bid Value
              </label>
              <input
                type='number'
                inputMode='numeric'
                className='form-control w-25'
                name=''
                id='bidValue'
                value={currentBid}
                onChange={handleBidChange}
              />
              <button className='btn btn-primary mt-2' onClick={handleBidSubmit}>
                Bid
              </button>
              {storedBid && (
                <p>Current Bid: {storedBid} <span>$</span></p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

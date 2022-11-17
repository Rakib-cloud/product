import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const Compare = () => {
    const { _id } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/product/${_id}`)
          .then(res => res.json())
          .then(data => setProduct(data));
      }, [_id]);
    return (
        <div class="card bg-base-100 shadow-2xl w-1/2  items-center ml-64" >


        <figure class="px-10 pt-10">
          <img src={product.img} alt="mobilephone" class="rounded-xl object-contain h-48 w-96" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Product Name:{product.name}</h2>
          
          <p>productdetails:{product.desc}</p>
          <p>product price :{product.price} <span>BDT </span></p>
          <div className='flex'>
            <div>
            <button class="btn btn-success">EMI</button>

            </div>

            <div className='ml-5'>
            <button class="btn btn-success">Buy</button>

            </div>
          </div>

          
         
          


        </div>


      </div>
    );
};

export default Compare;
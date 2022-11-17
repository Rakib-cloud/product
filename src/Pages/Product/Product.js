import React, { useEffect, useState } from 'react';
import Productdetails from './Productdetails';
const Product = () => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
      fetch(`http://localhost:5000/product`)
          .then(res => res.json())
          .then(data => setProduct(data));
  }, []);
    return (
      <div className='my-10'>
      <h4 className='text-xl text-secondary text-center my-12 font-bold '>Products </h4>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {
              products?.map(tool => <Productdetails
                key={tool._id}
                tool={tool}
              >


              </Productdetails>)
          }
      </div>

  </div>
    );
};

export default Product;
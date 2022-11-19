import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Add';
const Compare = () => {
  const { _id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/product/${_id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [_id]);


  

  //add to compare works starts
  const handleClick = () => {

    document.getElementById("product-container").innerHTML = "";
    document.getElementById('details-show').style.display = 'none';


    //step2:api fetching from api link
    const url = `http://localhost:5000/product`;
    fetch(url).then(res => res.json()
    ).then(data => showproductdetails(data));


    //add to compare works ends
  }
  //end handleclick 

  //showproducts
  const showproductdetails = (products) => {


    let flag = 0;
    for (const product of products) {


      const parent = document.getElementById('product-container');
      const div = document.createElement('div');

      div.innerHTML = `
 <ul>
  <li>${product.name}</li>
  
  <li>${product._id}</li>
  <div> 
  <button  onclick="details('${product._id}')" class=" btn btn-success">Add</button>
</div>
</ul>
 `;

      parent.appendChild(div);
      flag = flag + 1;

    }

  }
  //specific product details 
  const details = (_id) => {
    const url = ` http://localhost:5000/product/${_id}`;
    console.log(_id)
    fetch(url)
      .then((response) => response.json())
      .then((data) => setdetails(data));
  };



  const setdetails = (info) => {

    document.getElementById('details-show').style.display = 'block';
    document.getElementById('details-show').innerHTML = `
  <div class="card bg-base-100 shadow-2xl w-1/2  items-center ml-20" >


        <figure class="px-10 pt-10">
          <img src=${info.img} alt="mobilephone" class="rounded-xl object-contain h-48 w-96" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Product Name:${info.name}</h2>

          <p>productdetails:${info.desc}</p>
          <p>product price :${info.price} <span>BDT </span></p>
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
`;

  }
  const clicked = true;



//calculation work 

  return (
    <>
      <div className='flex justify-end mr-5'>
        <button class="btn btn-success" onClick={handleClick} >ADD to Compare</button>


        <div id="product-container">

        </div>

      </div>


      <div class="card bg-base-100 shadow-2xl w-1/2  items-center ml-20" >


        <figure class="px-10 pt-10">
          <img src={product.img} alt="mobilephone" class="rounded-xl object-contain h-48 w-96" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Product Name:{product.name}</h2>

          <p>productdetails:{product.desc}</p>
          <p>product price :{product.price} <span>BDT </span></p>
          <div className='flex'>
            {
              clicked ? <>
                <label for="my-modal" class="btn btn bg-success">Compare</label>


                <input type="checkbox" id="my-modal" class="modal-toggle" />
                <div class="modal">
                  <div class="modal-box">
                  <div className='flex'>
                    <div><figure class="px-10 pt-10">
          <img src={product.img} alt="mobilephone" class="rounded-xl object-contain h-48 w-96" />
        </figure></div>

        <div class="px-10 pt-10">
              <p className='mt-5'>{product.name}</p>
              <p className='mt-3'>Price:<span id='product-price'>{product.price}</span>BDT</p>
        </div>
                  </div>
                   {/* bank calculation start */}
                   <form class="w-full max-w-sm  ">
     <div class="md:flex md:items-center mb-6">
       <div class="md:w-1/3">
         <label for='bank' class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
           Select Bank
         </label>




       </div>
       <div class="md:w-2/3">
       <select id="bank">
  <option value="DBBL">DBBL</option>
  <option value="SCB">SCB</option>
  <option value="EBL">EBL</option>
  
</select>
       </div>
     </div>

     <div class="md:flex md:items-center mb-6">
       <div class="md:w-1/3">
         <label for ='months'class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
          Select months
         </label>




       </div>
       <div class="md:w-2/3">
       <select id="months">
  <option value="3">3</option>
  <option value="6">6</option>
  <option value="12">12</option>
  
</select>
       </div>
     </div>

     <div class="md:flex md:items-center mb-6">
       <div class="md:w-1/3">
         <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
           Advance Payment
         </label>




       </div>
       <div class="md:w-2/3">
         <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  type="text" name="payment" id="payment" />
       </div>
     </div>



    
    
     <div class="md:flex md:items-center">
       <div class="md:w-1/3"></div>
       <div class="md:w-2/3">
         <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold rounded-full" type="button" id="calculate-button">
          Calculate
         </button>
       </div>
     </div>
   </form>
                   {/* bank calculation end  */}
                   <div className='mt-3'>
                   <h6 class="ms-5 ps-5"> Monthly-payment: <span id="month-payment">0</span></h6>
                   <h6 class="ms-5 ps-5"> Interest rate: <span id="total-rate">0</span></h6>
                   <h6 class="ms-5 ps-5"> Total months: <span id="total-month">0</span></h6>
                   </div>
                    <div class="modal-action">
                      <label for="my-modal" class="btn">Buy!</label>
                    </div>
                  </div>
                </div>
              </> : <h2>noclick</h2>
            }

            <div className='ml-5'>
              <button class="btn btn-success">Buy</button>

            </div>
          </div>






        </div>


      </div>

      <div id="details-show" >

      </div>

    </>
  );
};

export default Compare;
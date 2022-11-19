import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//import './Add';

const Compare = () => {
  const { _id } = useParams();
  const [product, setProduct] = useState([]);
  const [rate, setRate] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/product/${_id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [_id]);



  
   useEffect(() => {
    fetch(`http://localhost:5000/rate`)
      .then(res => res.json())
      .then(data => setRate(data[0]));
  }, []);

console.log(rate.dbbl3)

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


//function for Getinput value into :Form(modals of EMI button)

function getinputvalue(inputid){
  const inputfeild=document.getElementById(inputid);
           const inputamounttext=inputfeild.value; 
          
           return inputamounttext;
}






//function for EMI calculation : 
function calculation(month,advance,rate,price){
  const totalelement=document.getElementById('month-payment');
 

  //emi calculation :

  //after advance payment (totalproduct balance-advance)
   const newbal=price-advance;

  //emi calculation method:

  const r = parseFloat(rate)/12/100;
  const P = newbal;
  const n = month;

  const EMI = (P*r* Math.pow((1+r),n)) / (Math.pow((1+r),n)-1);
  const totalInterest =(EMI * n) - P;
  const totalPayment  = (totalInterest + parseFloat(P)).toFixed(2);

  //emi monthly set 
  
  totalelement.innerText=totalPayment;
  //rate set
  const totalelement2=document.getElementById('total-rate');
  totalelement2.innerText=rate;    
  //total month set
  const totalelement3=document.getElementById('total-month');
  totalelement3.innerText=month; 


}
// const btn = document.getElementById('calculate-button');
// console.log(btn);

// btn?.addEventListener('click', () => {
// console.log('btn clicked');
// });
const handleClick2 = () =>{
  
  //get input value
  const bankname=getinputvalue('bank');

  const month=getinputvalue('months');
 
  const advance=getinputvalue('payment');
  const totalelement=document.getElementById('product-price');
 const productprice=totalelement.innerText;
     
console.log(bankname,month,advance,productprice)

//calculation function call 
// const dbblrate=rate.dbbl3;
// console.log(dbblrate)
// const dbbl3=document.getElementById('dbbl3rate').innerText;
// const dbbl6=document.getElementById('dbbl6rate').innerText;
// const dbbl12=document.getElementById('dbbl12rate').innerText;


// const scb3=document.getElementById('scb3rate').innerText;
// const scb6=document.getElementById('scb6rate').innerText;
// const scb12=document.getElementById('scb12rate').innerText;


// const ebl3=document.getElementById('ebl3rate').innerText;
// const ebl6=document.getElementById('ebl6rate').innerText;
// const ebl12=document.getElementById('ebl12rate').innerText;

if (bankname==='DBBL') {
  //if month 3,6,12 then
if(month==3){
    calculation(month,advance,rate.dbbl3,productprice);
  }
  if(month==6){
      calculation(month,advance,rate.dbbl6,productprice);
  }
  if(month==12){
      calculation(month,advance,rate.dbbl12,productprice);
  }
} 

if(bankname==='SCB'){
  if(month==3){
    calculation(month,advance,rate.scb3,productprice);
  }
  if(month==6){
      calculation(month,advance,rate.scb6,productprice);
  }
  if(month==12){
      calculation(month,advance,rate.scb12,productprice);
  }
}if(bankname==='EBL'){
  if(month==3){
    calculation(month,advance,rate.ebl3,productprice);
  }
  if(month==6){
      calculation(month,advance,rate.ebl6,productprice);
  }
  if(month==12){
      calculation(month,advance,rate.ebl12,productprice);
  }
}


  
 

}


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
         <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold rounded-full" type="button" id="calculate-button"  onClick={handleClick2}>
          Calculate
         </button>
       </div>
     </div>
   </form>
                   {/* bank calculation end  */}
                   <div className='mt-3'>
                   <h6 class="ms-5 ps-5"> Monthly-payment: <span id="month-payment">0</span></h6>
                   <h6 class="ms-5 ps-5"> Interest rate: <span id="total-rate">0</span></h6>
                   {/* <div  style={{display: 'none'}}>
                    <p id="dbbl3rate">{rate.dbbl3}</p>
                    <p id="dbbl6rate">{rate.dbbl6}</p>
                    <p id="dbbl12rate">{rate.dbbl12}</p>
                    <p id="scb3rate">{rate.scb3}</p>
                    <p id="scb6rate">{rate.scb6}</p>
                    <p id="scb12rate">{rate.scb12}</p>
                    <p id="ebl3rate">{rate.ebl3}</p>
                    <p id="ebl3rate">{rate.ebl6}</p>
                    <p id="ebl3rate">{rate.ebl12}</p>
                   </div> */}
                  
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
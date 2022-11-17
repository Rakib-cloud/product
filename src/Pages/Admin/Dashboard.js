import React from 'react';

const Dashboard = () => {
    const handleUpload = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        console.log(name);
        const img = event.target.img.value;
        console.log(img );
        const desc = event.target.desc.value;
        console.log(desc );
        const price=event.target.price.value;
        console.log(price );
        
        const url = 'http://localhost:5000/product';
    
        //fetch data 
    
        fetch(url, {
          method: 'POST',
          body: JSON.stringify({
            name, img, desc, price,
          }),
          headers: {
    
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data)
            event.target.reset();
          });
        }
    return (
        <div>
        <form class="w-full max-w-sm  " onSubmit={handleUpload}>
     <div class="md:flex md:items-center mb-6">
       <div class="md:w-1/3">
         <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
           product name
         </label>




       </div>
       <div class="md:w-2/3">
         <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  type="text" name="name" />
       </div>
     </div>

     <div class="md:flex md:items-center mb-6">
       <div class="md:w-1/3">
         <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
          product image
         </label>




       </div>
       <div class="md:w-2/3">
         <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  type="text" name="img" />
       </div>
     </div>

     <div class="md:flex md:items-center mb-6">
       <div class="md:w-1/3">
         <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
           Description
         </label>




       </div>
       <div class="md:w-2/3">
         <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  type="text" name="desc" />
       </div>
     </div>



    
     <div class="md:flex md:items-center mb-6">
       <div class="md:w-1/3">
         <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
           product price 
         </label>
       </div>
       <div class="md:w-2/3">
         <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  name="price" />
       </div>
     </div>
     <div class="md:flex md:items-center">
       <div class="md:w-1/3"></div>
       <div class="md:w-2/3">
         <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
           Add product
         </button>
       </div>
     </div>
   </form>
   </div>
    );
};

export default Dashboard;
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


        const handleUploadrate = (event) => {
          event.preventDefault();
          const dbbl3 = event.target.dbbl3.value;
          const dbbl6 = event.target.dbbl6.value;
          const dbbl12 = event.target.dbbl12.value;

          const scb3 = event.target.scb3.value;
          const scb6 = event.target.scb6.value;
          const scb12 = event.target.scb12.value;

          const ebl3 = event.target.ebl3.value;
          const ebl6 = event.target.ebl6.value;
          const ebl12 = event.target.ebl12.value;
         
          
          const url = 'http://localhost:5000/rate';
      
          //fetch data 
      
          fetch(url, {
            method: 'POST',
            body: JSON.stringify({
              dbbl3, dbbl6, dbbl12,  scb3,scb6,scb12,ebl3,ebl6,ebl12,
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
          <h3 class="text-center text-gray-500 font-bold">upload product</h3>
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


   {/* upload interest rate form  */}

       <h3 class="text-center text-gray-500 font-bold">Interest rate upload</h3>
   <form class="w-full max-w-sm  " onSubmit={handleUploadrate}>
     <div class="md:flex md:items-center mb-6">
       <div class="md:w-1/3">
         <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
           DBBL 3 months rate
         </label>




       </div>
       <div class="md:w-2/3">
         <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  type="text" name="dbbl3" />
       </div>
     </div>

     <div class="md:flex md:items-center mb-6">
       <div class="md:w-1/3">
         <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
          DBBL 6 months rate
         </label>




       </div>
       <div class="md:w-2/3">
         <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  type="text" name="dbbl6" />
       </div>
     </div>

     <div class="md:flex md:items-center mb-6">
       <div class="md:w-1/3">
         <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
           DBBL 12 months rate
         </label>




       </div>
       <div class="md:w-2/3">
         <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  type="text" name="dbbl12" />
       </div>
     </div>


     <div class="md:flex md:items-center mb-6">
       <div class="md:w-1/3">
         <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
           SCB 3 months rate
         </label>




       </div>
       <div class="md:w-2/3">
         <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  type="text" name="scb3" />
       </div>
     </div>

     <div class="md:flex md:items-center mb-6">
       <div class="md:w-1/3">
         <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
         SCB 6 months rate
         </label>




       </div>
       <div class="md:w-2/3">
         <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  type="text" name="scb6" />
       </div>
     </div>

     <div class="md:flex md:items-center mb-6">
       <div class="md:w-1/3">
         <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
         SCB 12 months rate
         </label>




       </div>
       <div class="md:w-2/3">
         <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  type="text" name="scb12" />
       </div>
     </div>

     
     <div class="md:flex md:items-center mb-6">
       <div class="md:w-1/3">
         <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
           EBL 3 months rate
         </label>




       </div>
       <div class="md:w-2/3">
         <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  type="text" name="ebl3" />
       </div>
     </div>

     <div class="md:flex md:items-center mb-6">
       <div class="md:w-1/3">
         <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
         EBL 6 months rate
         </label>




       </div>
       <div class="md:w-2/3">
         <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  type="text" name="ebl6" />
       </div>
     </div>

     <div class="md:flex md:items-center mb-6">
       <div class="md:w-1/3">
         <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
         EBL 12 months rate
         </label>




       </div>
       <div class="md:w-2/3">
         <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  type="text" name="ebl12" />
       </div>
     </div>

     
     <div class="md:flex md:items-center">
       <div class="md:w-1/3"></div>
       <div class="md:w-2/3">
         <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
           Add Rate
         </button>
       </div>
     </div>
   </form>
   </div>
    );
};

export default Dashboard;
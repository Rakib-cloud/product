import React from 'react';

const Homepage = () => {
    const handleUpload = (event) => {
        event.preventDefault();
       
        const img1 = event.target.img1.value;
        
        const img2 = event.target.img2.value;
        
        const faq1 = event.target.faq1.value;
        const faq2 = event.target.faq2.value;
        const faq1ans1=event.target.faq1ans1.value;
        const faq2ans2=event.target.faq2ans2.value;
        
        const url = 'http://localhost:5000/homepage';
    
        //fetch data 
    
        fetch(url, {
          method: 'POST',
          body: JSON.stringify({
            img1, img2, faq1, faq2,faq1ans1,faq2ans2,
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
          Slider image1
         </label>




       </div>
       <div class="md:w-2/3">
         <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  type="text" name="img1" />
       </div>
     </div>

     <div class="md:flex md:items-center mb-6">
       <div class="md:w-1/3">
         <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
          slider image2
         </label>




       </div>
       <div class="md:w-2/3">
         <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  type="text" name="img2" />
       </div>
     </div>

     <div class="md:flex md:items-center mb-6">
       <div class="md:w-1/3">
         <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
           Faq1
         </label>




       </div>
       <div class="md:w-2/3">
         <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  type="text" name="faq1" />
       </div>
     </div>
{/* faq1 answer */}
<div class="md:flex md:items-center mb-6">
       <div class="md:w-1/3">
         <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
           Faq1answer
         </label>




       </div>
       <div class="md:w-2/3">
         <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  type="text" name="faq1ans1" />
       </div>
     </div>

{/* faq1 answer end */}
     <div class="md:flex md:items-center mb-6">
       <div class="md:w-1/3">
         <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
           Faq2
         </label>




       </div>
       <div class="md:w-2/3">
         <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  type="text" name="faq2" />
       </div>
     </div>
{/* faq2 answer */}
    
<div class="md:flex md:items-center mb-6">
       <div class="md:w-1/3">
         <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
           Faq2answer
         </label>




       </div>
       <div class="md:w-2/3">
         <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  type="text" name="faq2ans2" />
       </div>
     </div>
    {/* faq2 answer end */}
     
     <div class="md:flex md:items-center">
       <div class="md:w-1/3"></div>
       <div class="md:w-2/3">
         <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
           Add Content
         </button>
       </div>
     </div>
   </form>
   </div>
    );
};

export default Homepage;
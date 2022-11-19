import React from 'react';
import { Link } from 'react-router-dom';
const Productdetails = ({ tool }) => {
    const { _id, name, img, desc, price } = tool;
    return (
        <div className='pt-5'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={img} alt="mobilephone" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{name}</h2>
                    {/* <p>product Details:{desc}</p> */}
                    <p>price:{price}</p>
                    <div class="card-actions">
                    <Link to={`/compare/${_id}`} className= "btn bg-slate-400" >Compare</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Productdetails;
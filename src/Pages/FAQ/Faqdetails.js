import React from 'react';

const Faqdetails = ({ tool }) => {
    const {  faq1, faq2, faq1ans1, faq2ans2 } = tool;
    return (
        <div className='mt-5 text-center rounded-md' style={{backgroundColor:'#a5d6a7'}}>
        <h2>{faq1}</h2>
        <p>{faq1ans1}</p>
        <h2 className='mt-2'>{faq2}</h2>
        <p>{faq2ans2}</p>
        
    </div>
    );
};

export default Faqdetails;
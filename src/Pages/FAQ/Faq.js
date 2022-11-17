import React, { useEffect, useState } from 'react';
import Faqdetails from './Faqdetails';


const Faq = () => {
    const [faq, setFaq] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/homepage`)
            .then(res => res.json())
            .then(data => setFaq(data));
    }, []);
    return (
        <div>
 {
                    faq?.map(tool => <Faqdetails
                        key={tool._id}
                        tool={tool}
                    >

                    </Faqdetails>)
                }
        </div>
    );
};

export default Faq;
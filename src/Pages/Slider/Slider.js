import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Sliderdetails from './Sliderdetails';

const Slider = () => {
  const [sliderimg, setSliderimg] = useState([]);
  useEffect(() => {
      fetch(`http://localhost:5000/homepage`)
          .then(res => res.json())
          .then(data => setSliderimg(data));
  }, []);
 
    return (
     <div>
       {
        sliderimg?.map(tool => <Sliderdetails
          key={tool._id}
          tool={tool}
        >

        </Sliderdetails>)
    }
     </div>
    );
};

export default Slider;
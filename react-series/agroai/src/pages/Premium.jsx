import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/ui/Card';
import { PremiumData } from '../data/Features';

export default function Premium() {
  return (
    <section className='container p-5'>
       <div className="row gy-3 ">
        {
         PremiumData.map((features)=><Card {...features}/>)
        }
       </div>
    </section>
  );
}

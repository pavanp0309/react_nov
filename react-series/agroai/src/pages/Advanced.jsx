
import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/ui/Card';
import { AdvancedData } from '../data/Features';

export default function Advanced() {
  return (
    <section className='container p-5'>
       <div className="row gy-3 ">
        {
          AdvancedData.map((features)=><Card {...features}/>)
        }
       </div>
    </section>
  );
}

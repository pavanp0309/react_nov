import React from 'react'
import Card from '../components/ui/Card'
import { BasicData } from '../data/Features'

const Basic = () => {
  return (
    <section className='container p-5'>
       <div className="row gy-3 ">
        {
          BasicData.map((features)=><Card {...features}/>)
        }
       </div>
    </section>
  )
}

export default Basic

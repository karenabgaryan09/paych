import React from 'react'
import {Button} from '../../components'

export default function Banner() {


  return (
   <div data-lazy-block>
     <div className='banner-2' data-lazy='fade-up'>
         <div className="container">
             <div className='banner-2-content'>
                 <h2 className="banner-2-title">A simple solution to manage complex project processes</h2>
                    <Button className="btn btn-light rounded-pill">get free trial</Button>
             </div>
         </div>
     </div>
   </div>
  )
}

import React from 'react'
import localData from '../../localData'
import {Button} from '../../components'

export default function Banner() {

    const {googlePlay,appStore} = localData.images

  return (
    <div className='banner-2'>
        <div className="container">
            <div className='banner-2-content'>
                <h2 className="banner-2-title">A simple solution to manage complex project processes</h2>
                   <Button className="btn btn-light rounded-pill">get free trial</Button>
            </div>
        </div>
    </div>
  )
}

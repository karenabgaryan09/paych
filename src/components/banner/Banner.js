import React from 'react'
import localData from '../../localData'
import {Button} from '../../components'

export default function Banner() {

    const {googlePlay,appStore} = localData.images

  return (
    <div className='banner'>
        <div className="container">
            <div className='banner-content'>
                <h2 className="banner-title">A simple solution to manage complex project processes</h2>
                <div className="wrapper">
                    <h4 className="banner-text">Download the App Now</h4>
                    <div className="banner-links">
                        <Button className="btn btn-text-light">
                            <img src={googlePlay} alt="" />
                        </Button>
                        <Button className="btn btn-text-light">
                            <img src={appStore} alt="" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

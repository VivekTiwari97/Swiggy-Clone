import React from 'react'
import { CDN_URL } from '../utils/content'

const PlateCrausel = ({allPlates}) => {
  return (
    <>
    <div className='platecontainer'> 
        <img src={CDN_URL+allPlates.imageId}  className="plateImege" alt="img" />
    </div>
    </>
  )
}

export default PlateCrausel
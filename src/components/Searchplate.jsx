import React from 'react'
import { CDN_URL } from '../utils/content'

const Searchplate = ({allPlates}) => {
  return (
    <div className='searchPlateContainer'>
        <img src={CDN_URL+allPlates.imageId} alt="" className='Search_plate' />
        
    </div>
  )
}

export default Searchplate
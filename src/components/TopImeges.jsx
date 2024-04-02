import React from 'react'
import { CDN_URL } from '../utils/content'

const TopImeges = ({Allpic}) => {
  return (
    <div>
        <img className="topimg"src={CDN_URL+Allpic.creativeId} alt="img" />
    </div>
  )
}

export default TopImeges
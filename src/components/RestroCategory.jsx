
import ItemList from './ItemList';
import { useState } from 'react';

const RestroCategory = ({deta}) => {

  const [ showitem, setShowitem]=useState(false)

  const handleClick =()=>{
    setShowitem(!showitem)
  }
  // console.log(deta);
  return (
    <div>
      <div className='accordien'>
        <div className='acc_item' onClick={handleClick}>
        <span>{deta.title}({deta.itemCards.length})</span>
        <span className='Down-aero'>▼</span>
        </div>
        {showitem && <ItemList item={deta.itemCards}/>}
      </div>
      
    </div>
  )
}

export default RestroCategory;
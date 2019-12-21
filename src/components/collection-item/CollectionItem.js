import React from 'react'
import './collection-item.styles.scss'
function CollectionItem({imageUrl,name,price}){
  return(
    <div className="collection-item">
      <div style={{
        backgroundImage:(`url(${imageUrl})`)
      }} className="image"></div>
      <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price} </span>
      </div>
    </div>
  )
}

export default CollectionItem;
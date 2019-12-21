import React from 'react'
import CollectionPreview from '../../components/collection-preview/CollectionPreview'
import Data from './2.3 shop.data.js'
class Shoppage extends React.Component
{
  constructor()
  {
    super();
    this.state={
      Collection:Data
    };
  }
  render()
  {
   
    return (
     <div className="shop-page">
     {
      this.state.Collection.map(({id,...Otheritems})=>
      <CollectionPreview key={id} {...Otheritems}/>)
     }
     </div>
    
    )}
}
export default Shoppage;
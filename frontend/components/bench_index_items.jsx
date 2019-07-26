import React from 'react'

class benchIndexItem extends React.Component{
  constructor(props) {
     super(props)
     //  debugger
  }

  render() {
     return ( 
         <li>
           <h3>Name:{this.props.description}</h3>
         </li>
     )
   }
}

export default benchIndexItem;
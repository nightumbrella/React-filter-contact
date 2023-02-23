import React from 'react'

const Card = ({items}) => {
  return (
    <div className='box' key={items.id} >
        <div className='header'>
            <h3>{items.name}</h3>
        </div>
        <h5>
            Email: <span>{items.email}</span>
        </h5>
        <h4>
            Phone: <span>{items.phone}</span>
        </h4>
     </div>
  )
}

export default Card
import React from 'react'

function Restaurant({attributes}){
    console.log(attributes)
    return (
        
        <div className='card'>
            <div className='restaurant-image'><img src={attributes.image_url} alt=""></img></div>
            <div className='restaurant-name'>{attributes.name}</div>
            <div className='restaurant-score'>{attributes.score}</div>
        </div>
    )
}
export default Restaurant
import React, { useEffect, useState } from 'react'


function Restaurant ({attributes}) {
const [restaurant, setRestaurant] =  useState({})

useEffect(()=>{
    // const slug = attributes.match.params.slug
    fetch(`http://localhost:9292/restaurants`)
    .then((response)=> response.json())
    .then((response)=> setRestaurant(response))  
},[])

    return (
        <div className='wrapper'>
            <div className='column'>
                <div className='header'>Head goes Here</div>
                <div className='reviews'>Restaurant Reviews</div>
            </div>
            <div className='column'>
                <div className='review-form'>Review goes here</div>
            </div>
        </div>
    )
}


export default Restaurant
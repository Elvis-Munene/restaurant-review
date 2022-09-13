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
        <div> This is the restaurant#show view for the app</div>
    )
}


export default Restaurant
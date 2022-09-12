import React from 'react'
import {useEffect,useState} from 'react'
import Restaurant from '../Restaurant/Restaurant'
import styled from "styled-components"

function Restaurants(){

    const [restaurants, setRestaurants] = useState([])

    useEffect(()=>{
        fetch("http://localhost:9292/restaurants")
        .then((response)=> response.json())
        .then((response)=> setRestaurants(response))  
    },[])
    return (
        <div className="Home">
        <div className="header">
        <h1>OpenRestaurants</h1>
        <div className="subheader">Honest, unbiased reviews</div>
        </div>
        <div className="grid">
        <ul>{restaurants.map(item => {
            return(<li>
            <Restaurant 
            key={item.id}
            attributes={item}
            /></li>
            )
            })}</ul>
        </div>
        </div>
        
    )
}

export default Restaurants
import React from 'react'
import {useEffect,useState} from 'react'





function Restaurants(){

    const [restaurants, setRestaurants] = useState([])

    useEffect(()=>{
        fetch("http://localhost:9292/restaurants")
        .then((response)=> response.json())
        .then((response)=> setRestaurants(response))  
    },[])
    console.log(restaurants)

const restaurantnames = restaurants.map(item => {
        return(<li key={item.name}>{item.name}</li>)
        })
    return (
        <div>
        <div>This is the restaurants component</div>
        <ul>{restaurantnames}</ul>
        </div>
        
    )
}

export default Restaurants
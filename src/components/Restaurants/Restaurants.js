import React from 'react'
import {useEffect,useState} from 'react'
import Restaurant from '../Restaurant/Restaurant'

function Restaurants(){

    const [restaurants, setRestaurants] = useState([])

    useEffect(()=>{
        fetch("http://localhost:9292/restaurants")
        .then((response)=> response.json())
        .then((response)=> setRestaurants(response))  
    },[])
    // console.log(restaurants)


    // const restaurantnames = restaurants.map((restaurant)=> restaurant.name)
// const restaurantnames = restaurants.map((item) => {
//         return(<li key={item.name}>{item.name}</li>)
        // return(
        // <Restaura 
        // key={item.attributes.name}
        // attributes={item.attributes}
        // />
        // })

// console.log(restaurantnames)
// const grid = restaurants.map(item => {
//             // return(<li key={item.name}>{item.name}</li>)
//             return(
//             <Restaurant 
//             key={item.name}
//             attributes={item.name}
//             />
//             )
//             })
    return (
        <div className="Home">
        <div className="header">
        <h1>OpenRestaurants</h1>
        <div className="subheader">Honest, unbiased reviews</div>
        </div>
        <div className="grid">
        {/* <ul>{restaurantnames}</ul> */}
        <ul>{restaurants.map(item => {
            // return(<li key={item.name}>{item.name}</li>)
            return(<li>
            <Restaurant 
            key={item.id}
            attributes={item}
            /></li>
            )
            })}</ul>
        {/* <Restaurant/> */}
        </div>
        </div>
        
    )
}

export default Restaurants
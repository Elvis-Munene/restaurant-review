import React from 'react'
import {useEffect} from 'react'





function Restaurants(){

    // const [restaurants, setRestaurants] = useState([])

    useEffect(()=>{
        fetch("http://localhost:9292/restaurants")
        .then((response)=> response.json())
        .then((restaurants)=> console.log(restaurants))
    },[])




    return (
        <div>This is the restaurants component</div>
    )
}

export default Restaurants
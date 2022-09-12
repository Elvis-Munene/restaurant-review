import React from 'react'
import styled from "styled-components"

const Card = styled.div`
    border: 1px solid blue;
    background: #fff;
    
`
const RestaurantImage = styled.div`
    width:400px;
    

    img {
        height:100px;
        width:100px;
        border-radius: 100%;
        border: 1px solid black;
        
    }
`
const RestaurantName = styled.div`
padding: 20px 0 10px 0;
`
function Restaurant({attributes}){

 
    return (
        
        <Card className='card'>
            <RestaurantImage className='restaurant-image'><img src={attributes.image_url} alt=""></img></RestaurantImage>
            <RestaurantName classNam e='restaurant-name'>{attributes.name}</RestaurantName>
            <div className='restaurant-score'>{attributes.score}</div>
        </Card>
    )
}
export default Restaurant
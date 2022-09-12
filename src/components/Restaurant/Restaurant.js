import React from 'react'
import styled from "styled-components"

const Card = styled.div`
    border: 1px solid black;
    background: #fff
`
const RestaurantImage = styled.div`
    width:50px;

    img {
        height:50px;
        width:50px;
        border-radius: 100%;
        border: 1px solid black;
    }
`

function Restaurant({attributes}){

 
    return (
        
        <Card className='card'>
            <RestaurantImage className='restaurant-image'><img src={attributes.image_url} alt=""></img></RestaurantImage>
            <div className='restaurant-name'>{attributes.name}</div>
            <div className='restaurant-score'>{attributes.score}</div>
        </Card>
    )
}
export default Restaurant
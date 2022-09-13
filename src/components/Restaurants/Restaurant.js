import React from 'react'
import {Link} from 'react-router-dom'
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

const LinkWrapper = styled.div`
    margin: 30px 0 20px 0;
    height: 50px;

    a{
        color: white;
        background:#000;
        border-radius: 4px;
        padding: 10px 50px;
        border: 1px solid #000;
        width: 100%;
        text-decoration: none;
    }

`


function Restaurant({attributes}){

 console.log(attributes.reviews.score)
    return (
        
        <Card className='card'>
            <RestaurantImage className='restaurant-image'><img src={attributes.image_url} alt=""></img></RestaurantImage>
            <RestaurantName classNam e='restaurant-name'>{attributes.name}</RestaurantName>
            <div className='restaurant-score'>{attributes.reviews.map((item)=> item.score)}</div>
            <LinkWrapper>
            <Link to="/restaurant/:id">View restaurant</Link>
            </LinkWrapper>
        </Card>
    )
}
export default Restaurant
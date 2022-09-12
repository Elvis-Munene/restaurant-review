import React from 'react'
import styled from "styled-components"

const Card = styled.div`
    border: 1px solid black;
    background: #fff
`


function Restaurant({attributes}){

 
    return (
        
        <Card className='card'>
            <div className='restaurant-image'><img src={attributes.image_url} alt=""></img></div>
            <div className='restaurant-name'>{attributes.name}</div>
            <div className='restaurant-score'>{attributes.score}</div>
        </Card>
    )
}
export default Restaurant
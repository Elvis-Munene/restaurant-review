import React, { useEffect, useState } from 'react'
import Header from "../Restaurant/Header"
import styled from "styled-components"

const Wrapper = styled.div`
   margin-left: auto;
   margin-right: auto;
   display: grid;
   grid-template-columns: repeat(2, 1fr);
`

const Column = styled.div`
        background: white;
        height: 100vh;
        overflow: scroll;

`


const Reviewform = styled.div`
        text-align: center;
        width: 1200px;
        height: 100px;
        background-color: black;
`

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
                <Header/>
                <div className='reviews'>
                    Restaurant Reviews
                </div>
            </div>
            <div className='column'>
                <Reviewform className='review-form'>Review goes here</Reviewform>
            </div>
            
        </div>
    )
}


export default Restaurant
import React, { useEffect, useState } from 'react'
import Header from "../Restaurant/Header"
import styled from "styled-components"
import ReviewForm from "../Restaurant/ReviewForm"

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
        width: 600px;
        height: 600px;
        background-color: blue;
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
        <Wrapper className='wrapper'>
            <Column className='column'>
                <Header/>
                <div className='reviews'>
                    Restaurant Reviews
                </div>
            </Column>
            <Column className='column'>
                <Reviewform className='review-form'><ReviewForm/></Reviewform>
            </Column>
            
        </Wrapper>
    )
}


export default Restaurant
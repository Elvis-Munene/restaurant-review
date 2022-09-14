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
        &:last-child{
            background: blue;
        }
`

function Restaurant ({attributes}) {
const [restaurant, setRestaurant] =  useState({})
const [review, setReview] = useState({})

useEffect(()=>{
    // const slug = attributes.match.params.slug
    fetch(`http://localhost:9292/restaurants`)
    .then((response)=> response.json())
    .then((response)=> setRestaurant(response))  
},[])
console.log(restaurant)

function handleChange(e){
e.preventDefault()

setReview(Object.assign({},review, {[e.target.name]: e.target.value}))
console.log("review:", review)

}
function handleSubmit(e){
    e.preventDefault()
    const data = {
        review: review,
    }
    fetch("http://localhost:9292/reviews",{
        method: "POST",
        headers: {'content-Type': 'application/json'},
        body: JSON.stringify(review),
    })
};




    return (
        <Wrapper className='wrapper'>
         <Column className='column'>
            <Header/>
            <div className='reviews'>
                    Restaurant Reviews
            </div>
          </Column>
          <Column>
               <ReviewForm 
               handleChange={handleChange} 
               handleSubmit={handleSubmit}
               attributes={attributes}
               review={review}
               />
        
            </Column>
            
        </Wrapper>
    )
}


export default Restaurant
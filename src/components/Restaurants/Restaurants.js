import React from 'react'
import {useEffect,useState} from 'react'
import Restaurant from '../Restaurant/Restaurant'
import styled from "styled-components"

const Home = styled.div`
        text-align: center;
        max-width: 1200px;
`
const Header = styled.div`
        padding:100px 100px 10px 100px;
    h1{
        font-size:42px;
    }

`
const Subheader = styled.div`
        font-weight: 300;
        font-size:26px;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width:100px;
  padding:20px;
`
     

function Restaurants(){

    const [restaurants, setRestaurants] = useState([])

    useEffect(()=>{
        fetch("http://localhost:9292/restaurants")
        .then((response)=> response.json())
        .then((response)=> setRestaurants(response))  
    },[])
    return (
        <Home>
        <Header className="header">
        <h1>OpenRestaurants</h1>
        <Subheader className="subheader">Honest, unbiased reviews</Subheader>
        </Header>
        <Grid className="grid">
        <ul>{restaurants.map(item => {
            return(<li>
            <Restaurant 
            key={item.id}
            attributes={item}
            /></li>
            )
            })}</ul>
        </Grid>
        </Home>
        
    )
}

export default Restaurants
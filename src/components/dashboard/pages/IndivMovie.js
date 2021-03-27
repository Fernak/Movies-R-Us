import React from 'react'
import Dashboard from '../Dashboard'
import {Button} from 'react-bootstrap'
import styled from 'styled-components'
import CrewCard from '../../cards/CrewCard'
import ReviewCard from '../../cards/ReviewCard'

export default function IndivMovie() {
    return (
        <>
            <Dashboard/>
            <div>
                <Image>
                    <img style={{width: "200px", height: "300px"}} src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT9J7XACn3tlD6v4UXRMvT2wJN8FGCCPeh8U3RkZ6__tR4wGhSo" alt=""/>
                </Image>
                <RatingText><h4>Rating: 8.8/10</h4></RatingText>
                <AddFavBtn><Button>Add To Favourites</Button></AddFavBtn>
                <Header><h2>Crew</h2></Header>
                <Scroll><CrewCard/></Scroll>
                <Header><h2>Reviews <AddRevBtn><Button>Add Review</Button></AddRevBtn></h2></Header>
                <ReviewCard/>
            </div>

        </>
    )
}

const Header = styled.div`
    margin-left: 240px; 
    margin-top: 50px;
`
const Image = styled.div` 
    margin-left: 270px; 
    margin-top: 50px;
    
`
const AddFavBtn = styled.div `
    margin-left: 270px; 
    margin-top: 20px;
`

const AddRevBtn = styled.div `
    margin-left: 700px; 
`

const Scroll = styled.div`
    height: 300px; 
    padding-bottom: 50px; 
    overflow: hidden; 
    overflow-y: auto; 
`

const RatingText = styled.div `
    margin-left: 270px; 
    margin-top: 20px;
`

const Title = styled.div `
    display: inline; 
`
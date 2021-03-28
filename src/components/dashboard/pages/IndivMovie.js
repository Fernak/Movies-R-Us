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
                <Top>
                    <Image><img style={{width: "250px", height: "350px"}} src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT9J7XACn3tlD6v4UXRMvT2wJN8FGCCPeh8U3RkZ6__tR4wGhSo" alt=""/></Image>
                    <div style={{marginLeft: "50px"}}>
                        <Title><h1>Lord of the Rings: The Fellowship of the Ring</h1></Title>
                        <div>
                            <Text><h3>Type: Movie</h3></Text>
                            <Text><h3>Age-Rating: 14A</h3></Text>
                            <Text><h3>Year: 2001</h3></Text>
                            <Text><h3>Genre: Fantasy/Adventure</h3></Text>
                            <Text><h3>Language: English</h3></Text>
                            <Text><h3>Streaming Service: Netflix</h3></Text>
                            <Text><h3>Duration: 3h 48m</h3></Text>
                            <Text><h3>Arrival Date: March 28, 2018</h3></Text>
                            <Text><h3>Departure Date: March 28, 2021</h3></Text>
                        </div>
                    </div>
                </Top>
                <RatingText><h3>Rating: 8.8/10</h3></RatingText>
                <AddFavBtn><Button>Add To Favourites</Button></AddFavBtn>
                <Header><h2>Synopsis</h2></Header>
                <SynopText>
                    <h4>A young hobbit, Frodo, who has found the One Ring that belongs to the Dark Lord Sauron, begins his journey with eight companions to Mount Doom, the only place where it can be destroyed.</h4>
                </SynopText>
                <Header><h2>Crew</h2></Header>
                <Scroll><CrewCard/></Scroll>
                <Header><h2>Reviews <AddRevBtn><Button>Add Review</Button></AddRevBtn></h2></Header>
                <ReviewCard/>

            </div>
        </>
    )
}

const Top = styled.div`
    display: flex; 
    margin-top: 50px;
    margin-left: 180px; 
`
const Title = styled.div `
    margin-right: 0px; 
    margin-bottom: 20px; 
`

const Header = styled.div`
    margin-left: 240px; 
    margin-top: 30px;
`
const Image = styled.div`
    margin-left: 90px; 
    margin-right: 0px; 
`
const AddFavBtn = styled.div `
    margin-left: 270px; 
    margin-top: 20px;
`

const AddRevBtn = styled.div `
    margin-left: 750px; 
`

/*
 * References: 
 * Making Scrollable sections within a page: 
 *      How To Make A Div Vertically Scrollable Using CSS https://www.youtube.com/watch?v=uB1KzjV0IhM 
 */
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

const Text = styled.div `
    margin-left: 30px; 
    margin-top: 0px; 
    margin-bottom: 10px; 
`

const SynopText = styled.div `
    margin-left: 270px; 
    margin-top: 10px; 
    width: 1010px; 
    display: flex; 
    justify-content: space-around; 
`
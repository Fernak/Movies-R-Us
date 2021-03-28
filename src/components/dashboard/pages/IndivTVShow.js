import React from 'react'
import Dashboard from '../Dashboard'
import {Button} from 'react-bootstrap'
import styled from 'styled-components'
import CrewCard from '../../cards/CrewCard'
import ReviewCard from '../../cards/ReviewCard'

export default function IndivTVShow() {
    return (
        <>
            <Dashboard/>
            <div>
                <Top>
                    <Image><img style={{width: "250px", height: "350px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDh1BrFLCYBpDe622TlZ2qzP4KCJmquflMec2AOfh_ke9kxPpB" alt=""/></Image>
                    <div style={{marginLeft: "50px"}}>
                        <Title><h1>Adventure Time</h1></Title>
                        <div>
                            <Text><h3>Type: TV Show</h3></Text>
                            <Text><h3>Age-Rating: 14A</h3></Text>
                            <Text><h3>Year: 2010 - 2018</h3></Text>
                            <Text><h3>Genre: Adventure</h3></Text>
                            <Text><h3>Language: English</h3></Text>
                            <Text><h3>Streaming Service: Netflix</h3></Text>
                            <Text><h3>Number of Seasons: 10</h3></Text>
                            <Text><h3>Arrival Date: March 28, 2018</h3></Text>
                            <Text><h3>Departure Date: March 28, 2021</h3></Text>
                        </div>
                    </div>
                </Top>
                <RatingText><h3>Rating: 8.6/10</h3></RatingText>
                <AddFavBtn><Button>Add To Favourites</Button></AddFavBtn>
                <Header><h2>Synopsis</h2></Header>
                <SynopText>
                    <h4>A 12-year-old boy and his best friend, wise 28-year-old dog with magical powers, go on a series of surreal adventures with each other in a remote future.</h4>
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
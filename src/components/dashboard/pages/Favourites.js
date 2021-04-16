import React, {useEffect, useState} from 'react'
import Dashboard from '../Dashboard'
import ProgramCard from '../../cards/ProgramCard'
import CrewCard from '../../cards/CrewCard'
import styled from 'styled-components'

import firebase from "firebase/app";
import "firebase/auth";

export default function Favourites() {
    const user = firebase.auth().currentUser
    var userEmail = user.email

    const [favCrew, setFavCrew] = useState([]);
    const [favMovies, setFavMovies] = useState([]); 
    const [favTvshows, setFavTvshows] = useState([]); 

    useEffect(()=>{
        fetch(`/userfavs?Email=${userEmail}`).then(response => 
            response.json()).then(data => { 
                setFavCrew(data['favouritecrew']); 
                setFavMovies(data['favouritemovies'])
                setFavTvshows(data['favouriteshows'])
            }); 
    }, []); 
    
    return (
        <>
            <Dashboard/>
            <Header>
                <h1>My Favourite Crew</h1>
            </Header>
            <Scroll><CrewCard programCrew={favCrew}/></Scroll>
            <Header2>
                <h1>My Favourite Movies</h1>
            </Header2>
            <Scroll><ProgramCard programs={favMovies}/></Scroll>
            <Header2>
                <h1>My Favourite TV Shows</h1>
            </Header2>
            <Scroll><ProgramCard programs={favTvshows}/></Scroll>
        </>
    )
}

const Header = styled.div`
    margin-left: 240px; 
    margin-top: 70px;
`
const Header2 = styled.div`
    margin-left: 240px; 
    margin-top: 50px;
`

/*
 * References: 
 * Making Scrollable sections within a page: 
 *      How To Make A Div Vertically Scrollable Using CSS https://www.youtube.com/watch?v=uB1KzjV0IhM 
 */
const Scroll = styled.div`
    height: 350px; 
    padding-bottom: 50px; 
    overflow: hidden; 
    overflow-y: auto; 
`
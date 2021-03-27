import React from 'react'
import Dashboard from '../Dashboard'
import ProgramCard from '../../cards/ProgramCard'
import CrewCard from '../../cards/CrewCard'
import styled from 'styled-components'

export default function Favourites() {
    return (
        <>
            <Dashboard/>
            <Header>
                <h1 className="pageHeader">My Favourite Crew</h1>
            </Header>
            <Scroll><CrewCard /></Scroll>
            <Header2>
                <h1 className="pageHeader">My Favourite Movies</h1>
            </Header2>
            <Scroll><ProgramCard /></Scroll>
            <Header2>
                <h1 className="pageHeader">My Favourite TV Shows</h1>
            </Header2>
            <Scroll><ProgramCard /></Scroll>
        </>
    )
}

const Header = styled.div`
    margin-left: 240px; 
    margin-top: 10px;
`
const Header2 = styled.div`
    margin-left: 240px; 
    margin-top: 50px;
`

/*How To Make A Div Vertically Scrollable Using CSS https://www.youtube.com/watch?v=uB1KzjV0IhM */
const Scroll = styled.div`
    height: 400px; 
    padding-bottom: 50px; 
    overflow: hidden; 
    overflow-y: auto; 
`
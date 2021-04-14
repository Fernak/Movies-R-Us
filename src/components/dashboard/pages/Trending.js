import React from 'react'
import Dashboard from '../Dashboard'
import ProgramCard from '../../cards/ProgramCard'
import styled from 'styled-components'

export default function Trending() {
    return (
        <>
            <Dashboard/>
            <Header>
                <h1 className="pageHeader">Trending Movies</h1>
            </Header>
            <Scroll><ProgramCard /></Scroll>
            <Header2>
                <h1 className="pageHeader">Trending TV Shows</h1>
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

/*
 * References: 
 * Making Scrollable sections within a page: 
 *      How To Make A Div Vertically Scrollable Using CSS https://www.youtube.com/watch?v=uB1KzjV0IhM 
 */
const Scroll = styled.div`
    height: 400px; 
    padding-bottom: 50px; 
    overflow: hidden; 
    overflow-y: auto; 
`
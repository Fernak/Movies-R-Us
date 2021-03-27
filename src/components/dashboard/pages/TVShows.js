import React from 'react'
import Dashboard from '../Dashboard'
import ProgramCard from '../../cards/ProgramCard'
import styled from 'styled-components'

export default function Movies() {
    return (
        <>
            <Dashboard/>
            <Header>
                <h1 className="pageHeader">TV Shows</h1>
            </Header>
            <ProgramCard/>
        </>
    )
}

const Header = styled.div`
    margin-left: 240px; 
    margin-top: 10px;
`
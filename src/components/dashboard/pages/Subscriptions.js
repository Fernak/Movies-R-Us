import React from 'react'
import Dashboard from '../Dashboard'
import SubCard from '../../cards/SubCard'
import styled from 'styled-components'
import {Button} from 'react-bootstrap'

export default function Movies() {
    return (
        <>
        <Dashboard/>
        <Header>
            <h1 className="pageHeader">My Subscriptions</h1>
        </Header>
        <AddBtn><Button>Add Subscription</Button></AddBtn>
        <SubCard/>
    </>
    )
}

const Header = styled.div`
    margin-left: 240px; 
    margin-top: 10px;
`
const AddBtn = styled.div `
    margin-left: 1000px; 
    margin-top: 10px;
`

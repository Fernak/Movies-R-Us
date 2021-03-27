import React from 'react'
import Dashboard from '../Dashboard'
import {Button} from 'react-bootstrap'
import styled from 'styled-components'
import ProgramCard from '../../cards/ProgramCard'

export default function IndivMovie() {
    return (
        <>
            <Dashboard/>
            <div>
                <Image>
                    <img style={{width: "200px", height: "300px"}} src="https://m.media-amazon.com/images/M/MV5BMTQzMzg1ODAyNl5BMl5BanBnXkFtZTYwMjAxODQ1._V1_SX150_CR0,0,150,150_.jpg" alt=""/>
                </Image>
                <AddFavBtn><Button>Add To Favourites</Button></AddFavBtn>
                <Header><h2>Programs</h2></Header>
                <Scroll><ProgramCard/></Scroll>
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

const Scroll = styled.div`
    height: 400px; 
    padding-bottom: 50px; 
    overflow: hidden; 
    overflow-y: auto; 
`

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
                <Top>
                    <Image><img style={{width: "200px", height: "300px"}} src="https://m.media-amazon.com/images/M/MV5BMTQzMzg1ODAyNl5BMl5BanBnXkFtZTYwMjAxODQ1._V1_SX150_CR0,0,150,150_.jpg" alt=""/></Image>
                    <div style={{marginLeft: "50px"}}>
                        <Title><h1>Al Pacino</h1></Title>
                        <div>
                            <Text><h3>Age: 80</h3></Text>
                            <Text><h3>Gender: M</h3></Text>
                            <Text><h3>Hometown: New York City</h3></Text>
                            <Text><h3>Roles: Actor, Director, Producer</h3></Text>
                        </div>
                    </div>
                </Top>
                <AddFavBtn><Button>Add To Favourites</Button></AddFavBtn>
                <Header><h2>Filmography</h2></Header>
                <Scroll><ProgramCard/></Scroll>
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
const Text = styled.div `
    margin-left: 30px; 
    margin-top: 0px; 
    margin-bottom: 20px; 
`

const Header = styled.div`
    margin-left: 240px; 
    margin-top: 50px;
`
const Image = styled.div` 
    margin-left: 90px; 
    margin-right: 0px;   
`
const AddFavBtn = styled.div `
    margin-left: 270px; 
    margin-top: 20px;
`

/*
 * References: 
 * Making Scrollable sections within a page: 
 *      How To Make A Div Vertically Scrollable Using CSS https://www.youtube.com/watch?v=uB1KzjV0IhM 
 */
const Scroll = styled.div`
    height: 400px; 
    overflow: hidden; 
    overflow-y: auto; 
`

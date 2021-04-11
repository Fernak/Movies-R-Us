import React, {useState, useEffect} from 'react'
import Dashboard from '../Dashboard'
import {Button} from 'react-bootstrap'
import styled from 'styled-components'
import ProgramCard from '../../cards/ProgramCard'

export default function CrewDetails(props) {
    const [crewDetails, setCrewDetails] = useState([])
    const [crewPrograms, setCrewPrograms] = useState([])

    var Cid = props.location.state['Cid']

    useEffect(()=>{
        fetch(`/crewdetails?Cid=${Cid}`).then(response => 
            response.json()).then(data => { 
                setCrewDetails([data['crewinfo']])
                setCrewPrograms(data['crewprograms'])
                console.log(props.location.state['Cid'])
            }); 
    }, []); 

    return (
        <>
            <Dashboard/>
            {crewDetails.map(details => (
                <div>
                <Top>
                    <Image><img style={{width: "200px", height: "300px"}} src={details.Image} alt=""/></Image>
                    <div style={{marginLeft: "50px"}}>
                        <Title><h1>{details.Name}</h1></Title>
                        <div>
                            <Text><h3>Age: 80</h3></Text>
                            <Text><h3>Gender: {details.Name}</h3></Text>
                            <Text><h3>Hometown: {details.Hometown}</h3></Text>
                            <Text><h3>Roles: Actor, Director, Producer</h3></Text>
                        </div>
                    </div>
                </Top>
                <AddFavBtn><Button>Add To Favourites</Button></AddFavBtn>
                <Header><h2>Filmography</h2></Header>
                <Scroll><ProgramCard programs={crewPrograms}/></Scroll>
            </div>
            ))}

        </>
    )
}

const Top = styled.div`
    display: flex; 
    margin-top: 80px;
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

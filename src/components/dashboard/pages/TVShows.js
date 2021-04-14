import React, {useEffect, useState} from 'react'
import Dashboard from '../Dashboard'
import ProgramCard from '../../cards/ProgramCard'
import styled from 'styled-components'

export default function TVShows() {
    //Need to pass in email of user logged in 
    var userEmail = 'jonathan.smith@email.com'
    /**
     * References: 
     *  * How to call an api endpoint and get the data to pass to Program card component 
     *      * How to Call a Flask API in React https://www.youtube.com/watch?v=06pWsB_hoD4&t=0s
     */
    const [programs, setTvshows] = useState([]); 

    useEffect(()=>{
        fetch(`/programs?Type=TV Show&Email=${userEmail}`).then(response => 
            response.json()).then(data => { 
                setTvshows(data); 
            }); 
    }, []); 
    return (
        <>
            <Dashboard/>
            <Header>
                <h1 className="pageHeader">TV Shows</h1>
            </Header>
            {/*Passing the object to the ProgramCard component*/}
            <ProgramCard programs={programs}/>
        </>
    )
}

const Header = styled.div`
    margin-left: 240px; 
    margin-top: 10px;
`
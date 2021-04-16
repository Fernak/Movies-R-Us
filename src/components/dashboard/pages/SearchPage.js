import React, {useState, useEffect} from 'react'
import Dashboard from '../Dashboard'
import styled from 'styled-components'
import ProgramCard from '../../cards/ProgramCard'
import CrewCard from '../../cards/CrewCard'

export default function SearchPage(props) {
    var input = props.location.state['Input']
    input = input.toLowerCase()
    input = input.trim()

    console.log(input)
    var programsMatched = [] 
    var crewMatched = []

    const [programs, setPrograms] = useState([]);
    const [crew, setCrew] = useState([]);


    useEffect(() => {
        fetch(`/allprograms`).then(response =>
            response.json()).then(data => {
                setPrograms([...data['movies'], ...data['tvshows']]);
            });
    }, []);

    useEffect(() => {
        fetch(`/allcrew`).then(response =>
            response.json()).then(data => {
                setCrew(data);
            });
    }, []);

    for (var i=0; i<programs.length; i++){
        if(input === (programs[i]['Name']).toLowerCase() || (programs[i]['Name']).toLowerCase().includes(input)){
            programsMatched.push({Uid: programs[i]['Uid'], Image: programs[i]['Image']})
        }
    }
    for (var i=0; i<crew.length; i++){
        if(input === (crew[i]['Name']).toLowerCase() || (crew[i]['Name']).toLowerCase().includes(input)){
            crewMatched.push({Cid: crew[i]['Cid'], Image: crew[i]['Image'], Name: crew[i]['Name']})
        }
    }


    if (programsMatched.length === 0 && crewMatched.length === 0){
        return (
            <>
            <Dashboard/>
            <Header>
                <h1>Search Results: No results matching </h1>
            </Header>
            </>
        )
    }
    else if (programsMatched.length === 0 && crewMatched.length !== 0){
        return (
            <>
            <Dashboard/>
            <Header>
                <h1>Search Results: {input} </h1>
            </Header>
            <CrewCard programCrew={crewMatched}/>
            </>
        )
    }
    else {
        return (
            <>
            <Dashboard/>
            <Header>
                <h1>Search Results: {input}</h1>
            </Header>
            <ProgramCard programs={programsMatched}/>
            </>
        )

    }
}

const Header = styled.div`
    margin-left: 240px; 
    margin-top: 70px;
`
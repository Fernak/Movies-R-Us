import React, { useEffect, useState } from 'react'
import Dashboard from '../Dashboard'
import ProgramCard from '../../cards/ProgramCard'
import styled from 'styled-components'

import firebase from "firebase/app";
import "firebase/auth";


export default function Movies() {
    const user = firebase.auth().currentUser;
    var userEmail = user.email

    /**
     * References: 
     *  * How to call an api endpoint and get the data to pass to Program card component 
     *      * How to Call a Flask API in React https://www.youtube.com/watch?v=06pWsB_hoD4&t=0s
     */
    const [admins, setAdmins] = useState([])
    const [userMovies, setUserMovies] = useState([])
    const [allMovies, setAllMovies] = useState([])

    //Getting list of all admin emails from API call 
    useEffect(() => {
        fetch(`/admin`).then(response =>
            response.json()).then(data => {
                setAdmins(data);
            });
    }, []);

    //Getting all programs that from services that the user is subscribed to from API call (will be used when user is not an admin) 
    useEffect(() => {
        fetch(`/programs?Type=Movie&Email=${userEmail}`).then(response =>
            response.json()).then(data => {
                setUserMovies(data);
            });
    }, []);

    // Getting all programs that exist in the database from API call (will be used when user is an admin)
    useEffect(() => {
        fetch(`/allprograms`).then(response =>
            response.json()).then(data => {
                setAllMovies(data['movies']);
            });
    }, []);

    // Checking if user logged in is an admin and display the corresponding results 
    if (!(admins.some(admin => admin.Email === userEmail))){
        return (
            <>
                <Dashboard />
                <Header>
                    <h1>Movies</h1>
                </Header>
                {/*Passing the object to the ProgramCard component*/}
                <ProgramCard programs={userMovies} />
            </>
        )
    } else {
        return (
            <>
                <Dashboard />
                <Header>
                    <h1>Movies</h1>
                </Header>
                {/*Passing the object to the ProgramCard component*/}
                <ProgramCard programs={allMovies} />
            </>
        )
    }
}

const Header = styled.div`
    margin-left: 240px; 
    margin-top: 10px;
`

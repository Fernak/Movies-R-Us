import React, {useState, useEffect} from 'react'
import Dashboard from '../Dashboard'
import ProgramCard from '../../cards/ProgramCard'
import UserCard from '../../cards/UserCard'
import styled from 'styled-components'

import firebase from "firebase/app";
import "firebase/auth";

export default function Home() {
    const user = firebase.auth().currentUser;
    var userEmail = user.email

    const [admins, setAdmins] = useState([]);
    const [users, setUsers] = useState([]);
    const [movies, setMovies] = useState([]);
    const [tvshows, setTvshows] = useState([]);

    //Getting list of all admin emails from API call 
    useEffect(() => {
        fetch(`/admin`).then(response =>
            response.json()).then(data => {
                setAdmins(data);
            });
    }, []);

    // Getting all programs that exist in the database from API call 
    useEffect(() => {
        fetch(`/allprograms`).then(response =>
            response.json()).then(data => {
                setMovies(data['movies']);
                setTvshows(data['tvshows']);
            });
    }, []);

    // Getting all users that exist in the database from API call if admin 
    useEffect(() => {
        fetch(`/allusers?Email=${userEmail}`).then(response =>
            response.json()).then(data => {
                setUsers(data['users']);
            });
    }, []);


    // Checking if user logged in is an admin and display the corresponding results 
    if (!(admins.some(admin => admin.Email === userEmail))){
        return (
            <>
                <Dashboard/>
                <Header>
                    <h1>Movies</h1>
                </Header>
                <Scroll><ProgramCard programs={movies}/></Scroll>
                <Header2>
                    <h1>TV Shows</h1>
                </Header2>
                <Scroll><ProgramCard programs={tvshows}/></Scroll>
            </>
        )
    } else {
        return (
            <>
                <Dashboard/>
                <Header>
                    <h1>User Count: </h1>
                    <h2>{users.length}</h2>
                </Header>
                <Header>
                    <h1>List of Users: </h1>
                </Header>
                <Container><UserCard users={users} /></Container>

            </>
        )
    }
}

const Header = styled.div`
    margin-left: 240px; 
    margin-top: 70px;
`
const Header2 = styled.div`
    margin-left: 240px; 
    margin-top: 50px;
    margin-bottom: 0px; 
`

const Container = styled.div`
    margin-left: 0px; 
    margin-top: 0px;
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

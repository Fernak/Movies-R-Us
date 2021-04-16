import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {Button} from 'semantic-ui-react'
import Dashboard from '../Dashboard'
import SubCard from '../../cards/SubCard'
import AddServiceForm from '../../forms/AddServiceForm'

import firebase from "firebase/app";
import "firebase/auth";

export default function Subscriptions() {
    const user = firebase.auth().currentUser
    var userEmail = user.email

    const [admins, setAdmins] = useState([])
    const [addServiceBtn, setAddServiceBtn] = useState(false); 
    const [userSubs, setUserSubs] = useState([]); 
    const [allServices, setAllServices] = useState([])

    //Getting list of all admin emails from API call 
    useEffect(() => {
        fetch(`/admin`).then(response =>
            response.json()).then(data => {
                setAdmins(data);
            });
    }, []);

    //Getting list of all available streaming services from API call 
    useEffect(()=>{
        fetch('/services').then(response => 
            response.json()).then(data => { 
                setAllServices(data)
            }); 
    }, []); 

    //GEtting the 
    useEffect(()=>{
        fetch(`/usersubscriptions?Email=${userEmail}`).then(response => 
            response.json()).then(data => { 
                setUserSubs(data); 
            }); 
    }, []); 

        // Checking if user logged in is an admin and display the corresponding results 
        if (!(admins.some(admin => admin.Email === userEmail))){
            /**References: How to update UI when adding and removing services:  
            *  * How to Call a Flask API in React: https://www.youtube.com/watch?v=06pWsB_hoD4
            */
            return (
                <>
                    <Dashboard/>
                    <Header>
                        <h1>My Subscriptions</h1>
                    </Header>
                    <AddBtn><Button color='blue' onClick={() => setAddServiceBtn(true)}>Add Service</Button></AddBtn>
                    <SubCard services={userSubs} userEmail={userEmail} adminStatus={false} onRemovedService={serviceRemoved => setUserSubs(userSubs.filter(service => service['Service_name'] != serviceRemoved))}/>
                    <AddServiceForm trigger={addServiceBtn} setTrigger={setAddServiceBtn} userEmail={userEmail} userServices={userSubs} allServices={allServices} onAddedService={newService => setUserSubs(currentServices => [...currentServices, newService])}/>
                </>
            )
        } else {
            return (
                <>
                    <Dashboard/>
                    <Header>
                        <h1>All Services</h1>
                    </Header>
                    <SubCard services={allServices} userEmail={userEmail} adminStatus={true}/>
                </>
            )
        }
}

const Header = styled.div`
    margin-left: 240px; 
    margin-top: 70px;
`
const AddBtn = styled.div `
    margin-left: 1060px; 
    margin-top: 10px;
`

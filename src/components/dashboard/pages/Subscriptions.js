import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {Button} from 'react-bootstrap'
import Dashboard from '../Dashboard'
import SubCard from '../../cards/SubCard'
import AddServiceForm from '../../forms/AddServiceForm'

export default function Subscriptions() {
    //Need to pass in email of user logged in 
    var userEmail = 'michael.miller@email.com'

    const [addServiceBtn, setAddServiceBtn] = useState(false); 
    const [userSubs, setUserSubs] = useState([]); 
    const [allServices, setAllServices] = useState([])

    useEffect(()=>{
        fetch('/services').then(response => 
            response.json()).then(data => { 
                setAllServices(data)
            }); 
    }, []); 

    useEffect(()=>{
        fetch(`/usersubscriptions?Email=${userEmail}`).then(response => 
            response.json()).then(data => { 
                setUserSubs(data); 
            }); 
    }, []); 


    /**References: How to update UI when adding and removing services:  
     *  * How to Call a Flask API in React: https://www.youtube.com/watch?v=06pWsB_hoD4
    */
    return (
        <>
        <Dashboard/>
        <Header>
            <h1 className="pageHeader">My Subscriptions</h1>
        </Header>
        <AddBtn><Button onClick={() => setAddServiceBtn(true)}>Add Service</Button></AddBtn>
        <SubCard services={userSubs} userEmail={userEmail} onRemovedService={serviceRemoved => setUserSubs(userSubs.filter(service => service['Service_name'] != serviceRemoved))}/>
        <AddServiceForm trigger={addServiceBtn} setTrigger={setAddServiceBtn} userEmail={userEmail} userServices={userSubs} allServices={allServices} onAddedService={newService => setUserSubs(currentServices => [...currentServices, newService])}/>
    </>
    )
}

const Header = styled.div`
    margin-left: 240px; 
    margin-top: 70px;
`
const AddBtn = styled.div `
    margin-left: 1000px; 
    margin-top: 10px;
`

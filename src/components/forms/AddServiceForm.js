import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {Form, Select, Button} from 'semantic-ui-react'

export default function AddServiceForm(props){
    var Email = props.userEmail
    var allServices = props.allServices
    var userServices = props.userServices
    var selectOptions = []

    const [service, setService] = useState('')

    /* Generating the list of services the user can add. 
       References: 
        * Checking if an a certain value is within in any of the objects in the array list 
            * https://www.tutorialrepublic.com/faq/how-to-check-if-an-array-includes-an-object-in-javascript.php */
    for (var i=0; i<allServices.length; i++){
        if (!(userServices.some(userServices => userServices.Service_name === allServices[i]['Service_name']))){
            var newObj = {key: allServices[i]['Sid'], text: allServices[i]['Service_name'], value: allServices[i]['Sid']}
            selectOptions.push(newObj)
        }
    }

    function closeReview(){
        props.setTrigger(false)
        setService('')
    }
    var serviceAdded = allServices.find(object => object.Service_name == service)
    console.log(serviceAdded)
    /*
     * Creating request object and getting reponse from API after adding a user review to a certain movie 
     * Flask Movie API Example: https://www.youtube.com/watch?v=Urx8Kj00zsI
     */
    async function addService(){
        console.log(service)
        
        if (service == ''){
            alert('Error! Please select a service from the list')
        } 
        else{
            const request = {
                method: 'POST', 
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ Email: Email, Service_name: service})
            }
            const response = await fetch('/usersubscriptions', request); 
            if (response.ok){
                console.log('Service added')
                var serviceAdded = allServices.find(object => object.Service_name == service)
                props.onAddedService(serviceAdded)
                selectOptions.filter(selectOptions=>selectOptions.Id!=service)
                props.setTrigger(false)
                setService('')  
            } else{
                console.log('Not successful')
            }
        }    
    }
    /*References: 
        * Creating a add review popup form where users can add a review: 
            * Build a POPUP component in React JS ~ A Beginner Tutorial with React https://www.youtube.com/watch?v=i8fAO_zyFAM */
    return (props.trigger)?(
        <Popup>
            <ServiceForm>
                <Form>
                    <Top>
                        <h2>Add a service</h2>
                        <CloseBtn><Button variant="default" onClick={closeReview} icon='close'></Button></CloseBtn>
                    </Top>
                    <Select style={{marginLeft: "80px", width: "250px"}} options={selectOptions} placeholder='Select Service' onChange={event => setService(event.target.textContent)}/>
                    <SubmitBtn><Button color='blue' variant="default" onClick={addService}>Add</Button></SubmitBtn>
                </Form>
                {props.children}    
            </ServiceForm>             
        </Popup>
    ) : ""; 
}; 

const Popup = styled.div `
    display: flex; 
    justify-content: center; 
    align-items: center; 
    position: fixed; 
    top: 0; 
    left: 0; 
    width: 100%; 
    height: 100vh;  
    background-color: rgba(0, 0, 0, 0.2);
`

const ServiceForm = styled.div `
    position: relative; 
    width: 455px; 
    padding: 10px;  
    background-color: white; 
    border-radius: 10px;
`

const Top = styled.div`
    display: flex;  
    margin-bottom: 0px; 
`

const CloseBtn = styled.div`
    margin-top: 0px; 
    margin-bottom: 10px;  
    margin-left: 250px;   
`
const SubmitBtn = styled.div`
    margin-top = 10px;  
    margin-left: 360px;
`
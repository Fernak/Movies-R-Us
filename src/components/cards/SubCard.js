import React, { useState } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

export default function SubCard({services, userEmail, onRemovedService}){
    var Email = userEmail

    async function removeService(serviceName){
        const request = {
            method: 'DELETE', 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ Email: userEmail, Service_name: serviceName})
        }
        const response = await fetch('/usersubscriptions', request); 
        if (response.ok){
            console.log('Service has been removed')
            alert('Service has been successfully removed')
            onRemovedService(serviceName)
        } else{
            console.log('Not successful')
        }
    }
    /**
     * References: 
     * To populate each card with information from card content object: 
     *      Dynamically Create Cards In ReactJS Using React-Bootstrap https://www.youtube.com/watch?v=IhWFs0diAPE
     */
    const renderCard = (card, index) => {
        return (
            <div>
                <Box>
                    <Top>
                        <img style={{width: "60px", height: "60px", borderRadius: "10px", marginLeft: "15px", marginTop: "10px"}} src={card.Logo} alt=""/>   
                        <div>
                            <h3 style={{marginTop: "15px", marginLeft: "15px", marginBottom: "0px"}}>{card.Service_name}</h3>
                            <Text>
                                <h6>{card.Location}</h6>
                                <h6>{card.Price} /month</h6>
                            </Text>
                        </div>
                    </Top>
                    <RemoveLink><Link onClick={() => removeService(card.Service_name)}>Remove Subscription</Link></RemoveLink>
                </Box>
            </div>
        ); 
    }; 
    return <div>{services.map(renderCard)}</div>; 
}; 

/*
 * References: 
 *  To create box for every subscription service: 
 *      Build a Recipe App With React | React Tutorial For Beginners https://www.youtube.com/watch?v=U9T6YkEDkMo&list=PLDyQo7g0_nsVHmyZZpVJyFn5ojlboVEhE&index=2 */
const Box = styled.div`
    margin-top: 30px; 
    margin-bottom: 20px; 
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-item: center; 
    border-radius: 10px;
    box-shadow: 0px 12px 18px -6px rgba(0, 0, 0, 0.3);  
    margin-left: 400px; 
    background: #FAEAE6;
    height: 140px; 
    width: 800px; 
`
const Top = styled.div`
    display: flex;  
    margin-bottom: 0px; 
`
const Text = styled.div`
    margin-left: 30px; 
    margin-top: 15px; 
`
/**650 */
const RemoveLink = styled(Link) `
    margin-left: 650px; 
`
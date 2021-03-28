import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

export default function SubCard(){
    const cardContent = [
        {image: "https://cdn.vox-cdn.com/thumbor/QuS2QKQys3HhosKiV-2IuKhphbo=/39x0:3111x2048/1400x1050/filters:focal(39x0:3111x2048):format(png)/cdn.vox-cdn.com/uploads/chorus_image/image/49901753/netflixlogo.0.0.png", name: "Netflix", location: "Canada", price:"9.99 CAD"}, 
        {image: "https://images-na.ssl-images-amazon.com/images/I/41Ic%2BJWI8EL.jpg", name: "Amazon Prime Video", location: "Canada", price:"7.99 CAD"}, 
        {image: "https://cdn57.androidauthority.net/wp-content/uploads/2019/10/disney-plus-logo.jpg", name: "Disney+", location: "Canada", price:"11.99"}, 
        {image: "https://support.apple.com/content/dam/edam/applecare/images/en_US/psp/featured-section-appletv-plus_2x.jpg", name: "Apple TV+", location: "Canada", price:"5.99 CAD"}
    ]; 

    /**
     * References: 
     * To populate each card with information from card content object: 
     *      Dynamically Create Cards In ReactJS Using React-Bootstrap https://www.youtube.com/watch?v=IhWFs0diAPE
     */
    const renderCard = (card, index) => {
        return (
            <div>
                <Box>
                    <Title>
                        <h3> <img style={{width: "40px", height: "40px"}} src={card.image} alt=""/>   {card.name}</h3>
                    </Title>
                    <Text>
                        <h6>{card.location}</h6>
                        <h6>{card.price} /month</h6>
                    </Text>
                    <RemoveLink><Link>Remove Subscription</Link></RemoveLink>
                </Box>
            </div>
        ); 
    }; 
    return <div>{cardContent.map(renderCard)}</div>; 
}; 

const CardTitle = styled.div`
    font-size: medium;
    font-weight: bold;
`

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
    background: white;
    height: 150px; 
    width: 800px; 
`
const Title = styled.div`
    margin-left: 20px; 
    margin-top: 10px; 
`
const Text = styled.div`
    margin-left: 70px; 
    margin-top: 0px; 
    margin-bottom: 0px; 
`
const RemoveLink = styled(Link) `
    margin-left: 650px; 
`
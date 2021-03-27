import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

export default function SubCard(){
    const cardContent = [
        {image: "https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=6&m=1223671392&s=612x612&w=0&h=NGxdexflb9EyQchqjQP0m6wYucJBYLfu46KCLNMHZYM=", name: "Random", date: "March 26, 2021", rating:"5/10", desciprtion:"Good Movie!"}, 
        {image: "https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=6&m=1223671392&s=612x612&w=0&h=NGxdexflb9EyQchqjQP0m6wYucJBYLfu46KCLNMHZYM=", name: "Bob", date: "March 26, 2021", rating:"5/10", desciprtion:"Good Movie!"}, 
    ]; 

    const renderCard = (card, index) => {
        return (
            <div>
                <Box>
                    <Title>
                        <h3> <img style={{width: "40px", height: "40px"}} src={card.image} alt=""/>   {card.name}</h3>
                    </Title>
                    <Text>
                        <h6>{card.description}</h6>
                    </Text>
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

/**Build a Recipe App With React | React Tutorial For Beginners https://www.youtube.com/watch?v=U9T6YkEDkMo&list=PLDyQo7g0_nsVHmyZZpVJyFn5ojlboVEhE&index=2 */
const Box = styled.div`
    margin-top: 30px; 
    margin-bottom: 20px; 
    margin-left: 300px; 
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-item: center; 
    border-radius: 10px;
    box-shadow: 0px 12px 18px -6px rgba(0, 0, 0, 0.3);  
    background: white;
    height: 150px; 
    width: 800px; 
`
const Title = styled.div`
    margin-left: 20px; 
    margin-top: 10px; 
`
const Text = styled.div`
    margin-left: 80px; 
    margin-top: 0px; 
`
const RemoveLink = styled(Link) `
    margin-left: 650px; 
`
import React from 'react'
import {Card, Button} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import './Card.css'

export default function ProgramCard({programs}){
    let history = useHistory(); 
    /**
     * References: 
     * To create individual cards: https://react-bootstrap.github.io/components/cards/ 
     * To populate each card with information from card content object: 
     *      Dynamically Create Cards In ReactJS Using React-Bootstrap https://www.youtube.com/watch?v=IhWFs0diAPE
    */ 
   
    const renderCard = (card, index) => {
        return (
            /*<Link to="/indivtvshow">*/
                <Card style={{ width: '10rem'}} key={index} className="pCard" onClick={() => history.push('/indivmovie/${card.Uid}')}>
                <Card.Img variant="top" src={card.Image} style={{height: "180px"}}/>
                <Card.Body>
                    <Card.Text style={{height: '0rem'}} className="cardTitle">{card.Name}</Card.Text>
                    <Card.Text style={{height: '0rem'}} className="cardText">{card.Service_name}</Card.Text>
                    <Button variant="secondary" className="favBtn">+</Button>
                    </Card.Body>
            </Card>
            /*</Link>*/
        ); 
    }; 
    return <div className="grid">{programs && programs.map(renderCard)}</div>; 
}; 

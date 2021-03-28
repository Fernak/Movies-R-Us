import React from 'react'
import {Card, Button} from 'react-bootstrap'
import './Card.css'


export default function ProgramCard(){
    const cardContent = [
        {image: "https://m.media-amazon.com/images/M/MV5BMTQzMzg1ODAyNl5BMl5BanBnXkFtZTYwMjAxODQ1._V1_SX150_CR0,0,150,150_.jpg", name: "Al Pacino", role: "Actor"},
        {image: "https://m.media-amazon.com/images/M/MV5BMjAwNDU3MzcyOV5BMl5BanBnXkFtZTcwMjc0MTIxMw@@._V1_SX150_CR0,0,150,150_.jpg", name: "Robert De Niro", role: "Actor"},
        {image: "https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_SX150_CR0,0,150,150_.jpg", name: "Brad Pitt", role: "Actor"},
        {image: "https://m.media-amazon.com/images/M/MV5BMTc1MDI0MDg1NV5BMl5BanBnXkFtZTgwMDM3OTAzMTE@._V1_UY209_CR2,0,140,209_AL_.jpg", name: "Cate Blanchett", role: "Actree"}, 
        {image: "https://m.media-amazon.com/images/M/MV5BMTQzMzg1ODAyNl5BMl5BanBnXkFtZTYwMjAxODQ1._V1_SX150_CR0,0,150,150_.jpg", name: "Al Pacino", role: "Actor"},
        {image: "https://m.media-amazon.com/images/M/MV5BMjAwNDU3MzcyOV5BMl5BanBnXkFtZTcwMjc0MTIxMw@@._V1_SX150_CR0,0,150,150_.jpg", name: "Robert De Niro", role: "Actor"},
        {image: "https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_SX150_CR0,0,150,150_.jpg", name: "Brad Pitt", role: "Actor"},
        {image: "https://m.media-amazon.com/images/M/MV5BMTc1MDI0MDg1NV5BMl5BanBnXkFtZTgwMDM3OTAzMTE@._V1_UY209_CR2,0,140,209_AL_.jpg", name: "Cate Blanchett", role: "Actree"}
    ]; 

    /**
     * References: 
     * To create individual cards: https://react-bootstrap.github.io/components/cards/ 
     * To populate each card with information from card content object: 
     *      Dynamically Create Cards In ReactJS Using React-Bootstrap https://www.youtube.com/watch?v=IhWFs0diAPE
     */
    const renderCard = (card, index) => {
        return (
            <Card style={{ width: '10rem'}} key={index} className="cCard">
                <Card.Img variant="top" src={card.image} style={{height: "150px"}}/>
                <Card.Body>
                    <Card.Text style={{height: '0rem'}} className="cardTitle">{card.name}</Card.Text>
                    <Card.Text style={{height: '0rem'}} className="cardText">{card.role}</Card.Text>
                    <Button className="favBtn">+</Button>
                    </Card.Body>
            </Card>
        ); 
    }; 
    return <div className="grid">{cardContent.map(renderCard)}</div>; 
}; 

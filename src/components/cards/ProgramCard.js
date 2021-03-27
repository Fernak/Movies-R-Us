import React from 'react'
import {Card, Button} from 'react-bootstrap'
import './Card.css'
import { Link, NavLink } from 'react-router-dom'


export default function ProgramCard(){
    const cardContent = [
        {image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT9J7XACn3tlD6v4UXRMvT2wJN8FGCCPeh8U3RkZ6__tR4wGhSo", title: "The Lord of the Rings: The Fellowship of the Ring", service: "Netflix", genre: "Fantasy/Adventure", year:"2001"}, 
        {image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT8e9aFTxDo5jCIaaDNYgNcjJ4JFIz8MVlJr3-nhggVytaoFLOu", title: "The Hobbit: The Desolation of Smaug", service: "Netflix", genre: "Fantasy/Adventure", year:"2013"}, 
        {image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT-oosslYzD61pdLgPVmjN53hdzb-bjBeJajr2UILlq7kQNz7jR", title: "The Grinch", service: "Netflix", genre: "Family/Comedy", year:"2000"}, 
        {image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQeTMzh3aGw46IVUdS6N2tToanuLOc9dO7f6CgWVQlq1laJjuXa", title: "Sing", service: "Netflix", genre: "Family/Musical", year:"2016"}, 
        {image: "https://upload.wikimedia.org/wikipedia/en/0/0a/Inside_Out_%282015_film%29_poster.jpg", title: "Inside Out ", service: "Netflix", genre: "Family/Comedy", year:"2015"}, 
        {image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT9J7XACn3tlD6v4UXRMvT2wJN8FGCCPeh8U3RkZ6__tR4wGhSo", title: "The Lord of the Rings: The Fellowship of the Ring", service: "Netflix", genre: "Fantasy/Adventure", year:"2001"}, 
        {image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT8e9aFTxDo5jCIaaDNYgNcjJ4JFIz8MVlJr3-nhggVytaoFLOu", title: "The Hobbit: The Desolation of Smaug", service: "Netflix", genre: "Fantasy/Adventure", year:"2013"}, 
        {image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT-oosslYzD61pdLgPVmjN53hdzb-bjBeJajr2UILlq7kQNz7jR", title: "The Grinch", service: "Netflix", genre: "Family/Comedy", year:"2000"}, 
        {image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQeTMzh3aGw46IVUdS6N2tToanuLOc9dO7f6CgWVQlq1laJjuXa", title: "Sing", service: "Netflix", genre: "Family/Musical", year:"2016"}, 
        {image: "https://upload.wikimedia.org/wikipedia/en/0/0a/Inside_Out_%282015_film%29_poster.jpg", title: "Inside Out ", service: "Netflix", genre: "Family/Comedy", year:"2015"}
    ]; 

    const renderCard = (card, index) => {
        return (
            <Card style={{ width: '10rem'}} key={index} className="pCard">
                <Card.Img variant="top" src={card.image} style={{height: "180px"}}/>
                <Card.Body>
                    <Card.Text style={{height: '0rem'}} className="cardTitle">{card.title}</Card.Text>
                    <Card.Text style={{height: '0rem'}} className="cardText">{card.service}</Card.Text>
                    <Card.Text style={{height: '0rem'}} className="cardText">{card.genre}</Card.Text>
                    <Card.Text style={{height: '0rem'}} className="cardText">{card.year}</Card.Text>
                    <Button className="favBtn">+</Button>
                    </Card.Body>
            </Card>
        ); 
    }; 
    return <div className="grid">{cardContent.map(renderCard)}</div>; 
}; 

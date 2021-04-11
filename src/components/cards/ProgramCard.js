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
     * To pass Uid of card to the more details page: How to pass props with react-router using onClick methods
     *  https://stackoverflow.com/questions/54083066/how-to-pass-props-with-react-router-using-onclick-methods
    */ 
    console.log(programs)
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
    const renderCard = (card, index) => {
        return (
            /*<Link to="/indivtvshow">
                <Card style={{ width: '10rem'}} key={index} className="pCard">
                <Card.Img variant="top" src={card.Image} style={{height: "180px"}} onClick={() => history.push('/programdetails', {Uid: card.Uid})}/>
                <Card.Body onClick={() => history.push('/programdetails', {Uid: card.Uid})}>
                    <Card.Text style={{height: '0rem'}} className="cardTitle">{card.Name}</Card.Text>
                    <Card.Text style={{height: '0rem'}} className="cardText">{card.Service_name}</Card.Text>               
                </Card.Body>
                <Button variant="secondary" className="favBtn">+</Button>
            </Card>
            </Link>*/
                    
            <img className="pCard" src={card.Image} onClick={() => history.push('/programdetails', {Uid: card.Uid})}/>
                        
        ); 
    }; 
    //return <div className="grid">{programs && programs.map(renderCard)}</div>; 
    /*programs && programs */
    return (
        <div className="grid">
           {/*<div className="row__posters">*/}
                {programs && programs.map(renderCard)}
            {/*</div>*/}          
        </div>
        ); 
}; 

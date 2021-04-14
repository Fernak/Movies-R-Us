import React, {useState} from 'react'
import {Button} from 'react-bootstrap'
import styled from 'styled-components'
import {Form, Input, Rating} from 'semantic-ui-react'

export default function AddReviewForm(props){
    const [userRating, setUserRating] = useState(0)
    const [review, setReview] = useState('')
    var obj; 
    var Uid = props.Uid
    var Email = props.userEmail 

    function closeReview(){
        props.setTrigger(false)
        setUserRating(0)
        setReview('') 
    }

    /*
     * Creating request object and getting reponse from API after adding a user review to a certain movie 
     * Flask Movie API Example: https://www.youtube.com/watch?v=Urx8Kj00zsI
     */
    async function submitReview(){
        if (review == ''){
            console.log('error! Description cannot be empty')
            alert('Description field cannot be empty!')
        } 
        else{
            const request = {
                method: 'POST', 
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ Uid: Uid, Email: Email, Rating: userRating, Description: review})
            }
            // Referenced: Handling response status using fetch in react JS
            await fetch('/userreview', request).then(response => {
                if (response.ok){
                    return response.json()
                }
            }).then(data => { 
                console.log(data)
                obj = data
                }); 
            props.onAddedReview({Author: obj['Username'], Date: obj['Date'], Description: review, Rating: userRating})
            props.setTrigger(false)
            setUserRating(0)
            setReview('')   
        }    
    }
    /*References: 
        * Creating a add review popup form where users can add a review: 
            * Build a POPUP component in React JS ~ A Beginner Tutorial with React https://www.youtube.com/watch?v=i8fAO_zyFAM */
    return (props.trigger)?(
        <Popup>
            <ReviewForm>
                <Form>
                    <CloseBtn><Button variant="default"style={{background: "#9FFFCB"}} onClick={closeReview}>X</Button></CloseBtn>
                    <Form.Field>
                        <Rating icon='star' maxRating={5} value={userRating} onRate={(_, data) => {setUserRating(data.rating)}}/> 
                    </Form.Field>
                    <Form.Field>
                        <Input placeholder="Write your review here" value={review} onChange={event => setReview(event.target.value)}/>
                    </Form.Field>
                    <SubmitBtn><Button variant="default"style={{background: "#9FFFCB" }} onClick={submitReview}>Submit</Button></SubmitBtn>
                </Form>
                {props.children}    
            </ReviewForm>             
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

const ReviewForm = styled.div `
    position: relative; 
    width: 700px; 
    padding: 10px;  
    background-color: white; 
    border-radius: 10px;
`

const CloseBtn = styled.div`
    margin-top: 0px; 
    margin-bottom: 10px;  
    margin-left: 645px;   
`
const SubmitBtn = styled.div`
    margin-top = 10px;  
    margin-left: 600px;
`

import React, {useState, useEffect} from 'react'
import Dashboard from '../Dashboard'
import {Button} from 'react-bootstrap'
import styled from 'styled-components'
import CrewCard from '../../cards/CrewCard'
import ReviewCard from '../../cards/ReviewCard'
import AddReviewForm from '../../forms/AddReviewForm'

export default function ProgramDetails(props) {
    const [addReviewBtn, setAddReviewBtn] = useState(false); 
    const [programDetails, setProgramDetails] = useState([]);
    const [programCrew, setProgramCrew] = useState([]); 
    const [programReviews, setProgramReviews] = useState([]); 

    const [userFavPrograms, setUserFavPrograms] = useState([]); 

    var Uid = props.location.state['Uid']
    var userEmail = 'dennis.scott@email.com'
    var favBtnStatus = ''
    var favPrograms = []

    /**API call to get all details of a program and will split and store into three separate arrays. */
    useEffect(()=>{
        fetch(`/programdetails?Uid=${Uid}`).then(response => 
            response.json()).then(data => { 
                setProgramDetails([data['programinfo']]); 
                setProgramCrew(data['programcrew'])
                setProgramReviews(data['programreviews'])
                //console.log(props.location.state); 
                //console.log(props.location.state['state'])
            }); 
    }, []); 

    /**Geting all programs that the user has favourited used to set the content of the favourite button */
    useEffect(()=>{
        fetch(`/userfavs?Email=${userEmail}`).then(response => 
            response.json()).then(data => { 
                setUserFavPrograms([...data['favouriteshows'], ...data['favouritemovies']])
                console.log(userFavPrograms)
                //console.log(favObj)
                //console.log(favPrograms)
                //console.log(favPrograms)
                //console.log(props.location.state['state'])
            }); 
    }, []); 

    /**Getting the Uid of all the user favourited movies */
    for (var i=0; i<userFavPrograms.length; i++){
        favPrograms.push(userFavPrograms[i]['Uid'])
    }
    //console.log(favPrograms)
    if (favPrograms.includes(Uid)){
        favBtnStatus = 'Remove From Favourites'
        //console.log(favBtnStatus)
    }
    else {
        favBtnStatus = 'Add To Favourites'
       // console.log(favBtnStatus)
    }
    /*
    useEffect(()=>{
        fetch(`/programcrew?Uid=${Uid}`).then(response => 
            response.json()).then(data => { 
                console.log(data); 
                setProgramCrew(data); 
            }); 
    }, []); 

    useEffect(()=>{
        fetch(`/programreviews?Uid=${Uid}`).then(response => 
            response.json()).then(data => { 
                console.log(data); 
                setProgramReviews(data); 
            }); 
    }, []);*/ 

    /** Favourite button even handler (handling button click) */
    async function addOrRemoveFavourite(){
        /*Reuqest to add to user reviews  */
        if (favBtnStatus == 'Add To Favourites'){
            console.log('Will add to favourites')
            const request = {
                method: 'POST', 
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ Email: userEmail,  Uid: Uid})
            }
            const response = await fetch('/userfavs', request); 
            if (response.ok){
                console.log('Added to favourites added')
                alert('Added to favourites added')        
            } else{
                console.log('Not successful')
            }
            console.log(Uid)
        }
        else{
            console.log('Remove from favourites')
            console.log(Uid)
            const request = {
                method: 'DELETE', 
                headers: { 'Content-Type': 'application/json' },
            }
            const response = await fetch(`/userfavs?Email=${userEmail}&Uid=${Uid}`, request); 
            if (response.ok){
                console.log('Removed from favourtes')
                alert('Program has been successfully removed from favourites')
            } else{
                console.log('Remove not successful')
            }
            favBtnStatus = 'Add To Favourites'
        }

    }

    return (
        <>
            <Dashboard/>
            <h1></h1>
            {programDetails.map(details => {
                if (details.Type == 'Movie'){
                    return (
                        <div>
                        <Top>
                            <Image><img style={{width: "250px", height: "350px"}} src={details.Image} alt=""/></Image>
                            <div style={{marginLeft: "50px"}}>
                                <Title><h1>{details.Name}</h1></Title>
                                <div>
                                    <Text><h3>Type: {details.Type}</h3></Text>
                                    <Text><h3>Age-Rating: {details.Age_rating}</h3></Text>
                                    <Text><h3>Year: {details.Year}</h3></Text>
                                    <Text><h3>Genre: {details.Genre}</h3></Text>
                                    <Text><h3>Language: English</h3></Text>
                                    <Text><h3>Streaming Service: {details.Service_name}</h3></Text>
                                    <Text><h3>Duration: {details.Run_time}</h3></Text>
                                    <Text><h3>Arrival Date: March 28, 2018</h3></Text>
                                    <Text><h3>Departure Date: March 28, 2021</h3></Text>
                                </div>
                            </div>
                        </Top>
                        <RatingText><h3>Rating: {details.User_rating}/10</h3></RatingText>
                        <AddFavBtn><Button onClick={addOrRemoveFavourite}>{favBtnStatus}</Button></AddFavBtn>
                        <Header><h2>Synopsis</h2></Header>
                        <SynopText>
                            <h4>{details.Description}</h4>
                        </SynopText>
                        <Header><h2>Crew</h2></Header>
                        <Scroll><CrewCard programCrew={programCrew}/></Scroll>
                        <Header><h2>Reviews <AddRevBtn><Button onClick={() => setAddReviewBtn(true)}>Add Review</Button></AddRevBtn></h2></Header>  
                        <ReviewCard programReviews={programReviews}/>
                        {/*References opening a review popup form: Build a POPUP component in React JS ~ A Beginner Tutorial with React https://www.youtube.com/watch?v=i8fAO_zyFAM */}
                        <AddReviewForm trigger={addReviewBtn} setTrigger={setAddReviewBtn} Uid={Uid}/>
                    </div>
                )}
                else if(details.Type == 'TV Show'){
                    return(
                        <div>
                <Top>
                    <Image><img style={{width: "250px", height: "350px"}} src={details.Image} alt=""/></Image>
                    <div style={{marginLeft: "50px"}}>
                        <Title><h1>{details.Name}</h1></Title>
                        <div>
                            <Text><h3>Type: {details.Type}</h3></Text>
                            <Text><h3>Age-Rating: {details.Age_rating}</h3></Text>
                            <Text><h3>Year: {details.Year}</h3></Text>
                            <Text><h3>Genre: {details.Genre}</h3></Text>
                            <Text><h3>Language: English</h3></Text>
                            <Text><h3>Streaming Service: {details.Service_name}</h3></Text>
                            <Text><h3>Number of Seasons: {details.No_of_seasons}</h3></Text>
                            <Text><h3>Arrival Date: March 28, 2018</h3></Text>
                            <Text><h3>Departure Date: March 28, 2021</h3></Text>
                        </div>
                    </div>
                </Top>
                <RatingText><h3>Rating: {details.User_rating}/10</h3></RatingText>
                <AddFavBtn><Button>{favBtnStatus}</Button></AddFavBtn>
                <Header><h2>Synopsis</h2></Header>
                <SynopText>
                    <h4>{details.Description}</h4>
                </SynopText>
                <Header><h2>Crew</h2></Header>
                <Scroll><CrewCard programCrew={programCrew}/></Scroll>
                <Header><h2>Reviews <AddRevBtn><Button>Add Review</Button></AddRevBtn></h2></Header>
                <ReviewCard programReviews={programReviews}/>
                <AddReviewForm trigger={addReviewBtn} setTrigger={setAddReviewBtn} Uid={Uid}/>
            </div>
            )}})}
        </>
    )
}

const Top = styled.div`
    display: flex; 
    margin-top: 50px;
    margin-left: 180px; 
`
const Title = styled.div `
    margin-right: 0px; 
    margin-bottom: 20px; 
`

const Header = styled.div`
    margin-left: 240px; 
    margin-top: 30px;
`
const Image = styled.div`
    margin-left: 90px; 
    margin-right: 0px; 
`
const AddFavBtn = styled.div `
    margin-left: 270px; 
    margin-top: 20px;
`

const AddRevBtn = styled.div `
    margin-left: 750px; 
`

/*
 * References: 
 * Making Scrollable sections within a page: 
 *      How To Make A Div Vertically Scrollable Using CSS https://www.youtube.com/watch?v=uB1KzjV0IhM 
 */
const Scroll = styled.div`
    height: 300px; 
    padding-bottom: 50px; 
    overflow: hidden; 
    overflow-y: auto; 
`

const RatingText = styled.div `
    margin-left: 270px; 
    margin-top: 20px;
`

const Text = styled.div `
    margin-left: 30px; 
    margin-top: 0px; 
    margin-bottom: 10px; 
`

const SynopText = styled.div `
    margin-left: 270px; 
    margin-top: 10px; 
    width: 1010px; 
    display: flex; 
    justify-content: space-around; 
`
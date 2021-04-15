import React, { useState, useEffect } from 'react'
import firebase from "firebase/app";
import "firebase/auth";

import Dashboard from '../Dashboard'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'
import { Details } from '@material-ui/icons';

export default function Profile() {
    var user = firebase.auth().currentUser;
    var userEmail = user.email;

    const [userDetails, setUserDetails] = useState([]);

    useEffect(() => {
        fetch(`/profile?Email=${userEmail}`).then(response =>
            response.json()).then(data => {
                console.log(data)
                setUserDetails([data['userInfo']])

            });
    }, []);

    return (
        <>
            <Dashboard />
            {userDetails.map(details => (
                <div>
                    <Header>
                        <h1 className="pageHeader">My Profile</h1>
                    </Header>

                    <div>
                        <Image>
                            <img style={{ width: "160px", height: "160px" }} src="https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/UofCCoat.svg/1200px-UofCCoat.svg.png" alt="" />
                        </Image>
                        <Email><h2>{userEmail}</h2></Email>
                        <ChangeBtn><Button>Change Password</Button></ChangeBtn>
                        <Box1>
                            <Title>
                                <h3>Pesonal Information </h3>
                            </Title>
                            <Text>
                                <h6>Name: {details.Name}</h6>
                                <h6>Username: {details.Username}</h6>
                                <h6>Age: {details.Age}</h6>
                                <h6>Gender: {details.Gender}</h6>
                                <h6>Languages: {details.Language}</h6>
                                <h6 style={{ marginLeft: "30px" }}>English</h6>
                                <h6 style={{ marginLeft: "30px" }}>French</h6>
                            </Text>

                            <EditLink><Link to="/profile-edit">Edit Information</Link></EditLink>
                        </Box1>
                        {/*<Box2>
                    <Title>
                        <h3>Languages</h3>
                    </Title>
                    <Text>
                        <h6>English</h6>
                        <h6>French</h6>
                    </Text>
                    <EditLink><Link>Edit Languages</Link></EditLink>
                </Box2>*/}
                    </div>
                </div>
            ))}
        </>
    )
}

const Header = styled.div`
    margin-left: 240px; 
    margin-top: 10px;
`
const Image = styled.div` 
    border-radius: 80px; 
    margin-left: 700px; 
    margin-top: 50px;
`

const Email = styled.div`
    margin-left: 680px; 
    margin-top: 10px;
`
const ChangeBtn = styled.div`
    margin-left: 1000px; 
    margin-top: 20px;
`

/**Build a Recipe App With React | React Tutorial For Beginners https://www.youtube.com/watch?v=U9T6YkEDkMo&list=PLDyQo7g0_nsVHmyZZpVJyFn5ojlboVEhE&index=2 */
const Box1 = styled.div`
    margin-top: 50px; 
    border-radius: 10px;
    box-shadow: 0px 12px 18px -6px rgba(0, 0, 0, 0.3);  
    margin-left: 400px; 
    background: white;
    height: 260px; 
    width: 800px; 
`

const Box2 = styled.div`
    margin-top: 50px; 
    border-radius: 10px;
    box-shadow: 0px 12px 18px -6px rgba(0, 0, 0, 0.3);  
    margin-left: 400px; 
    background: white;
    min-height: 120px; 
    width: 800px; 
`

/**Build a Recipe App With React | React Tutorial For Beginners https://www.youtube.com/watch?v=U9T6YkEDkMo&list=PLDyQo7g0_nsVHmyZZpVJyFn5ojlboVEhE&index=2 */

const Title = styled.div`
    margin-top: 30px;
    margin-left: 20px;
`
const Text = styled.div`
    margin-top: 20px;
    margin-left: 40px;
`
const EditLink = styled(Link)`
    margin-left: 650px; 
`
const Info = styled.div`

`;
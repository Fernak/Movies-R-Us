import React, { useState } from 'react'
import { Nav, Navbar, Form, Alert } from 'react-bootstrap'
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { Input, Label, Menu, Button } from 'semantic-ui-react'
import styled from 'styled-components'

import SideBarItem from "./SideBarItem"

export default function Dashboard() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError('')

        try {
            await logout()
            history.pushState('/login')
        } catch {
            setError('Failed to log out')
        }
    }
    return (
        <Container>
            <Header>
                {error && <Alert variant="danger">{error}</Alert>}
                <Navbar expand="lg">
                    <Navbar.Brand href="/">MOVIESRUS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Form className="form-search">
                        <Input icon="search" placeholder="Search..." />
                    </Form>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Item><Nav.Link href="/profile">Profile</Nav.Link></Nav.Item>
                            <Nav.Item>
                                <Button primary class="logoutBtn" variant="link" onClick={handleLogout}>Logout</Button>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Header>
            <StyledSideNav>
                <Menu borderless vertical stackable fixed="left" className="side-nav">
                    <Link to="/"><SideBarItem highlight={true} label='Home' icon='home' /></Link>
                    <Link to="/movies"><SideBarItem label='Movies' icon='film' /></Link>
                    <Link to="/tvshows"><SideBarItem label='TV Shows' icon='television' /></Link>
                    <Link to="trending"><SideBarItem label='Trending' icon='fire' /></Link>
                    <SideBarItem label='Watch later' icon='clock' />
                    <Link to="favourites"><SideBarItem label='Favourites' icon='favorite' /></Link>
                    <Link to="/mysubscriptions"><SideBarItem label='My Subscriptions' icon='shopping cart' /></Link>
                    <Link to="/indivcrew"><SideBarItem label='Help' icon='help circle' /></Link>
                    <Link to="indivmovie"><SideBarItem label='Send feedback' icon='comment' /></Link>
                </Menu>
            </StyledSideNav>
        </Container>
    )
}


const Container = styled.div``;

const Header = styled.div`
    .navbar { background-color: #222; }
    a, .navbar-nav, .navbar-light .nav-link {
        color: #9FFFCB;
        font-size: 1.2em;
        &:hover { color: white; }
    }
    .navbar-brand {
        font-size: 1.4em;
        color: #9FFFCB;
        margin-left: 40px;
        font-weight: bold;
        &:hover { color: white; }
    }
    .form-search {
        position: absolute !important;
        left: 15%;
        right: 55%;
    }
`;

const StyledSideNav = styled.div`
    position: fixed;     
    height: 100%;
    width: 220px;     
    z-index: 1;      
    top: 3.4em;      
    background-color: #222; 
    overflow-x: hidden;     
    padding-top: 10px;

    .ui.menu.fixed.side-nav {
        background-color: #f5f5f5;
        margin-left: 10px;
        margin-top: 50px;
        overflow-y: auto;
        padding-bottom: 64px;

        .sidebar-item:hover {
            background: #ebebeb;
            }
        }

        .side-nav.ui.vertical.menu {
            width: 200px;
        }
`;
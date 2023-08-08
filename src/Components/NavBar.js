import React from 'react'
import Container from "react-bootstrap/Container"
import Navbar from'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

import './auth/style.css'

export default function NavBar({user}) {

  switch (user.role){
    case 'doctor':
      return (<>
    <Navbar   style={{fontWeight:"bold", backgroundColor: "mediumpurple"}} expand='lg' id="navbar" >
      <Container >
        <Navbar.Brand href='/' style={{fontFamily:"monospace", fontWeight:"bolder", backgroundColor: "#fff", padding:"5px",border:"2px solid mediumpurple", borderRadius:"5px"}}>
          <img style={{height:"40px", width:"50px"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTufoR1gl8noO1RA2PcSjOi2F133VMQGB7IIw&usqp=CAU' alt='logo'/>
          Linda Mama
          </Navbar.Brand>
        <Navbar className='justify-content-center'>
            <Nav className='me-auto'>
              <Nav.Link href="">Portal</Nav.Link>
              <Nav.Link href="">Our Team</Nav.Link>
            </Nav>
          </Navbar>
          <Navbar className='justify-content-end'>          
            <Navbar.Text>Signed in as: <a href="/logout">{user.email}</a></Navbar.Text>        
        </Navbar>
        </Container>
    </Navbar>
      </>)
      case 'patient' :
        return (<>
              <Navbar  style={{fontWeight:"bold", backgroundColor: "mediumpurple"}} expand='lg' className='bg-body-tertiary'>
      <Container>
        <Navbar.Brand href='/' style={{fontFamily:"monospace", fontWeight:"bolder", backgroundColor: "#fff", padding:"5px", border:"2px solid mediumpurple", borderRadius:"5px"}}>
          <img style={{height:"40px", width:"50px"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTufoR1gl8noO1RA2PcSjOi2F133VMQGB7IIw&usqp=CAU' alt='logo'/>
          Linda Mama
          </Navbar.Brand>
            <Navbar className='justify-content-center'>
                <Nav className='me-auto'>
                  <Nav.Link href="">Portal</Nav.Link>
                  <Nav.Link href="">Health Blog</Nav.Link>                  
                  <Nav.Link href="">Diet Plans</Nav.Link>
                  <Nav.Link href="">Chat Forum</Nav.Link>
                </Nav>
              </Navbar>
              <Navbar className='justify-content-end'>
              
                <Navbar.Text>Signed in as: <a href="/logout">{user.email}</a></Navbar.Text>
              
            </Navbar>
            </Container>
    </Navbar>
        </>)
        default:
          return (<>
    <Navbar  style={{fontWeight:"bold", backgroundColor: "mediumpurple"}} expand='lg' className='bg-body-tertiary'>
      <Container>
        <Navbar.Brand href='/' style={{fontFamily:"monospace", fontWeight:"bolder", backgroundColor: "#fff", padding:"5px", border:"2px solid mediumpurple", borderRadius:"5px"}}>
          <img style={{height:"35px", width:"40px"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTufoR1gl8noO1RA2PcSjOi2F133VMQGB7IIw&usqp=CAU' alt='logo'/>
          Linda Mama
          </Navbar.Brand>
            <Navbar className='justify-content-end'>
                <Nav className='me-auto'>
                  <Nav.Link href='/login'>Login</Nav.Link>
                </Nav>
            </Navbar>
            </Container>
    </Navbar>
          </>)
  }

  }


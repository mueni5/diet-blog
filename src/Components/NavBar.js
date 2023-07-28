import React from 'react'
import Container from "react-bootstrap/Container"
import Navbar from'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

export default function NavBar() {
  return (
    <Navbar expand='lg' className='bg-body-tertiary'>
      <Container>
        <Navbar.Brand href='/' style={{fontFamily:"monospace", fontWeight:"bolder"}}>
          <img style={{height:"40px", width:"50px"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTufoR1gl8noO1RA2PcSjOi2F133VMQGB7IIw&usqp=CAU'/>
          Linda Mama
          </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

import React from 'react'
import {useNavigate} from 'react-router-dom'
import Container from "react-bootstrap/Container"
import Button from 'react-bootstrap/Button'
import './auth/style.css'


export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="shadow-lg p-3 mb-5 bg-body rounded" style={{backgroundImage:"url(https://images.theconversation.com/files/302907/original/file-20191121-467-7o5mdt.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop)", height:"55rem", width: "100%",borderRadius:"5px", backgroundPosition:"center",backgroundRepeat:"no-repeat", backgroundSize:"cover"}} >
        <Container id="hero" style={{display:"flex", flexDirection:"column", marginTop:"200px", marginLeft:"100px", height:"20rem",  borderRadius:"5px",padding:"10px", color:"#323232" }}>
          <h4 style={{borderTop: '5px solid violet', width:"35%",backgroundColor:"hsla(0, 20%, 95%, 0.8)",marginBottom:"5%", borderRight: '5px solid violet', borderLeft: '5px solid violet', padding:"1rem" } }>Lorem ipsum dolor sit amet.</h4>
          <h6  style={{borderBottom: '5px solid violet',paddingLeft: '10%', width:"60%",backgroundColor:"hsla(0, 20%, 95%, 0.8)", borderRight: '5px solid violet', borderLeft: '5px solid violet', padding:"1rem" } }>Lorem ipsum dolor sit amet. . .
          <span style={{paddingLeft: '15%'}}>
            <Button style={{ marginLeft:"4rem"}} onClick={() => {navigate('/signup')}} variant='outline-dark'>Click Here To Sign Up</Button>
          </span></h6>
        </Container>
    </div>
  )
}

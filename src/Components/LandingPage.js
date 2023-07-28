import React from 'react'
import {useNavigate} from 'react-router-dom'
import Container from "react-bootstrap/Container"
import Button from 'react-bootstrap/Button'

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <Container className="shadow-lg p-3 mb-5 bg-body rounded" style={{backgroundImage:"url(https://images.theconversation.com/files/302907/original/file-20191121-467-7o5mdt.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop)", height:"640px",borderRadius:"5px", backgroundPosition:"center",backgroundRepeat:"no-repeat", backgroundSize:"cover"}} >
        <Container id="hero" style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", marginTop:"200px", marginLeft:"100px",width:"450px", height:"250px", backgroundColor:"hsla(0, 0%, 0%, 0.4)", borderRadius:"5px",padding:"10px", color:"white" }}>
          <h4>Lorem ipsum dolor sit amet.</h4>
          <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis viverra tincidunt nisl ut hendrerit. Etiam tincidunt porttitor varius. Nunc at nisi sit amet dolor rutrum pharetra quis at turpis. Etiam tempus metus malesuada, volutpat felis varius, pretium ante. Sed eu interdum neque, nec dignissim felis. Donec nec justo mi.</small>
          <div className='text-center'>
            <Button style={{marginTop:"15px", paddingRight:"40px", paddingLeft:"40px"}} onClick={() => {navigate('/signup')}} variant='outline-light'>Click Here To Sign Up</Button>
          </div>
        </Container>
    </Container>
  )
}

import React, {useState} from 'react'
import Form from "react-bootstrap/Form"
import Container  from 'react-bootstrap/Container'
import Button from "react-bootstrap/Button"
import Col from 'react-bootstrap/Col'
import Row from "react-bootstrap/Row"
import './style.css'

export default function Login({handleSetUser}) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState('')
    

    function handleSubmit (e){
        e.preventDefault()
        fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"  
            },
            body: JSON.stringify({ user: {
                email: `${email}`,
                password: `${password}`
            }})
            
        }).then((r) => r.json())
        .then(handleAuthenticate)
    }
    function handleAuthenticate (data){
        localStorage.setItem('jwt', data.jwt)
        handleSetUser(data.user)
    }
    function handleForgotPswd(){
        console.log("i have been clicked")
    }

  return (
    <Container style={{display:"flex", justifyContent: "center",alignItems:"center", marginTop:"10px", padding:"10px", flexDirection:"column",  borderRadius:"5px"}} >
        <h3 className="text-center">Fill in the form Below to Sign In</h3>
        <Form onSubmit={handleSubmit} style={{backgroundColor:"hsla(0, 70%, 30%, 0.1)", marginTop:"10px", padding:"10px", borderRadius:"5px", border:"2px solid #510A53"}}>
            <Form.Group as={Row} className='mb-3'>
                <Col sm="4"><Form.Label>Email :</Form.Label></Col>
                <Col sm="8"><Form.Control onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='name@example.com'/></Col> 
            </Form.Group>

            <Form.Group as={Row} className='mb-3'>
                <Col sm="4"><Form.Label>Password:</Form.Label></Col>                
                <Col sm="8"><Form.Control onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='Password'/></Col>
            </Form.Group>

            <Form.Group as={Row} className='mb-3'>
                <Col sm="6" className="text-center" >
                    <Button variant='danger' onClick={handleForgotPswd}>Forgot Password?</Button>
                </Col>                
                <Col  sm="6" className="text-center">
                    <Button type='submit' variant='primary'>Submit</Button>
                </Col>
            </Form.Group>
        </Form>
    </Container>
  )
}

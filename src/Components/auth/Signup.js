import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Form from "react-bootstrap/Form"
import Container  from 'react-bootstrap/Container'
import Button from "react-bootstrap/Button"
import Col from 'react-bootstrap/Col'
import Row from "react-bootstrap/Row"
import './style.css'

export default function Signup({handleSetUser}) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [role, setRole] = useState('')
    let navigate = useNavigate()

    function handleSubmit (e){
        e.preventDefault()
        fetch('/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"  
            },
            body: JSON.stringify({ user: {
                email: `${email}`,
                password: `${password}`,
                password_confirmation: `${passwordConfirmation}`,
                role: `${role}`
            }})
            
        }).then((r) => r.json())
        .then(handleAuthenticate)
    }
    function handleAuthenticate (data){
        localStorage.setItem('jwt', data.jwt)
        handleSetUser(data.user)
        navigate('/profile')
    }

  return (
    <Container className="auth-form" style={{display:"flex", justifyContent: "center",alignItems:"center", marginTop:"10px", padding:"10px", flexDirection:"column",  borderRadius:"5px"}} >
        <h3 className="text-center">Fill in the form Below to Sign Up</h3>
        <Form onSubmit={handleSubmit} style={{backgroundColor:"hsla(0, 100%, 50%, 0.1)", marginTop:"10px", padding:"10px", borderRadius:"5px", border:"2px solid #510A53"}}>
            <Form.Group as={Row} className='mb-3'>
                <Col sm="4"><Form.Label>Email :</Form.Label></Col>
                <Col sm="8"><Form.Control onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='name@example.com'/></Col> 
            </Form.Group>
            <Form.Group as={Row} className='mb-3'>
                <Col sm="4"><Form.Label >User Role:</Form.Label></Col>                
                <Col sm="8">
                    <Form.Select onChange={(e)=>setRole(e.target.value)} >
                        <option value="">Choose User Role...</option>
                        <option value="doctor">Doctor</option>
                        <option value="patient">Patient</option>
                    </Form.Select>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className='mb-3'>
                <Col sm="4"><Form.Label>Password:</Form.Label></Col>                
                <Col sm="8"><Form.Control onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='Password'/></Col>
            </Form.Group>
            <Form.Group as={Row} className='mb-3'>
                <Col sm="4"><Form.Label>Password Confirmation:</Form.Label></Col>                
                <Col sm="8">
                    <Form.Control onChange={(e)=>setPasswordConfirmation(e.target.value)} type='password' placeholder='Password Confirmation'/>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className='mb-3'>
                <Col sm="6" className="text-center" >
                    <Button type='reset' variant='warning'>Clear</Button>
                </Col>                
                <Col  sm="6" className="text-center">
                    <Button type='submit' variant='primary'>Submit</Button>
                </Col>
            </Form.Group>
        </Form>
    </Container>
  )
}

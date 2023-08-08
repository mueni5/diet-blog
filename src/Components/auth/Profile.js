import React, {useState} from 'react'
import Form from "react-bootstrap/Form"
import Container  from 'react-bootstrap/Container'
import Button from "react-bootstrap/Button"
import Col from 'react-bootstrap/Col'
import Row from "react-bootstrap/Row"
import './style.css'

export default function Profile({user}) {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState('')
    const [avatar, setAvatar] = useState('')
    const [bio, setBio] = useState('')
    const [age, setAge] = useState(0)
    const [sex, setSex] = useState('')
    const token = localStorage.getitem("jwt");
    const userId = user.id
    console.log(userId)
    function handleSubmit (e){
        e.preventDefault()
        fetch('/create_profile', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`  
            },
            body: JSON.stringify({ user: {
                first_name: `${firstName}`,
                last_name: `${lastName}`,
                age: `${age}`,
                sex: `${sex}`,
                avatar: `${avatar}`,
                bio:`${bio}`,
                user_id: {userId}
            }})
            
        }).then((r) => r.json())
        .then(handleReturn)
    }
    function handleReturn (data){
        console.log(data)
    }

  return (
    <Container className="auth-form" style={{display:"flex", justifyContent: "center",alignItems:"center", marginTop:"10px", padding:"10px", flexDirection:"column",  borderRadius:"5px"}} >
        <h3 className="text-center">Fill in the form Below to Create Profile</h3>
        <Form onSubmit={handleSubmit} style={{backgroundColor:"hsla(0, 100%, 50%, 0.1)", marginTop:"10px", padding:"10px", borderRadius:"5px", border:"2px solid #510A53"}}>
            <Form.Group as={Row} className='mb-3'>
                <Col sm="6">
                    <Col sm="6"><Form.Label>First Name :</Form.Label></Col>
                    <Col sm="6"><Form.Control onChange={(e)=>setFirstName(e.target.value)} type='text' placeholder='first name'/></Col>
                </Col>
                <Col sm="6">
                    <Col sm="6"><Form.Label>Last Name :</Form.Label></Col>
                    <Col sm="6"><Form.Control onChange={(e)=>setLastName(e.target.value)} type='text' placeholder='last name'/></Col>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className='mb-3'>
                <Col sm="6">                
                    <Col sm="6"><Form.Label >Sex:</Form.Label></Col>                
                    <Col sm="6">
                        <Form.Select onChange={(e)=>setSex(e.target.value)} >
                            <option value="">Choose Sex...</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </Form.Select>
                    </Col>
                </Col>
                <Col sm="6">
                    <Col sm="6"><Form.Label>Age :</Form.Label></Col>
                    <Col sm="6"><Form.Control type="number" onChange={(e)=>setAge(e.target.value)} placeholder='age'/></Col>
                </Col>

            </Form.Group>
            <Form.Group as={Row} className='mb-3'>
                <Col sm="4"><Form.Label>Profile Photo:</Form.Label></Col>                
                <Col sm="8"><Form.Control onChange={(e)=>setAvatar(e.target.value)} type='text' placeholder='avatar_url'/></Col>
            </Form.Group>
            <Form.Group as={Row} className='mb-3'>
                <Col sm="4"><Form.Label>Bio:</Form.Label></Col>                
                <Col sm="8">
                    <Form.Control onChange={(e)=>setBio(e.target.value)} as='textarea' rows={3} placeholder='Bio (0 - 100 Characters)'/>
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

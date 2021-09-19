import React, {useRef, useState} from 'react'
import { Card, Button, Form, Alert } from 'react-bootstrap'
import {useAuth} from '../contexts/AuthContext'

function SignUp() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {signup} = useAuth()
    const {currentUser} = useAuth()
    const [error, seterror] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e){
        e.preventDefault()
        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return seterror('Passwords do not match')
        }
        try{
            setLoading(true)
            seterror('');
            await signup(emailRef.current.value, passwordRef.current.value)
        } catch{
            console.log('Failed to create an error');
            seterror('Failed to create an error')

        }
        setLoading(false)
    }

    return (
        <div>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    <Alert variant="success">User: {JSON.stringify(currentUser.email)}</Alert>
                    {error && <Alert variant = "danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>
                                Email
                            </Form.Label>
                            <Form.Control type="email" ref={emailRef} placeholder="Enter email" required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>
                                Password
                            </Form.Label>
                            <Form.Control type="password" ref={passwordRef} placeholder="Enter Password" required />
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>
                                Confirm Password
                            </Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} placeholder="Confirm Password" required />
                        </Form.Group>
                        <Button disabled={loading} className="w-100 my-3" variant="primary" type="submit">
                            Sign Up
                        </Button>
                    </Form>
                </Card.Body>
            </Card>

            <div className="w-100 text-center mt-2">
                Login
            </div>

        </div>
    )
}

export default SignUp

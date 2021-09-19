import React, {useRef} from 'react'
import { Card, Button, Form } from 'react-bootstrap'

function SignUp() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    return (
        <div>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    <Form>
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
                        <Button className="w-100" variant="primary" type="submit">
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

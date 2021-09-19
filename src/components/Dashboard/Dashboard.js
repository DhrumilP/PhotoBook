import React, { useState, useContext } from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import AuthContext from '../contexts/AuthContext'

function Dashboard() {

    const [error, seterror] = useState('')
    const history = useHistory()
    const {currentUser, signout} = useContext(AuthContext)

    async function handleLogOut() {
        seterror('');
        try{
            await signout()
            history.push('/login')
        }catch{
            seterror('Log out failed');
        }
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Profile</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <strong>
                        Email:
                    </strong> {currentUser.email}
                    <Link to="/update-profile" className="btn btn-warning w-100 my-3">Update Profile</Link>
                </Card.Body>

            </Card>
            <div className="w-100 text-center mt-2">
                <Button variant="link" onClick={handleLogOut}>
                    Log Out
                </Button>
            </div>
        </>

    )
}

export default Dashboard

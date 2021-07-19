import React, { useState } from 'react'
import { Container, Menu } from 'semantic-ui-react'
import SignedOut from './SignedOut'
import SignedIn from "./SignedIn";

export default function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(true)

    function handleSignOut() {
        setIsAuthenticated(false)
    }

    function handleSignIn() {
        setIsAuthenticated(true)
    }


    return (
        <div>

            <div style={{ paddingBottom: "10px", background: "linear-gradient(130deg,#ff7a18,#af002d 41.07%,#319197 76.05%)" }}></div>
            <a>
            <Menu className="Navi">
                <Container>
                    <Menu.Item
                        name='home'
                    />
                    <Menu.Item
                        name='messages'
                    />

                    <Menu.Menu position='right'>
                        {isAuthenticated ? <SignedIn signOut={handleSignOut} bisey="1" /> : <SignedOut signIn={handleSignIn} />}
                    </Menu.Menu>
                </Container>
            </Menu>
            </a> 
        </div>
    )
}


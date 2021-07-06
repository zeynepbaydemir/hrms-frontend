import React from 'react'
import { Button, Container, Menu } from 'semantic-ui-react'

export default function Navi() {
    return (
        <div>
            
            <div style={{ paddingBottom: "10px",background: "linear-gradient(130deg,#ff7a18,#af002d 41.07%,#319197 76.05%)" }}></div>

            <Menu >
                <Container>
                    <Menu.Item 
                    name='home'
                />
                <Menu.Item
                    name='messages'

                />
                
                <Menu.Menu position='right'>
                    

                    <Menu.Item>
                        <Button primary >Kayıt Ol</Button>
                    </Menu.Item>
                    <Menu.Item>
                        <Button>Giriş Yap</Button>
                    </Menu.Item>
                </Menu.Menu>
                </Container>
                
            </Menu>
        </div>
    )
}


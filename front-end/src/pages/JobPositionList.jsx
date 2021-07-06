import React, { useEffect, useState } from 'react'
import { Icon, Label, Menu, Table ,Header} from 'semantic-ui-react'
import JobPositionService from '../services/jobPositionService';

export default function JobPositionList() {

    const [positions , setPositions] = useState([]);

    useEffect(()=>{
        let jobPositionService = new JobPositionService()
        jobPositionService.getPositions().then(result=>setPositions(result.data.data))
    },[])

    return (
        <div>
            <Header as="h3">
                <Header.Content size='large '>İş Pozisyonları Listesi</Header.Content>
            </Header>

            <div style={{ paddingBottom: "5px",background: "linear-gradient(130deg,#ff7a18,#af002d 41.07%,#319197 76.05%)" }}></div>
            <Table celled>
            
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>İş Unvanı</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                   
                <Table.Body>
                    {positions.map((position)=>(
                    <Table.Row key={position.id}>
                        <Table.Cell>{position.jobTitle}</Table.Cell>
                    </Table.Row>
                    ))}
                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}

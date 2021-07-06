import React, { useEffect, useState } from 'react'
import { Icon, Label, Menu, Table ,Header} from 'semantic-ui-react'
import EmployerService from '../services/employerService';

export default function EmployerList() {

    const [employers , setEmployers] = useState([]);

    useEffect(()=>{
        let employerService = new EmployerService()
        employerService.getEmployers().then(result=>setEmployers(result.data.data))
    },[])

    return (
        <div>
            <Header as="h3">
                <Header.Content size='large '>İşveren Listesi</Header.Content>
            </Header>


            <div style={{ paddingBottom: "5px",background: "linear-gradient(130deg,#ff7a18,#af002d 41.07%,#319197 76.05%)" }}></div>
            <Table celled>
            
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Şirket İsmi</Table.HeaderCell>
                        <Table.HeaderCell>E-posta</Table.HeaderCell>
                        <Table.HeaderCell>Telefon Numarası</Table.HeaderCell>
                        <Table.HeaderCell>Web Adresi</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                   
                <Table.Body>
                    {employers.map((employer)=>(
                    <Table.Row key={employer.id}>
                        <Table.Cell>{employer.companyName}</Table.Cell>
                        <Table.Cell>{employer.email}</Table.Cell>
                        <Table.Cell>{employer.phoneNumber}</Table.Cell>
                        <Table.Cell>{employer.webAddress}</Table.Cell>
                    </Table.Row>
                    ))}
                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='4'>
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

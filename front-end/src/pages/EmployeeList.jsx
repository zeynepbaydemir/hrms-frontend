import React, { useEffect, useState } from 'react'
import { Icon, Label, Menu, Table ,Header} from 'semantic-ui-react'
import EmployeeService from '../services/employeeService';



export default function EmployeeList() {

    const [employees, setEmployees] = useState([]);

    useEffect(()=>{
        let employeeService = new EmployeeService()
        employeeService.getEmployees().then(result=>setEmployees(result.data.data))
    },[])

    return (
        <div> 
            <Header as="h3">
                <Header.Content size='large '>Personel Listesi</Header.Content>
            </Header>


            <div style={{ paddingBottom: "5px",background: "linear-gradient(130deg,#ff7a18,#af002d 41.07%,#319197 76.05%)" }}></div>
            
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>İsim</Table.HeaderCell>
                        <Table.HeaderCell>Soy İsim</Table.HeaderCell>
                        <Table.HeaderCell>E-posta</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                   
                <Table.Body>
                    {employees.map((employee)=>(
                    <Table.Row key={employee.id}>
                        <Table.Cell>{employee.firstName}</Table.Cell>
                        <Table.Cell>{employee.lastName}</Table.Cell>
                        <Table.Cell>{employee.email}</Table.Cell>
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

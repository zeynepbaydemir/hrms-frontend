import React, {useState,useEffect} from 'react'
import { Icon, Label, Menu, Table ,Header} from 'semantic-ui-react'
import CandidateService from '../services/candidateService';


export default function CandidateList() {

    const [candidates, setCandidates] = useState([]);

    useEffect(()=>{
        let candidateService = new CandidateService()
        candidateService.getCandidates().then(result=>setCandidates(result.data.data))
    },[])

    return (
        <div>
             <Header as="h3">
                <Header.Content size='large '>İş Arayanlar Listesi</Header.Content>
            </Header>

            <div style={{ paddingBottom: "5px",background: "linear-gradient(130deg,#ff7a18,#af002d 41.07%,#319197 76.05%)" }}></div>
            
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>İsim</Table.HeaderCell>
                        <Table.HeaderCell>Soy İsim</Table.HeaderCell>
                        <Table.HeaderCell>Doğum Tarihi</Table.HeaderCell>
                        <Table.HeaderCell>TC Kimlik Numarası</Table.HeaderCell>
                        <Table.HeaderCell>E-posta</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                   
                <Table.Body>
                    {candidates.map((candidate)=>(
                    <Table.Row key={candidate.id}>
                        <Table.Cell>{candidate.firstName}</Table.Cell>
                        <Table.Cell>{candidate.lastName}</Table.Cell>
                        <Table.Cell>{candidate.dateOfBirth}</Table.Cell>
                        <Table.Cell>{candidate.nationalIdentity}</Table.Cell>
                        <Table.Cell>{candidate.email}</Table.Cell>
                    </Table.Row>
                    ))}
                </Table.Body>
                
                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='5'>
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
    );
}

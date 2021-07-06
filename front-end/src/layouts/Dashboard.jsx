import React from 'react'
import JobPositionList from '../pages/JobPositionList'
import CandidateList from '../pages/CandidateList'
import EmployerList from '../pages/EmployerList'
import EmployeeList from '../pages/EmployeeList'
import Categories from './Categories'
import Navi from './Navi'
import { Grid } from 'semantic-ui-react'


export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Categories />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <EmployeeList />
                        <EmployerList/>
                        <CandidateList/>
                        <JobPositionList/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

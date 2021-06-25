import React from 'react'
import { Menu } from 'semantic-ui-react'

export default function Categories() {
    return (
        <div>
            <Menu pointing vertical>
                <Menu.Item
                    name='Employee List'
                />
                <Menu.Item
                    name='Employer List'
                />
                <Menu.Item
                    name='Job Candidate List'
                />
                <Menu.Item
                    name='Job Position List'
                />
            </Menu>
        </div>
    )
}
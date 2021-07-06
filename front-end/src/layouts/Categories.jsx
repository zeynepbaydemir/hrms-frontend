import React from 'react'
import { Menu } from 'semantic-ui-react'

export default function Categories() {
    return (
        <div>
            <Menu pointing vertical>
                <Menu.Item
                    name='Personel Listesi'
                />
                <Menu.Item
                    name='İşveren Listesi'
                />
                <Menu.Item
                    name='İş Arayanlar Listesi'
                />
                <Menu.Item
                    name='İş Pozisyonları Listesi'
                />
            </Menu>
        </div>
    )
}

import React from 'react'

import styles from './Sidebar.module.css'

import { Menu } from '../Menu/Menu';
import { MenuItemDropdown } from '../Menu/MenuItemDropdown/MenuItemDropdown';

import ChurchIcon from '../../assets/images/ChurchIcon.png';
import ScheduleIcon from '../../assets/images/ScheduleIcon.png';
import CollaborationIcon from '../../assets/images/СollaborationIcon.png';
import ContactsIcon from '../../assets/images/ContactsIcon.png';
import DonateIcon from '../../assets/images/DonateIcon.png';

type SidebarProps = {};

/* 
    1. Add stripe to an active item
    6. Clear the code
    4. Add submenu functional
    5. Connect to Redux logic(dynamic map)
*/

export const Sidebar: React.FC<SidebarProps> = ({ }) => {
    return (
        <Menu>
            <MenuItemDropdown icon={ChurchIcon} text={"Храм"} isActive={false} />
            <MenuItemDropdown icon={ScheduleIcon} text={"Богослужения"} isActive={true} />
            <MenuItemDropdown icon={CollaborationIcon} text={"Деятельность"} isActive={false} />
            <MenuItemDropdown icon={ContactsIcon} text={"Контакты"} isActive={false} />
            <MenuItemDropdown icon={DonateIcon} text={"Пожертвовать"} isActive={false} />
        </Menu>
    )
}

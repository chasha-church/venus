import React from 'react'

import styles from './MenuItemDropdown.module.css'

type MenuItemDropdownProps = {
    someText: string;
}

export const MenuItemDropdown: React.FC<MenuItemDropdownProps> = ({ someText }) => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.heading}>{someText}</h1>
        </div>
    )
}

import React from 'react';

import styles from './MenuItem.module.css';

type MenuItemProps = {
    someText: string;
};

export const MenuItem: React.FC<MenuItemProps> = ({ someText }) => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.heading}>{someText}</h1>
        </div>
    );
};

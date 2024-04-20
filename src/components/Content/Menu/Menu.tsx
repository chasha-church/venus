import React from 'react';

import styles from './Menu.module.css';

type MenuProps = {
    someText: string;
};

export const Menu: React.FC<MenuProps> = ({ someText }) => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.heading}>{someText}</h1>
        </div>
    );
};

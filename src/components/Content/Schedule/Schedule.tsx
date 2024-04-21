import React from 'react';

import styles from './Schedule.module.css';

type ContactInfoProps = {
    someText: string;
}

export const Schedule: React.FC<ContactInfoProps> = ({ someText }) => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.heading}>{someText}</h1>
        </div>
    );
};
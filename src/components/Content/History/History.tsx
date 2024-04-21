import React from 'react';

import styles from './History.module.css';

type HistoryProps = {
    someText: string;
};

export const History: React.FC<HistoryProps> = ({ someText }) => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.heading}>{someText}</h1>
        </div>
    );
};

import React from 'react';

import styles from './News.module.css';

type NewsProps = {
    someText: string;
};

export const News: React.FC<NewsProps> = ({ someText }) => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.heading}>{someText}</h1>
        </div>
    );
};

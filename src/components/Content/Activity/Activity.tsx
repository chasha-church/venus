import React from 'react'

import styles from './Activity.module.css'

type ActivityProps = {
    someText: string;
}

export const Activity: React.FC<ActivityProps> = ({ someText }) => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.heading}>{someText}</h1>
        </div>
    )
}
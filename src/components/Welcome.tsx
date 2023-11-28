import React from 'react'

import styles from './Welcome.module.css'

type WelcomeProps = {
    welcomeText: string;
}

export const Welcome: React.FC<WelcomeProps> = ({ welcomeText }) => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.heading}>{welcomeText}</h1>
        </div>
    )
}
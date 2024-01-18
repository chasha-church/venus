import React from 'react'

import styles from './Footer.module.css'

type FooterProps = {
    someText: string;
}

export const Footer: React.FC<FooterProps> = ({ someText }) => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.heading}>{someText}</h1>
        </div>
    )
}
import React from 'react'

import styles from './Button.module.css'

type ButtonProps = {
    someText: string;
}

export const Button: React.FC<ButtonProps> = ({ someText }) => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.heading}>{someText}</h1>
        </div>
    )
}

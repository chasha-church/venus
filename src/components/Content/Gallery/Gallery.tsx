import React from 'react';

import styles from './Gallery.module.css';

type GalleryProps = {
    someText: string;
}

export const Gallery: React.FC<GalleryProps> = ({ someText }) => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.heading}>{someText}</h1>
        </div>
    );
};
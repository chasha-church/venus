import React from 'react'

import {NewsBlock} from "./NewsBlock/NewsBlock";
import {PreviewBlock} from "./PreviewBlock/PreviewBlock";

type HomeProps = {}

export const Home: React.FC<HomeProps> = () => {
    return (
        <>
            <PreviewBlock/>
            <NewsBlock/>
        </>
    )
}

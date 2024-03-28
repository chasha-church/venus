import React from 'react'

import {NewsBlock} from "./NewsBlock/NewsBlock";
import {PreviewBlock} from "./PreviewBlock/PreviewBlock";
import { ScheduleBlock } from './ScheduleBlock/ScheduleBlock';

type HomeProps = {}

export const Home: React.FC<HomeProps> = () => {
    return (
        <>
            {/* <PreviewBlock/> */}
            <NewsBlock/>
            <ScheduleBlock />
        </>
    )
}

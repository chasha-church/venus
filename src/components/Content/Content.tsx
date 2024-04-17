import React from 'react'
import styled from 'styled-components'
import {Outlet} from "react-router-dom";

type ContentProps = {}

const StyledContent = styled.div`
    padding-left: 95px;
`

export const Content: React.FC<ContentProps> = () => {
    return (
        <StyledContent>
            <Outlet />
        </StyledContent>
    )
}

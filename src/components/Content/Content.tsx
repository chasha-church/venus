import React from 'react'
import { Home } from './Home/Home'
import styled from 'styled-components'

type ContentProps = {}

const StyledContent = styled.div`
    /* Margin from Sidebar */
    margin-left: var(--content-margin);
`

export const Content: React.FC<ContentProps> = () => {
    return (
        <StyledContent>
            <Home />
        </StyledContent>
    )
}

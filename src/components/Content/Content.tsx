import React from 'react'
import { Home } from './Home/Home'
import styled from 'styled-components'

type ContentProps = {}

const StyledContent = styled.div`
    /* margin-left: 5%; */
`

export const Content: React.FC<ContentProps> = () => {
    return (
        <StyledContent>
            <Home />
        </StyledContent>
    )
}

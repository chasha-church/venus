import React from 'react'
import { Home } from './Home/Home'
import styled from 'styled-components'

type ContentProps = {}

const StyledContent = styled.div`
`

export const Content: React.FC<ContentProps> = () => {
    return (
        <StyledContent>
            <Home />
        </StyledContent>
    )
}

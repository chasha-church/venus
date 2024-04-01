import React, { ComponentProps } from 'react';

import styled from "styled-components"

const StyledLayout = styled.div`
    /* display: flex; */
`

export const AppLayout: React.FC<ComponentProps<'div'>> = ({ children }) => {
  return (
    <StyledLayout>
        {children}
    </StyledLayout>
  )
}
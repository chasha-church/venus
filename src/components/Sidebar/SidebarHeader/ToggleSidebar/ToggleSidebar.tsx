import React, { useContext } from 'react'
import styled from 'styled-components'
import { SidebarContext } from '../../Sidebar';

import { SidebarShowIcon } from '../../../common/Icons/SidebarShowIcon';

const StyledBtn = styled.button`
    position: absolute;
    top: 50%;
    right: 0%;
    transform: translateX(50%) translateY(-50%);
    cursor: pointer;
`

type ToggleSidebarProps = {};

export const ToggleSidebar: React.FC<ToggleSidebarProps> = ({ }) => {

    const { sidebarExpanded, setSidebarExpanded } = useContext(SidebarContext);

    return (
        <StyledBtn onClick={setSidebarExpanded}>
            <SidebarShowIcon
                style={{
                    width: "2em",
                    transition: "all .3s ease",
                    transform: `rotate(${sidebarExpanded ? "-180deg" : "0deg"})`
                }}
            />
        </StyledBtn>
    )
}

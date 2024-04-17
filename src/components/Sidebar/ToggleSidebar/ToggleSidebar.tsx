import React, { useContext } from 'react'

// @ts-ignore
import { SvgLoader } from 'react-svgmt';

import SidebarShowIcon from '../../../assets/images/SidebarShowIcon.svg'
import styled from 'styled-components'
import { SidebarContext } from '../Sidebar';

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
            <SvgLoader 
                width={"30px"} 
                path={SidebarShowIcon} 
                style={{ 
                    transition: "all .3s ease", 
                    transform: `rotate(${sidebarExpanded ? "0deg" : "-180deg"})`
                }}>
            </SvgLoader>
        </StyledBtn>
    )
} 

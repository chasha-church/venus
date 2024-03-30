import React, { useContext } from 'react'

// @ts-ignore
import { SvgLoader } from 'react-svgmt';

/* TODO: remove unused icon */
import SidebarHideIcon from '../../../assets/images/SidebarHideIcon.svg'

import SidebarShowIcon from '../../../assets/images/SidebarShowIcon.svg'
import styled from 'styled-components'

const StyledBtn = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    transform: translateX(50%) translateY(50%);
    cursor: pointer;
`

type ToggleSidebarProps = {
    sidebarExpanded: boolean;
    setExpanded: () => void;
}

export const ToggleSidebar: React.FC<ToggleSidebarProps> = ({ sidebarExpanded, setExpanded }) => {

    return (
        <StyledBtn onClick={setExpanded}>
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

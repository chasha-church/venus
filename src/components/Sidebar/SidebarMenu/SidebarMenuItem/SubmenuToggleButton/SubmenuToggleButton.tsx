import React, { useContext } from 'react'
import { useAppDispatch } from '../../../../../redux/hooks/hooks';
import { SubmenuExpandedType, SubmenuType, setSubmenuExpanded } from '../../../../../redux/features/sidebarSlice';

import styled from 'styled-components';
import { SidebarContext } from '../../../Sidebar';

import { SubmenuToggleIcon } from '../../../../common/Icons/SubmenuToggleIcon';

const StyledButton = styled.button<{ $sidebarExpanded: boolean; }>`
    position: absolute;
    right: 0.5em;
    top: 1.1em;

    padding: 0.5em;
    
    display: ${props => props.$sidebarExpanded ? "block" : "none"};
`;

const StyledIcon = styled.div<{ $submenuExpanded: SubmenuExpandedType; }>`
    & :only-child {
        width: 1.25em;
        transition: all 300ms;
        transform: ${props => props.$submenuExpanded ? "rotate(180deg)" : "rotate(0deg)"};
    }
`

type SubmenuToggleButtonProps = {
    id: number;
    submenu: SubmenuType;
    submenuExpanded: SubmenuExpandedType;
}

export const SubmenuToggleButton: React.FC<SubmenuToggleButtonProps> = ({ id, submenu, submenuExpanded }) => {

    const { sidebarExpanded } = useContext(SidebarContext);

    const dispatch = useAppDispatch();
    const openSubmenu = () => {
        dispatch(setSubmenuExpanded(id))
    }

    /* Don't show if there is no submenu */
    if (!submenu) return;

    return (
        <StyledButton
            $sidebarExpanded={sidebarExpanded}
            onClick={openSubmenu}
        >
            <StyledIcon $submenuExpanded={submenuExpanded}>
                <SubmenuToggleIcon />
            </StyledIcon>
        </StyledButton>
    );
}   

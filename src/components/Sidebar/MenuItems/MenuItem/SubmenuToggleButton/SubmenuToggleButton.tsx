import React from 'react'
import { useAppDispatch } from '../../../../../redux/hooks/hooks';
import { SubmenuExpandedType, SubmenuType, setSubmenuExpanded } from '../../../../../redux/features/sidebarSlice';

import SubmenuToggleIcon from '../../../../../../src/assets/images/SubmenuToggleIcon.svg';
import styled from 'styled-components';

const StyledButton = styled.button<{ $sidebarExpanded: boolean; }>`
    position: absolute;
    right: 0.5em;
    top: 50%;
    transform: translateY(-50%);
    
    display: ${props => props.$sidebarExpanded ? "block" : "none"};
`;

const StyledIcon = styled.img<{ $submenuExpanded: SubmenuExpandedType; }>`
    width: 1.25em;
    transition: all 300ms;
    transform: ${props => props.$submenuExpanded ? "rotate(180deg)" : "rotate(0deg)"};
`

type SubmenuToggleButtonProps = {
    id: number;
    sidebarExpanded: boolean;
    submenu: SubmenuType;
    submenuExpanded: SubmenuExpandedType;
}

export const SubmenuToggleButton: React.FC<SubmenuToggleButtonProps> = ({ id, sidebarExpanded, submenu, submenuExpanded }) => {
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
            <StyledIcon
                src={SubmenuToggleIcon}
                alt="Submenu-toggle"
                $submenuExpanded={submenuExpanded}
            />
        </StyledButton>
    );
}   

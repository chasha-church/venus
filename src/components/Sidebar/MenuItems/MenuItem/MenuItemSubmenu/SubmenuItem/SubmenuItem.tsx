import React, { useContext } from 'react'
import { SubmenuExpandedType, setActiveItem } from '../../../../../../redux/features/sidebarSlice';
import { useAppDispatch } from '../../../../../../redux/hooks/hooks';
import styled from 'styled-components';
import { SidebarContext } from '../../../../Sidebar';

const StyledSubmenuItem = styled.li<{ $submenuExpanded: SubmenuExpandedType; $sidebarExpanded: boolean; }>`
    cursor: pointer;
    text-wrap: nowrap;

    padding: ${props => (props.$submenuExpanded && props.$sidebarExpanded) ? "0.75em 0" : "0"};

    display: grid;
    grid-template-rows: ${props => (props.$submenuExpanded && props.$sidebarExpanded) ? "1fr" : "0fr"};
    grid-template-columns: ${props => props.$sidebarExpanded ? "1fr" : "0fr"};
    overflow: hidden;

    transition: all 500ms;

    span {
        overflow: hidden;
    }
`

type SubmenuItemProps = {
    id: number;
    name: string;
    submenuExpanded: SubmenuExpandedType;
}

export const SubmenuItem: React.FC<SubmenuItemProps> = ({ id, name, submenuExpanded }) => {

    const { sidebarExpanded } = useContext(SidebarContext);

    const dispatch = useAppDispatch();
    const setActiveMenuItem = () => {
        dispatch(setActiveItem(id))
    }

    return (
        <StyledSubmenuItem
            onClick={setActiveMenuItem}
            $submenuExpanded={submenuExpanded}
            $sidebarExpanded={sidebarExpanded}
        >
            <span>{name}</span>
        </StyledSubmenuItem>
    )
}

import React, { useContext } from 'react';
import styled from 'styled-components';

import {
    SubmenuExpandedType,
    setActiveItem,
} from '../../../../../../redux/features/sidebarSlice';
import { useAppDispatch } from '../../../../../../redux/hooks/hooks';
import { SidebarContext } from '../../../../Sidebar';
import { Link } from 'react-router-dom';
import { device } from '../../../../../../styles/BreakPoints';

const StyledSubmenuItem = styled.li<{
    $submenuExpanded: SubmenuExpandedType;
    $sidebarExpanded: boolean;
}>`
    cursor: pointer;

    padding: ${(props) =>
        props.$submenuExpanded && props.$sidebarExpanded ? '0.75em 0' : '0'};

    display: grid;
    grid-template-rows: ${(props) =>
        props.$submenuExpanded && props.$sidebarExpanded ? '1fr' : '0fr'};
    grid-template-columns: ${(props) =>
        props.$sidebarExpanded ? '1fr' : '0fr'};
    transition: all 500ms;

    overflow: hidden;

    span {
        white-space: nowrap;
        overflow: hidden;
    }

    @media only screen and (${device.sm}) {
        grid-template-columns: 1fr;
    }
`;

type SubmenuItemProps = {
    id: number;
    url: string;
    name: string;
    submenuExpanded: SubmenuExpandedType;
};

export const SubmenuItem: React.FC<SubmenuItemProps> = ({
    id,
    url,
    name,
    submenuExpanded,
}) => {
    const { sidebarExpanded, toggleSidebarExpanded } =
        useContext(SidebarContext);

    const dispatch = useAppDispatch();
    const setActiveMenuItem = () => {
        dispatch(setActiveItem(id));
    };

    const handleClick = () => {
        toggleSidebarExpanded();
    };

    return (
        <Link
            to={url}
            onClick={handleClick}
        >
            <StyledSubmenuItem
                onClick={setActiveMenuItem}
                $submenuExpanded={submenuExpanded}
                $sidebarExpanded={sidebarExpanded}
            >
                <span>{name}</span>
            </StyledSubmenuItem>
        </Link>
    );
};

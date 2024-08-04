import React, { useContext } from 'react';
import styled from 'styled-components';
import { SidebarContext } from '../../Sidebar';

import { SidebarShowIcon } from '../../../common/Icons/SidebarShowIcon';
import { BurgerMenuIcon } from '../../../common/Icons/BurgerMenuIcon';
import { device } from '../../../../styles/BreakPoints';

const StyledBtn = styled.button`
    position: absolute;
    top: 50%;
    right: 0%;
    transform: translateX(50%) translateY(-50%);
    cursor: pointer;

    padding: 5px;

    & > :last-child {
        display: none;
    }

    @media only screen and (${device.sm}) {
        transform: translateX(0%) translateY(-50%);
        & > :last-child {
            display: block;
        }
        & > :first-child {
            display: none;
        }
    }
`;

type ToggleSidebarProps = {};

export const ToggleSidebar: React.FC<ToggleSidebarProps> = ({}) => {
    const { sidebarExpanded, toggleSidebarExpanded } =
        useContext(SidebarContext);

    return (
        <StyledBtn onClick={toggleSidebarExpanded}>
            <SidebarShowIcon
                style={{
                    width: '2em',
                    transition: 'all .3s ease',
                    transform: `rotate(${
                        sidebarExpanded ? '-180deg' : '0deg'
                    })`,
                }}
            />
            <BurgerMenuIcon
                width={'2rem'}
                height={'2rem'}
            />
        </StyledBtn>
    );
};

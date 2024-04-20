import React, { useContext } from 'react';
import styled from 'styled-components';

import { HoverCaption } from './HoverCaption/HoverCaption';
import { setActiveItem } from '../../../../../redux/features/sidebarSlice';
import { useAppDispatch } from '../../../../../redux/hooks/hooks';
import { SidebarContext } from '../../../Sidebar';
import { IconMatcher } from '../../../../../utils/IconMatcher';
import { StyledSidebarGrid } from '../../../StyledSidebarGrid/StyledSidebarGrid';
import { theme } from 'antd';

const StyledHeader = styled.div`
    position: relative;
`;
const StyledActiveStripe = styled.div<{ $isActive: boolean }>`
    width: 0.35em;

    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;

    transition: background-color 300ms;
    background-color: ${(props) =>
        props.$isActive ? props.theme.colors.primary : 'transparent'};
`;

const StyledHeaderGrid = styled(StyledSidebarGrid)`
    padding-top: 0.75em;
    padding-bottom: 0.75em;
`;

const StyledIcon = styled.div`
    & :only-child {
        width: 2.5em;
    }
`;

const StyledName = styled.div<{ $sidebarExpanded: boolean }>`
    display: grid;
    grid-template-columns: ${(props) =>
        props.$sidebarExpanded ? '1fr' : '0fr'};
    transition: grid-template-columns 500ms;

    overflow: hidden;

    span {
        overflow: hidden;
        text-wrap: nowrap;
        font-weight: 600;
    }
`;

type SidebarMenuItemHeaderProps = {
    isActive: boolean;
    id: number;
    name: string;
    hoverCaptionVisible: boolean;
};

export const SidebarMenuItemHeader: React.FC<SidebarMenuItemHeaderProps> = ({
    isActive,
    id,
    name,
    hoverCaptionVisible,
}) => {
    const { sidebarExpanded } = useContext(SidebarContext);

    const dispatch = useAppDispatch();
    const handleSetActiveItem = () => {
        dispatch(setActiveItem(id));
    };

    const Icon = IconMatcher.getIcon(id);

    return (
        <StyledHeader onClick={handleSetActiveItem}>
            <StyledActiveStripe $isActive={isActive} />

            <StyledHeaderGrid>
                <StyledIcon>{Icon}</StyledIcon>
                <StyledName $sidebarExpanded={sidebarExpanded}>
                    <span>{name}</span>
                </StyledName>
            </StyledHeaderGrid>

            <HoverCaption
                caption={name}
                visible={hoverCaptionVisible}
            />
        </StyledHeader>
    );
};

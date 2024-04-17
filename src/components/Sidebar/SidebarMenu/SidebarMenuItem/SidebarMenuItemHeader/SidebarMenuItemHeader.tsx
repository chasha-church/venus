import React, { useContext } from 'react'
import styled from 'styled-components';
import { StyledSidebarGrid } from '../../../StyledSidebarGrid';
import { HoverCaption } from '../HoverCaption/HoverCaption';
import { setActiveItem } from '../../../../../redux/features/sidebarSlice';
import { useAppDispatch } from '../../../../../redux/hooks/hooks';
import { SidebarContext } from '../../../Sidebar';


const StyledHeader = styled.div`
    position: relative;
`

const StyledActiveStripe = styled.div<{ $isActive: boolean; }>`
    width: 0.35em;

    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;

    transition: background-color 300ms;
    background-color: ${props => props.$isActive ? "#0075BA" : "transparent"};
`

const StyledIcon = styled.img`
    width: 2.5em;
`

const StyledName = styled.div<{ $sidebarExpanded: boolean; }>`

    display: grid;
    grid-template-columns: ${props => props.$sidebarExpanded ? "1fr" : "0fr"};
    transition: grid-template-columns 500ms; 

    overflow: hidden;

    span {
        overflow: hidden;
        text-wrap: nowrap;
        font-weight: 600;
    }
`

type SidebarMenuItemHeaderProps = {
    isActive: boolean,
    id: number,
    icon: string,
    name: string,
    hoverCaptionVisible: boolean,
}

export const SidebarMenuItemHeader: React.FC<SidebarMenuItemHeaderProps> = ({ isActive, id, icon, name, hoverCaptionVisible }) => {
    
    const { sidebarExpanded } = useContext(SidebarContext);

    const dispatch = useAppDispatch();
    const onSetActiveItem = () => {
        dispatch(setActiveItem(id));
    }

    return (
        <StyledHeader onClick={onSetActiveItem}>
            <StyledActiveStripe $isActive={isActive} />

            <StyledSidebarGrid>
                <StyledIcon src={icon} alt={name} />
                <StyledName $sidebarExpanded={sidebarExpanded} >
                    <span>{name}</span>
                </StyledName>
            </StyledSidebarGrid>

            <HoverCaption
                caption={name}
                visible={hoverCaptionVisible}
                sidebarExpanded={sidebarExpanded}
            />
        </StyledHeader>
    );
}

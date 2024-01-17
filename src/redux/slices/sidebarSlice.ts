import { createSelector, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store';

interface SidebarState {
    sidebarExpanded: boolean;
    activeItemId: number | null;
    menuItems: MenuType;
}

export type MenuType = Array<MenuItemType>
export type MenuItemType = {
    id: number;
    name: string;
    icon: string;
    submenuExpanded: SubmenuExpandedType;
    submenu: SubmenuType;
}
export type SubmenuExpandedType = boolean | null;

export type SubmenuType = Array<SubmenuItemType> | null;

export type SubmenuItemType = {
    id: number;
    name: string;
}

const initialState: SidebarState = {
    sidebarExpanded: false,
    activeItemId: null,
    menuItems: [
        {
            id: 0,
            name: "Храм",
            icon: "../src/assets/images/ChurchIcon.png",
            submenuExpanded: false,
            submenu: [
                {
                    id: 0,
                    name: "Новости"
                },
                {
                    id: 1,
                    name: "История храма"
                },
                {
                    id: 2,
                    name: "Духовенство"
                },
            ],
        },
        {
            id: 1,
            name: "Богослужения",
            icon: "../src/assets/images/ScheduleIcon.png",
            submenuExpanded: false,
            submenu: null,
        },
        {
            id: 2,
            name: "Деятельность",
            icon: "../src/assets/images/СollaborationIcon.png",
            submenuExpanded: false,
            submenu: [
                {
                    id: 0,
                    name: "Воскресная школа"
                },
                {
                    id: 1,
                    name: "«Живоносный источник»"
                },
                {
                    id: 2,
                    name: "«Спасительная Чаша»"
                },
                {
                    id: 3,
                    name: "Психология для жизни"
                },
            ],
        },
        {
            id: 3,
            name: "Контакты",
            icon: "../src/assets/images/ContactsIcon.png",
            submenuExpanded: false,
            submenu: null,
        },
        {
            id: 4,
            name: "Пожертвовать",
            icon: "../src/assets/images/DonateIcon.png",
            submenuExpanded: false,
            submenu: null,
        },
        
    ]
};

export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        setSidebarExpanded: (state, action: PayloadAction<boolean>) => {
            state.sidebarExpanded = !action.payload;
        },
        setSubmenuExpanded: (state, action: PayloadAction<number>) => {
            state.menuItems[action.payload].submenuExpanded = !state.menuItems[action.payload].submenuExpanded;
            state.menuItems.forEach((item, index) => {
                if (index === action.payload) return;
                item.submenuExpanded = false
            });
        },
        setActiveItem: (state, action: PayloadAction<number>) => {
            state.activeItemId = action.payload;
        },
    },
})

// Actions
export const { setSidebarExpanded, setSubmenuExpanded, setActiveItem } = sidebarSlice.actions

// Selectors
export const selectSidebarExpanded = (state: RootState) => state.sidebar.sidebarExpanded;
export const selectMenuItems = (state: RootState) => state.sidebar.menuItems;
export const selectActiveItemId = (state: RootState) => state.sidebar.activeItemId;

// Reducer
export const sidebarReducer = sidebarSlice.reducer;
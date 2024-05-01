import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface SidebarState {
    sidebarExpanded: boolean;
    activeItemId: number | null;
    menuItems: MenuType;
}

export type MenuType = Array<MenuItemType>;
export type MenuItemType = {
    id: number;
    name: string;
    url: string;
    submenuExpanded: SubmenuExpandedType;
    submenu: SubmenuType;
};
export type SubmenuExpandedType = boolean | null;

export type SubmenuType = Array<SubmenuItemType> | null;

export type SubmenuItemType = {
    id: number;
    name: string;
    url: string;
};

export enum SideBarIds {
    Church = 0,
    Schedule,
    Collaboration,
    Contacts,
    Donate,
}

const initialState: SidebarState = {
    sidebarExpanded: false,
    activeItemId: null,
    menuItems: [
        {
            id: SideBarIds.Church,
            name: 'Храм',
            url: '/#',
            submenuExpanded: false,
            submenu: [
                {
                    id: 0,
                    name: 'Новости',
                    url: 'news/',
                },
                {
                    id: 1,
                    name: 'История храма',
                    url: '#',
                },
                {
                    id: 2,
                    name: 'Духовенство',
                    url: '#',
                },
            ],
        },
        {
            id: SideBarIds.Schedule,
            name: 'Богослужения',
            url: '/#schedule',
            submenuExpanded: false,
            submenu: null,
        },
        {
            id: SideBarIds.Collaboration,
            name: 'Деятельность',
            url: '#',
            submenuExpanded: false,
            submenu: [
                {
                    id: 0,
                    name: 'Воскресная школа',
                    url: '#',
                },
                {
                    id: 1,
                    name: '«Живоносный источник»',
                    url: '#',
                },
                {
                    id: 2,
                    name: '«Спасительная Чаша»',
                    url: '#',
                },
                {
                    id: 3,
                    name: 'Психология для жизни',
                    url: '#',
                },
            ],
        },
        {
            id: SideBarIds.Contacts,
            name: 'Контакты',
            url: '#',
            submenuExpanded: false,
            submenu: null,
        },
        {
            id: SideBarIds.Donate,
            name: 'Пожертвовать',
            url: '#',
            submenuExpanded: false,
            submenu: null,
        },

        {
            id: SideBarIds.Contacts,
            name: 'Контакты',
            url: '#',
            submenuExpanded: false,
            submenu: null,
        },
        {
            id: SideBarIds.Donate,
            name: 'Пожертвовать',
            url: '#',
            submenuExpanded: false,
            submenu: null,
        },
        {
            id: SideBarIds.Contacts,
            name: 'Контакты',
            url: '#',
            submenuExpanded: false,
            submenu: null,
        },
        {
            id: SideBarIds.Donate,
            name: 'Пожертвовать',
            url: '#',
            submenuExpanded: false,
            submenu: null,
        },
        {
            id: SideBarIds.Contacts,
            name: 'Контакты',
            url: '#',
            submenuExpanded: false,
            submenu: null,
        },
        {
            id: SideBarIds.Donate,
            name: 'Пожертвовать',
            url: '#',
            submenuExpanded: false,
            submenu: null,
        },
    ],
};

export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        setSidebarExpanded: (state, action: PayloadAction<boolean>) => {
            state.sidebarExpanded = !action.payload;
        },
        setSubmenuExpanded: (state, action: PayloadAction<number>) => {
            state.menuItems[action.payload].submenuExpanded =
                !state.menuItems[action.payload].submenuExpanded;
            state.menuItems.forEach((item, index) => {
                if (index === action.payload) return;
                item.submenuExpanded = false;
            });
        },
        setActiveItem: (state, action: PayloadAction<number>) => {
            state.activeItemId = action.payload;
        },
    },
});

// Actions
export const { setSidebarExpanded, setSubmenuExpanded, setActiveItem } =
    sidebarSlice.actions;

// Selectors
export const selectSidebarExpanded = (state: RootState) =>
    state.sidebar.sidebarExpanded;
export const selectMenuItems = (state: RootState) => state.sidebar.menuItems;
export const selectActiveItemId = (state: RootState) =>
    state.sidebar.activeItemId;

// Reducer
export const sidebarReducer = sidebarSlice.reducer;

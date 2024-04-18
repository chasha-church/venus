import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store';

type SidebarState = {
    activeItemId: number | null;
    menuItems: MenuType;
};

export type MenuType = Array<MenuItemType>;

export type MenuItemType = {
    id: number;
    name: string;
    submenuExpanded: SubmenuExpandedType;
    submenu: SubmenuType;
};

export type SubmenuExpandedType = boolean | null;

export type SubmenuType = Array<SubmenuItemType> | null;

export type SubmenuItemType = {
    id: number;
    name: string;
};

export enum SideBarIds {
    Church = 0,
    Schedule,
    Collaboration,
    Contacts,
    Donate
};

const initialState: SidebarState = {
    activeItemId: null,
    menuItems: [
        {
            id: SideBarIds.Church,
            name: "Храм",
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
            id: SideBarIds.Schedule,
            name: "Богослужения",
            submenuExpanded: false,
            submenu: null,
        },
        {
            id: SideBarIds.Collaboration,
            name: "Деятельность",
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
            id: SideBarIds.Contacts,
            name: "Контакты",
            submenuExpanded: false,
            submenu: null,
        },
        {
            id: SideBarIds.Donate,
            name: "Пожертвовать",
            submenuExpanded: false,
            submenu: null,
        },
    ]
};

export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
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
export const { setSubmenuExpanded, setActiveItem } = sidebarSlice.actions

// Selectors
export const selectMenuItems = (state: RootState) => state.sidebar.menuItems;
export const selectActiveItemId = (state: RootState) => state.sidebar.activeItemId;

// Reducer
export const sidebarReducer = sidebarSlice.reducer;

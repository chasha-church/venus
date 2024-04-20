import { DefaultTheme } from 'styled-components'

export const defaultTheme: DefaultTheme = {
    colors: {
        primary: '#0075BA',
        secondary: '#80BADD',
        tertiary: '#C0DDEE',
        lightPrimary: '#C4ECFF', // transparent skyblue
        background: '#FFFFFF',

        text: '#000000',
        primaryTextColor: '#0085FF',
        secondaryTextColor: '#777777',
        lightGrayText: '#4b5563',
        darkGrayText: '#303030',
        darkText: '#1A1A1A',

        inputPlaceholder: '#C7C7C7',
        lightGrayBorder: '#e5e7eb',

        danger: '#F32013',
        success: '#5CB85C',
    },
    fonts: {
        fontFamily: 'Anek Malayalam',
        fontSize: {
            xs: '0.5rem',
            sm: '1rem',
            md: '1.5rem',
            lg: '2rem',
            xl: '2.5rem',
            xxl: '3rem',
        },
    },
    paddings: {
        container: '1rem',
        pageTop: '2rem',
    },
    margins: {
        pageTop: '2rem',
    },
}

export const darkTheme: DefaultTheme = {
    colors: {
        primary: '#E0EEF7',
        secondary: '#C0DDEE',
        tertiary: '#80BADD',
        background: '#001E2F',

        text: '#FFFFFF',
        primaryTextColor: '#594F43',
        secondaryTextColor: '#777777',
        darkGrayText: defaultTheme.colors.darkGrayText,
        darkText: defaultTheme.colors.darkText,

        inputPlaceholder: '#F1F1F1',
        lightGrayBorder: '#e5e7eb',

        danger: '#FF0000',
        success: '#AEDCAE',
    },
    fonts: {
        fontFamily: defaultTheme.fonts.fontFamily,
        fontSize: defaultTheme.fonts.fontSize,
    },
    paddings: {
        container: defaultTheme.paddings.container,
        pageTop: defaultTheme.paddings.pageTop,
    },
    margins: {
        pageTop: defaultTheme.margins.pageTop,
    },
};

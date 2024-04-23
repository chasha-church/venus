import 'styled-components';

declare module 'styled-components' {
    export type HEX = `#${string}`;
    export type SizeConfig = {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xxl: string;
    };

    export interface DefaultTheme {
        colors: {
            primary: HEX;
            secondary: HEX;
            tertiary: HEX;
            background: HEX;
            text: HEX;
            primaryTextColor: HEX;
            secondaryTextColor: HEX;
            inputPlaceholder: HEX;
            darkGrayText: HEX;
            darkText: HEX;
            danger: HEX;
            success: HEX;
            [key: string]: HEX;
        };
        fonts: {
            fontFamily: string;
            fontSize: SizeConfig;
            [key: string]: string | SizeConfig;
        };
        paddings: {
            container: string;
            pageTop: string;
            [key: string]: string | SizeConfig;
        };
        margins: {
            pageTop: string;
            [key: string]: string | SizeConfig;
        };
    }
}

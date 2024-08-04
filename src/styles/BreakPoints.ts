interface Size {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
}

interface SizePx {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
}

export const size: Size = {
    xs: 400, // for small screen mobile
    sm: 600, // for mobile screen
    md: 900, // for tablets
    lg: 1280, // for laptops
    xl: 1440, // for desktop / monitors
    xxl: 1920, // for big screens
};

const sizePx: SizePx = {
    xs: '400px', // for small screen mobile
    sm: '600px', // for mobile screen
    md: '900px', // for tablets
    lg: '1280px', // for laptops
    xl: '1440px', // for desktop / monitors
    xxl: '1920px', // for big screens
};

export const device = {
    xs: `(max-width: ${sizePx.xs})`,
    sm: `(max-width: ${sizePx.sm})`,
    md: `(max-width: ${sizePx.md})`,
    lg: `(max-width: ${sizePx.lg})`,
    xl: `(max-width: ${sizePx.xl})`,
    xxl: `(max-width: ${sizePx.xxl})`,
};

import { ComponentProps } from 'react'
// @ts-ignore
import { SvgLoader, SvgProxy } from 'react-svgmt';
import Preloader from "../../../assets/images/Preloader.svg";

export const PreloaderIcon: React.FC<ComponentProps<'svg'>> = (
    { width = 200, height = 200 }
) => {
    return (
        <SvgLoader width={width} height={height} path={Preloader}>
            <SvgProxy selector="rect" />
        </SvgLoader>
    );
}
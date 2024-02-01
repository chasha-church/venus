import { FunctionComponent } from "react";
// @ts-ignore
import { SvgLoader, SvgProxy } from 'react-svgmt';

type SvgContainerProps = {
    path: string,
    color: string
};

export const SvgContainer: FunctionComponent<SvgContainerProps> = ({path, color}) => {
    return (
            <SvgLoader path={path}>
                <SvgProxy selector="rect" fill={color} />
                <SvgProxy selector="ellipse" fill={color} />
            </SvgLoader>
    );
}

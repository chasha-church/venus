import { ComponentProps } from 'react';
import Schedule from '../../../assets/images/ScheduleIcon.svg';
// @ts-ignore
import { SvgLoader, SvgProxy } from 'react-svgmt';

export const ScheduleIcon: React.FC<ComponentProps<'svg'>> = ({
    width = 36,
    height = 36,
}) => {
    return (
        <SvgLoader
            width={width}
            height={height}
            path={Schedule}
        >
            <SvgProxy selector="rect" />
        </SvgLoader>
    );
};

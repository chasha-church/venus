import { ComponentProps } from 'react'
import Contacts from '../../../assets/images/ContactsIcon.svg';
// @ts-ignore
import { SvgLoader, SvgProxy } from 'react-svgmt';

export const ContactsIcon: React.FC<ComponentProps<'svg'>> = (
    { width = 36, height = 36 }
) => {
    return (
        <SvgLoader width={width} height={height} path={Contacts}>
            <SvgProxy selector="rect" />
        </SvgLoader>
    );
}

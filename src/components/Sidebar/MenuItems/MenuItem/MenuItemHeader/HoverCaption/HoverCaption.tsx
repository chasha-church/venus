import React from 'react'

type HoverCaptionProps = {
    caption: string;
    expanded: boolean;
}

const tailwindStyles = `
    absolute left-full top-1/2 -translate-y-1/2 rounded-md px-2 py-1 ml-3 
    bg-sidebar-blue-transparrent invisible opacity-20
    -translate-x-3 transition-all text-black cursor-default
    group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
`;

export const HoverCaption: React.FC<HoverCaptionProps> = ({ caption, expanded }) => {
    return !expanded && <div className={tailwindStyles}>{caption}</div>
}

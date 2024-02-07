import React from 'react'

type SidebarFooterProps = {
    expanded: boolean;
}

export const SidebarFooter: React.FC<SidebarFooterProps> = ({ expanded }) => {

    return (
        <div className={`overflow-hidden border-t px-4 py-6  ${expanded ? "block" : "hidden"}`}>
            <span className="font-semibold text-gray-600">Неупиваемая Чаша, 2024</span>
        </div>
    );
}
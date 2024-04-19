import { ReactNode } from "react";
import { ChurchIcon } from "../components/common/Icons/ChurchIcon";
import { SideBarIds } from "../redux/features/sidebarSlice";
import { CollaborationIcon } from "../components/common/Icons/CollaborationIcon";
import { ScheduleIcon } from "../components/common/Icons/ScheduleIcon";
import { ContactsIcon } from "../components/common/Icons/ContactsIcon";
import { DonateIcon } from "../components/common/Icons/DonateIcon";

export const IconMatcher = {
    getIcon(id: number): ReactNode {
        switch (id) {
            case SideBarIds.Church:
                return <ChurchIcon />;
            case SideBarIds.Collaboration:
                return <CollaborationIcon />;
            case SideBarIds.Schedule:
                return <ScheduleIcon />;
            case SideBarIds.Contacts:
                return <ContactsIcon />;
            case SideBarIds.Donate:
                return <DonateIcon />;
        }
    }
}

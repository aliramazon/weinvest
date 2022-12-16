import { SideNavLinksGroupProps } from "../../components";
export const SIDE_NAV_LINKS_GROUPS: SideNavLinksGroupProps[] = [
    {
        links: [
            {
                to: "/",
                text: "IPO Calendar",
                icon: "dashboard"
            },
            {
                to: "funds",
                text: "Funds",
                icon: "funds"
            },
            {
                to: "companies",
                text: "Companies",
                icon: "companies"
            }
        ]
    },
    {
        groupName: "Legal",
        links: [
            {
                to: "archive",
                text: "Archive",
                icon: "due-documents"
            },
            {
                to: "documents",
                text: "Current Documents",
                icon: "documents"
            }
        ]
    },
    {
        groupName: "Settings",
        links: [
            {
                to: "users",
                text: "Users",
                icon: "members"
            },
            {
                to: "profile",
                text: "Account Settings",
                icon: "account"
            }
        ]
    }
];

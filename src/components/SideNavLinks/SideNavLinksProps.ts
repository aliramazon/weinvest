import { SideNavLinkProps } from '../SideNavLink';

export interface SideNavLinksGroupProps {
    groupName?: string;
    links: SideNavLinkProps[];
}
export interface SideNavLinksProps {
    links: SideNavLinksGroupProps[];
}

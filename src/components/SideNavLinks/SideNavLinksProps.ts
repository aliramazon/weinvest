import { SideNavLinkProps } from '..';

export interface SideNavLinksProps {
    groupName?: string;
    links: SideNavLinkProps[];
}

export interface SideNavGroupLinksProps {
    links: SideNavLinksProps[];
}

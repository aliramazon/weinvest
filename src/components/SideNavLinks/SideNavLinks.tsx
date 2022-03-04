import React from 'react';
import styled from 'styled-components';
import {
    SideNavLink,
    SideNavGroupLinksProps,
    SideNavLinksProps,
    SideNavLinksGroupsHeading
} from '..';

const SideNavLinks: React.FC<SideNavGroupLinksProps> = ({ links }) => {
    return (
        <>
            {links.map(({ groupName, links }: SideNavLinksProps) => (
                <React.Fragment>
                    {groupName && (
                        <SideNavLinksGroupsHeading>
                            {groupName}
                        </SideNavLinksGroupsHeading>
                    )}
                    {links.map((link) => (
                        <SideNavLink
                            to={link.to}
                            icon={link.icon}
                            text={link.text}
                        />
                    ))}
                </React.Fragment>
            ))}
        </>
    );
};

export default SideNavLinks;

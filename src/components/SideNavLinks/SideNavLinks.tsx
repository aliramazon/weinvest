import React from 'react';
import styled from 'styled-components';
import { SideNavLink } from '../SideNavLink';
import { SideNavLinksProps, SideNavLinksGroupProps } from './SideNavLinksProps';

const GroupHeading = styled.div`
    font-size: var(--font-size-1);
    color: var(--generalColor-60);
    margin: 2.8rem 0 1.2rem 0;
    padding-left: var(--spacing-5);
`;

export const SideNavLinks: React.FC<SideNavLinksProps> = ({ links }) => {
    return (
        <>
            {links.map(({ groupName, links }: SideNavLinksGroupProps, idx) => (
                <React.Fragment key={idx}>
                    {groupName && <GroupHeading>{groupName}</GroupHeading>}
                    {links.map((link, idx) => (
                        <SideNavLink
                            key={idx}
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

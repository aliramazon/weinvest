import styled from "styled-components";
import { SideNavLinksProps, SideNavLinks } from "../SideNavLinks";

const SideNavBase = styled.div`
    width: 25rem;
    height: auto;
    padding: var(--spacing-5);
    box-shadow: 0 0.1rem 0.4rem rgba(19, 21, 35, 0.08);
`;

export const SideNav: React.FC<SideNavLinksProps> = ({ links }) => {
    return (
        <SideNavBase>
            <SideNavLinks links={links} />
        </SideNavBase>
    );
};

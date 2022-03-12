import styled from 'styled-components';
import { SideNavLinksProps, SideNavLinks } from '../SideNavLinks';

const SideNavBase = styled.div`
    // background-color: var(--whiteColor);
    width: 25rem;
    height: calc(100vh-6.8rem);
    padding: var(--spacing-5);
    box-shadow: 0 0.1rem 0.4rem rgba(19, 21, 35, 0.08);

    grid-column: 1/2;
    grid-row: 2/3;
`;

export const SideNav: React.FC<SideNavLinksProps> = ({ links }) => {
    return (
        <SideNavBase>
            <SideNavLinks links={links} />
        </SideNavBase>
    );
};

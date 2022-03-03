import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Icon, { IconName } from '../Icon/Icon';

const NavLinkBase = styled(NavLink)`
    display: flex;
    align-items: center;
    gap: 0 var(--spacing-4);
    padding: 0 var(--spacing-5);
    height: 4.4rem;
    width: 100%;

    color: var(--generalColor-80);
    font-size: var(--font-size-2);
    font-weight: var(--font-weight-400);

    &.active {
        background-color: var(--primaryColor-100);
        border-radius: 0.4rem;
        color: var(--whiteColor);

        svg {
            fill: var(--whiteColor);
        }
    }
`;

interface SideNavLinkProps {
    to: string;
    icon: IconName;
    text: string;
}
const SideNavLink: React.FC<SideNavLinkProps> = ({ to, icon, text }) => {
    return (
        <NavLinkBase
            to={to}
            className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
            <Icon name={icon} color={'var(--generalColor-80)'} />
            {text}
        </NavLinkBase>
    );
};

export default SideNavLink;

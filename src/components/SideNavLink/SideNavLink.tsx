import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Icon } from '../Icon/Icon';
import { SideNavLinkProps } from './SideNavLinkProps';

const NavLinkBase = styled(NavLink)`
    display: flex;
    align-items: center;
    gap: 0 var(--spacing-4);
    padding: 0 var(--spacing-5);
    margin-bottom: 0.2rem;
    height: 4.2rem;
    width: 100%;

    color: var(--generalColor-80);
    font-size: var(--font-size-2);
    font-weight: var(--font-weight-400);
    transition: all 0.3s;

    &.active,
    &:hover {
        border-radius: 0.4rem;
        color: var(--whiteColor);

        svg {
            fill: var(--whiteColor);
        }
    }

    &.active {
        background-color: var(--primaryColor-100);
    }

    &:hover:not(.active) {
        background-color: var(--primaryColor-80);
    }
`;

export const SideNavLink: React.FC<SideNavLinkProps> = ({ to, icon, text }) => {
    return (
        <NavLinkBase
            to={to}
            className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
            <Icon name={icon} color="var(--generalColor-80)" />
            {text}
        </NavLinkBase>
    );
};

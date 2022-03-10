import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { RowLinkProps } from './types';

const RowLinkBase = styled(NavLink)`
    &.active {
        & > div:first-child {
            background-color: var(--generalColor-40);
        }
    }

    &:hover:not(.active) {
        & > div:first-child {
            background-color: var(--generalColor-30);
        }
    }
`;

export const RowLink: React.FC<RowLinkProps> = ({ to, children }) => {
    return (
        <RowLinkBase
            to={to}
            className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
            {children}
        </RowLinkBase>
    );
};

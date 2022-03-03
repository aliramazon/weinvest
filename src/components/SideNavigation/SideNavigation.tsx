import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Icon from '../Icon';

const SideNavigationBase = styled.div`
    background-color: var(--whiteColor);
    width: 25rem;
    height: 100vh;
    padding: var(--spacing-5);
    box-shadow: 0 0.1rem 0.4rem rgba(19, 21, 35, 0.08);

    grid-column: 1/2;
    grid-row: 2/3;
`;

const SideNavigation = () => {
    return (
        <SideNavigationBase>
            <NavLink to="/example1">Example1</NavLink>
            <NavLink to="/example2">Example2</NavLink>
        </SideNavigationBase>
    );
};
export default SideNavigation;

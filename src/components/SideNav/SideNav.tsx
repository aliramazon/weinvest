import styled from 'styled-components';

const SideNav = styled.div`
    background-color: var(--whiteColor);
    width: 25rem;
    height: 100vh;
    padding: var(--spacing-5);
    box-shadow: 0 0.1rem 0.4rem rgba(19, 21, 35, 0.08);

    grid-column: 1/2;
    grid-row: 2/3;
`;

export default SideNav;

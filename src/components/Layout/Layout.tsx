import styled from 'styled-components';
export const AppLayout = styled.div`
    display: grid;
    grid-template-columns: 25rem 1fr;
    grid-template-rows: 6.8rem 1fr;
`;

export const MainLayout = styled.div`
    padding: var(--spacing-8);
    display: grid;
    grid-temlate-columns: 1fr;
    row-gap: var(--spacing-7);
`;

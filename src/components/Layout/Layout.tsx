import styled from 'styled-components';
export const AppLayout = styled.div`
    display: grid;
    grid-template-columns: 25rem 1fr;
    grid-template-rows: 6.8rem 1fr;
`;

export const MainLayout = styled.div`
    padding: var(--spacing-8);
    display: grid;
    grid-template-rows: max-content;
    grid-auto-rows: max-content;
    grid-template-columns: 1fr;
    row-gap: var(--spacing-7);

    grid-column: 2/3;
    grid-row: 2/3;
`;

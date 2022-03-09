import styled from 'styled-components';
export const AppLayout = styled.div`
    display: grid;
    grid-template-columns: 25rem 1fr;
    grid-template-rows: 6.8rem 1fr;
    height: 100vh;
`;

export const MainLayout = styled.div`
    padding: var(--spacing-8);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-7);

    grid-column: 2/3;
    grid-row: 2/3;
    height: calc(100vh - 6.8rem);
`;

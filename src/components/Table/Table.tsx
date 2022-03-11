import styled from 'styled-components';
import { Card } from '../Card/Card';

export const Table = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: inherit;
`;

export const TableCard = styled(Card)`
    min-height: 0;
`;

export const Seperator = styled.div`
    width: 0.1rem;
    background-color: var(--generalColor-40);
    height: 100%;
`;

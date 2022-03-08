import styled from 'styled-components';
import { Card } from './Card';
import { DashboarCardProps } from './CardProps';
import { Icon } from '../Icon';

const DashboardCardBase = styled(Card)`
    display: grid;
    grid-template-columns: 1fr 5.2rem;
    align-items: center;
    height: 13.6rem;
    flex: 1;
`;

const DashboardCardFact = styled.h2`
    font-size: var(--font-size-5);
    line-height: var(--line-height-5);
    color: var(--generalColor-100);
`;

const DashboardCardDescription = styled.span`
    font-size: var(--font-size-2);
    line-height: var(--line-height-2);
    color: var(--generalColor-80);
`;

const DashboardCardIconHolder = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 5.6rem;
    width: 5.6rem;
    background-color: var(--primaryColor-30);
    border-radius: 50%;
`;

export const DashboardCards = styled.div`
    display: flex;
    gap: var(--spacing-7);
`;

export const DashboardCard: React.FC<DashboarCardProps> = ({
    fact,
    description,
    icon
}) => {
    return (
        <DashboardCardBase>
            <div>
                <DashboardCardFact>{fact}</DashboardCardFact>
                <DashboardCardDescription>
                    {description}
                </DashboardCardDescription>
            </div>
            <DashboardCardIconHolder>
                <Icon name={icon} color={'var(--primaryColor-100)'} />
            </DashboardCardIconHolder>
        </DashboardCardBase>
    );
};

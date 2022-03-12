import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useStore } from '../../../context/AppContext';
import { PieChart } from '../../../components';

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;

    min-height: 0;
`;

const PieChartContainer = styled.div`
    height: 35rem;
    width: 35rem;
`;

const ContentItem = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: var(--spacing-5);
`;

const ContentDescription = styled.h2`
    font-size: var(--font-size-3);
    font-weight: var(--font-weight-300);
    color: var(--generalColor-80);
`;

export const Company = () => {
    const {
        state: {
            companies: { data }
        }
    } = useStore();

    const { companyId } = useParams();
    console.log(data);

    if (companyId && data && data[companyId]) {
        const company = data[companyId];
        const roundsNames = company.business.fundingRounds.map(
            (round) => round.round.name
        );

        const raisedAmounts = company.business.fundingRounds.map(
            (round) => round.round.amount
        );

        return (
            <Container>
                <ContentItem>
                    <PieChartContainer>
                        <PieChart
                            labels={roundsNames}
                            data={raisedAmounts}
                            label="Raised in each round"
                        />
                    </PieChartContainer>
                    <ContentDescription>
                        Funds raised in each round
                    </ContentDescription>
                </ContentItem>
            </Container>
        );
    } else {
        return <p>No like this load</p>;
    }
};

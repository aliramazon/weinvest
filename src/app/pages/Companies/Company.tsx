import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useStore } from '../../../context/AppContext';
import { PieChart, VerticalBarChart, Card } from '../../../components';

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: var(--spacing-5);
    min-height: 0;
`;

const PieChartContainer = styled.div`
    height: 35rem;
    width: 35rem;
`;

const VerticalBarChartContainer = styled.div`
    width: 55rem;
`;

const ContentItem = styled(Card)`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    gap: var(--spacing-5);
`;

const ContentDescription = styled.h2`
    font-size: var(--font-size-3);
    font-weight: var(--font-weight-400);
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

        const totalRaisedDataset = {
            label: 'Total Funding',
            data: company.business.fundingRounds.map(
                (round) => round.totalRaised
            )
        };

        const postMoneyValuationDataset = {
            label: 'Valuation',
            data: company.business.fundingRounds.map(
                (round) => round.postMoneyValuation
            )
        };

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

                <ContentItem>
                    <VerticalBarChartContainer>
                        <VerticalBarChart
                            labels={roundsNames}
                            datasets={[
                                totalRaisedDataset,
                                postMoneyValuationDataset
                            ]}
                        />
                    </VerticalBarChartContainer>
                    <ContentDescription>
                        Total Funding and Valuation After Each Round
                    </ContentDescription>
                </ContentItem>
            </Container>
        );
    } else {
        return <p>No like this load</p>;
    }
};

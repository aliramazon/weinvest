import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useStore } from '../../../context/AppContext';
import {
    PieChart,
    VerticalBarChart,
    DoughnutChart,
    Card
} from '../../../components';

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: var(--spacing-5);
    min-height: 0;
`;

const PieChartContainer = styled.div`
    & canvas {
        width: 100%;
        height: 100%;
    }
`;

const VerticalBarChartContainer = styled.div`
    height: 100%;
    & canvas {
        width: auto;
        height: 100%;
    }
`;

const DoughnutChartContainer = styled.div`
    & canvas {
        width: 100%;
        height: 100%;
    }
`;

const ContentItem = styled(Card)`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    gap: var(--spacing-5);
`;

const ContentDescription = styled.p`
    font-size: var(--font-size-2);
    font-weight: var(--font-weight-400);
    color: var(--generalColor-90);
`;

export const Company = () => {
    const {
        state: {
            companies: { data }
        }
    } = useStore();

    const { companyId } = useParams();

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

        const givenEquities = company.business.fundingRounds.map(
            (round) => round.givenEquity
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
                <ContentItem>
                    <DoughnutChartContainer>
                        <DoughnutChart
                            labels={roundsNames}
                            data={givenEquities}
                            label="Given Equity"
                        />
                    </DoughnutChartContainer>
                    <ContentDescription>
                        Given Equity In Each Round (%)
                    </ContentDescription>
                </ContentItem>
                <div />
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

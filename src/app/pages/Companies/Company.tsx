import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useStore } from "../../../context/AppContext";
import {
    PieChart,
    VerticalBarChart,
    DoughnutChart,
    Card,
    KeyValueInterface,
    KeyValueList
} from "../../../components";
import { CompanyBusiness, CompanyInfo } from "../../../types";
import { uppercaseString, formatFunds } from "../../../utils";

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: var(--spacing-5);
    min-height: 0;
`;

const VisualContent = styled(Card)`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    gap: var(--spacing-5);
`;

const ChartDescription = styled.p`
    font-size: var(--font-size-2);
    font-weight: var(--font-weight-400);
    color: var(--generalColor-90);
`;

const CompanyFacts = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-5);
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
            label: "Total Funding",
            data: company.business.fundingRounds.map(
                (round) => round.totalRaised
            )
        };

        const postMoneyValuationDataset = {
            label: "Valuation",
            data: company.business.fundingRounds.map(
                (round) => round.postMoneyValuation
            )
        };

        const givenEquities = company.business.fundingRounds.map(
            (round) => round.givenEquity
        );

        const getCompanyInfo = (companyInfo: CompanyInfo) => {
            const keyValues: KeyValueInterface[] = [];
            let key: keyof typeof companyInfo;
            for (key in companyInfo) {
                if (key !== "founded") {
                    keyValues.push({
                        key: uppercaseString(key),
                        value: company.info[key]
                    });
                }
            }
            keyValues.push({
                key: "Founded",
                value: `${company.info.founded.month}, ${company.info.founded.year}`
            });
            return keyValues;
        };

        const getCompanyBusiness = (companyBusiness: CompanyBusiness) => {
            return [
                { key: "Industry", value: companyBusiness.industry },
                {
                    key: "Model",
                    value: companyBusiness.businessModel
                },
                {
                    key: "Total Raised",
                    value: formatFunds(companyBusiness.totalRaised)
                },
                {
                    key: "Last Round",
                    value: companyBusiness.fundingRounds[
                        companyBusiness.fundingRounds.length - 1
                    ].round.name
                },
                {
                    key: "Valuation",
                    value: formatFunds(companyBusiness.valuation)
                }
            ];
        };

        return (
            <Container>
                <CompanyFacts>
                    <KeyValueList data={getCompanyInfo(company.info)} />
                    <KeyValueList data={getCompanyBusiness(company.business)} />
                </CompanyFacts>
                <VisualContent>
                    <PieChart
                        labels={roundsNames}
                        data={raisedAmounts}
                        label="Raised in each round"
                    />
                    <ChartDescription>
                        Funds raised in each round
                    </ChartDescription>
                </VisualContent>
                <VisualContent>
                    <VerticalBarChart
                        labels={roundsNames}
                        datasets={[
                            totalRaisedDataset,
                            postMoneyValuationDataset
                        ]}
                    />

                    <ChartDescription>
                        Total Funding and Valuation After Each Round
                    </ChartDescription>
                </VisualContent>

                <VisualContent>
                    <DoughnutChart
                        labels={roundsNames}
                        data={givenEquities}
                        label="Given Equity"
                    />

                    <ChartDescription>
                        Given Equity In Each Round (%)
                    </ChartDescription>
                </VisualContent>
            </Container>
        );
    } else {
        return <p>No like this load</p>;
    }
};

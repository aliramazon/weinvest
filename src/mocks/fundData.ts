import { FUNDS, COMPANIES, Company, Fund, DIC } from './constants';
import { pickRandomIdx } from './companyData';

const generateFundsData = (FUNDS: string[], COMPANIES: Company[]) => {
    const data = [];
    let startIdx = 0,
        endIdx = 10;

    for (let idx = 0; idx < FUNDS.length; idx++) {
        const fundName = FUNDS[idx];
        const fund: Fund = {
            name: fundName,
            id: idx,
            investedIn: []
        };

        let investedCompanies: number[] = [];
        for (let i = startIdx; i < endIdx; i++) {
            const company = COMPANIES[i];
            const companyFundingRounds = company.business.fundingRounds;
            let investedRoundIdx = pickRandomIdx(companyFundingRounds.length);
            const investedRoundName = DIC[investedRoundIdx];
            const randomShares = [10, 20, 30, 15, 25];
            const shareOfTheRound =
                randomShares[pickRandomIdx(randomShares.length)];
            const investedAmount = Math.floor(
                (companyFundingRounds[investedRoundIdx][investedRoundName] *
                    shareOfTheRound) /
                    100
            );
            const ownershipPercentage =
                (shareOfTheRound *
                    companyFundingRounds[investedRoundIdx].givenEquity) /
                100;

            const impliedValue =
                (ownershipPercentage *
                    company.business.potentialExitValuation) /
                100;
            const companyObj = {
                multiple: impliedValue / investedAmount,
                id: company.id,
                investedRound: investedRoundName,
                investedAmount: investedAmount,
                ownershipPercentage: ownershipPercentage,
                impliedValue: impliedValue
            };
            fund.investedIn.push(companyObj);
        }
        data.push(fund);
        startIdx += 10;
        endIdx += 10;
    }

    return data;
};

export default generateFundsData;

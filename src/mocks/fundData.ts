import { nanoid } from 'nanoid';
import { Companies, Fund, Funds, DIC } from './constants';
import { pickRandomIdx } from './companyData';

const generateFundsData = (FUNDS: string[], COMPANIES: Companies) => {
    const companies = Object.values(COMPANIES);
    const data: Funds = {};

    let startIdx = 0,
        endIdx = 10;

    for (let idx = 0; idx < FUNDS.length; idx++) {
        const fundName = FUNDS[idx];
        const fundId = nanoid();
        const fund: Fund = {
            name: fundName,
            id: fundId,
            investedIn: []
        };

        for (let i = startIdx; i < endIdx; i++) {
            const company = companies[i];
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
                name: company.info.name,
                id: company.id,
                investedRound: investedRoundName,
                investedAmount: investedAmount,
                ownershipPercentage: ownershipPercentage,
                impliedValue: impliedValue,
                multiple: impliedValue / investedAmount
            };
            fund.investedIn.push(companyObj);
        }
        data[fundId] = fund;
        startIdx += 10;
        endIdx += 10;
    }

    return data;
};

export default generateFundsData;

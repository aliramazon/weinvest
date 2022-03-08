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
            investedIn: [],
            totalInvested: 0,
            highest: {
                investedAmount: 0,
                investedCompany: '',
                multiple: 0,
                multipleCompany: ''
            }
        };

        for (let i = startIdx; i < endIdx && i < companies.length; i++) {
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
            const multiple = impliedValue / investedAmount;
            const companyObj = {
                name: company.info.name,
                id: company.id,
                investedRound: investedRoundName,
                investedAmount: investedAmount,
                ownershipPercentage: ownershipPercentage,
                impliedValue: impliedValue,
                multiple: multiple
            };
            if (fund.highest.investedAmount < investedAmount) {
                fund.highest.investedAmount = investedAmount;
                fund.highest.investedCompany = company.info.name;
            }
            if (fund.highest.multiple < multiple) {
                fund.highest.multiple = multiple;
                fund.highest.multipleCompany = company.info.name;
            }
            fund.investedIn.push(companyObj);
            fund.totalInvested += investedAmount;
        }

        data[fundId] = fund;
        startIdx = startIdx + 6;
        endIdx = endIdx + 6;
    }

    return data;
};

export default generateFundsData;

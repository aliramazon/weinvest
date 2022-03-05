import { nanoid } from 'nanoid';
import { EmailWebsites, FundingRound, Company, Companies } from './constants';

export const pickRandomIdx = (maxIdx: number): number => {
    return Math.floor(Math.random() * maxIdx);
};

const pickRandomValue = (minMaxArr: [number, number]): number => {
    const [min, max] = minMaxArr;
    const ramdomValue = min + Math.random() * (max - min);

    return Math.floor(ramdomValue / 100000) * 100000;
};

const getCompanyHQ = (HQ: string[]) => {
    return HQ[pickRandomIdx(HQ.length)];
};

const getCompanyEmailAndWebsite = (
    EMAIL_WEBSITES: EmailWebsites[],
    company: string
) => {
    const randomIdx = pickRandomIdx(EMAIL_WEBSITES.length);
    const randomItem = EMAIL_WEBSITES[randomIdx];

    return {
        email: `${randomItem.userName}@${company}.${randomItem.domain}`,
        website: `${company}.${randomItem.domain}`
    };
};

const calculateFundingRounds = (FUNDING_ROUNDS: FundingRound[]) => {
    const randomIdx = pickRandomIdx(FUNDING_ROUNDS.length);
    const givenEquity = [18, 15, 20, 10, 10];
    let totalRaised = 0,
        valuation = 0;
    const potentialExitIdx = [];
    for (let i = 0.5; i < 2.5; i += 0.25) {
        potentialExitIdx.push(i);
    }

    const rounds = FUNDING_ROUNDS.slice(0, randomIdx + 1).map((round, idx) => {
        const roundName = Object.keys(round)[0];
        const raisedAmount = pickRandomValue(round[roundName]);
        totalRaised += raisedAmount;
        valuation =
            Math.floor((100 * raisedAmount) / givenEquity[idx] / 100000) *
            100000;

        return {
            [roundName]: raisedAmount,
            totalRaised: totalRaised,
            postMoneyValuation: valuation,
            givenEquity: givenEquity[idx]
        };
    });

    const potentialExitValuation = Math.floor(
        valuation * potentialExitIdx[pickRandomIdx(potentialExitIdx.length)]
    );

    return {
        fundingRounds: rounds,
        totalRaised: totalRaised,
        valuation: valuation,
        potentialExitValuation: potentialExitValuation
    };
};

const generateCompanyData = (
    COMPANIES: string[],
    EMAIL_WEBSITES: EmailWebsites[],
    HQ: string[],
    INDUSTRIES: string[],
    BUSINESS_MODELS: string[],
    FUNDING_ROUNDS: FundingRound[]
) => {
    const data: Companies = {};

    COMPANIES.forEach((company: string) => {
        const companyId = nanoid() as string;
        const companyData = {
            info: {},
            business: {},
            id: companyId
        } as Company;
        const companyEmailAndWebsite = getCompanyEmailAndWebsite(
            EMAIL_WEBSITES,
            company.toLowerCase()
        );
        const info = {
            name: company[0].toUpperCase() + company.toLowerCase().slice(1),
            hq: getCompanyHQ(HQ),
            email: companyEmailAndWebsite.email,
            website: companyEmailAndWebsite.website
        };

        const business = {
            industry: INDUSTRIES[pickRandomIdx(INDUSTRIES.length)],
            businessModel:
                BUSINESS_MODELS[pickRandomIdx(BUSINESS_MODELS.length)],
            ...calculateFundingRounds(FUNDING_ROUNDS)
        };

        companyData.info = info;
        companyData.business = business;
        data[companyId] = companyData;
    });
    return data;
};

export default generateCompanyData;

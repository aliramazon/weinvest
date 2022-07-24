export type Months =
    | "September"
    | "October"
    | "November"
    | "December"
    | "January"
    | "February"
    | "March"
    | "April"
    | "May"
    | "June"
    | "July"
    | "August";

export type Years = 2011 | 2012 | 2013 | 2014 | 2015 | 2016 | 2017 | 2018;

export interface EmailWebsites {
    userName: string;
    domain: "io" | "co" | "com" | "tech" | "app";
}

export interface FundingRound {
    [name: string]: [number, number];
}

export interface CalculatedFundingRound {
    round: { name: string; amount: number };
    totalRaised: number;
    postMoneyValuation: number;
    givenEquity: number;
}
export interface CompanyInfo {
    name: string;
    hq: string;
    email: string;
    website: string;
    founded: {
        year: Years;
        month: Months;
    };
}
export interface CompanyBusiness {
    industry: string;
    businessModel: string;
    fundingRounds: CalculatedFundingRound[];
    totalRaised: number;
    valuation: number;
    potentialExitValuation: number;
}

export interface Company {
    id: string;
    info: CompanyInfo;
    business: CompanyBusiness;
}

export interface Companies {
    [id: string]: Company;
}

export interface FundedCompany {
    name: string;
    id: string;
    investedRound: string;
    investedAmount: number;
    ownershipPercentage: number;
    impliedValue: number;
    multiple: number;
}
export interface Fund {
    id: string;
    name: string;
    investedIn: FundedCompany[];
    totalInvested: number;
    highest: {
        investedAmount: number;
        investedCompany: string;
        multiple: number;
        multipleCompany: string;
    };
}

export interface Funds {
    [id: string]: Fund;
}

export interface CompanyIpo {
    date: string;
    exchange: string;
    name: string;
    numberOfShares: number;
    price: string;
    status: "expected" | "priced" | "withdrawn" | "filed";
    symbol: "string";
    totalSharesValue: number;
}

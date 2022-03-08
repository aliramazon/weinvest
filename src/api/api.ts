import {
    generateFundsData,
    generateCompanyData,
    COMPANIES,
    FUNDS,
    EMAIL_WEBSITES,
    HQ,
    INDUSTRIES,
    BUSINESS_MODELS,
    FUNDING_ROUNDS,
    Companies,
    Funds
} from '../mocks';

const isDataAvailable = <T>(obj: T): boolean => {
    return Object.keys(obj).length > 0;
};
class API {
    companiesData: Companies;
    fundsData: Funds;
    constructor() {
        this.companiesData = {};
        this.fundsData = {};
    }

    fetchCompaniesData() {
        if (isDataAvailable<Companies>(this.companiesData))
            return this.companiesData;
        const companiesData = generateCompanyData(
            COMPANIES,
            EMAIL_WEBSITES,
            HQ,
            INDUSTRIES,
            BUSINESS_MODELS,
            FUNDING_ROUNDS
        );
        this.companiesData = companiesData;
        return this.companiesData;
    }

    fetchFundsData() {
        if (isDataAvailable<Funds>(this.fundsData)) return this.fundsData;
        if (!isDataAvailable<Companies>(this.companiesData)) {
            this.fetchCompaniesData();
        }
        this.fundsData = generateFundsData(FUNDS, this.companiesData);
        return this.fundsData;
    }
}

export default API;

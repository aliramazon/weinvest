import { Companies, Funds } from "../types";

import funds from "../mocks/funds.json";
import companies from "../mocks/companies.json";

class API {
    companiesData: Companies;
    fundsData: Funds;
    constructor() {
        this.companiesData = {};
        this.fundsData = {};
    }

    fetchCompaniesData() {
        this.companiesData = companies as any;
        return this.companiesData;
    }

    fetchFundsData() {
        this.fundsData = funds;
        return this.fundsData;
    }
}

export default API;

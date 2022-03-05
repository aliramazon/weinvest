const COMPANIES = [
    'readycampus',
    'techstadium',
    'opendorm',
    'FENWAY',
    'Isovat',
    'Exotic',
    'skax',
    'NorthernSta',
    'BALL',
    'BRADWEL',
    'ORCHAR',
    'forcene',
    'Basac',
    'whitesox',
    'SKOOLL',
    'NENU',
    'Atlanis',
    'Classif',
    'primetimeteam',
    'tvbright',
    'realityiq',
    'Camew',
    'LANT',
    'CRIN',
    'CREN',
    'Ballco',
    'HavaBol',
    'Lincolni',
    'Emerald',
    'Taekwond',
    'Hamilo',
    'CRA',
    'KODOV',
    'Leador',
    'BEZOR',
    'maggin',
    'readycollege',
    'brightstartup',
    'pentatoniq',
    'redbr',
    'BASITE',
    'fratr',
    'Premarat',
    'GAMEDAYL',
    'HOMBR',
    'Fecund',
    'COP',
    'SHOWTIM',
    'Vocad',
    'Granitas',
    'parc',
    'ChipTun',
    'Kipeston',
    'Karcat',
    'campusdynamic',
    'statspark',
    'futurelab',
    'Balloz',
    'Toprock',
    'HOMAL',
    'Grooveple',
    'Kinglab',
    'Gorag',
    'Segen',
    'vix',
    'LEADL',
    'Bichon',
    'Dream',
    'awakt',
    'Batler',
    'Hark',
    'TECHLAN',
    'greatnesslab',
    'plentylab',
    'campuskid',
    'TIGERNE',
    'BEMA',
    'Ballpark',
    'Sciens',
    'Dupuar',
    'Zomi',
    'POLLIS',
    'Billavin',
    'JAZV',
    'brusil',
    'novu',
    'BATTERYI',
    'Lander',
    'COBL',
    'Bullethell',
    'completefox',
    'wholesomelab',
    'unifiedathletics',
    'Gramma',
    'Futuris',
    'GEARI',
    'newsun',
    'solarmorning',
    'newsigma',
    'SPATCHK',
    'CACIQU',
    'REGE',
    'LIGO',
    'flad',
    'Firstfa',
    'Karn',
    'Rampoz',
    'Bat',
    'SOPZO',
    'WELTAL',
    'Strex',
    'SECAMIN',
    'AT',
    'Enfield',
    'mediatomorrow',
    'ultastudio',
    'modernanimation',
    'HOV',
    'Wist',
    'CYBRAV',
    'Upup',
    'Arno',
    'seti',
    'AWAKENL',
    'ACUMEN',
    'Survat',
    'LIND',
    'STAFFER',
    'Jet',
    'Onad',
    'Campuse',
    'vixa',
    'fablytics',
    'stadiumspirit',
    'techdiamond',
    'Semi',
    'Homezi',
    'Knickerbo',
    'Saberi',
    'GROUND',
    'JACKS',
    'Jan',
    'grantor',
    'Sti',
    'elmwood',
    'Spara',
    'HOUSESPIDE',
    'Tocan',
    'Tigerif',
    'shackl',
    'blockbusterlabs',
    'beaubase',
    'morningsquad',
    'Emerrs',
    'cardwi',
    'ALASK',
    'secondba',
    'blackoz',
    'Camde',
    'SPORTDOT',
    'Opengame',
    'Prefe',
    'Ramapur',
    'Longov',
    'HOUSEZ',
    'Browar',
    'Cook',
    'Difere',
    'daasbase',
    'physicalfox',
    'legalbright',
    'FLD',
    'Catar',
    'Walk',
    'LODIV',
    'Cactelo',
    'Gameday',
    'yalvhamme',
    'Hamlani',
    'BIKINI',
    'spencer',
    'AeriVa',
    'atomim',
    'Geniab',
    'Supervis',
    'Dublant',
    'anytimepros',
    'rightdawn',
    'quantumdeck',
    'Novitre',
    'SMARTVI',
    'sink',
    'bravebase',
    'Corneris',
    'aery',
    'SHERMA',
    'NOVETAN',
    'DECODER',
    'Auror',
    'fuyut',
    'HOTI',
    'lumin',
    'este',
    'Recov',
    'loado',
    'GLADIV',
    'TEOPON',
    'RIVIER',
    'optimistictech',
    'baseteq',
    'EXTERI',
    'PASY',
    'Cosmol',
    'fugi',
    'Aftre',
    'DOBOON',
    'HOMEADVANT',
    'PREEV',
    'multiv',
    'Aug',
    'MINOR',
    'MantaVi',
    'Wabr',
    'brevar',
    'SECUND',
    'usabilitech',
    'techieiq',
    'Hometu',
    'WALLACE',
    'metafoli',
    'Jigge',
    'LISTE',
    'DAIDA',
    'Ambret',
    'Centovolt',
    'SCREEMA',
    'Superx',
    'Isolag',
    'BREAKA',
    'homefo',
    'ruriq',
    'ERAS',
    'technologyave',
    'prospectbase',
    'palp',
    'flata',
    'Net',
    'Verita',
    'Suponov',
    'Homedeli',
    'patrioti',
    'SENTINAMAN',
    'Showo',
    'CORNER',
    'darwi',
    'rede',
    'INNEBRO',
    'Bucev',
    'Modif',
    'smartlineup',
    'freshnomic',
    'newsday',
    'faoulin',
    'Class',
    'Prezi',
    'Kelv',
    'Hovillo',
    'PURE',
    'telonot',
    'Blan',
    'NATIEM',
    'dronalb',
    'BATAL',
    'TRUELA',
    'SLUGGE',
    'NoRos',
    'ECOVE',
    'geniusintel',
    'brighttomorrows',
    'stellarlab',
    'POSNAVE',
    'NEVU'
];

const HQ = [
    'San Francisco',
    'New York',
    'Lehi',
    'Orem',
    'Denver',
    'Boston',
    'London',
    'Manchester',
    'San Jose',
    'Sunnyvale',
    'Honkong',
    'Bejing',
    'Moscow',
    'Paris',
    'Dublin',
    'Helsinki',
    'Osaka',
    'Madrid',
    'Oakland',
    'Chicago',
    'Hamburg'
];

interface EmailWebsites {
    userName: string;
    domain: 'io' | 'co' | 'com' | 'tech' | 'app';
}

const EMAIL_WEBSITES: EmailWebsites[] = [
    { userName: 'hi', domain: 'io' },
    { userName: 'hello', domain: 'co' },
    { userName: 'hello', domain: 'com' },
    { userName: 'hi', domain: 'co' },
    { userName: 'contact', domain: 'io' },
    { userName: 'contact', domain: 'tech' },
    { userName: 'contact', domain: 'co' },
    { userName: 'contact', domain: 'com' },
    { userName: 'contact', domain: 'co' },
    { userName: 'hi', domain: 'app' }
];

const INDUSTRIES = [
    'Transportation',
    'Crypto',
    'Hardware',
    'Ecommerce',
    'Telecom',
    'Cloud',
    'Consumer',
    'Robotics',
    'AI',
    'Consulting',
    'SAAS',
    'Machine Learning',
    'Healthcare',
    'Blockchain',
    'Delivery',
    'Payments',
    'Supply Chain',
    'Food',
    'Travel',
    'Banking',
    'Housing',
    'eLearning',
    'Security',
    'Gaming'
];

const BUSINESS_MODELS = [
    'Advertising',
    'Affiliate/Commission',
    'Transactional',
    'Subscription'
];

interface FundingRound {
    [name: string]: [number, number];
}
const FUNDING_ROUNDS: FundingRound[] = [
    { Seed: [1000000, 5000000] },
    { 'Series A': [6000000, 22000000] },
    { 'Series B': [22000000, 55000000] },
    { 'Series C': [55000000, 99000000] },
    { 'Series D': [99000000, 190000000] }
];

const pickRandomIdx = (maxIdx: number): number => {
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
    const equityGiven = [18, 15, 20, 10, 10];
    let totalRaised = 0,
        valuation = 0;
    const possibleExitIdx = [];
    for (let i = 0.5; i < 2.5; i += 0.25) {
        possibleExitIdx.push(i);
    }

    const rounds = FUNDING_ROUNDS.slice(0, randomIdx + 1).map((round, idx) => {
        const roundName = Object.keys(round)[0];
        const raisedAmount = pickRandomValue(round[roundName]);
        totalRaised += raisedAmount;
        valuation =
            Math.floor((100 * raisedAmount) / equityGiven[idx] / 100000) *
            100000;

        return {
            [roundName]: raisedAmount,
            totalRaised: totalRaised,
            valuation: valuation
        };
    });

    const possibleExitValuation = Math.floor(
        valuation * possibleExitIdx[pickRandomIdx(possibleExitIdx.length)]
    );

    return {
        fundingRounds: rounds,
        totalRaised: totalRaised,
        valuation: valuation,
        possibleExitValuation: possibleExitValuation
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
    const data: any = [];

    COMPANIES.forEach((company: string, idx) => {
        const companyData = { id: idx, info: {}, business: {} };
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
        data.push(companyData);
    });
    return data;
};

const companyData = generateCompanyData(
    COMPANIES,
    EMAIL_WEBSITES,
    HQ,
    INDUSTRIES,
    BUSINESS_MODELS,
    FUNDING_ROUNDS
);

export default companyData;

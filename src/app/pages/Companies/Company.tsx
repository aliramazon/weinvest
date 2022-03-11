import { useParams } from 'react-router-dom';
import { useStore } from '../../../context/AppContext';
import { roundNumber, formatPercentage, formatFunds } from '../../../utils';

export const Company = () => {
    const {
        state: {
            companies: { data }
        }
    } = useStore();

    const { companyId } = useParams();
    console.log(companyId && data && data[companyId]);
    console.log(companyId);
    return <div>{companyId && data && data[companyId].info.email}</div>;
};

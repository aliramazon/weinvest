import { useStore } from '../../../context/AppContext';
export const CompaniesIndex = () => {
    const {
        state: { companies: data }
    } = useStore();

    return <p> Hello</p>;
};

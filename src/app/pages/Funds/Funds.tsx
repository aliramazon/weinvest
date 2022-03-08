import { useEffect } from 'react';
import {
    MainLayout,
    AppContentHeader,
    DashboardCards,
    DashboardCard
} from '../../../components';
import { useStore } from '../../../context/AppContext';
import { Actions, ActionType } from '../../../store';

export const Funds = () => {
    const { state, dispatch } = useStore();
    useEffect(() => {
        dispatch({
            type: Actions.FETCH_FUNDS_DATA
        });
    }, []);

    return (
        <MainLayout>
            <AppContentHeader title="Funds">
                <button>Hello</button>
                <button>Hello</button>
            </AppContentHeader>
            <DashboardCards>
                <DashboardCard
                    fact="Airbnb"
                    description="Highest Investment"
                    icon="funds"
                ></DashboardCard>
                <DashboardCard
                    fact="Airbnb"
                    description="Highest Invested Company"
                    icon="funds"
                ></DashboardCard>
                <DashboardCard
                    fact="Airbnb"
                    description="Highest Multiple"
                    icon="funds"
                ></DashboardCard>
                <DashboardCard
                    fact="Airbnb"
                    description="Highest Multiple Company"
                    icon="funds"
                ></DashboardCard>
            </DashboardCards>
        </MainLayout>
    );
};

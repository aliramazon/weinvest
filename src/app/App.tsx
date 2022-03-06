import { Outlet } from 'react-router-dom';
import { AppHeader, SideNav, AppLayout } from '../components';
import GlobalStyle from '../GlobalStyle';
import { SIDE_NAV_LINKS_GROUPS } from './routes';
import API from '../api/api';

function App() {
    const api = new API();
    const data = api.fetchFundsData();
    console.log(data);
    const full = Object.values(data).filter((d) => d.investedIn.length > 0);
    console.log(full.length);
    return (
        <>
            <GlobalStyle />
            <AppLayout>
                <AppHeader />
                <SideNav links={SIDE_NAV_LINKS_GROUPS} />
                <Outlet />
            </AppLayout>
        </>
    );
}

export default App;

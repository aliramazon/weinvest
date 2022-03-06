import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Header, SideNav } from '../components';
import GlobalStyle from '../GlobalStyle';
import { SIDE_NAV_LINKS_GROUPS } from './routes';
import API from '../api/api';

const AppBase = styled.div`
    display: grid;
    grid-template-columns: 25rem 1fr;
    grid-template-rows: 6.8rem 1fr;
`;

function App() {
    const api = new API();
    console.log(api.fetchFundsData());
    console.log(api.fetchCompaniesData());
    return (
        <>
            <GlobalStyle />
            <AppBase>
                <Header />
                <SideNav links={SIDE_NAV_LINKS_GROUPS} />
                <Outlet />
            </AppBase>
        </>
    );
}

export default App;

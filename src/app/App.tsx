import { Outlet } from 'react-router-dom';
import { AppHeader, SideNav, AppLayout } from '../components';
import { AppProvider } from '../context/AppContext';
import GlobalStyle from '../GlobalStyle';
import { SIDE_NAV_LINKS_GROUPS } from './router';

function App() {
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

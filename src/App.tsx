import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Header, SideNavigation } from './components';
import GlobalStyle from './GlobalStyle';

const AppBase = styled.div`
    display: grid;
    grid-template-columns: 25rem 1fr;
    grid-template-rows: 6.8rem 1fr;
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <AppBase>
                <Header />
                <SideNavigation />
                <Outlet />
            </AppBase>
        </>
    );
}

export default App;

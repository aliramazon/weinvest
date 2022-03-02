import styled from 'styled-components';
import { Header, SideNavigation } from './components';
import GlobalStyle from './GlobalStyle';

const AppBase = styled.div`
    display: grid;
    grid-template-columns: 25rem 1fr;
    grid-template-rows: 6.8rem 1fr;
`;

const AppSideNavigation = styled(SideNavigation)`
    grid-column: 1/2;
    grid-row: 1/3;
`;

const AppHeader = styled(Header)`
    grid-column: 2/3;
    grid-row: 1/2;
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <AppBase>
                <AppHeader />
                <AppSideNavigation />
            </AppBase>
        </>
    );
}

export default App;

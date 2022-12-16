import { Outlet } from "react-router-dom";
import { AppHeader, SideNav, AppContent, AppContainer } from "../components";

import { SIDE_NAV_LINKS_GROUPS } from "./router";
import "../global.css";

function App() {
    return (
        <>
            <AppContainer>
                <AppHeader />
                <SideNav links={SIDE_NAV_LINKS_GROUPS} />
                <AppContent>
                    <Outlet />
                </AppContent>
            </AppContainer>
        </>
    );
}

export default App;

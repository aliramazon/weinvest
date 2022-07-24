import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AppHeader, SideNav, AppContent, AppContainer } from "../components";
import GlobalStyle from "../GlobalStyle";
import { SIDE_NAV_LINKS_GROUPS } from "./router";

function App() {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/ipo-calendar");
    }, []);
    return (
        <>
            <GlobalStyle />
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

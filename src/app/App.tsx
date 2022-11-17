import { useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { AppHeader, SideNav, AppContent, AppContainer } from "../components";
import GlobalStyle from "../GlobalStyle";
import { SIDE_NAV_LINKS_GROUPS } from "./router";
import "../global.css";

function App() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/") {
            navigate("/ipo-calendar");
        }
    }, [location.pathname, navigate]);
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

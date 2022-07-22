import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AppHeader, SideNav, AppLayout } from "../components";
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
            <AppLayout>
                <AppHeader />
                <SideNav links={SIDE_NAV_LINKS_GROUPS} />
                <Outlet />
            </AppLayout>
        </>
    );
}

export default App;

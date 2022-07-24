import styled from "styled-components";
import { Logo } from "../Logo/Logo";

const AppHeaderBase = styled.header`
    background-color: var(--whiteColor);
    width: 100%;
    height: 6.8rem;
    padding: 0 var(--spacing-7);
    box-shadow: var(--box-shadow);
    z-index: 1;
    display: flex;
    align-items: center;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
`;

export const AppHeader = () => {
    return (
        <AppHeaderBase>
            <Logo />
        </AppHeaderBase>
    );
};

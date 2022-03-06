import styled from 'styled-components';
import Logo from '../Logo/Logo';

const HeaderBase = styled.header`
    background-color: var(--whiteColor);
    width: 100%;
    height: 6.8rem;
    padding: 0 var(--spacing-7);
    box-shadow: var(--box-shadow);
    z-index: 1;
    display: flex;
    align-items: center;

    grid-column: 1/3;
    grid-row: 1/2;
`;

const Header = () => {
    return (
        <HeaderBase>
            <Logo />
        </HeaderBase>
    );
};

export default Header;

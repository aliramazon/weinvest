import React from 'react';
import styled, { css } from 'styled-components';
import Logo from '../Logo/Logo';

const HeaderBase = styled.header`
    background-color: var(--whiteColor);
    width: 100%;
    height: 6.8rem;
    padding: 0 2.8rem;
    box-shadow: 0 0.1rem 0.4rem rgba(var(--generalColor-100), 0.08);
    display: flex;
    align-items: center;
`;

const Header = () => {
    return (
        <HeaderBase>
            <Logo />
        </HeaderBase>
    );
};

export default Header;

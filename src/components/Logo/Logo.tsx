import styled from "styled-components";

const LogoBase = styled.span`
    font-size: 2.625rem;
    color: var(--generalColor-100);
    font-weight: var(--font-weight-600);

    span {
        color: var(--primaryColor-100);
        font-weight: var(--font-weight-700);
    }
`;
export const Logo = () => {
    return (
        <LogoBase>
            <span>we</span>invest.
        </LogoBase>
    );
};

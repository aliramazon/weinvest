import styled, { css } from 'styled-components';

interface BadgeProps {
    color?: 'blue' | 'green';
}
export const Badge = styled.div<BadgeProps>`
    height: 2.4rem;
    padding: 0 8px;
    width: 100%;
    display: flex;
    align-items: center;
    color: var(--whiteColor);
    background-color: var(--generalColor-80);
    border-radius: 0.4rem;
    width: max-content;

    ${(props) =>
        props.color === 'blue' &&
        css`
            background-color: var(--primaryColor-100);
        `}

    ${(props) =>
        props.color === 'green' &&
        css`
            background-color: var(--greenColor-90);
        `}
`;

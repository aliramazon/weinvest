import styled, { css } from "styled-components";

export type BadgeColorProps = "blue" | "green" | "red" | "yellow";
export interface BadgeProps {
    color?: BadgeColorProps;
    light?: boolean;
}
export const Badge = styled.div<BadgeProps>`
    height: 2.4rem;
    padding: 0 8px;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: ${(props) =>
        props.light ? "var(--generalColor-40)" : "var(--generalColor-80)"};
    border-radius: 0.4rem;
    width: max-content;
    color: ${(props) =>
        props.light ? "var(--generalColor-80)" : "var(--whiteColor)"};
    font-size: var(--font-size-2);

    ${(props) =>
        props.color === "blue" &&
        css`
            background-color: ${(props: BadgeProps) =>
                props.light
                    ? "var(--primaryColor-40)"
                    : "var(--primaryColor-100)"};
            color: ${(props: BadgeProps) =>
                props.light ? "var(--primaryColor-100)" : "var(--whiteColor)"};
        `}

    ${(props) =>
        props.color === "green" &&
        css`
            background-color: ${(props: BadgeProps) =>
                props.light ? "var(--greenColor-40)" : "var(--greenColor-90)"};
            color: ${(props: BadgeProps) =>
                props.light ? "var(--greenColor-100)" : "var(--whiteColor)"};
        `}

    ${(props) =>
        props.color === "red" &&
        css`
            background-color: ${(props: BadgeProps) =>
                props.light ? "var(--redColor-40)" : "var(--redColor-90)"};
            color: ${(props: BadgeProps) =>
                props.light ? "var(--redColor-100)" : "var(--whiteColor)"};
        `}

    ${(props) =>
        props.color === "yellow" &&
        css`
            background-color: ${(props: BadgeProps) =>
                props.light
                    ? "var(--yellowColor-40)"
                    : "var(--yellowColor-90)"};
            color: ${(props: BadgeProps) =>
                props.light ? "var(--yellowColor-100)" : "var(--whiteColor)"};
        `}
`;

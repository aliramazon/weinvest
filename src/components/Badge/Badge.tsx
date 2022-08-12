import { FC } from "react";
import styled, { css } from "styled-components";

export type BadgeVariantProps = "blue" | "green" | "red" | "yellow";
export interface BadgeProps {
    variant?: BadgeVariantProps;
    light?: boolean;
}
export const BadgeBase = styled.div<BadgeProps>`
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
        props.variant === "blue" &&
        css`
            background-color: ${(props: BadgeProps) =>
                props.light
                    ? "var(--primaryColor-40)"
                    : "var(--primaryColor-100)"};
            color: ${(props: BadgeProps) =>
                props.light ? "var(--primaryColor-100)" : "var(--whiteColor)"};
        `}

    ${(props) =>
        props.variant === "green" &&
        css`
            background-color: ${(props: BadgeProps) =>
                props.light ? "var(--greenColor-40)" : "var(--greenColor-90)"};
            color: ${(props: BadgeProps) =>
                props.light ? "var(--greenColor-100)" : "var(--whiteColor)"};
        `}

    ${(props) =>
        props.variant === "red" &&
        css`
            background-color: ${(props: BadgeProps) =>
                props.light ? "var(--redColor-40)" : "var(--redColor-90)"};
            color: ${(props: BadgeProps) =>
                props.light ? "var(--redColor-100)" : "var(--whiteColor)"};
        `}

    ${(props) =>
        props.variant === "yellow" &&
        css`
            background-color: ${(props: BadgeProps) =>
                props.light
                    ? "var(--yellowColor-40)"
                    : "var(--yellowColor-90)"};
            color: ${(props: BadgeProps) =>
                props.light ? "var(--yellowColor-100)" : "var(--whiteColor)"};
        `}
`;

export const Badge: FC<BadgeProps> = ({ variant, light, children }) => {
    return (
        <BadgeBase light={light} variant={variant}>
            {children}
        </BadgeBase>
    );
};

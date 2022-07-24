import React from "react";
import styled from "styled-components";

const AppContentHeaderBase = styled.div`
    display: flex;
    align-items: center;
    gap: var(--spacing-4);
    height: 5rem;
    margin-bottom: var(--spacing-7);

    & > *:first-child {
        margin-right: auto;
    }
`;

const AppContentHeaderTitle = styled.h1`
    font-size: var(--font-size-6);
    line-height: var(--line-height-6);
    font-weight: var(--font-weight-700);
    color: var(--generalColor-100);
`;

interface AppContentHeaderProps {
    title: string;
}
export const AppContentHeader: React.FC<AppContentHeaderProps> = ({
    title,
    children
}) => {
    return (
        <AppContentHeaderBase>
            <AppContentHeaderTitle>{title}</AppContentHeaderTitle>
            {children}
        </AppContentHeaderBase>
    );
};

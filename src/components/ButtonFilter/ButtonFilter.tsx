import { FC } from "react";
import styled from "styled-components";
import { BadgeBase } from "../Badge";

const ClickableBadge = styled(BadgeBase)`
    cursor: pointer;
`;

const ButtonFilterBase = styled.div`
    display: flex;
    align-items: center;
    gap: 0 !important;
    width: max-content;
    height: 2.8rem;
    padding: 0 var(--spacing-1);
    background-color: var(--primaryColor-40);
    border-radius: 0.4rem;
`;
interface ButtonFilterProps {
    activeIndex: string;
    data: { label: string; value: string }[];
    onClick: (value: string) => void;
}

const ButtonFilter: FC<ButtonFilterProps> = ({
    activeIndex,
    data,
    onClick
}) => {
    return (
        <ButtonFilterBase>
            {data.map((item) => {
                return (
                    <ClickableBadge
                        variant="blue"
                        light={activeIndex !== item.value}
                        onClick={() => onClick(item.value)}
                        key={item.value}
                    >
                        {item.label}
                    </ClickableBadge>
                );
            })}
        </ButtonFilterBase>
    );
};

export { ButtonFilter };

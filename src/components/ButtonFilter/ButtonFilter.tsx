import { FC } from "react";
import styled from "styled-components";
import { Badge } from "../Badge";

const ClickableBadge = styled(Badge)`
    cursor: pointer;
`;

const ButtonFilterBase = styled.div`
    display: flex;
    align-items: center;
    gap: var(--spacing-2);
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
                        color="blue"
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

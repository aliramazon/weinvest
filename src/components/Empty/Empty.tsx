import styled from "styled-components";
import box from "./box.png";

const EmptyBase = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-5);

    img {
        height: 7rem;
        width: auto;
    }

    span {
        font-size: var(--font-size-4);
        color: var(--primaryColor-60);
    }
`;

export const Empty = ({ text }: { text: string }) => {
    return (
        <EmptyBase>
            <img src={box} alt="Empty Box" />
            <span>{text}</span>
        </EmptyBase>
    );
};

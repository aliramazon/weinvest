import styled from "styled-components";
import loading from "./loading.png";
const LoadingBase = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    & img {
        height: 7rem;
        width: auto;
    }
`;

export const Loading = () => {
    return (
        <LoadingBase>
            <img src={loading} alt="Loading" />
        </LoadingBase>
    );
};

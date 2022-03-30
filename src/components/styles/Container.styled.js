import styled from "styled-components";

export const Container = styled.div`
    width: 1200px;
    max-width: 100%;
    padding: 0 20px;
    margin: 0 auto;
`;

export const PetContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 25px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: ${({ theme }) => theme.minMobile}) {
        grid-template-columns: 1fr;
    }
`;

export const SearchContainer = styled.div`
    margin: 50px 0;
    text-align: center;

    input {
        padding: 0.8rem;
        height: 3rem;
        width: 50%;
        appearance: none;
        background-color: #fff;
        border: 0;
        border-radius: 4px;
        color: #000000;
        font-size: 1rem;
        line-height: 1.2rem;
        text-align: left;
        box-shadow: none;
    }

    input[type="text"]:focus {
        outline: none;
        border: 2px solid ${({ theme }) => theme.colors.header};
    }
`;

import styled from "styled-components";

export const IconButton = styled.button`
    margin-top: 18px;
    font-family: "Poppins", sans-serif;
    background-color: ${({ bg, theme }) => bg || theme.colors.primary};
    color: white;
    text-decoration: none;
    border-radius: 60px;
    height: 50px;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    overflow: hidden;
    width: auto;
    max-width: 50px;
    transition: max-width 0.7s;
    border: none;
    cursor: pointer;

    &:hover {
        max-width: 300px;
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }

    img {
        height: 25px;
    }

    span:first-child {
        font-size: 16px;
        margin-right: 12px;
        display: flex;
        align-items: center;
        padding-left: 7px;
    }

    span:last-child {
        white-space: nowrap;
        padding-right: 13px;
        font-size: 14px;
        font-weight: bold;
    }
`;

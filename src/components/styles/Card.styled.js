import styled from "styled-components";

export const Card = styled.div`
    background: white;
    transition: 0.3s;
    width: 94%;
    border-radius: 5px;
    margin-bottom: 6%;

    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }

    & > label {
        cursor: pointer;
    }
`;

export const ImageContainer = styled.div`
    width: 100%;
    height: 250px;
    position: relative;
    text-align: center;
`;

export const Image = styled.img`
    padding: 15px;
    border-radius: 20px;
    max-width: 100%;
    max-height: 100%;
    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: auto;
`;

export const CardBody = styled.div`
    padding: 2px 16px;

    & > p > b {
        font-size: 16px;
    }

    & > p {
        font-size: 14px;
    }
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
    -webkit-appearance: none;
    -moz-appearance: none;
    cursor: pointer;
    background: #e2ebf6;
    border-radius: 50%;
    height: 2em;
    margin: 7px 7px 0 0;
    margin-left: auto;
    flex: none;
    outline: none;
    position: relative;
    transition: all 0.2s;
    width: 2em;
    display: block;

    &:after {
        border: 2px solid #fff;
        border-top: 0;
        border-left: 0;
        content: "";
        display: block;
        height: 1em;
        left: 0.625em;
        position: absolute;
        top: 0.25em;
        transform: rotate(45deg);
        width: 0.5em;
    }

    &:checked {
        background: #64c175;
        border-color: #64c175;
    }
`;

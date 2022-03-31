import styled from "styled-components";

export const Loader = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 1;
    display: inline-block;
    width: 3rem;
    height: 3rem;
    vertical-align: text-bottom;
    background-color: #1c49c294;
    border-radius: 50%;
    opacity: 0;
    animation: spinner-grow 0.75s linear infinite;

    @keyframes spinner-grow {
        0% {
            transform: scale(0);
        }
        50% {
            opacity: 1;
        }
    }
`;

export const DownloadLoader = styled.div`
    position: absolute;
    top: 0px;
    right: 0px;
    width: 100%;
    height: 100%;
    background-color: #eceaea;
    background-image: url("./Loader.gif");
    background-size: 500px;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 10000000;
    opacity: 0.5;
    filter: alpha(opacity=50);
`;

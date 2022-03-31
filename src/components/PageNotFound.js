import { ErrorContainer } from "./styles/Container.styled";

function PageNotFound() {
    return (
        <ErrorContainer>
            <h1>404 Page Not Found!</h1>
            <img src="./page-not-found.jpg" alt="Page not found" />
        </ErrorContainer>
    );
}

export default PageNotFound;

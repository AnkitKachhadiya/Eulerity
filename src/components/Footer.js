import { StyledFooter } from "./styles/Footer.Styled";

function Footer() {
    return (
        <StyledFooter>
            <a
                href="https://github.com/AnkitKachhadiya/Eulerity"
                aria-label="Project Link"
                target="_blank"
                rel="noreferrer"
            >
                <img
                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                    alt="Github logo"
                />
            </a>
        </StyledFooter>
    );
}

export default Footer;

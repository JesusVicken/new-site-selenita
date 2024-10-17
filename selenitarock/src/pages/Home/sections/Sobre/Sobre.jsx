import { Container, styled } from "@mui/material";

const Sobre = () => {

    const StyledSobre = styled("div")(() => ({
        backgroundColor: "white",
        height: "100vh",  // Define que a seção ocupa toda a altura da tela
        scrollSnapAlign: "start",  // Ancoragem suave ao rolar
    }));

    return (
        <StyledSobre id="sobre">
            <Container>
                <h1>Sobre a banda</h1>
                {/* Conteúdo sobre a banda */}
            </Container>
        </StyledSobre>
    );
};

export default Sobre;

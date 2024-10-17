import { Container, styled } from "@mui/material";

const Discografia = () => {

    const StyledDiscografia = styled("div")(() => ({
        backgroundColor: "#e0e0e0",
        height: "100vh",  // Ocupa toda a altura da tela
        scrollSnapAlign: "start",  // Ancoragem suave ao rolar
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }));

    return (
        <StyledDiscografia id="discografia">
            <Container>
                <h1>Discografia</h1>
                <p>Lista de álbuns e músicas da banda.</p>
            </Container>
        </StyledDiscografia>
    );
};

export default Discografia;

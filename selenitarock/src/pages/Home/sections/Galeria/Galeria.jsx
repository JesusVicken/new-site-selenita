import { Container, styled } from "@mui/material";

const Galeria = () => {

    const StyledGaleria = styled("div")(() => ({
        backgroundColor: "#f5f5f5",
        height: "100vh",  // Ocupa toda a altura da tela
        scrollSnapAlign: "start",  // Ancoragem suave ao rolar
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }));

    return (
        <StyledGaleria id="galeria">
            <Container>
                <h1>Galeria</h1>
                <p>Imagens da banda.</p>
            </Container>
        </StyledGaleria>
    );
};

export default Galeria;

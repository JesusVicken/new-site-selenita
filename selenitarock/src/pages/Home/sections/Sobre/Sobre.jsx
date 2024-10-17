import { Container, styled } from "@mui/material";

const Sobre = () => {

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
                <h1>Sobre a Banda</h1>
                <p> da banda.</p>
            </Container>
        </StyledGaleria>
    );
};

export default Sobre;

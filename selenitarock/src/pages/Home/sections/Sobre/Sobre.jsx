import { Container, styled } from "@mui/material";
import gbImage from "../../../../assets/bg.jpg"; // Importe a imagem

const Sobre = () => {
    const StyledSection = styled("section")(() => ({
        height: "100vh", // Altura da seção
        scrollSnapAlign: "start", // Ancoragem suave
        backgroundImage: `url(${gbImage})`, // Define a imagem de fundo
        backgroundSize: "cover", // Faz a imagem cobrir toda a seção
        backgroundPosition: "center", // Centraliza a imagem
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white", // Define a cor do texto para contraste
    }));

    return (
        <StyledSection id="sobre">
            <Container>
                <h1>Sobre a Banda Selenita</h1>
                <p>Uma breve descrição da banda...</p>
            </Container>
        </StyledSection>
    );
};

export default Sobre;

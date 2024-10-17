import { Container, styled } from "@mui/material";

const Agenda = () => {

    const StyledAgenda = styled("div")(() => ({
        backgroundColor: "#cccccc",
        height: "100vh",  // Ocupa toda a altura da tela
        scrollSnapAlign: "start",  // Ancoragem suave ao rolar
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }));

    return (
        <StyledAgenda id="agenda">
            <Container>
                <h1>Agenda</h1>
                <p>Próximos shows e eventos da banda.</p>
            </Container>
        </StyledAgenda>
    );
};

export default Agenda;

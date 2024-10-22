import { Container, styled, Grid, useTheme } from "@mui/material";
import Bg1 from "../../../../assets/divulgacao.jpg";

const Agenda = () => {
    const theme = useTheme();

    const StyledHero = styled("div")(() => ({
        backgroundColor: "#000000",
        height: "90vh",
        scrollSnapAlign: "start",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        // Responsividade para telas menores
        [theme.breakpoints.down("md")]: {
            backgroundSize: "cover",
            backgroundPosition: "top",
        },
    }));

    const StyledImg2 = styled("img")(() => ({
        width: "90%", // Ajuste a largura da imagem para 80% do contêiner
        maxHeight: "80vh", // Reduza a altura máxima da imagem
        objectFit: "contain", // A imagem se ajusta sem distorção
        marginLeft: "18px",
        marginRight: "auto",

        [theme.breakpoints.down("sm")]: {
            maxHeight: "40vh", // Reduz ainda mais a altura em dispositivos móveis
            objectFit: "contain", // Mantém a imagem contida
        },
    }));

    return (
        <StyledHero id="hero">
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <StyledImg2 src={Bg1} alt="Descrição da imagem" />
                    </Grid>
                </Grid>
            </Container>
        </StyledHero>
    );
};

export default Agenda;

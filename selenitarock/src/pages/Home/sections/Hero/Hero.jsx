import { Container, styled, Grid, useTheme } from "@mui/material";
import Bg2 from "../../../../assets/divulgacao2.jpg";

const Hero = () => {
    const theme = useTheme();

    const StyledHero = styled("div")(() => ({
        backgroundColor: "#000000",
        height: "100vh",
        scrollSnapAlign: "start",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        // Responsividade para telas menores
        [theme.breakpoints.down("md")]: {
            backgroundSize: "cover",
            backgroundPosition: "top", // Ajusta a posição para o topo em telas médias e menores
        },
    }));

    const StyledImg2 = styled("img")(() => ({
        width: "100%",
        maxHeight: "80vh",
        objectFit: "cover",
        marginLeft: "auto",
        marginRight: "auto",

        [theme.breakpoints.down("sm")]: {
            maxHeight: "50vh", // Reduz a altura da imagem em dispositivos móveis
            objectFit: "contain", // Ajusta a imagem para ser contida dentro do espaço
        },
    }));

    return (
        <StyledHero id="hero">
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <StyledImg2 src={Bg2} alt="Descrição da imagem" />
                    </Grid>
                </Grid>
            </Container>
        </StyledHero>
    );
};

export default Hero;

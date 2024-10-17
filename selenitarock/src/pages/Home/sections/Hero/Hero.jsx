import { Container, styled, Grid } from "@mui/material";
import Bg2 from "../../../../assets/divulgacao2.jpg";

const Hero = () => {
    const StyledHero = styled("div")(() => ({
        backgroundColor: "#000000",
        height: "100vh",
        scrollSnapAlign: "start",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }));

    const StyledImg2 = styled("img")(() => ({
        width: "100%",
        maxHeight: "80vh",
        objectFit: "cover",
        marginLeft: "auto",
        marginRight: "auto",
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

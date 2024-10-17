import { Container, styled, Grid } from "@mui/material";
import Bg from "../../../../assets/divulgacao.jpg";
import Bg2 from "../../../../assets/divulgacao2.jpg";

const Hero = () => {

    const StyledHero = styled("div")(() => ({
        backgroundColor: "black",
        height: "100vh",  // Define que a seção ocupa toda a altura da tela
        scrollSnapAlign: "start",  // Ancoragem suave ao rolar
    }));

    const StyledImg = styled("img")(() => ({
        height: "100%"
    }));

    const StyledImg2 = styled("img")(() => ({
        width: "130%",
    }));

    return (
        <StyledHero id="hero"> {/* ID da seção para ancoragem */}
            <Container>
                <Grid container spacing={8}>
                    <Grid item xs={7}>
                        <StyledImg src={Bg} />
                    </Grid>
                    <Grid item xs={5}>
                        <StyledImg2 src={Bg2} />
                    </Grid>
                </Grid>
            </Container>
        </StyledHero>
    );
};

export default Hero;

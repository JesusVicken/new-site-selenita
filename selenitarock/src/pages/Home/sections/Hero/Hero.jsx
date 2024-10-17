import { Container, styled, Grid } from "@mui/material";
import Bg2 from "../../../../assets/divulgacao2.jpg";

const Hero = () => {

    const StyledHero = styled("div")(() => ({
        backgroundColor: "#000000",
        height: "100vh",  // Define que a seção ocupa toda a altura da tela
        scrollSnapAlign: "start",  // Ancoragem suave ao rolar
    }));

    const StyledImg = styled("img")(() => ({
        height: "100%",
        marginTop: '100px',
        marginLeft:"50%"
    }));

    const StyledImg2 = styled("img")(() => ({
        width: "110%",
        marginTop: '100px',
        marginLeft:"50%"
    }));

    return (
        <StyledHero id="hero"> {/* ID da seção para ancoragem */}
            <Container>
                <Grid container spacing={8}>
                    <Grid item xs={6}>
                        <StyledImg2 src={Bg2} />
                    </Grid>
                    
                </Grid>
            </Container>
        </StyledHero>
    );
};

export default Hero;

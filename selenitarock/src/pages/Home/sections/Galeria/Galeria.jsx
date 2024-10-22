import { Container } from "@mui/material";
import BackgroundSection from '../../../../components/BakgroundSection'; // Importe o componente BackgroundSection
import gbImage from "../../../../assets/bg.jpg"; // Importe a imagem

const Galeria = () => {
    return (
        <BackgroundSection image={gbImage} bgPosition="right" id="galeria">
            <Container>
                <h1>Galeria</h1>
                <p>Imagens da banda.</p>
            </Container>
        </BackgroundSection>
    );
};

export default Galeria;

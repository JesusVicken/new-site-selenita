import { Container } from "@mui/material";
import BackgroundSection from '../../../../components/BakgroundSection'; // Importe o componente BackgroundSection
import gbImage from "../../../../assets/bg.jpg"; // Importe a imagem

const Discografia = () => {
    return (
        <BackgroundSection image={gbImage} bgPosition="top" id="discografia">
            <Container>
                <h1>Discografia</h1>
                <p>Lista de álbuns e músicas da banda.</p>
            </Container>
        </BackgroundSection>
    );
};

export default Discografia;

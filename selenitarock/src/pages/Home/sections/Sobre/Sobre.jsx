import { Container } from "@mui/material";
import BackgroundSection from '../../../../components/BakgroundSection'; // Importe o componente BackgroundSection
import gbImage from "../../../../assets/bg.jpg"; // Importe a imagem

const Sobre = () => {
    return (
        <BackgroundSection image={gbImage} bgPosition="left" id="sobre">
            <Container>
                <h1>Sobre a Banda Selenita</h1>
                <p>Uma breve descrição da banda...</p>
            </Container>
        </BackgroundSection>
    );
};

export default Sobre;

import { styled } from "@mui/material";

const BackgroundSection = styled("section")(({ theme, image, bgPosition }) => ({
    height: "100vh",
    scrollSnapAlign: "start",
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: bgPosition, // Usa a prop bgPosition
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",

    // Responsividade usando breakpoints do Material-UI
    [theme.breakpoints.down("md")]: {
        backgroundPosition: bgPosition, // Mantém a posição definida pela prop em telas médias
    },
    [theme.breakpoints.down("sm")]: {
        backgroundPosition: bgPosition, // Mantém a posição definida pela prop em telas pequenas
    },
}));

export default BackgroundSection;

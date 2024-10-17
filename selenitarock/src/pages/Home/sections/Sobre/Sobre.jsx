import React, { useState } from "react";
import { styled } from "@mui/material";
import Vinheta from "../../../../assets/Vinheta.mp4"; // Caminho para o vídeo
import VolumeUpIcon from '@mui/icons-material/VolumeUp'; // Ícone de volume do Material UI

const LoadingScreen = ({ onVideoEnd }) => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const [isMuted, setIsMuted] = useState(true); // Estado para gerenciar se o vídeo está mudo ou não

    const handleVideoEnd = () => {
        setIsVideoLoaded(true); // Define como carregado
        if (onVideoEnd) {
            onVideoEnd(); // Notifica o componente pai (App)
        }
    };

    const handleUnmute = () => {
        setIsMuted(false); // Ativa o som do vídeo
    };

    const StyledLoadingScreen = styled("div")({
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "black", // Cor de fundo enquanto o vídeo roda
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999, // Garanta que o vídeo fique na frente de tudo
    });

    const StyledVideo = styled("video")({
        width: "100%",
        height: "auto",
        maxWidth: "100vw",
        maxHeight: "100vh",
    });

    const StyledButton = styled("button")({
        background: "none", // Sem fundo
        border: "none", // Sem borda
        cursor: "pointer", // Mudança de cursor para pointer
        position: "absolute",
        bottom: "20px", // Colocar o botão no canto inferior
        right: "20px", // Margem da direita
        color: "white", // Cor do ícone
        fontSize: "2rem", // Tamanho maior do ícone
        display: "flex",
        alignItems: "center",
    });

    return (
        <>
            {!isVideoLoaded && ( // Exibe o vídeo de loading enquanto não estiver carregado
                <StyledLoadingScreen>
                    <StyledVideo
                        src={Vinheta}
                        autoPlay
                        muted={isMuted} // Mudo se o estado estiver verdadeiro
                        onEnded={handleVideoEnd} // Chama quando o vídeo termina
                    />
                    {isMuted && (
                        <StyledButton onClick={handleUnmute}>
                            <VolumeUpIcon fontSize="inherit" /> {/* Ícone de volume */}
                        </StyledButton>
                    )}
                </StyledLoadingScreen>
            )}
        </>
    );
};

export default LoadingScreen;

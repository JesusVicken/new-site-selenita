import React, { useState } from "react";
import { styled, IconButton } from "@mui/material";
import Vinheta from "../../assets/Vinheta.mp4"; // Caminho para o vídeo
import PlayArrowIcon from "@mui/icons-material/PlayArrow"; // Ícone de play

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

    const StyledIconButton = styled(IconButton)({
        position: "absolute", // Posição fixa para ficar sobre o vídeo
        bottom: "20px",
        right: "20px",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Fundo transparente para destacar o botão
        color: "green", // Cor do ícone
    });

    return (
        <>
            {!isVideoLoaded && (
                <StyledLoadingScreen>
                    <StyledVideo
                        src={Vinheta}
                        autoPlay
                        muted={isMuted} // Mudo se o estado estiver verdadeiro
                        onEnded={handleVideoEnd} // Chama quando o vídeo termina
                    />
                    {isMuted && (
                        <StyledIconButton onClick={handleUnmute}>
                            <PlayArrowIcon /> {/* Ícone de som */}
                        </StyledIconButton>
                    )}
                </StyledLoadingScreen>
            )}
        </>
    );
};

export default LoadingScreen;

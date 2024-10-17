import React, { useState } from "react";
import Home from './pages/Home/Home.jsx';
import LoadingScreen from './components/utils/LoadingScreen.jsx'
import './App.css'; // Arquivo CSS global para a rolagem suave

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Função que será chamada quando o vídeo de loading terminar
  const handleLoadingComplete = () => {
    setIsLoaded(true);
  };

  return (
    <>
      {!isLoaded ? (
        <LoadingScreen onVideoEnd={handleLoadingComplete} /> // Exibe o vídeo de loading
      ) : (
        <div className="scroll-container"> {/* Classe para a rolagem suave */}
          <Home />
        </div>
      )}
    </>
  );
};

export default App;

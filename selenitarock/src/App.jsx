import Home from './pages/Home/Home.jsx';
import './App.css'; // Adicionando um arquivo CSS global para a rolagem suave

const App = () => {
  return (
    <div className="scroll-container"> {/* Adicione a classe para o contêiner principal */}
      <Home />
    </div>
  );
};

export default App;

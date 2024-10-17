import Hero from "./sections/Hero/Hero";
import Sobre from "./sections/Sobre/Sobre";
import Discografia from "./sections/Discografia/Discografia";
import Galeria from "./sections/Galeria/Galeria";
import Agenda from "./sections/Agenda/Agenda";
import LoadingScreen from "../../components/utils/LoadingScreen";


const Home = () => {
    return (
        <>
            <LoadingScreen />
            <Hero />
            <Sobre />
            <Discografia />
            <Galeria />
            <Agenda />
        </>
    );
};

export default Home;

// import Navbar from "../../Layout/Navbar/Navbar";
import Brief from '../../Components/Brief/Brief';
import Services from '../../Components/Services/Services';
import Works from '../../Components/Works/Works';
import Galrye from './../../Components/Galrye/Galrye';

const Home = () => {
    return (
        <>
            <Galrye/>
            <Services/>
            <Works/>
            <Brief/>
        </>
    );
}

export default Home;
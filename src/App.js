import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import AboutUs from "./Components/AboutUs/AboutUs";
import Services from "./Components/Services/Services";
import Technology from "./Components/Technology/Technology";
import Clients from "./Components/Clients/Clients";


function App() {
    return (
        <div className="App">
            <Header />
            <Banner />
            <AboutUs />
            <Services />
            <Technology />
            <Clients />
        </div>
    );
}

export default App;

import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Shorter from "./components/Shorter";
import StatisticsList from "./components/StatisticsList";
import Boost from "./components/Boost";
import Footer from "./components/Footer";

function App(): JSX.Element {
    return (
        <div className="App">
            <div className="top">
                <Header />
                <Body />
            </div>

            <div className="bot">
                <div className="bot-container">
                    <Shorter />
                    <StatisticsList />
                </div>
            </div>
            <Boost />
            <Footer />
        </div>
    );
}

export default App;

import Body from "./components/Body.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import { MockDataProvider } from "./context/MockDataContext";
import "./css/base/App.scss";
import "./css/base/reset.css";

function App() {
  return (
    <MockDataProvider>
      <div className="AppWrap">
        <div className="AppInner">
          <Header />
          <Body />
          <Footer />
        </div>
      </div>
    </MockDataProvider>
  );
}

export default App;

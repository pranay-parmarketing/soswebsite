import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./css/style.css";
import { AppContextProvider } from "./context/AppContext";
import Contents from "./pages/Contents.jsx";
import Footer from "./components/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import TermsAndCondition from "./pages/TermsAndCondition";
import Video from "./components/Video.jsx";
import RefreshButton from "./components/RefreshButton.jsx";

const App = () => {
  const location = useLocation();
  return (
    <AppContextProvider>
      {/* {location.pathname === "/" && <Video />} */}
      <Routes>
        <Route path="/" element={<Contents />} />
        <Route path="/termsandconditions" element={<TermsAndCondition />} />
      </Routes>
      <RefreshButton />
      <Footer />
    </AppContextProvider>
  );
};

export default App;

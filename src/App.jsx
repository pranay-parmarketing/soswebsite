import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./css/style.css";
import { AppContextProvider } from "./context/AppContext";
import Contents from "./pages/Contents.jsx";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import TermsAndCondition from "./pages/TermsAndCondition";
import Video from "./components/Video.jsx";

const App = () => {
  return (
    <AppContextProvider>
      {/* <Video /> */}
      <Routes>
        <Route path="/" element={<Contents />} />
        <Route path="/termsandconditions" element={<TermsAndCondition />} />
      </Routes>
      <Footer />
    </AppContextProvider>
  );
};

export default App;

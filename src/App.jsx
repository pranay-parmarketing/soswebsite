import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./css/style.css";
import { AppContextProvider } from "./context/AppContext";
// import Video from "./components/Video";
import Contents from "./components/Contents";
import Footer from "./components/Footer";

const App = () => {
  return (
    <AppContextProvider>
      {/* <Video /> */}
      <Contents />
      <Footer />
    </AppContextProvider>
  );
};

export default App;

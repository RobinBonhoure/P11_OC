// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './sass/App.scss';


import Home from "./pages/home";
import APropos from "./pages/aPropos";
import FicheLogement from "./pages/ficheLogement";
import Erreur404 from "./pages/erreur404";
import Footer from "./layouts/footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/aPropos" element={<APropos />} />
          <Route exact path="/ficheLogement/:id" element={<FicheLogement />} />
          <Route path="*" element={<Erreur404 />} />
        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;

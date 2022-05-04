import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Basketpage } from "./components/Basketpage";
import { Homepage } from "./components/Homepage";
import css from "./styles.module.css";

function App() {
  return (
    <div className={css.app}>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/basket" element={<Basketpage />} />
      </Routes>
    </div>
  );
}

export default App;

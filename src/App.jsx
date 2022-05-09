import { store } from "./redux";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Basketpage } from "./components/Basketpage";
import { Provider } from "react-redux";
import { Homepage } from "./components/Homepage";
import css from "./styles.module.css";

function App() {
  return (
    <Provider store={store}>
      <div className={css.app}>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/basket" element={<Basketpage />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;

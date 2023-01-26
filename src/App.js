import './App.css';
import Header from "./Components/Header";
import {BrowserRouter} from "react-router-dom";
import Footer from "./Components/Footer";
import AppRouter from "./Components/AppRouter";

function App() {
  return (
    <div className="App bg-zinc-900 text-amber-50">
        <BrowserRouter>
            <Header/>
            <AppRouter />
        </BrowserRouter>
        <Footer />
    </div>
  );
}

export default App;

import  Header  from './components/Header.jsx';
import { Route, Routes } from "react-router-dom"
import DivEx from "./pages/DivEx.jsx"
import Products from "./pages/Products.jsx"
import NumbersList from './pages/NumbersList.jsx';
import "./App.css"

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<DivEx />}></Route>
        <Route path="/numbers-list" element={<NumbersList />}></Route>
        <Route path="/products" element={<Products />}></Route>
      </Routes>
    </div>
  );
}

export default App;

import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Cadastro from './pages/cadastro';
import Detalhes from './pages/detalhes';
import Header from './components/Header';
import Footer from "./components/Footer"

function App() {
  return (
    <Router>    
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detalhes/:id' element={<Detalhes />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='*' element={<h1>Página não encontrada.</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

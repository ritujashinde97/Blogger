import './App.css';
import Topic1 from './components/BlogFolder/Topic1';
import Topic2 from './components/BlogFolder/Topic2';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Pages/Home';
import Page2 from './components/Pages/Page2';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';





const App=()=> {
  return (
    <div className="App">
      <Header/>
      <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Topic1" element={<Topic1/>} />
          
      </Routes>    
    </Router>
      <Footer/>
    </div>
  );
}

export default App;

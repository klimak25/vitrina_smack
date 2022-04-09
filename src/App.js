import  './App.css'
import{Header} from './components/Header'
import{ Footer} from './components/Footer'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import{About} from './pages/About'
import{Home} from './pages/Home'
import{Contact} from './pages/Contact'
import{NotFound} from './pages/NotFound'
import { Category } from './pages/Category';
import { Recepte } from './pages/Recepte';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
         <main className="content">
        <Routes>
          <Route exact path="/"  element={<Home/>} />
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          < Route path='category/:name' element={<Category/>}/>
          < Route path='/meal/:id' element={<Recepte/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        </main>
       <Footer/>
      </Router> 
    </div>
  );
}

export default App;

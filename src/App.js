import './App.css';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
       
        <Routes>
          <Route
            path="/login"
            element={
              <>               
                <Login />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>  
                <Header />             
                <Checkout />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

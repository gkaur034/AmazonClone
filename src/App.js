import { useEffect } from 'react';
import './App.css';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import {auth} from './firebase';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      console.log('User is >>>', authUser);

      if (authUser) {
        
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {

        dispatch({
          type: 'SET_USER',
          user: null
        })

      }
    } )
  }, [])

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

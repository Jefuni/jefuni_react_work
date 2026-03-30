import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignInComponent from './Components/SignInComponent';
import SignUpComponent from './Components/SignUpComponent';
import AddProductComponent from './Components/AddProductComponent';
import GetProduct from './Components/GetProduct';
import MakePayment from './Components/MakePayment';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import FooterComponent from './Components/FooterComponent';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';




function App() {
  return (

    <BrowserRouter>
      <div className="container-fluid header-container-override">
        <div className="App">
          <header className="header">
            <div className="header-content">

              
              <div className="text-section">
                <h1 className="brand">Topmark Technologies</h1>
                <p className="tagline">Your Your Trusted Tech Partner</p>
              </div>
            </div>
          </header>
          <Routes>
            <Route path='/signin' element={<SignInComponent />} />

            <Route path='/signup' element={<SignUpComponent />} />
            <Route path='/addproduct' element={<AddProductComponent />} />
            <Route path='/' element={<GetProduct />} />
            <Route path='/makepayment' element={<MakePayment />} />


          </Routes>
        </div>
      </div>
      <FooterComponent/>
    </BrowserRouter>
  );
}

export default App;

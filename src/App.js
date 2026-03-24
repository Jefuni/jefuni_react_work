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
function App() {
  return (

    <BrowserRouter>
      <div className="container-fluid">
        <div className="App">
          <header className="header">
            <div className="header-content">

              {/* Text Section */}
              <div className="text-section">
                <h1 className="brand">Topmark Laptops</h1>
                <p className="tagline">Your Tech Brand</p>
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
    </BrowserRouter>
  );
}

export default App;

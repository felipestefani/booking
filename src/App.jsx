import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./contexts/AuthContext";
import MainProvider from "./contexts/MainContext";
import MainTemplate from './templates/main-template';
import Login from "./Routes/Login";
import Home from "./Routes/Home";
import Register from "./Routes/Register";
import ProductDetails from "./Routes/ProductDetails";

const App = () => {
  return (
    <AuthProvider>
      <MainProvider>
        <BrowserRouter>
          <MainTemplate>
            <Routes>
              <Route path='/booking' element={<Home />} />
              <Route path='/booking/home' element={<Home />} />
              <Route path='/booking/login' element={<Login />} />
              <Route path='/booking/register' element={<Register />} />
              <Route path="/booking/product/" element={<ProductDetails />} />
              {/* <Route path="/booking/product/:id" element={<ProductDetails />} /> */}
            </Routes>
          </MainTemplate>
        </BrowserRouter>
      </MainProvider>
    </AuthProvider>
  )
}

export default App
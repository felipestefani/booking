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
              <Route path='/' element={<Home />} />
              <Route path='/home' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
          </MainTemplate>
        </BrowserRouter>
      </MainProvider>
    </AuthProvider>
  )
}

export default App
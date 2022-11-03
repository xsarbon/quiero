import NavBar from './components/Nav/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/itemDetailContainer'
import Cart from './components/Cart/Cart.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartContextProvider } from "./context/CartContext"
import Formulario from './components/Payment/Formulario';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes >
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/product/:id" element={<ItemDetailContainer />} />
            <Route path="/product/:category.id" element={<ItemDetailContainer />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='/Formulario' element={<Formulario />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </>
  )
}
export default App;

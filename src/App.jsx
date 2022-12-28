import NavBar from './components/Nav/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/itemDetailContainer'
import Cart from './components/Cart/Cart.jsx'
import { Routes, Route, HashRouter } from "react-router-dom"
import { CartContextProvider } from "./context/CartContext"
import Formulario from './components/Payment/Formulario';
import Footer from './components/Footer/Footer'
import Selector from './components/FiltroCategories/Selector'
import AllCollapseExample from './components/PreguntasFrecuentes/Preguntas'

function App() {
  return (
    <>
      <CartContextProvider>
        <HashRouter>
          <NavBar />
          <Selector/>
          <Routes >
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/product/:id" element={<ItemDetailContainer />} />
            <Route path="/product/:category.id" element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/formulario' element={<Formulario />} />
            <Route path='/preguntas-frecuentes' element={<AllCollapseExample/>}/>
          </Routes>
          <Footer />
        </HashRouter>
      </CartContextProvider>
    </>
  )
}
export default App;

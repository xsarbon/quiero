import NavBar from './components/Nav/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/itemDetailContainer'
import Cart from './components/Cart/Cart.jsx'
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom"
import { CartContextProvider } from "./context/CartContext"
import Formulario from './components/Payment/Formulario';
import Footer from './components/Footer/Footer'
import Admin from './components/Admin/Admin'
import SubirProd from './components/Admin/SubirProd/SubirProd'
import SubirCatalogo from './components/Admin/SubirCatalogo/SubirCatalogo'
import DownloadCatalogo from './components/Admin/SubirCatalogo/DownloadCatalogo'
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
            <Route path='/qtadmin-administrator-firebase/' element={<Admin />} />
            <Route path='/agregarprod' element={<SubirProd />} />
            <Route path='/subircatalogo' element={<SubirCatalogo />} />
            <Route path='/downloadcatalogo' element={<DownloadCatalogo />} />
            <Route path='/preguntas-frecuentes' element={<AllCollapseExample/>}/>
          </Routes>
          <Footer />
        </HashRouter>
      </CartContextProvider>
    </>
  )
}
export default App;

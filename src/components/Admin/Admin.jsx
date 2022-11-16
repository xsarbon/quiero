import MenuLateral from "./MenuLateral/MenuLateral"
import { Routes,BrowserRouter,Route } from "react-router-dom"
import SubirProd from './SubirProd/SubirProd'
import SubirCatalogo from './SubirCatalogo/SubirCatalogo'
import DownloadCatalogo from './SubirCatalogo/DownloadCatalogo'

const Admin = () => {

    return (
        <>
        <section className="aside">
            <MenuLateral/>
        </section>
        </>
    )

}
export default Admin
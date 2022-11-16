import { NavLink } from "react-router-dom";

function MostrarCat({catList}){
        
    return (
        <>
            {catList.map(cat=> <NavLink to={`/category${cat.data().category}`} /> )}
        </>
    )
        
    
}
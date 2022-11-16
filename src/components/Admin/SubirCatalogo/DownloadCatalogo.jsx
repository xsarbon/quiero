import {app} from '../../firebase/firebase'
import { getStorage, ref, getDownloadURL } from 'firebase/storage'

const DownloadCatalogo = () => {

    async function downloadCatalogo(){
        const storage = getStorage(app)
        const url = await getDownloadURL(ref(storage,'catalogo/catalogo'))
        try{
            console.log(url);
            return url
        }catch{
            console.log("mensaje de error");
        }        
    }

    

    return (
        <>
            <br /><br /><br /><br />
            <button onClick={downloadCatalogo}>click</button>
            <a href={`${downloadCatalogo}`}>enlace</a>
        </>
    )

    
}
export default DownloadCatalogo
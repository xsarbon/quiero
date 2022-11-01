import { TailSpin } from 'react-loader-spinner'

const Spinner = () => {
    return (<div className="spinner">
        <TailSpin
            height="80"
            width="80"
            color="#0061A2"
            ariaLabel="Cargando"
            radius="1"
            wrapperClass=""
            visible={true}
            className="spiner"
        />
    </div>)
}
export default Spinner
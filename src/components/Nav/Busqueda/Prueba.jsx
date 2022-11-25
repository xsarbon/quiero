const Options=(personajes)=>{
    personajes.forEach((e)=>{
        return (
            <option value={e.id} key={e.id} >{e.category}</option>
        )
    })
}
export default Options
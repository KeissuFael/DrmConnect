export default function Inputs({funcaoTitulo, estadoTitulo, funcaoDescricao, esatadoDescricao}){
    return(
        <>
        <div className="inputsFeedback">
            <div className="titulo">
            <input value={estadoTitulo} type="text" placeholder="Titulo" onChange={e => funcaoTitulo(e.target.value)}/> <br />
            </div>
            <div className="areaDoTextarea">
            <label>Deixe seu comentario(opicional)</label>
            <textarea value={esatadoDescricao} placeholder="O que podemos melhorar" style={{width:"390px", height: "200px"}} onChange={e => funcaoDescricao(e.target.value)}></textarea>
            </div>
        </div>
        </>
    )
}
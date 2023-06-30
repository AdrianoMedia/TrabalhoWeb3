function Pessoa(props) {
    return <div>
        <img className="floppa" src={props.foto} alt={props.nome}></img>
        <h2>Nome: {props.nome}</h2>
        <p>Idade: {props.idade}</p>
        <p>Profissão: {props.profissao}</p>
    </div>
}

export default Pessoa
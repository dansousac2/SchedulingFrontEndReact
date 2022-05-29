import React from "react";

export default props => {

    const rows = props.places.map( place => {
        return (
            <tr key={place.id}>
                <td>{place.id}</td>
                <td>{place.name}</td>
                <td>{place.reference}</td>
                <td>{place.maximumCapacityParticipants}</td>
                <td>{place.public ? "Sim" : "Não"}</td>
                <td>
                    <button type="button" title="Edit" className="btn btn-warning"
                        onClick={e => props.edit(place.id)}>
                            Atualizar
                    </button>
                    <button type="button" title="Exclude" className="btn btn-danger"
                        onClick={e => props.delete(place.id)}>
                            Excluir
                    </button>
                </td>
            </tr>
        )
    });

    return(
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Referência</th>
                    <th scope="col">Capacidade</th>
                    <th scope="col">Público?</th>
                    <th scope="col">Ações</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}
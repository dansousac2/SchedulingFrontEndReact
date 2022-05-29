import React from "react";

export default props => {

    const rows = props.sports.map( sport => {
        return (
            <tr key={sport.id}>
                <td>{sport.id}</td>
                <td>{sport.name}</td>
                <td>
                    <button class="btn-table" type="button" title="Edite" className="btn btn-warning"
                        onClick={e => props.edit(sport.id)}>
                            Atualizar
                    </button>
                    <button class="btn-table" type="button" title="Exclude" className="btn btn-danger"
                        onClick={e => props.delete(sport.id)}>
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
                    <th scope="col">Ações</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}
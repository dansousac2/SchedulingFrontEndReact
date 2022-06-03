import React from "react";

export default props => {

    const rows = props.schedulings.map( scheduling => {
        return (
            <tr key={scheduling.id}>
                <td>{scheduling.id}</td>
                <td>{scheduling.scheduledDate}</td>
                <td>{scheduling.scheduledStartTime}</td>
                <td>{scheduling.scheduledFinishTime}</td>
                <td>{scheduling.placeId}</td>
                <td>{scheduling.sportId}</td>
                <td>
                    <button type="button" title="Exclude" className="btn btn-danger"
                        onClick={e => props.delete(scheduling.id)}>
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
                    <th scope="col">Data</th>
                    <th scope="col">Início</th>
                    <th scope="col">Fim</th>
                    <th scope="col">Local</th>
                    <th scope="col">Esporte</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}
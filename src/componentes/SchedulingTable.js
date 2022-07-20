import React from "react";
import GetName from "./GetPlaceOrSportName";

export default props => {

    const rows = props.schedulings.map( scheduling => {

        return (
            <tr key={scheduling.id}>
                <td>{scheduling.id}</td>
                <td>{scheduling.scheduledDate}</td>
                <td>{scheduling.scheduledStartTime}</td>
                <td>{scheduling.scheduledFinishTime}</td>
                <GetName id={scheduling.placeId} label="place"/>
                <GetName id={scheduling.sportId} label="sport"/>
                <td> 
                    <button type="button" title="Demonstrar Interesse" className="btn btn-success"
                        onClick={e => props.addParticipant(scheduling.id)}>
                            Sim
                    </button>
                
                    <button type="button" title="Retirar Interesse" className="btn btn-danger"
                        onClick={e => props.removeParticipant(scheduling.id)}>
                            Não
                   </button>
                </td>
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
                    <th scope="col">Demonstrar Interesse?</th>
                    <th scope="col">Ações</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}


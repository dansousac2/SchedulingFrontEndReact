import React from "react";

export default props => {

    const rows = props.events.map( event => {
        return (
            <tr key={event.id}>
                <td>{event.id}</td>
                <td>{event.eventName}</td>
                <td>{event.date}</td>
                <td>{event.adress}</td>
                <td>{event.budget}</td>
                <td>
                    <button type="button" title="Edite" className="btn btn-warning"
                        onClick={e => props.edit(event.id)}>
                    </button>
                    <button type="button" title="Exclude" className="btn btn-danger"
                        onClick={e => props.delete(event.id)}>
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
                    <th scope="col">Name</th>
                    <th scope="col">Date</th>
                    <th scope="col">Address</th>
                    <th scope="col">Budget</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}
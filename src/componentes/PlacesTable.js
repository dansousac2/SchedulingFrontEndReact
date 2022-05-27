import React from "react";

export default props => {

    const rows = props.places.map( place => {
        return (
            <tr key={place.id}>
                <td>{place.id}</td>
                <td>{place.name}</td>
                <td>{place.reference}</td>
                <td>{place.maximumCapacityParticipants}</td>
                <td>{place.public ? "yes" : "no"}</td>
                <td>
                    <button type="button" title="Edite" className="btn btn-warning"
                        onClick={e => props.edit(place.id)}>
                    </button>
                    <button type="button" title="Exclude" className="btn btn-danger"
                        onClick={e => props.delete(place.id)}>
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
                    <th scope="col">Reference</th>
                    <th scope="col">Capacity</th>
                    <th scope="col">Public?</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}
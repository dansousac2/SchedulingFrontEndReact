import React from "react";
import axios from "axios";

const DDSports = () => {

    const [sports, setSports] = React.useState([]); //array vazio aqui no final para prevenir erro de undefined tentando ser mapeado.

    function findPlaces() {
        axios.get( "http://localhost:8080/api/sport"
        ).then( Response => {
            const places = Response.data;
            setSports(places);
            console.log({"places":places});
        }).catch(error => {
            console.log(error.Response)
        });
    }

    React.useEffect(() => { //componentDidMount das funções.
        findPlaces();
    },[]);

    return (
        <select  id="lab04">
            <option className="form-control" value="">Local</option>
            {sports.map( place => {
                const {id, name} = place; //destructure ou algo similar
                return (<option key={id} className="form-control" value={id}>{name}</option>)
            })}
        </select>
    )
}

export default DDSports;
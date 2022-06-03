import React from "react";
import axios from "axios";

const DDPlaces = () => {

    const [places, setPlaces] = React.useState([]); //array vazio aqui no final para prevenir erro de undefined tentando ser mapeado.

    function findPlaces() {
        axios.get( "http://localhost:8080/api/place"
        ).then( Response => {
            const places = Response.data;
            setPlaces(places);
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
            {places.map( place => {
                const {id, name} = place; //destructure ou algo similar da minha entity do BD - recuperando o que desejo.
                return (<option key={id} className="form-control" value={id}>{name}</option>)
            })}
        </select>
    )
}

export default DDPlaces;
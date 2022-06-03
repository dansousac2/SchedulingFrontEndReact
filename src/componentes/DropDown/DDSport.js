import React from "react";
import axios from "axios";

const DDSports = (props) => {

    const [sports, setSports] = React.useState([]); //array vazio aqui no final para prevenir erro de undefined tentando ser mapeado.

    function findPlaces() {
        axios.get( "http://localhost:8080/api/sport"
        ).then( Response => {
            const places = Response.data;
            setSports(places);
            console.log("sports", places);
        }).catch(error => {
            console.log(error.Response)
        });
    }

    React.useEffect(() => { //componentDidMount das funções.
        findPlaces();
    },[]);

    return (
        <select  id={props.id} onChange={props.onChange}>
            <option className="form-control" value="">Esporte</option>
            {sports.map( sport => {
                const {id, name} = sport; //destructure ou algo similar
                return (<option key={id} className="form-control" value={id}>{name}</option>)
            })}
        </select>
    )
}

export default DDSports;
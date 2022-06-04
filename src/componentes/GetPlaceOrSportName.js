import React from "react";
import axios from "axios";

const GetPlaceOrSportName = (props) => {

    const [name, setName] = React.useState([]);

    React.useEffect(() => { //componentDidMount das funções.
        findName();
    },[]);

    async function findName() {
        let namefind= "";
        if(props.label == "place") {
            try {
                const Response = await axios.get(`http://localhost:8080/api/place/${props.id}`
                );
                const placeInDb = Response.data;
                console.log("place: ", placeInDb);
                namefind = placeInDb.name;
            } catch (error) {
                console.log(error.Response);
            }
        } else if(props.label == "sport") {
            try {
                const Response = await axios.get(`http://localhost:8080/api/sport/${props.id}`
                );
                const sportInDb = Response.data;
                console.log("sport: ", sportInDb);
                namefind = sportInDb.name;
            } catch (error) {
                console.log(error.Response);
            }
        } else {
            alert("informe \"label=place/sport\" em getName");
        };
        //console.log('dentro do método: ', namefind);
        setName(namefind);
    };

    return(
        <td>{name}</td>
    );
}

export default GetPlaceOrSportName;
import React from "react";
import "./ViewPlaces.css";
import { withRouter } from 'react-router-dom';
import axios from "axios";
import PlacesTable from "../../../componentes/PlacesTable";

class ViewPlaces extends React.Component {
    state = {
        places:[]
    }
    
    componentDidMount() {
        const params = this.props.match.params;
        const id = params.id;
        this.findById(id);
    }

    find = () => {
        axios.get('http://localhost:8080/api/place',
        ).then( Response => {
            const places = Response.data;
            this.setState({places});
            console.log(places);
        }).catch( error => {
            console.log(error.Response)
        });
    }

    delete = (placeId) => {
        axios.delete(`http://localhost:8080/api/place/${placeId}`
        ).then( Response => {
            this.find();
        }).catch( error => {
            alert("Ocorreu um erro ao excluir o local, tente novamente!");
            console.log(error.Response);
        });
    }

    edit = (placeId) => {
        this.props.history.push(`/updatePlace/${placeId}`);
    }

    create = () => {
        this.props.history.push("/createPlace");
    }

    render(){
        return(
            <div>
                <header className="App-header">
                    <fieldset>
                        <h1 className="title">Locais</h1>
                        <br/>
                        <button type="button" className="btn btn-primary" onClick={this.find} >Buscar locais</button>
                        <br/>
                        <br/>
                        <PlacesTable places={this.state.places} delete={this.delete} edit={this.edit} />
                    </fieldset>
                    <br/>
                    <button onClick={this.create} type="button" className="btn btn-primary">Cadastrar novo local</button>
                </header>
            </div>
        )
    }
}

export default withRouter(ViewPlaces);

import React from "react";
import "./ViewPlaces.css";
import { withRouter } from 'react-router-dom';
import PlacesTable from "../../../componentes/PlacesTable";
import PlaceApiService from "../../../services/PlaceApiService";

import { showErrorMessage } from '../../../componentes/Toastr';


class ViewPlaces extends React.Component {
    state = {
        places:[]
    }
    
    constructor() {
        super();
        this.service = new PlaceApiService();
    }
    
    componentDidMount() {
        this.find();
    }

    find = () => {
        this.service.find('') // pega todos
        .then( Response => {
            const places = Response.data;
            this.setState({places});
            console.log(places);
        }).catch( error => {
            console.log(error.response)
        });
    }

    delete = (placeId) => {
        this.service.delete(placeId)
        .then( Response => {
            this.find();
        }).catch( error => {
            showErrorMessage(error.response.data);
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

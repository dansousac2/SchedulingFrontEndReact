import React from "react";
import "./ViewPlaces.css";
import { withRouter } from 'react-router-dom';
import axios from "axios";
import PlacesTable from "../../../componentes/PlacesTable";

class ViewPlaces extends React.Component {
    state = {
        places:[]
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
        axios.delete(`http://localhost:8080/api/event/delete/${placeId}`
        ).then( Response => {
            this.find();
        }).catch( error => {
            console.log(error.Response)
        });
    }

    edit = (placeId) => {
        this.props.history.push(`/updatePlace/${placeId}`);
    }

    render(){
        return(
            <div>
                <header className="App-header">
                    <fieldset>
                        <br/>
                        <button type="button" className="btn btn-primary btn-lg" onClick={this.find} >Find All Places</button>
                        <br/>
                        <br/>
                        <PlacesTable places={this.state.places} delete={this.delete} edit={this.edit} />
                    </fieldset>
                </header>
            </div>
        )
    }
}

export default withRouter(ViewPlaces);
import React from "react";
import './CreatePlace.css'
import 'bootswatch/dist/minty/bootstrap.css';
import FormGroup from "../../../componentes/FormGroup";
import axios from "axios";

export default class CreatePlace extends React.Component {
    state = {
        placeName:"",
        placeReference:"",
        capacityMax:"",
        isPublic: false
    }

    post = () => {
        axios.post( 'http://localhost:8080/api/place',
            {
                name: this.state.placeName,
                reference: this.state.placeReference,
                maximumCapacityParticipants: this.state.capacityMax,
                public: this.state.isPublic
            }
        ).then( Response => {
            alert("Local criado com sucesso!");
            console.log(Response);
            this.props.history.push("/listPlaces");
        }).catch( error => {
            alert("Ocorreu um problema ao salvar o local, tente novamente!");
            console.log(error.Response);
        });
    }

    handleChange = () => {
        this.setState({
            isPublic: !this.state.isPublic
          });
    }

    cancel = () => {
        this.props.history.push("/listPlaces");
    }

    render() {
        return (
            <div>
                <header className="App-header">
                    <fieldset>
                        <h1 className="title">Criar local</h1>
                        <FormGroup label='Nome' htmlFor='lab01'>
                            <input className="form-control" type="text" id="lab01"
                            onChange={(e) => {this.setState({placeName: e.target.value})}}/>
                        </FormGroup>
                        <FormGroup label='Referência' htmlFor='lab02'>
                            <input className="form-control" type="text" id="lab02"
                            onChange={(e) => {this.setState({placeReference: e.target.value})}}/>
                        </FormGroup>
                        <FormGroup label='Capacidade total de pessoas' htmlFor='lab03'>
                            <input className="form-control-small" type="number" id="lab03"
                            onChange={(e) => {this.setState({capacityMax: e.target.value})}}/>
                        </FormGroup>
                        <FormGroup label='É público?' htmlFor='lab04'>
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" defaultChecked={this.state.isPublic} onChange={this.handleChange}/>
                        </FormGroup>
                        <br/>
                        <br/>
                        <button onClick={this.post} type="button" className="btn btn-primary">Salvar</button>
                        <button onClick={this.cancel} type="button" className="btn btn-danger">Cancelar</button>
                    </fieldset>
                </header>
            </div>
        )
    }
}
import React from "react";
import './CreateSport.css'
import 'bootswatch/dist/minty/bootstrap.css';
import FormGroup from "../../../componentes/FormGroup";
import axios from "axios";
import SportApiService from "../../../services/SportApiService";

export default class CreateSport extends React.Component {
    state = {
        sportName:""
    }

    constructor() {
        super();
        this.service = new SportApiService();
    }
    
    post = () => {
        this.service.create(
            {
                name: this.state.sportName
            }
        ).then( Response => {
            alert("Esporte criado com sucesso!");
            console.log(Response);
            this.props.history.push("/listSports");
        }).catch( error => {
            alert("Ocorreu um erro ao salvar o esporte, tente novamente!");
            console.log(error.Response);
        });
    }

    cancel = () => {
        this.props.history.push("/listSports");
    }

    render() {
        return (
            <div>
                <header className="App-header">
                    <fieldset>
                    <h1 className="title">Criar esporte</h1>
                        <FormGroup label='Nome' htmlFor='lab01'>
                            <input className="form-control" type="text" id="lab01"
                            onChange={(e) => {this.setState({sportName: e.target.value})}}/>
                        </FormGroup>
                        <br/>
                        <br/>
                        <button type="button" className="btn btn-primary" onClick={this.post} >Salvar</button>
                        <button onClick={this.cancel} type="button" className="btn btn-danger">Cancelar</button>
                    </fieldset>
                </header>
            </div>
        )
    }
}
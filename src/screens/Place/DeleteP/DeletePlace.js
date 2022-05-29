import React from "react";
import './DeletePlace.css'
import 'bootswatch/dist/minty/bootstrap.css';
import FormGroup from "../../../componentes/FormGroup";
import axios from "axios";

export default class DeletePlace extends React.Component {

    state = {
        id: 0
    }

    delete = () => {
        axios.delete(`http://localhost:8080/api/place/${this.state.id}`
        ).then( response => {
            alert("Local excluído com sucesso!");
            console.log(Response);
            this.props.history.push("/listPlaces");
        }).catch( error => {
            alert("Ocorreu um erro ao excluir o local, tente novamente!");
            console.log(error.response)
        });
    }

    cancel = () => {
        this.props.history.push("/listPlaces");
    }

    render() {
        return(
            <div>
                <header className="App-header">
                    <fieldset>
                        <h1 class="title">Excluir local</h1>
                        <FormGroup label='ID' htmlFor='lab00'>
                            <input className="form-control-small" type="number" id="lab00"
                            onChange={(e) => {this.setState({id: e.target.value})}}/>
                        </FormGroup>
                        <br/>
                        <br/>
                        <button onClick={this.delete} type="button" className="btn btn-danger">Excluir</button>
                        <button onClick={this.cancel} type="button" className="btn btn-light">Cancelar</button>
                    </fieldset>
                </header>
            </div>
        )
    }
}
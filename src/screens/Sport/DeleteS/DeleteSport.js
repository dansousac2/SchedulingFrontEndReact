import React from "react";
import './DeleteSport.css'
import 'bootswatch/dist/minty/bootstrap.css';
import FormGroup from "../../../componentes/FormGroup";
import axios from "axios";

export default class DeleteSport extends React.Component {

    state = {
        id: 0
    }

    delResquest = () => {
        axios.delete(`http://localhost:8080/api/sport/${this.state.id}`
        ).then( Response => {
            alert("Esporte excluído com sucesso!");
            console.log(Response);
            this.props.history.push("/listSports");
        }).catch( error => {
            alert("Ocorreu um erro ao excluir o esporte, tente novamente!");
            console.log(error.Response);
        });
    }

    cancel = () => {
        this.props.history.push("/listSports");
    }

    render() {
        return(
            <div>
                <header className="App-header">
                    <fieldset>
                        <h1 className="title">Excluir esporte</h1>
                        <FormGroup label='ID' htmlFor='lab00'>
                            <input className="form-control-small" type="number" id="lab00"
                            onChange={(e) => {this.setState({id: e.target.value})}}/>
                        </FormGroup>
                        <br/>
                        <br/>
                        <button type="button" className="btn btn-danger" onClick={this.delResquest} >Excluir</button>
                        <button onClick={this.cancel} type="button" className="btn btn-light">Cancelar</button>
                    </fieldset>
                </header>
            </div>
        )
    }
}
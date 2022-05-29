import React from "react";
import './UpdateSport.css'
import 'bootswatch/dist/minty/bootstrap.css';
import FormGroup from "../../../componentes/FormGroup";
import axios from "axios";

export default class UpdateSport extends React.Component {
    state = {
        id:0,
        sportName:""
    }
    
    put = () => {
        axios.put(`http://localhost:8080/api/sport/${this.state.id}`,
            {
                name: this.state.sportName
            }
        ).then( Response => {
            alert("Esporte atualizado com sucesso!");
            console.log(Response);
            this.props.history.push("/listSports");
        }).catch(error => {
            alert("Ocorreu um erro ao atualizar o esporte, tente novamente!");
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
                        <h1 class="title">Atualizar esporte</h1>
                        <FormGroup label='ID' htmlFor='lab00'>
                            <input className="form-control-small" type="number" id="lab00"
                            onChange={(e) => {this.setState({id: e.target.value})}}/>
                        </FormGroup>
                        <FormGroup label='Nome' htmlFor='lab01'>
                            <input className="form-control" type="text" id="lab01"
                            onChange={(e) => {this.setState({sportName: e.target.value})}}/>
                        </FormGroup>
                        <br/>
                        <br/>
                        <button type="button" className="btn btn-primary" onClick={this.put}>Atualizar</button>
                        <button onClick={this.cancel} type="button" className="btn btn-danger">Cancelar</button>
                    </fieldset>
                    <br/>
                </header>  
            </div>
        )
    }
}
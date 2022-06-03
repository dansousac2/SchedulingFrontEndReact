import React from "react";
import './CreateSc.css'
import 'bootswatch/dist/minty/bootstrap.css';
import FormGroup from "../../../componentes/FormGroup";
import axios from "axios";
import DDPlaces from "../../../componentes/DropDown/DDPlaces";
import DDSports from "../../../componentes/DropDown/DDSport";

export default class CreateSc extends React.Component {
    
    state = {
        date:"",
        startTime:"",
        finishTime:"",
        selectedOptionPlace:"",
        selectedOptionSport:"",
    }

    post = () => {
        axios.post( 'http://localhost:8080/api/scheduling',
            {
                scheduledDate: this.state.date,
                scheduledStartTime: this.state.startTime,
                scheduledFinishTime: this.state.finishTime,
                placeId: this.state.selectedOptionPlace,
                sportId: this.state.selectedOptionSport,
            }
        ).then( Response => {
            alert("Local criado com sucesso!");
            console.log(Response);
        }).catch( error => {
            alert("Ocorreu um problema ao salvar o local, tente novamente!");
            console.log(error.Response);
        });
    }

    cancel = () => {
        this.props.history.push("/");
    }


    handleInputChangePlace = (e) => {
        this.setState({selectedOptionPlace: e.target.value}, () => {
            console.log("Id do Local selecionado: ", this.state.selectedOptionPlace);
        });
    }

    handleInputChangeSport = (e) => {
        this.setState({selectedOptionSport: e.target.value}, () => {
            console.log("Id do Esporte selecionado: ", this.state.selectedOptionSport);
        });
    }

    render() {
        return (
            <div>
                <header className="App-header">
                    <fieldset>
                        <h1 className="title">Agendar</h1>
                        <FormGroup label='Data' htmlFor='lab01' className="FieldSetSc">
                            <input className="form-control noMargin" type="date" id="lab01"
                            onChange={(e) => {this.setState({date: e.target.value})}}/>
                        </FormGroup>
                        <FormGroup label='Hora de Início da prática' htmlFor='lab02' className="FieldSetSc">
                            <input className="form-control noMargin" type="time" id="lab02"
                            onChange={(e) => {this.setState({startTime: e.target.value})}}/>
                        </FormGroup>
                        <FormGroup label='Hora de término da prática' htmlFor='lab03' className="FieldSetSc">
                            <input className="form-control noMargin" type="time" id="lab03"
                            onChange={(e) => {this.setState({finishTime: e.target.value})}}/>
                        </FormGroup>
                        <br />
                        <FormGroup label='Selecione o local' htmlFor='lab04' className="FieldSetSc">
                            <DDPlaces id="lab04" onChange={this.handleInputChangePlace} />
                        </FormGroup>
                        <FormGroup label='Selecione o esporte' htmlFor='lab05' className="FieldSetSc">
                            <DDSports id="lab05" onChange={this.handleInputChangeSport} />
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
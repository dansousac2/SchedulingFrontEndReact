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
        placeId:"",
        sportId:"",

        //listPlaces:[],
        listSports:[],

        selectedOption: null,

    }

/*    findPlaces() {
        axios.get( "http://localhost:8080/api/place"
        ).then( Response => {
            const places = Response.data;
            this.setState({listPlaces: places});
            console.log({"places":places});
        }).catch(error => {
            console.log(error.Response)
        });
    }*/

    findSports() {
        axios.get( "http://localhost:8080/api/sport"
        ).then( Response => {
            const sports = Response.data;
            this.setState({listSports: sports});
            console.log({"sports":sports});
        }).catch(error => {
            console.log(error.Response)
        });
    }

    /*componentDidMount() {
        this.findPlaces();
        this.findSports();
    }*/

    post = () => {
        axios.post( 'http://localhost:',
            {
                scheduledDate: this.state.date,
                scheduledStartTime: this.state.startTime,
                scheduledFinishTime: this.state.finishTime,
                placeId: this.state.placeId,
                sportId: this.state.sportId
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

    cancel = () => {
        this.props.history.push("/");
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
                            <DDPlaces/>
                        </FormGroup>
                        <FormGroup label='Selecione o esporte' htmlFor='lab05' className="FieldSetSc">
                            <DDSports></DDSports>
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
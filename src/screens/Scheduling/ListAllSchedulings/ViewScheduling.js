import React from "react";
import "./ViewScheduling.css";
import 'bootswatch/dist/minty/bootstrap.css';
import { withRouter } from 'react-router-dom';
import SchedulingTable from "../../../componentes/SchedulingTable";
import SchedulingApiService from "../../../services/SchdulingApiService";
import FormGroup from "../../../componentes/FormGroup";
import DDPlaces from "../../../componentes/DropDown/DDPlaces";
import DDSports from "../../../componentes/DropDown/DDSport";

import { showErrorMessage } from '../../../componentes/Toastr';

class ViewScheduling extends React.Component {
    state = {
        scheduling:[],

        selectedPlace:"",
        selectedSport:"",
        date:"",
        id:""
    }

    constructor() {
        super();
        this.service = new SchedulingApiService();
    }

    find = () => {
        this.service.find('')
        .then( Response => {
            const scheduling = Response.data;
            this.setState({scheduling: scheduling});
            console.log(scheduling);
        }).catch( error => {
            console.log(error.Response)
        });
    }

    delete = (schedulingId) => {
        this.service.delete(schedulingId)
        .then( Response => {
            this.find();
        }).catch( error => {
            showErrorMessage(error.response.data);
            console.log(error.Response)
        });
    }

    create = () => {
        this.props.history.push("/createScheduling");
    }

    componentDidMount() {
        this.find();
    }

    handleInputChangePlace = (e) => {
        this.setState({selectedPlace: e.target.value}, () => {
            console.log('place selected', this.state.selectedPlace);
        })
    }

    handleInputChangeSport = (e) => {
        this.setState({selectedSport: e.target.value}, () => {
            console.log('sport selected', this.state.selectedSport);
        })
    }

    filterSearch = () => {
        let aplyFilters = "?";

        const filters = [["id=", this.state.id], ["date=", this.state.date], ["placeId=", this.state.selectedPlace], ["sportId=", this.state.selectedSport]];
        for(let fil of filters) {
            if(fil[1] != "") {
                aplyFilters += `${fil[0]}${fil[1]}&`;
            }
        }

        this.service.findWithFilter(aplyFilters)
        .then( Response => {
            const scheduling = Response.data;
            this.setState({scheduling: scheduling});
        }).catch( error => {
            console.log(error.Response)
        });
    }

    render(){
        return(
            <div>
                <header className="App-header">
                    <fieldset>
                        <h1 className="title">Agendamentos</h1>
                        <div className="card mb-3 cardScheduling">
                            <h3 className="card-header">Filtrar
                                <div className="card-body">
                                    <h5 className="card-title">Selecione filtros a serem aplicados</h5>
                                    <FormGroup label='Selecionar' htmlFor='lab04' className="filterOptions">
                                        <DDPlaces id="lab04" onChange={this.handleInputChangePlace} />
                                    </FormGroup>
                                    <FormGroup label='Selecionar' htmlFor='lab05' className="filterOptions">
                                        <DDSports id="lab05" onChange={this.handleInputChangeSport} />
                                    </FormGroup>
                                    <FormGroup label='Data' htmlFor='lab01' className="filterOptions">
                                        <input className="form-sched" type="date" id="lab01"
                                        onChange={(e) => {this.setState({date: e.target.value})}}/>
                                    </FormGroup>
                                    <FormGroup label='ID' htmlFor='lab03' className="filterOptions">
                                        <input className="form-sched inputId" type="number" id="lab03"
                                        onChange={(e) => {this.setState({id: e.target.value})}}/>
                                    </FormGroup>
                                    <br/>
                                    <br/>
                                    <button onClick={this.filterSearch} type="button" className="btn btn-primary buttonFilter">Aplicar Filtro</button>
                                    <button onClick={this.find} type="button" className="btn btn-primary buttonFilter btn btn-danger">Mostrar Todos</button>
                                </div>
                            </h3>
                        </div>
                        <br/>
                        <br/>
                        <SchedulingTable schedulings={this.state.scheduling} delete={this.delete}/>
                    </fieldset>
                    <br/>
                    <button onClick={this.create} type="button" className="btn btn-primary">Cadastrar novo agendamento</button>
                </header>
            </div>
        )
    }
}

export default withRouter(ViewScheduling);
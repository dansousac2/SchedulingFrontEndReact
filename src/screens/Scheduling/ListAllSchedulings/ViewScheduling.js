import React from "react";
import "./ViewScheduling.css";
import 'bootswatch/dist/minty/bootstrap.css';
import { withRouter } from 'react-router-dom';
import SchedulingTable from "../../../componentes/SchedulingTable";
import SchedulingApiService from "../../../services/SchdulingApiService";

class ViewScheduling extends React.Component {
    state = {
        scheduling:[]
    }

    constructor() {
        super();
        this.service = new SchedulingApiService();
    }

    find = () => {
        this.service.find('')
        .then( Response => {
            const scheduling = Response.data;
            this.setState({scheduling});
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
            alert("Ocorreu um erro ao excluir o agendamento, tente novamente!");
            console.log(error.Response)
        });
    }

    create = () => {
        this.props.history.push("/createScheduling");
    }

    componentDidMount() {
        this.find();
    }

    render(){
        return(
            <div>
                <header className="App-header">
                    <fieldset>
                    <h1 className="title">Agendamentos</h1>
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
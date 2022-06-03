import React from "react";
import "./ViewScheduling.css";
import 'bootswatch/dist/minty/bootstrap.css';
import { withRouter } from 'react-router-dom';
import axios from "axios";
import SchedulingTable from "../../../componentes/SchedulingTable";

class ViewScheduling extends React.Component {
    state = {
        scheduling:[]
    }

    find = () => {
        axios.get('http://localhost:8080/api/scheduling',
        ).then( Response => {
            const scheduling = Response.data;
            this.setState({scheduling});
            console.log(scheduling);
        }).catch( error => {
            console.log(error.Response)
        });
    }

    delete = (schedulingId) => {
        axios.delete(`http://localhost:8080/api/scheduling/${schedulingId}`
        ).then( Response => {
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
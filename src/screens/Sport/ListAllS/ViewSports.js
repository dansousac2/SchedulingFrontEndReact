import React from "react";
import "./ViewSports.css";
import 'bootswatch/dist/minty/bootstrap.css';
import { withRouter } from 'react-router-dom';
import axios from "axios";
import SportsTable from "../../../componentes/SportsTable";

class ViewSports extends React.Component {
    state = {
        sports:[]
    }
    
    componentDidMount() {
        const params = this.props.match.params;
        const id = params.id;
        this.findById(id);
    }

    find = () => {
        axios.get('http://localhost:8080/api/sport',
        ).then( Response => {
            const sports = Response.data;
            this.setState({sports});
            console.log(sports);
        }).catch( error => {
            console.log(error.Response)
        });
    }

    delete = (sportId) => {
        axios.delete(`http://localhost:8080/api/sport/${sportId}`
        ).then( Response => {
            this.find();
        }).catch( error => {
            alert("Ocorreu um erro ao excluir o esporte, tente novamente!");
            console.log(error.Response)
        });
    }

    edit = (sportId) => {
        this.props.history.push(`/updateSport/${sportId}`);
    }

    create = () => {
        this.props.history.push("/createSport");
    }

    render(){
        return(
            <div>
                <header className="App-header">
                    <fieldset>
                    <h1 className="title">Esportes</h1>
                        <br/>
                        <button type="button" className="btn btn-primary" onClick={this.find} >Buscar esportes</button>
                        <br/>
                        <br/>
                        <SportsTable sports={this.state.sports} delete={this.delete} edit={this.edit} />
                    </fieldset>
                    <br/>
                    <button onClick={this.create} type="button" className="btn btn-primary">Cadastrar novo esporte</button>
                </header>
            </div>
        )
    }
}

export default withRouter(ViewSports);

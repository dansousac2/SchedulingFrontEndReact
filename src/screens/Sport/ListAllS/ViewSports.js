import React from "react";
import "./ViewSports.css";
import 'bootswatch/dist/vapor/bootstrap.css';
import { withRouter } from 'react-router-dom';
import axios from "axios";
import SportsTable from "../../../componentes/SportsTable";

class ViewSports extends React.Component {
    state = {
        sports:[]
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
            console.log(error.Response)
        });
    }

    edit = (sportId) => {
        this.props.history.push(`/updateSport/${sportId}`);
    }

    render(){
        return(
            <div>
                <header className="App-header">
                    <fieldset>
                        <br/>
                        <button type="button" className="btn btn-primary btn-lg" onClick={this.find} >Find All Sports</button>
                        <br/>
                        <br/>
                        <SportsTable sports={this.state.sports} delete={this.delete} edit={this.edit} />
                    </fieldset>
                </header>
            </div>
        )
    }
}

export default withRouter(ViewSports);
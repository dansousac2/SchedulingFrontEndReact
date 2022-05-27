import React from "react";
import "./ViewSports.css";
import 'bootswatch/dist/vapor/bootstrap.css';
import { withRouter } from 'react-router-dom';
import axios from "axios";
import EventsTable from "../../../componentes/EventsTable";

class ViewSports extends React.Component {
    state = {
        events:[]
    }

    find = () => {
        axios.get('http://localhost:8080/api/event/listAll',
        ).then( Response => {
            const events = Response.data;
            this.setState({events});
            console.log(events);
        }).catch( error => {
            console.log(error.Response)
        });
    }

    delete = (eventId) => {
        axios.delete(`http://localhost:8080/api/event/delete/${eventId}`
        ).then( Response => {
            this.find();
        }).catch( error => {
            console.log(error.Response)
        });
    }

    edit = (eventId) => {
        this.props.history.push(`/updateEvent/${eventId}`);
    }

    render(){
        return(
            <div>
                <header className="App-header">
                    <fieldset>
                        <br/>
                        <button type="button" className="btn btn-primary btn-lg" onClick={this.find} >Find All Created Events</button>
                        <br/>
                        <br/>
                        <EventsTable events={this.state.events} delete={this.delete} edit={this.edit} />
                    </fieldset>
                </header>
            </div>
        )
    }
}

export default withRouter(ViewSports);
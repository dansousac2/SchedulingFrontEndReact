import React from "react";
import './DeleteSport.css'
import 'bootswatch/dist/vapor/bootstrap.css';
import FormGroup from "../../../componentes/FormGroup";
import axios from "axios";

export default class DeleteSport extends React.Component {

    state = {
        id:0
    }

    delResquest = () => {
        axios.delete(`http://localhost:8080/api/event/delete/${this.state.id}`
        ).then( Response => {
            console.log(Response)
        }).catch( error => {
            console.log(error.Response)
        });
    }

    render() {
        return(
            <div>
                <header className="App-header">
                    <fieldset>
                        <legend><h2>Delete Event</h2></legend>
                        <FormGroup label='Event ID' htmlFor='lab00'>
                            <input className="form-control form-control-lg" type="text" placeholder="ID" id="lab00"
                            onChange={(e) => {this.setState({id: e.target.value})}}/>
                        </FormGroup>
                        <br/>
                        <button type="button" className="btn btn-primary btn-lg" onClick={this.delResquest} >Delete</button>
                    </fieldset>
                </header>
            </div>
        )
    }
}
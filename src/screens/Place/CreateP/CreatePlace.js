import React from "react";
import './CreatePlace.css'
import 'bootswatch/dist/vapor/bootstrap.css';
import FormGroup from "../../../componentes/FormGroup";
import axios from "axios";

export default class CreatePlace extends React.Component {
    state = {
        eventName:"",
        date:"",
        address:"",
        budget:""
    }
    
    post = () => {
        axios.post( 'http://localhost:8080/api/event/save',
            {
                eventName: this.state.eventName,
                date: this.state.date,
                adress: this.state.address,
                budget: this.state.budget
            }
        ).then( Response => {
            console.log(Response)
        }).catch( error => {
            console.log(error.Response)
        });
    }

    render() {
        return (
            <div>
                <header className="App-header">
                    <fieldset>
                        <legend><h2>Create Event</h2></legend>
                        <FormGroup label='Event Name' htmlFor='lab01'>
                            <input className="form-control form-control-lg" type="text" placeholder="name" id="lab01"
                            onChange={(e) => {this.setState({eventName: e.target.value})}}/>
                        </FormGroup>
                        <FormGroup label='Event Date' htmlFor='lab02'>
                            <input className="form-control form-control-lg" type="text" placeholder="date" id="lab02"
                            onChange={(e) => {this.setState({date: e.target.value})}}/>
                        </FormGroup>
                        <FormGroup label='Event Address' htmlFor='lab03'>
                            <input className="form-control form-control-lg" type="text" placeholder="address" id="lab03"
                            onChange={(e) => {this.setState({address: e.target.value})}}/>
                        </FormGroup>
                        <FormGroup label='Event Budget' htmlFor='lab04'>
                            <input className="form-control form-control-lg" type="text" placeholder="address" id="lab04"
                            onChange={(e) => {this.setState({budget: e.target.value})}}/>
                        </FormGroup>
                        <br/>
                        <button type="button" className="btn btn-primary btn-lg" onClick={this.post} >Create</button>
                    </fieldset>
                </header>
            </div>
        )
    }
}
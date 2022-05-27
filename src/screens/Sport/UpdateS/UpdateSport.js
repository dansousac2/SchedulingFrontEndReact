import React from "react";
import './UpdateSport.css'
import 'bootswatch/dist/vapor/bootstrap.css';
import FormGroup from "../../../componentes/FormGroup";
import axios from "axios";

export default class UpdateSport extends React.Component {
    state = {
        id:0,
        eventName:"",
        date:"",
        address:"",
        budget:"",

        eventName2:"",
        date2:"",
        address2:"",
        budget2:""
    }
    
    put = () => {
        axios.put(`http://localhost:8080/api/event/update/${this.state.id}`,
            {
                eventName: this.state.eventName,
                date: this.state.date,
                adress: this.state.address,
                budget: this.state.budget
            }
        ).then( Response => {
            console.log(Response)
            this.setState({ eventName2: this.state.eventName, date2: this.state.date, address2: this.state.address, budget2: this.state.budget })
        }).catch(error => {
            console.log(error.Response)
        });
    }

    render() {
        return (
            <div>
                <header className="App-header">
                    <fieldset>
                        <legend><h2>Update Event</h2></legend>
                        <FormGroup label='Event ID' htmlFor='lab00'>
                            <input className="form-control form-control-lg" type="text" placeholder="ID" id="lab00"
                            onChange={(e) => {this.setState({id: e.target.value})}}/>
                        </FormGroup>
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
                            <input className="form-control form-control-lg" type="text" placeholder="budget" id="lab04"
                            onChange={(e) => {this.setState({budget: e.target.value})}}/>
                        </FormGroup>
                        <br/>
                        <button type="button" className="btn btn-primary btn-lg" onClick={this.put} >Update</button>
                    </fieldset>
                    <br/>
                    <legend className="legConfirmation">Confirmation</legend>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Field</th>
                                <th scope="col">Value</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr className="table-primary">
                                <th scope="row">Event</th>
                                <td>{this.state.eventName2}</td>
                            </tr>
                            <tr className="table-primary">
                                <th scope="row">Date</th>
                                <td>{this.state.date2}</td>
                            </tr>
                            <tr className="table-primary">
                                <th scope="row">Address</th>
                                <td>{this.state.address2}</td>
                            </tr>
                            <tr className="table-primary">
                                <th scope="row">Budget</th>
                                <td>{this.state.budget2}</td>
                            </tr>
                        </tbody>
                    </table>
                </header>  
            </div>
        )
    }
}
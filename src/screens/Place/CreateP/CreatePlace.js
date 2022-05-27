import React from "react";
import './CreatePlace.css'
import 'bootswatch/dist/vapor/bootstrap.css';
import FormGroup from "../../../componentes/FormGroup";
import axios from "axios";

export default class CreatePlace extends React.Component {
    state = {
        placeName:"",
        placeReference:"",
        capacityMax:"",
        isPublic:""
    }
    
    post = () => {
        axios.post( 'http://localhost:8080/api/place',
            {
                name: this.state.placeName,
                reference: this.state.placeReference,
                maximumCapacityParticipants: this.state.capacityMax,
                public: this.state.isPublic
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
                        <legend><h2>Create Place</h2></legend>
                        <FormGroup label='Place Name' htmlFor='lab01'>
                            <input className="form-control form-control-lg" type="text" placeholder="name" id="lab01"
                            onChange={(e) => {this.setState({placeName: e.target.value})}}/>
                        </FormGroup>
                        <FormGroup label='Place Reference' htmlFor='lab02'>
                            <input className="form-control form-control-lg" type="text" placeholder="reference" id="lab02"
                            onChange={(e) => {this.setState({placeReference: e.target.value})}}/>
                        </FormGroup>
                        <FormGroup label='Place Capacity' htmlFor='lab03'>
                            <input className="form-control form-control-lg" type="text" placeholder="capacity" id="lab03"
                            onChange={(e) => {this.setState({capacityMax: e.target.value})}}/>
                        </FormGroup>
                        <FormGroup label='Public Place?' htmlFor='lab04'>
                            <input className="form-control form-control-lg" type="text" placeholder="is public? (true/false)" id="lab04"
                            onChange={(e) => {this.setState({isPublic: e.target.value})}}/>
                        </FormGroup>
                        <br/>
                        <button type="button" className="btn btn-primary btn-lg" onClick={this.post} >Create</button>
                    </fieldset>
                </header>
            </div>
        )
    }
}
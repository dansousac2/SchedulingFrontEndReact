import React from "react";
import './CreateSport.css'
import 'bootswatch/dist/vapor/bootstrap.css';
import FormGroup from "../../../componentes/FormGroup";
import axios from "axios";

export default class CreateSport extends React.Component {
    state = {
        sportName:""
    }
    
    post = () => {
        axios.post( 'http://localhost:8080/api/sport',
            {
                name: this.state.sportName
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
                        <legend><h2>Create Sport</h2></legend>
                        <FormGroup label='Sport Name' htmlFor='lab01'>
                            <input className="form-control form-control-lg" type="text" placeholder="name" id="lab01"
                            onChange={(e) => {this.setState({sportName: e.target.value})}}/>
                        </FormGroup>
                        <br/>
                        <button type="button" className="btn btn-primary btn-lg" onClick={this.post} >Create</button>
                    </fieldset>
                </header>
            </div>
        )
    }
}
import React from "react";
import './Login.css'
import 'bootswatch/dist/vapor/bootstrap.css';

import { withRouter } from 'react-router-dom';

class Login extends React.Component {

    state = {
        email:"",
        key:""
    }

    madeLogin = () => {
        if(this.state.email == "monteiro@ifpb.edu.br" && this.state.key == "123") {
            this.props.history.push('/')
        } else {
            alert("Verifique senha e email passados!")
        }
    }

    render() {
        return (
            <div>
                <fieldset className="set02">
                     <div className="form-group">
                        <label className="form-label mt-4"><h4>Realizar Login</h4></label>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                            onChange={(e) => {this.setState({email: e.target.value})}}/>
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                            onChange={(e) => {this.setState({key: e.target.value})}}/>
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <br/>
                        <button type="button" className="btn btn-primary btn-lg" onClick={this.madeLogin} >Login</button>
                    </div>
                </fieldset>
            </div>
        )
    }
}

export default withRouter(Login)
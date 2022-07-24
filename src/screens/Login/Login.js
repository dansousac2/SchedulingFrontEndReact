import React from "react";
import './Login.css'
import 'bootswatch/dist/minty/bootstrap.css';

import { withRouter } from 'react-router-dom';

import { AuthContext } from '../../main/SessionProvider';
import { showErrorMessage, showSuccessMessage } from "../../componentes/Toastr";

class Login extends React.Component {

    state = {
        registration:"",
        password:""
    }

    madeLogin = () => {
        this.context.login(
            this.state.registration,
            this.state.password
        ).then(user => 
            {
                if(user){
                    showSuccessMessage('Bem vindo(a), ${user.name}');
                    this.props.history.push("/createScheduling");
    
                }else{
                    showErrorMessage('Login Inválido!');
                }
            }
        ).catch( error =>
            {
                showErrorMessage('Ocorreu um erro! Autenticação sendo Processada:', error);
            }
        );
    }

    render() {
        return (
            <div>
                <fieldset className="set02">
                    <h1>SAPE</h1>
                    <h2>Sistema de Agendamento de Práticas Esportivas</h2>
                    <h3>Para entrar no sistema faça o login com a matrícula e a senha do Suap</h3>
                    <h4>Matrícula</h4>
                    <h5>Senha</h5>
                     <div className="form-group">
                        <label className="form-label mt-4"><h6>Login</h6></label>
                       
                        <div className="form-floating mb-3">
                            <input type="registration" className="form-control" id="floatingInput" placeholder="Matrícula"
                            onChange={(e) => {this.setState({registration: e.target.value})}}/>
                           
                        </div>
                        <fieldset className="set03"></fieldset>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                            onChange={(e) => {this.setState({password: e.target.value})}}/>
                            
                        </div>
                        
                        <br/>
                        <button type="button" className="btn btn-primary" onClick={this.madeLogin} >Login</button>
                    </div>
                </fieldset>
            </div>
        )
    }
}
Login.contexType = AuthContext;
export default withRouter(Login)
import React from "react";
import './HomePage.css'
import 'bootswatch/dist/vapor/bootstrap.css';

export default class HomePage extends React.Component {

    render() {
        return (
            <div>
                <fieldset className="set01">
                    <label>
                        <h2>Sobre</h2>
                        <br/>
                        <h5>Olá, meu nome é Danilo, estudante do IFPB campus Monteiro</h5>
                        <br/>
                        <h5>Desenvolvi essa aplicação como requisito da disciplina de Desenvolvimento de Aplicações Corporativas</h5>
                        <br/>
                        <h5>Disciplina esta ministrada pelo professor Elenilson Vieira</h5>
                        <br/>
                        <br/>
                        <h2>Neste projeto</h2>
                        <br/>
                        <h5>Teremos o CRUD de duas entidades - Event e Guest - acessando o banco de dados</h5>
                    </label>
                </fieldset>
            </div>
        )
    }
}
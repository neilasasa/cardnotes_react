import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas';
import FormularioCadastro from './components/FormularioCadastro';
import "./assets/App.css";
import "./assets/index.css";

/*
funtion App() => sintaxe mais recente do React
mudanca para class App para padronizar o projeto
*/
class App extends Component {

  constructor(){
    super();
    this.state = {
      notas:[]
    };
  }

  criarNota(titulo, texto){
    const novaNota = {titulo, texto};
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas:novoArrayNotas
    }
    this.setState(novoEstado);
  }

  render(){
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/> 
        {/* criarNota eh uma propriedade que passamos ao criar o FormularioCadastro ("props") */}
        <ListaDeNotas notas={this.state.notas} />
      </section>
    );
  }
}

export default App;

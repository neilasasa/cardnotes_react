import React, { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {
  constructor(props) {
    super(props); //props saos as propriedades que adicionamos ao chamar o FormularioCadastro.jsx no App.js
    this.titulo = "";
    this.texto = "";
  }

  _handleMudancaTitulo(evento) {
    this.titulo = evento.target.value;
  }

  _handleMudancaTexto(evento) {
    this.texto = evento.target.value;
  }

  _criarNota(evento){
    evento.preventDefault(); //para nao carregar a pagina automaticamente
    evento.stopPropagation();    
    this.props.criarNota(this.titulo, this.texto);
  }

  render() {
    return (
      <form className="form-cadastro"
        onSubmit={this._criarNota.bind(this)}>
        <input
          type="text"
          placeholder="Titulo"
          className="form-cadastro_input"
          onChange={this._handleMudancaTitulo.bind(this)}
          /*
          bind eh necessario para associar o this ao metodo
          o this do JavaScript eh dinamico
          */
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota"
          className="form-cadastro_input"
          onChange={this._handleMudancaTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;

import React, { Component } from "react";
import TechItem from './TechItem'


class TechList extends Component {
  state = {
    // newTech e a variavel que vai receber o valor digitado pelo usuário
    // variaveis de estado nao podem receber mutações
    newTech: "",
    tech: [ ]
  };

//DidMount e executando assim que um componente e executado na tela
// nesse exemplo, ele fez uma requisição dentro do local storage e se for "true"
// ele da reload na tela  
componentDidMount() {
    const techs = localStorage.getItem('techs');
    if (techs) {
      this.setState ({tech: JSON.parse(techs)})
    };

  };
  // é executado sempre que houver alterações nas props (propriedades) ou estado
  //Foi usado o localstorage para armazenar os dados do formulário
  componentDidUpdate(_, prevState) {
    if (prevState !== this.state.tech){
        localStorage.setItem('techs', JSON.stringify(this.state.tech))
    };
  };
// é executado quando o componente deixa de existir
  componentWillUnmount() {

  };
  // novo método é uma 'aerofunction',
  // e usado quando voce precisa ter acesso ao this
  //  = e => = e.target.velue

  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  };
  handleSubmit = e => {
    // preventDefault retira o carregamento ao enviar
    e.preventDefault();

    // Express operator "..." copia todo o conteudo do estado
    this.setState({
      tech: [...this.state.tech, this.state.newTech],
      newTech: ""
    });
  };
  // função setState cria um novo estado e aplica as alterações

  handleDelet = (tech) => {
    this.setState({ tech: this.state.tech.filter( t => t !== tech)})
  }

  // a função render sempre atualiza quando algo no estado muda

  render() {
    return (
      //onSubmit método usado para enviar os dados do input
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.tech.map(tech => (
          <TechItem 
          key={tech}  
          tech ={tech} 
          onDelet={() => this.handleDelet(tech)}
          />  
         ))}
        
        </ul>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.newTech}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default TechList;

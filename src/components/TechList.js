import React, {Component} from 'react';


class TechList extends Component{
  state = {

    // newTech e a variavel que vai receber o valor digitado pelo usuário
    // variaveis de estado nao podem receber mutações
    newTech: '',
    tech: [
      'NodeJs',
      'React',
      'ReactNative'
    
    ]
  };
  // novo método é uma 'aerofunction',
  // e usado quando voce precisa ter acesso ao this
  //  = e => = e.target.velue

handleInputChange = e => {
  this.setState({ newTech: e.target.value })
};
handleSubmit = e =>{
  // preventDefault retira o carregamento ao enviar
  e.preventDefault();

  // Express operator "..." copia todo o conteudo do estado 
  this.setState({ 
    tech: [...this.state.tech, this.state.newTech],
    newTech: ''
  });
}
// função setState cria um novo estado e aplica as alterações

// a função render sempre atualiza quando algo no estado muda
  render() {
    
    return (

     //onSubmit método usado para enviar os dados do input
     <form onSubmit ={this.handleSubmit}>
      <ul>
        {this.state.tech.map(tech => <li key={tech}>{tech}</li>)}
      </ul>
        <input type="text"
              onChange ={this.handleInputChange}
              value={this.state.newTech}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}


export default TechList; 
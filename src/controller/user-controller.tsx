import React from 'react';
import UserModel from '../model/user-model';
import { postUserData } from '../service/user-http-service';
import { Props, ControllerState } from '../types/types';
import {UserView} from '../view/user-view';

// primeiro metodo
class UserController extends React.Component<Props, ControllerState> {
  constructor(props) {
    super(props);
    this.state = {name: '', email: '', message: '', formSent: false}
  }

  // segundo metodo -  "event" evento do click apotando para o nome e valor, inserindo status no state. manipulando evento na tela
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value } as Pick<ControllerState, keyof ControllerState>);
  }
  //  Terceiro metodo -  é usado quando o botao submit é utilizado -  intancia um usuario (UserModel) e passar o parametro para o (posterUserData)
  handleSubmit = (event) => {
    event.preventDefault();

    const userModel  = {name: this.state.name, email: this.state.email, message: this.state.message} as UserModel;

    // é uma promisse, que traz a resposta do backend
    postUserData(userModel)
    .then(response => {
      console.log(response);
      if(response.status == 201){
        this.setState({name: this.state.name, email: this.state.email, message: this.state.message, formSent: true});
      }
    });
  }
    // basicamente mostra a tela, atualizando os dados no (UserView)
  render() {
    const {name, email, message, formSent} = this.state;
    const userModel = {name, email, message};

    return (
      <UserView
        name={userModel.name}
        email={userModel.email}
        message={userModel.message}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        formSent={formSent}
      />
    );
  }
}

export default UserController;
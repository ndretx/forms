
import React from "react";
import { ViewProps, ViewState } from "../types/types";
import { Container, LabelDiv } from "./style";


export class UserView extends React.Component<ViewProps, ViewState>{
   render(){

    const {
        name, email, message, handleChange, handleSubmit, formSent
    } =this.props
       return(
        
            <Container>
                   <form onSubmit={handleSubmit}>

                        <div className="mb-3 ">
                            <LabelDiv>
                            <label htmlFor="exampleInputNome1" className="form-label">Nome </label>
                            </LabelDiv>
                            <input type="nome" value ={name} onChange={handleChange} name="name"
                            className="form-control" id="exampleInputNome1" aria-describedby="nomeHelp"/>
                            <div id="nomeHelp" className="form-text">Não iremos compartilhar seus dados.</div>
                        </div >
                        <div  className="mb-3">
                            <LabelDiv>
                            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                            </LabelDiv>
                            <input type="email" value={email} onChange={handleChange} name="email"
                                 className="form-control" id="exampleInputEmail'"/>
                        </div >
                        <div  className="mb-3">
                            <LabelDiv>
                            <label htmlFor="exampleInputMessage1" className="form-label">Message</label>
                            </LabelDiv>
                            <input type="message" value={message} onChange={handleChange} name="message"
                                 className="form-control" id="exampleInputMessage'"/>
                        </div >
                        <div  className="mb-3, form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" htmlFor="exampleCheck1">Permanecer conectado</label>
                        </div >
                        <button type="submit" className="btn btn-success mt-3">Entrar</button>
                    </form>
            </Container>
    
        );
       
   }


}

import React from "react";
import { ViewProps, ViewState } from "../types/types";
import { ButtonDiv, Container, LabelDiv } from "./style";


export class UserView extends React.Component<ViewProps, ViewState>{
   render(){

    const {
        name, email, message, address, phone, handleChange, handleSubmit, formSent
    } =this.props
       return(
        
            <Container>
                   <form onSubmit={handleSubmit}>
                

                        <div className="mb-3 ">
                            <LabelDiv>
                            <label htmlFor="exampleInputNome1" className="form-label">Name </label>
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

                        <div  className="mb-3">
                            <LabelDiv>
                            <label htmlFor="exampleInputAddress1" className="form-label">Address</label>
                            </LabelDiv>
                            <input type="address" value={address} onChange={handleChange} name="address"
                                 className="form-control" id="exampleInputAddress'"/>
                        </div >

                        <div  className="mb-3">
                            <LabelDiv>
                            <label htmlFor="exampleInputPhone1" className="form-label">Phone</label>
                            </LabelDiv>
                            <input type="phone" value={phone} onChange={handleChange} name="phone"
                                 className="form-control" id="exampleInputMessage'"/>
                        </div >

                    
                        <div  className="mb-3, form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" htmlFor="exampleCheck1">Permanecer conectado</label>
                        </div >
                        
                        <div className="d-grid gap-2 col-12 mx-auto mt-2"> 
                        <button type="submit" className="btn btn-success btn-block ">Entrar</button>
                        </div>
                        <span className="text-success">{formSent? ' Formulário enviando com sucesso!': ''}</span>
                    </form>
            </Container>
    
        );
       
   }


}
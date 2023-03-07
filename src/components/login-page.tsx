import { Container } from "./style";

export const Formulario = () =>{
    return(
        
        <Container>
               <form>
                    <div className="mb-3 ">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email </label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">Não iremos compartilhar seus dados.</div>
                    </div>
                    <div className="mb-3, mt-5">
                        <label htmlFor="exampleInputPassword1" className="form-label">Senha</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="mb-3, form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Permanecer conectado</label>
                    </div>
                    <button type="submit" className="btn btn-success">Entrar</button>
                </form>
        </Container>

    );
}
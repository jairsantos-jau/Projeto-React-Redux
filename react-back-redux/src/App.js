import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import imagem1 from './imagens/cursoreactredux.jpg';
import imagem2 from './imagens/cursonode.jpg';

const App = () => {

    let bule = useSelector((state) => {
       return state.adicionarBule;
    });

    let cafe = useSelector((state) => {
       return state.adicionarCafe;
    });


    const dispatch = useDispatch();

    return (
        <React.Fragment>
            <main className="container d-flex flex-column align-items-center  mt-5 ">

                
                
                <h1 className="display-2 mt-5 mb-5" >Adiciona Cursos Recode Pro</h1>
                 Melhores Cuursos de React,<b>NodeJS</b> e ReactJS
               


                <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title " id="exampleModalCenterTitle">Curso e Tecnologias</h5>
                        
                      
                    </div>
                    <div className="modal-body d-flex justify-content-center d-flex align-items-center ">
                        <div class="container-fluid">
                            <div class="row h-75 ml-auto">
                                <div class="col-md-6"><img className="h-75 w-75" src={imagem1} alt="" width="100%" /></div>
                                <div class="col-md-6 "><img className="h-75 w-75" src={imagem2} alt=""  width="100%"/></div>
                            </div>
                        
                            <div class="row h-25 ml-auto mt-3">
                                <div class="col-sm-6">
                                    <button type="button" class="btn btn-success" onClick={() => {dispatch({type: "cursoreact"})}}>Adicionar</button>
                        
                                </div>
                                <div class="col-sm-6">
                                    <button type="button" class="btn btn-dark" onClick={() => {dispatch({type: "cursonode"})}}>Adicionar</button>
                        
                                </div>
                            </div>
                            <div class="row h-25 ml-auto mt-3">
                                <div class="col-6 col-sm-6">
                                    <span className="lead">Quantidade Curso React Redux: {bule}</span>
                                </div>
                                <div class="col-6 col-sm-6">
                                    <span className="lead">Quantidade Curso de NodeJS: {cafe}</span>
                                </div>
                            </div>

                        </div>
                        </div>
                    
                    </div>
                </div>
                </div>
            </main>
        </React.Fragment>
    );
}

export default App;
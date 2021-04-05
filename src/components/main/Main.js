import Chart from '../charts/Chart'
import './Main.css';
import { Link } from "react-router-dom";


const Main=() => {
    return(
        <main className="main">
            <div className="main__container">
                <div className="main__title">
                    <div className="main__greeting">
                        <h1>Olá</h1>
                        <p>Seja bem-vindo ao seu painel</p>
                    </div>
                </div>

                <div className="main__cards">

                    <Link to="/usuario" className="link-box">

                    <div className="card">
                        <i className="fa fa-building fa-2x text-lightblue"></i>
                        <div className="card_inner">
                            
                            <p className="text-primary-p">Manutenção de Usuários</p>
                            
                        </div>
                    </div>

                    </Link>

                    <a href="#" className="link-box">

                    <div className="card">
                    <i className="fa fa-file-o fa-2x text-red"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Relatórios Administrativos</p>
                        </div>
                    </div>

                    </a>
                    
                    <a href="#" className="link-box">

                    <div className="card">
                    <i className="fa fa-briefcase fa-2x text-yellow"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Manutenção de Conteúdos</p>
                        </div>
                    </div>

                    </a>

                    <a href="#" className="link-box">

                    <div className="card">
                    <i className="fa fa-bars fa-2x text-green"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Manutenção de Eventos</p>
                        </div>
                    </div>

                    </a>
                    
             <a href="#" className="link-box">
             <div className="card">
                    <i className="fa fa-database fa-2x text-green"></i>
                        <div className="card_inner">
                           <p className="text-primary-p">Manutenção de Serviços</p>
                        </div>
                    </div>
             </a>
                    
                </div>

                
                
                <div className="charts">
                    <div className="charts__left">
                        <div className="charts__left__title">
                            <div>
                                <h1>Relatório Diário</h1>
                                <p>Barueri, São Paulo, BR</p>
                            </div>
                            <i className="fa fa-usd"></i>
                        </div>
                        <Chart />
                    </div>

                    <div className="charts__right">
                        <div className="charts__right__title">
                            <div>
                                <h1>Relatório Diário</h1>
                                <p>Barueri, São Paulo, BR</p>
                            </div>
                            <i className="fa fa-area-chart"></i>
                        </div>

                        <div className="charts__right__cards">
                            <div className="card1">
                                <h1>Custo 1</h1>
                                <p>R$2500,00</p>
                            </div>

                            <div className="card2">
                                <h1>Custo 2</h1>
                                <p>R$250,00</p>
                            </div>

                            <div className="card3">
                                <h1>Custo 3</h1>
                                <p>R$150,00</p>
                            </div>

                            <div className="card4">
                                <h1>Retorno</h1>
                                <p>R$180,00</p>
                            </div>
                        </div>                  
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;
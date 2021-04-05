import './Sidebar.css'

import logo from '../../assets/logo.jpg'
import { Link } from 'react-router-dom';

const Sidebar = ({ sidebarOpen, closeSidebar}) =>{
    return(
        <div className={sidebarOpen ? "sidebar-responsive": ""} id="sidebar">

            <div className="sidebar__title">

                <div className="sidebar__img">
                    <img src={logo} alt="logo"/>
                    <h1>ArcHOffice</h1>
                </div>

                <i 
                onClick={() => closeSidebar()}
                className="fa fa-times"
                id="sidebarIcon"
                aria-hidden="true"
                ></i>
            </div>

            <div className="sidebar__menu">
                <div className="sidebar__link active_menu_link">
                    <i className="fa fa-minus-square"></i>
                    <Link to="/">Home</Link>
                </div>
                <h2>Admin</h2>
                <div className="sidebar__link">
                    <i className="fa fa-tachometer"></i>
                    <a href="#">Área Adminstrativa</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-file-o"></i>
                    <a href="#">Relatórios Administrativos</a>
                </div>
                <div className="sidebar__link">
                    <i className=" fa fa-building"></i>
                    <Link to="/usuario">Manutenção de Usuários</Link>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-bars"></i>
                    <a href="#">Manutenção de Conteúdos</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-bars"></i>
                    <a href="#">Manutenção de Eventos</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-database"></i>
                    <a href="#">Manutenção de Serviços</a>
                </div>
                <h2>Pessoas</h2>
                <div className="sidebar__link">
                    <i className="fa fa-male"></i>
                    <a href="#">Adminstradores</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-user-circle"></i>
                    <a href="#">Usuários</a>
                </div>
                
                <div className="sidebar__link">
                    <i className="fa fa-tasks"></i>
                    <a href="#">A Plataforma</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-file-text"></i>
                    <a href="#">Politica de Provacidade</a>
                </div>
                <div className="sidebar__logout">
                    <i className="fa fa-power-off"></i>
                    <a href="#">Log out</a>
                </div>
            </div>

        </div>
    )
}

export default Sidebar;
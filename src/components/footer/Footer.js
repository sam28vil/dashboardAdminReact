import logo from '../../assets/logo.jpg';

import './Footer.css';



const Footer = ({sidebarOpen, openSidebar}) => {
    return (
        <footer className="footer">
           <div className="footer-left">
        
               <a href="#">ArchOffice</a>
               <a href="#">contato@archoffice.tech 
</a>
           </div>

            <div className="footer-right">
            <a href="#">(11) 2844-2272 
</a>
 
            </div>
           

            
        </footer>
     
    );
  }
  
  export default Footer;
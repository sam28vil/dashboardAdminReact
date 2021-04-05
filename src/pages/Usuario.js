import React from 'react';
import './Usuario.css'
import { Link } from "react-router-dom";


const Usuario =() =>{
    return(

        
        <main className="principal">

<div className="main__container">

<Link to="/">
<button class="button button1">Voltar</button>

</Link>


<h2>Manutençãode Usuários</h2>
<br></br>
<p>A ArchOffice é uma empresa voltada para Arquitetura de Sistemas com serviços inovadores que atendem nossos clientes de maneira personalizada, apresentando e implementando soluções de arquitetura e ganho de performance a empresas. </p>
<form class="form">
  <div class="section">
    <div class="control-group">
      <label class="control-label">Selecione algo</label>
      <select class="control">
            <option disabled>Selecione Algo</option>
      </select>
    </div>

    

  </div>

  <div class="section">
  <div class="control-group">
      <label class="control-label">Políticas Privacidade</label>
      <label>
        <input type="checkbox"/>
        Concordo (checkbox)
      </label>
    </div>
    

    

  </div>

  <div id="botao">
      <input type="submit" name="botao" value="Aplicar" class="botaoEnviar" />
   </div>
  
</form>

<br></br>

            
            <h1> Tabela de Pesquisa ArchOffice</h1>
            <br></br>
            <br></br>
            <form>
                <input type="text" name="search" placeholder="Pesquisar.." /> 
                
               
            </form>  

            <table>
            <tr>
                <th>Primeiro Nome</th>
                <th>Último Nome</th>
                <th>Recebimento</th>
                <th><i class="fa fa-trash" aria-hidden="true"></i>
</th>
                
            </tr>
            <tr>
                <td>Samara</td>
                <td>Oliveira</td>
                <td>R$100</td>
                <td>
        <input type="checkbox"/>
       
                </td>
            </tr>
            <tr>
                <td>Carlos</td>
                <td>Pisani</td>
                <td>R$100</td>
                <td>
        <input type="checkbox"/>
       
                </td>
            </tr>
            <tr>
                <td>Vanessa</td>
                <td>Pisani</td>
                <td>R$100</td>
                <td>
        <input type="checkbox"/>
       
                </td>
            </tr>
            <tr>
                <td>Higor</td>
                <td>Silva</td>
                <td>R$100</td>
                <td>
        <input type="checkbox"/>
       
                </td>
            </tr>  
            
            <button class="button button1">Ok</button>
    
           
            </table>
            

            
 

</div>
<br></br>
<br></br>
        </main>
        
    )
}

export default Usuario;